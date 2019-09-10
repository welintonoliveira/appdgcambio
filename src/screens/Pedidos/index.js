import React, { Component } from "react";
import { Content, Container } from "native-base";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import HeaderApp from "../../components/HeaderApp";
import PedidoLojaCambio from "../../components/PedidoLojaCambio";
import Loading from "../../components/Loading";
import ModalPedidoCancelado from "./ModalPedidoCancelado";
import PedidoVazio from "./PedidoVazio";

import AppCambioAPI from "../../AppCambioAPI";

import styles from "./styles";

class Pedidos extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isCarregado: false,
      visiblePedidoVazio: false,
      visibleModalPedidoCancelado: false,
      idPedidoSelecionado: 0,
      pedidos: []
    };

    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.carregarPedidos();
  }

  carregarPedidos = async () => {
    try {
      let result = await AppCambioAPI.carregarPedidosByIDCliente(
        this.props.clienteID
      );
      if (result.errorMessage !== "") {
        alert(result.errorMessage);
      } else {
        if (this._isMounted) {
          if (result.data.length > 0) {
            this.setState({
              pedidos: result.data,
              isCarregado: true
            });
          } else {
            this.setState({
              visiblePedidoVazio: true,
              isCarregado: true
            });
          }
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  anexarComprovante(idPedido) {
    this.props.navigation.navigate("ComprovantePagamento", {
      IDPedido: idPedido,
      IsNovoPedido: false
    });
  }

  cancelarPedido(idPedido) {
    this.props.navigation.navigate("CancelarPedido", {
      idPedidoSelecionado: idPedido
    });
  }

  trocarFormaPagamento() {
    //alert('trocar formaPagamento: ' + idPedido + ' ' + idFormaPagamentoAntiga);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <Container>
        <HeaderApp
          initialRouter={true}
          title="Pedidos"
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
        />
        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
          {this.state.isCarregado === false && <Loading />}
          {this.state.visiblePedidoVazio && <PedidoVazio />}
          {this.state.isCarregado && !this.state.visiblePedidoVazio && (
            <ImageBackground
              source={require("../../img/background-dg1.png")}
              style={{ width: "100%", height: "100%" }}
            >
              <View style={styles.backgroundOpacity}>
                {this.state.visibleModalPedidoCancelado && (
                  <ModalPedidoCancelado
                    visible={this.state.visibleModalPedidoCancelado}
                    value={this.state.motivoCancelamento}
                    setValue={this.setValueMotivoCancelamento}
                    sendCancelamentoPedido={this.sendCancelamentoPedido}
                    closeModal={this.closeModal}
                  />
                )}
                <FlatList
                  data={this.state.pedidos}
                  keyExtractor={item => item.idPedido.toString()}
                  renderItem={item => (
                    <PedidoLojaCambio
                      anexarComprovante={this.anexarComprovante.bind(this)}
                      cancelarPedido={this.cancelarPedido.bind(this)}
                      trocarFormaPagamento={this.trocarFormaPagamento.bind(
                        this
                      )}
                      pedido={item}
                    />
                  )}
                />
              </View>
            </ImageBackground>
          )}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    clienteID: state.auth.clienteID
  };
};

const PedidosConnect = connect(
  mapStateToProps,
  {}
)(Pedidos);
export default PedidosConnect;
