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
import { colors } from "../../Styles";
import styles from "./styles";
import ModalLogin from "./ModalLogin";
import ModalNovaSenha from "./ModalNovaSenha";
import ModalDeslogar from "./ModalDeslogar";
import HeaderApp from "../../components/HeaderApp";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };

  back = () => {
    this.props.navigation.goBack();
  };

  entrar = () =>{
    this.props.navigation.navigate("Entrar");
  }

  render() {
    return (
      <Container>
        <HeaderApp
          initialRouter={false}
          title="Login"
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
              <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "space-between",
                    paddingBottom: 65
                  }}
                >
                  <View style={styles.espacoLogoTopo}>
                    <LogoSvg />
                  </View>
                  <View style={styles.areaLogin}>
                    <TouchableOpacity
                      underlay
                      onPress={() => this.entrar()}
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
                </ScrollView>
              </KeyboardAvoidingView>
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
