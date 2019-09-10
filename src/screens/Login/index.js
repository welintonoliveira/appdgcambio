import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Content, Container } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

import LogoSvg from "../../components/Logo/LogoSvg";
import IconeSvg from "../../components/Logo/IconeSvg";
import { colors } from "../../Styles";
import styles from "./styles";
import ModalLogin from "./ModalLogin";
import ModalNovaSenha from "./ModalNovaSenha";
import ModalDeslogar from "./ModalDeslogar";
import HeaderApp from "../../components/HeaderApp";

export default class Login extends Component {
  state = {
    visibleModalLogin: false,
    visibleModalSenha: false,
    visibleModalDeslogar: false,
    email: "",
    senha: "",
    emailNewSenha: "",
    emailValid: false,
    senhaValid: false,
    emailNewSenhaValid: false
  };

  static navigationOptions = {
    header: null
  };

  openModalDeslogar = (ClienteEmail, ClienteSenha) => {
    this.setState({
      visibleModalSenha: false,
      visibleModalLogin: false,
      visibleModalDeslogar: true,
      email: ClienteEmail,
      senha: ClienteSenha
    });
  };

  closeModalDeslogar = () => {
    this.setState({ visibleModalDeslogar: false });
  };

  openModalNovaSenha = () => {
    this.setState({ visibleModalSenha: true, visibleModalLogin: false });
  };

  closeModalNovaSenha = () => {
    this.setState({ visibleModalSenha: false });
  };

  openModalLogin = () => {
    this.setState({ visibleModalLogin: true });
  };

  closeModalLogin = () => {
    this.setState({ visibleModalLogin: false });
  };

  back = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Container>
        <HeaderApp
          initialRouter={false}
          title="Pedidos"
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
          showLogo={false}
          showDrawer={true}
          showBackButton={false}
          backClick={this.back}
        />
        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
          <ImageBackground
            source={require("../../img/background-dg1.png")}
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "space-between",
              flexDirection: "column"
            }}
          >
            <View style={styles.backgroundOpacity}>
              <KeyboardAvoidingView style={styles.container} enabled>
                <View style={styles.espacoLogoTopo}>
                  <IconeSvg />
                </View>
                {this.state.visibleModalSenha && (
                  <ModalNovaSenha
                    visible={this.state.visibleModalSenha}
                    closeModalNovaSenha={this.closeModalNovaSenha}
                  />
                )}
                {this.state.visibleModalDeslogar && (
                  <ModalDeslogar
                    visible={this.state.visibleModalDeslogar}
                    closeModalDeslogar={this.closeModalDeslogar}
                    email={this.state.email}
                    senha={this.state.senha}
                    pageInicial={this.props.navigation.getParam(
                      "Page",
                      "Pedidos"
                    )}
                  />
                )}
                <View style={styles.areaLogin}>
                  <TouchableOpacity
                    underlay
                    onPress={() => this.props.navigation.navigate("Entrar")}
                    style={[styles.buttonClienteExistente, styles.itenInline]}
                  >
                    <Icon name="key" style={styles.icon} />
                    <Text style={styles.buttonLoginTexto}>
                      Já sou cadastrado
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("DadosCliente", {
                        Origem: "Carrinho"
                      })
                    }
                    style={[styles.buttonNovoCliente, styles.itenInline]}
                  >
                    <Icon name="user-plus" style={styles.icon} />
                    <Text style={styles.buttonLoginTexto}>Novo cadastro</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
              <View style={[styles.espacoLogoRodape]}>
                <LogoSvg />
              </View>
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
