import React, { Component } from "react";
import { Alert, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { colors } from "../Styles";

export default class StatusPedidoLojaCambio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.pedido.status.idStatus === 1) {
      // Pendente
      return (
        <View>
          <View style={styles.areaStatus}>
            <Icon name="clock" size={10} style={styles.iconePendente} />
            <Text style={styles.textoPedente}>
              {this.props.pedido.status.descricao}
            </Text>
          </View>
          <View style={styles.areaButtonComprovante}>
            <TouchableOpacity
              onPress={() =>
                this.props.anexarComprovante(this.props.pedido.idPedido)
              }
              style={styles.buttonComprovante}
            >
              <Icon name="camera" size={12} style={styles.iconeAnexo} />
              <Text style={styles.textoAnexo}>Anexar comprovante</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.areaButtonCancelarPedido}>
            <TouchableOpacity
              onPress={() =>
                this.props.cancelarPedido(this.props.pedido.idPedido)
              }
              style={styles.buttonCancelarPedido}
            >
              <Text style={styles.buttonCancelarPedidoTexto}>
                Cancelar pedido
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (this.props.pedido.status.idStatus === 2) {
      // Pagamento Identificado
      return (
        <View style={styles.areaStatus}>
          <Icon
            name="check"
            size={10}
            style={styles.iconePagamentoIdentificado}
          />
          <Text style={styles.textoPagamentoIdentificado}>
            {this.props.pedido.status.descricao}
          </Text>
        </View>
      );
    } else if (this.props.pedido.status.idStatus === 3) {
      // Transporte
      return (
        <View style={styles.areaStatus}>
          <Icon name="truck" size={10} style={styles.iconeTransporte} />
          <Text style={styles.textoTransporte}>
            {this.props.pedido.status.descricao}
          </Text>
        </View>
      );
    } else if (this.props.pedido.status.idStatus === 4) {
      // Concluido
      return (
        <View style={styles.areaStatus}>
          <Icon name="check-double" size={10} style={styles.iconeConcluido} />
          <Text style={styles.textoConcluido}>
            {this.props.pedido.status.descricao}
          </Text>
        </View>
      );
    } else if (this.props.pedido.status.idStatus === 5) {
      // Cancelado
      return (
        <View style={styles.areaStatus}>
          <Icon name="window-close" size={10} style={styles.iconeCancelado} />
          <Text style={styles.textoCancelado}>
            {this.props.pedido.status.descricao}
          </Text>
        </View>
      );
    } else if (this.props.pedido.status.idStatus === 6) {
      // EmAnalise
      return (
        <View style={styles.areaStatus}>
          <Icon name="window-close" size={10} style={styles.iconeCancelado} />
          <Text style={styles.textoCancelado}>
            {this.props.pedido.status.descricao}
          </Text>
        </View>
      );
    } else {
      // Aprovado Analise
      return (
        <View style={styles.areaStatus}>
          <Icon name="window-close" size={10} style={styles.iconeCancelado} />
          <Text style={styles.textoCancelado}>
            {this.props.pedido.status.descricao}
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  areaStatus: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  iconeCancelado: {
    color: colors.danger,
    marginRight: 5
  },
  textoCancelado: {
    color: colors.danger,
    fontSize: 14
  },
  iconePendente: {
    color: colors.info,
    marginRight: 5
  },
  textoPedente: {
    color: colors.info,
    fontSize: 14
  },
  iconeConcluido: {
    color: colors.success,
    marginRight: 5
  },
  textoConcluido: {
    color: colors.success,
    fontSize: 14
  },
  iconeTransporte: {
    color: colors.success,
    marginRight: 5
  },
  textoTransporte: {
    color: colors.success,
    fontSize: 14
  },
  iconePagamentoIdentificado: {
    color: colors.success,
    marginRight: 5
  },
  textoPagamentoIdentificado: {
    color: colors.success,
    fontSize: 14
  },
  areaButtonComprovante: {
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonComprovante: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.warning,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    width: "60%",
    alignItems: "center",
    height: 40
  },
  iconeAnexo: {
    marginRight: 5,
    color: colors.greyDark
  },
  textoAnexo: {
    color: colors.greyDark
  },
  areaButtonCancelarPedido: {
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonCancelarPedido: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    width: "60%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.danger,
    height: 40
  },
  buttonCancelarPedidoTexto: {
    color: colors.danger
  }
});
