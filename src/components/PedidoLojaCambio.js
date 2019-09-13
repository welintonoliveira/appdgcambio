import React, { Component } from "react";
import { Content, Container } from "native-base";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import StatusPedidoLojaCambio from "./StatusPedidoLojaCambio";
import ItemPedidoLojaCambio from "./ItemPedidoLojaCambio";
import { colors } from "../Styles";

export default class PedidoLojaCambio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pedido: props.pedido.item,
      visibleDetalhe: false
    };

    this.abrirDetalhe = this.abrirDetalhe.bind(this);
  }

  abrirDetalhe() {
    if (this.state.visibleDetalhe === true) {
      this.setState({ visibleDetalhe: false });
    } else {
      this.setState({ visibleDetalhe: true });
    }
  }

  render() {
    return (
      <View style={styles.containerPedidoLojaCambio}>
        <View style={styles.areaDescricaoPedido}>
          <Text style={[styles.pedido, styles.textColor]}>
            Pedido #{this.state.pedido.idPedido} -{" "}
          </Text>
          <Text style={[styles.dataCadastro, styles.textColor]}>
            {this.state.pedido.dataCadastro} às{" "}
            {this.state.pedido.horarioCadastro}
          </Text>
          <Text style={[styles.dataCadastro, styles.textColor]} />
        </View>
        <View style={styles.areaStatusPedido}>
          <StatusPedidoLojaCambio
            pedido={this.state.pedido}
            anexarComprovante={this.props.anexarComprovante}
            cancelarPedido={this.props.cancelarPedido}
            trocarFormaPagamento={this.props.trocarFormaPagamento}
          />
        </View>
        <View style={styles.areaButtonDetalhes}>
          <TouchableOpacity
            onPress={this.abrirDetalhe}
            style={styles.buttonDetalhe}
          >
            <Text style={styles.buttonDetalheTexto}>Mais detalhes</Text>
            <Icon
              name="arrow-down"
              size={10}
              color={colors.black}
              style={styles.iconDetalhe}
            />
          </TouchableOpacity>
        </View>
        {this.state.visibleDetalhe === true && (
          <View>
            <View style={styles.conteudoPagamento}>
              <View style={styles.areaPagamento}>
                <Icon
                  name="hand-holding-usd"
                  size={17}
                  style={styles.iconePagamento}
                />
                <Text style={styles.titleItens}>Entrega</Text>
              </View>
              <View style={styles.areaDescricaoPagamento}>
                <Text style={styles.subTitulo}>Tipo de Entrega: </Text>
                <Text style={styles.textoDescricao}>
                  {this.state.pedido.descricaoTipoEntrega}
                </Text>
              </View>
            </View>
            <View style={styles.linha} />
            <View style={styles.conteudoPagamento}>
              <View style={styles.areaPagamento}>
                <Icon
                  name="money-bill-alt"
                  size={17}
                  style={styles.iconePagamento}
                />
                <Text style={styles.titleItens}>Pagamento</Text>
              </View>
              <View style={styles.areaDescricaoPagamento}>
                <Text style={styles.subTitulo}>Forma de pagamento: </Text>
                <Text style={styles.textoDescricao}>
                  {this.state.pedido.descricaoPagamento}
                </Text>
              </View>
            </View>

            <View style={styles.linha} />
            <View style={styles.areaDetalhePedido}>
              {
                this.state.pedido.itens.map((item) => <ItemPedidoLojaCambio item={item} key={item.idItemPedido} />)
              }
            </View>
            <View style={styles.linha} />
          </View>
        )}
        <View style={styles.areaButtonTotal}>
          <Text style={styles.buttonTotalText}>
            TOTAL {this.state.pedido.valorTotal}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaDescricaoPedido: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center'
  },
  pedido: {
    fontSize: 13,
    fontWeight: "bold",
    //textAlign: "center",
  },
  textColor: {
    color: colors.black
  },
  dataCadastro: {
    fontSize: 11
  },
  areaButtonDetalhes: {
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonDetalhe: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    borderColor: colors.black,
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40
  },
  buttonDetalheTexto: {
    color: colors.black
  },
  iconDetalhe: {
    marginLeft: 5
  },
  areaButtonTotal: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.success,
    borderRadius: 2,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20
  },
  buttonTotalText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold"
  },
  containerPedidoLojaCambio: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20
  },
  areaStatusPedido: {
    marginTop: 10,
    marginBottom: 10
  },
  areaDetalhePedido: {
    marginTop: 15,
    marginBottom: 15
  },
  linha: {
    borderWidth: 0.4,
    borderColor: colors.black,
    marginTop: 10,
    borderStyle: "dashed"
  },
  titleItens: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold"
  },
  areaPagamento: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  iconePagamento: {
    color: colors.black,
    marginRight: 5
  },
  areaDescricaoPagamento: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    textAlign: "center"
  },
  conteudoPagamento: {
    marginTop: 10,
    marginBottom: 10
  },
  subTitulo: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 14
  },
  textoDescricao: {
    color: colors.black,
    fontSize: 10,
    textAlign: "center"
  }
});
