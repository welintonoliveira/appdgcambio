import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { colors } from "../../../Styles";

import styles from "./styles";

export default class ModalPedidoCancelado extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.visibleModal}
        onRequestClose={() => {}}
      >
        <View style={styles.areaModalCancelamento}>
          <View style={styles.areaTituloCancelamento}>
            <View style={{ width: "90%", paddingTop: "5%" }}>
              <Text style={styles.tituloModalCancelamento}>
                Informe o motivo do cancelamento
              </Text>
            </View>
            <TouchableOpacity
              style={styles.areaButtonFecharModal}
              onPress={this.props.closeModal}
            >
              <Text style={styles.buttonFecharModal}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linhaModalCancelamento} />
          <View>
            <TextInput
              style={styles.inputMotivoCancelamento}
              onChangeText={text => this.props.setValue(text)}
              value={this.props.value}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 30
            }}
          >
            <TouchableOpacity
              style={styles.inputButtonCancelar}
              onPress={this.props.sendCancelamentoPedido}
            >
              <Text style={{ color: colors.white, fontSize: 16 }}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linhaModalCancelamento} />
        </View>
      </Modal>
    );
  }
}
