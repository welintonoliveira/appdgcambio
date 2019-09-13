import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  NativeModules,
  KeyboardAvoidingView
} from "react-native";
import { Content, Container } from "native-base";
import { connect } from "react-redux";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconIonicons from "react-native-vector-icons/Ionicons";
import md5 from "md5";
import AsyncStorage from "@react-native-community/async-storage";

import LogoSvg from "../../../components/Logo/LogoSvg";
import IconeSvg from "../../../components/Logo/IconeSvg";
import ButtonSendModal from "../components/ButtonSendModal";
import {
  atualizarDadosCliente,
  getTokenCliente
} from "../../../actions/AuthActions";
import AppCambioAPI from "../../../AppCambioAPI";
import { toEmail } from "../../../configuracao/Helpers";
import HeaderApp from "../../../components/HeaderApp";

import { colors } from "../../../Styles";
import styles from "./styles";

export class Entrar extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      showSenha: true,
      iconName: "eye-slash",
      pageInicial: this.props.navigation.getParam("Page", "Pedidos")
    };
  }

  deslogar = async () => {
    try {
      let senhaHash = md5(this.state.senha);
      let senhaUper = senhaHash.toUpperCase();

      let response = await AppCambioAPI.logoutCliente(
        this.state.email,
        senhaUper
      );

      if (response.errorMessage === "") {
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
      // Recupera a senha para validação
      let senhaEnvio = this.state.senha;

      // Executa as validações do email
      let emailEnvio = toEmail(this.state.email);

      // Exibe a mensagem de erro do email inválido
      if (emailEnvio.isValid === false) {
        // Exibe a mensagem de erro para o cliente
        alert(emailEnvio.errorMessage);
      } else if (senhaEnvio.length === 0) {
        // Avisa o cliente que precisa preeencher o campo senha
        alert("É necessário preencher o campo Senha.");
      } else {
        // Cria um hash com a senha informada pelo cliente
        let senhaHash = md5(this.state.senha);

        let senhaUper = senhaHash.toUpperCase();

        // Executa o login do cliente
        AppCambioAPI.login(
          emailEnvio.email,
          senhaUper,
          NativeModules.PlatformConstants.Model
        )
          .then(response => {
            // Se houver mensagem de erro ao efetuar o login
            if (response.errorMessage !== "") {
              // Se o erro for por que o cliente está logado em outro aparelho, possibilita o deslogue do cliente
              if (response.errorMessage.includes("E631D")) {
                // Possibilita o cliente deslogar o mesmo usuario logado em outro aparelho
                this.deslogar();
              } else {
                // Exibe a mensagem de erro do login
                alert(response.errorMessage);
              }
            } else {
              // Persiste o token do cliente na base local para ser utilizado quando o cliente abrir o aplicativo novamente
              AsyncStorage.setItem(
                "@primecaseTokenClienteDG",
                response.data.Token
              );

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
      }
    } catch (err) {
      alert(err);
    }
  };

  // Configura os dados do email do cliente
  setEmailLogin = email => {
    this.setState({ email: email.text });
  };

  // Configura os dados da senha do lotin do cliente
  setSenhaLogin = senha => {
    this.setState({ senha: senha.text });
  };

  visualizarSenha = () => {
    if (this.state.showSenha === true) {
      this.setState({ showSenha: false, iconName: "eye-slash" });
    } else {
      this.setState({ showSenha: true, iconName: "eye" });
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
          title="Pedidos"
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
              flexDirection: "column"
            }}
          >
            <View style={styles.backgroundOpacity}>
              <KeyboardAvoidingView style={styles.container}  behavior="padding" enabled>
                <View style={styles.espacoLogoTopo}>
                  <LogoSvg />
                </View>
                <View style={styles.espacoCampos}>
                  <View style={styles.areaInputEmailLogin}>
                    <TextInput
                      style={styles.inputEmailLogin}
                      keyboardType="email-address"
                      placeholder="E-mail"
                      placeholderTextColor="#333"
                      onChangeText={text => this.setEmailLogin({ text })}
                      value={this.state.email}
                    />
                  </View>
                  <View style={styles.areaInputSenhaLogin}>
                    <TextInput
                      style={styles.inputSenhaLogin}
                      placeholder="Senha"
                      placeholderTextColor="#333"
                      secureTextEntry={this.state.showSenha}
                      onChangeText={text => this.setSenhaLogin({ text })}
                      value={this.state.senha}
                    />
                    <View style={styles.areaIconeVisualizacaoSenha}>
                      <TouchableHighlight
                        underlayColor={null}
                        onPress={this.visualizarSenha}
                        underlay
                      >
                        <IconFontAwesome5
                          name={this.state.iconName}
                          style={styles.iconeVisualizacaoSenha}
                        />
                      </TouchableHighlight>
                    </View>
                  </View>
                  <ButtonSendModal title="ENTRAR" sendClick={this.logar} />

                  <View style={styles.areaButtonEsqueceuSuaSenha}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("EsqueciSenha")
                      }
                      style={styles.buttonEsqueciMinhaSenha}
                    >
                      <Text style={styles.buttonEsqueciMinhaSenhaTexto}>
                        Esqueceu sua senha?
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </KeyboardAvoidingView>
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const EntrarConnect = connect(
  mapStateToProps,
  { atualizarDadosCliente, getTokenCliente }
)(Entrar);
export default EntrarConnect;
