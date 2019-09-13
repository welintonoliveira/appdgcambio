import React, { Component } from "react";
import { View, BackHandler, StyleSheet, Text } from "react-native";
import { Content, Container } from "native-base";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";
import {
  quantidadeItemCarrinhoChanged,
  paginaInicialChanged
} from "../../actions/AuthActions";

import HeaderApp from "../../components/HeaderApp";
import Loading from "../../components/Loading";
import styles from "./styles";

export class VitrineDeslogada extends Component {
  static navigationOptions = {
    header: null
  };

  getMessageCarrinho = message => {
    console.log("message");
    switch (message.TipoMensagem) {
      case "NextLogin":
        this.props.paginaInicialChanged("Carrinho");
        this.props.quantidadeItemCarrinhoChanged(1);
        this.props.navigation.navigate("Login", { Page: "Carrinho" });
        break;
      case "ShowErroMessage":
        alert(message.ErrorMessage);
        break;
      default:
        alert("mensagem inválida.");
        break;
    }
  };

  back = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Container>
        <HeaderApp
          initialRouter={true}
          backClick={this.back}
          title="Vitrine"
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
        />
        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
          <WebView
            bounces={false}
            source={{ uri: this.props.urlVitrineDeslogada }}
            startInLoadingState={true}
            renderLoading={() => <Loading />}
            onMessage={event => {
              this.getMessageCarrinho(JSON.parse(event.nativeEvent.data));
            }}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    urlVitrineDeslogada: state.url.urlVitrineDeslogada
  };
};

const VitrineDeslogadaConnect = connect(
  mapStateToProps,
  {
    quantidadeItemCarrinhoChanged,
    paginaInicialChanged
  }
)(VitrineDeslogada);
export default VitrineDeslogadaConnect;
