import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { Content, Container } from "native-base";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { connect } from "react-redux";

import { colors } from "../../../Styles";

// ALTERAR ESTE COMPONENTE ABAIXO PARA SER GERAL
import ButtonSendModal from "../../Login/components/ButtonSendModal";

import AppCambioAPI from "../../../AppCambioAPI";
import HeaderApp from "../../../components/HeaderApp";
import styles from "./styles";

class CancelarPedido extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      motivoCancelamento: ""
    };

    this.sendCancelamentoPedido = this.sendCancelamentoPedido.bind(this);
  }

  setMotivoCancelamentoValue = text => {
    this.setState({ motivoCancelamento: text });
  };

  sendCancelamentoPedido = async () => {
    try {
      if (
        this.props.navigation.state.params.idPedidoSelecionado > 0 &&
        this.props.clienteID > 0 &&
        this.state.motivoCancelamento.length > 0
      ) {
        let result = await AppCambioAPI.cancelarPedido(
          this.props.navigation.state.params.idPedidoSelecionado,
          this.props.clienteID,
          this.state.motivoCancelamento
        );

        if (result.errorMessage == "") {
          alert("Pedido Cancelado com sucesso.");

          // Recarrega após mostar a mensagem de cancelado com sucesso para o cliente
          setTimeout(() => {
            this.props.navigation.navigate("PreloadPedidoLogado");
          }, 1500);
        } else {
          alert(result.errorMessage);
        }
      } else if (this.state.motivoCancelamento.length === 0) {
        alert(
          "É necessário informar o motivo de cancelamento para poder cancelar o pedido."
        );
      } else {
        alert("Erro ao cancelar o pedido tente novamente mais tarde");
      }
    } catch (err) {
      alert(err);
    }
  };

  back = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Container>
        <HeaderApp
          initialRouter={false}
          title="Cancelamento"
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
          showLogo={true}
          showDrawer={true}
          backClick={this.back}
        />
        <Content
          style={styles.container}
          contentContainerStyle={{ flex: 1 }}
          scrollEnabled={false}
        >
          <View style={styles.espacoAlerta}>
            <IconAntDesign
              name="warning"
              size={45}
              style={styles.iconWarning}
            />
            <Text
              style={{
                textAlign: "center",
                color: colors.warning,
                fontWeight: "bold"
              }}
            >
              Atenção, esta ação não poderá ser desfeita
            </Text>
          </View>
          <View>
            <Text style={styles.tituloCancelamento}>
              Informe o motivo do cancelamento
            </Text>
            <View>
              <TextInput
                style={styles.inputMotivoCancelamento}
                onChangeText={text => this.setMotivoCancelamentoValue(text)}
                value={this.props.value}
              />
            </View>
            <ButtonSendModal
              title="CANCELAR"
              sendClick={this.sendCancelamentoPedido}
            />
          </View>
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

const CancelarPedidoConnect = connect(
  mapStateToProps,
  {}
)(CancelarPedido);
export default CancelarPedidoConnect;
