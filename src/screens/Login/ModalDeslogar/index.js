import React, { Component } from "react";
import { Modal, View, Text, NativeModules } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { connect } from "react-redux";

import styles from "./styles";
import HeaderModal from "../components/HeaderModal";
import ButtonSendModal from "../components/ButtonSendModal";
import { toEmail } from "../../../configuracao/Helpers";
import AppCambioAPI from "../../../AppCambioAPI";

import {
  atualizarDadosCliente,
  getTokenCliente
} from "../../../actions/AuthActions";

class ModalDeslogar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageInicial: props.pageInicial
    };
  }

  deslogar = async () => {
    try {
      let response = await AppCambioAPI.logoutCliente(
        this.props.email,
        this.props.senha
      );

      if (response.errorMessage === "") {
        this.props.closeModalDeslogar();

        this.logar();
      } else {
        alert(response.errorMessage);
      }
    } catch (err) {
      alert(err);
    }
  };

  // Executa o login da loja
  logar = () => {
    try {
      // Executa o login do cliente
      AppCambioAPI.login(
        this.props.email,
        this.props.senha,
        NativeModules.PlatformConstants.Model
      )
        .then(response => {
          // Se houver mensagem de erro ao efetuar o login
          if (response.errorMessage !== "") {
            // Se o erro for por que o cliente está logado em outro aparelho, possibilita o deslogue do cliente
            if (response.errorMessage.includes("E631D")) {
              // Possibilita o cliente deslogar o mesmo usuario logado em outro aparelho
              this.props.openModalDeslogar(emailEnvio.email, senhaUper);
            } else {
              // Exibe a mensagem de erro do login
              alert(response.errorMessage);
            }
          } else {
            // Persiste o token do cliente na base local para ser utilizado quando o cliente abrir o aplicativo novamente
            AsyncStorage.setItem("@primecaseTokenCliente", response.data.Token);

            // Atualiza os dados do cliente no reducer
            this.props.atualizarDadosCliente(
              response.data.ClienteID,
              response.data.ClienteNome,
              response.data.ClienteEmail,
              response.data.ClienteSenha,
              response.data.Token,
              NativeModules.PlatformConstants.Model,
              true,
              this.state.pageInicial
            );
          }
        })
        .catch(error => {
          alert(error);
        });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 10
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                textAlign: "center",
                marginTop: 20
              }}
            >
              Identificamos que este usuário está vinculado à outro dispositivo.
              Por questões de segurança, por favor, clique no botão
              'Desconectar' para desvincular seu aplicativo de outros
              dispositivos.
            </Text>
          </View>
          <ButtonSendModal title="DESCONECTAR" sendClick={this.deslogar} />
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const ModalDeslogarConnect = connect(
  mapStateToProps,
  { 
    atualizarDadosCliente, 
    getTokenCliente }
)(ModalDeslogar);
export default ModalDeslogarConnect;
