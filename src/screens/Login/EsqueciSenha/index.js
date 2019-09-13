import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import { Content, Container } from "native-base";

import styles from "./styles";
import LogoSvg from "../../../components/Logo/LogoSvg";
import ButtonSendModal from "../components/ButtonSendModal";
import { toEmail } from "../../../configuracao/Helpers";
import AppCambioAPI from "../../../AppCambioAPI";
import HeaderApp from "../../../components/HeaderApp";

export default class EsqueciSenha extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: ""
  };

  enviarNovaSenha = async () => {
    try {
      let result = toEmail(this.state.email);

      if (result.isValid) {
        let response = await AppCambioAPI.enviarNovaSenha(result.email);

        if (response.errorMessage === "") {
          alert("Foi enviado um e-mail com uma nova senha para o seu acesso.");
        } else {
          alert(response.errorMessage);
        }
      } else {
        alert(result.errorMessage);
      }
    } catch (err) {
      alert(err);
    }
  };

  setEmailValue = text => {
    this.setState({ email: text });
  };

  back = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Container>
        <HeaderApp
          initialRouter={false}
          title="Esqueci Minha Senha"
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
          showLogo={false}
          showDrawer={false}
          backClick={this.back}
        />
        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
          <ImageBackground
            source={require("../../../img/background-dg1.png")}
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "space-between",
              flexDirection: "column"
            }}
          >
            <View style={styles.backgroundOpacity}>
              <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.espacoLogoTopo}>
                  <LogoSvg />
                </View>
                <View style={styles.container}>
                  <View style={styles.areaInputEmailLogin}>
                    <TextInput
                      style={styles.inputEmailLogin}
                      placeholder="E-mail"
                      placeholderTextColor="#333"
                      onChangeText={text => this.setEmailValue(text)}
                      value={this.state.email}
                    />
                  </View>
                  <ButtonSendModal
                    title="SOLICITAR NOVA SENHA"
                    sendClick={this.enviarNovaSenha}
                  />
                </View>
              </KeyboardAvoidingView>
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
