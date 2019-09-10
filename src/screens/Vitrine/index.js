import React, { Component } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";
import { Content, Container } from "native-base";
import PontoRetiradaMapa from "../../components/PontoRetiradaMapa";
import Loading from "../../components/Loading";
import HeaderApp from "../../components/HeaderApp";
import {
  makeLogin,
  quantidadeItemCarrinhoChanged
} from "../../actions/AuthActions";

import styles from "./styles";

class Vitrine extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  getMessageCarrinho = message => {
    console.log('message', message);
    switch (message.TipoMensagem) {
      case "NextFormaEntrega":
        this.props.navigation.navigate("Entrega");
        break;
      case "NextFinalidade":
        this.props.navigation.navigate("Finalidade");
        break;
      case "NextCarteiraVazia":
        this.props.navigation.navigate("CarteiraVazia");
        break;
      case "SessaoExpirada":
        this.props.navigation.navigate("Vitrine");
        break;
      case "NextItensCarrinho":
        this.props.navigation.navigate("ItensCarrinho");
        break;
      case "ShowErroMessage":
        alert(message.ErrorMessage);
        break;
      default:
        alert("Mensagem inválida.");
        break;
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderApp
          initialRouter={true}
          title="Vitrine"
          navigation={this.props.navigation}
          iconCarrinho={{
            quantidadeItens: this.props.quantidadeItensCarrinho,
            visible: true
          }}
        />
        <WebView
          bounces={false}
          source={{ uri: this.props.urlVitrineCarrinho }}
          injectedJavaScript={makeLogin(
            this.props.tokenValidacao,
            this.props.descricaoAparalhe
          )}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          ref={r => (this.webref = r)}
          onMessage={event => {
            this.getMessageCarrinho(JSON.parse(event.nativeEvent.data));
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    quantidadeItensCarrinho: state.auth.quantidadeItensCarrinho,
    urlVitrineCarrinho: state.url.urlVitrineCarrinho,
    tokenValidacao: state.auth.tokenValidacao,
    descricaoAparalhe: state.auth.descricaoAparalhe
  };
};

const VitrineConnect = connect(
  mapStateToProps,
  { makeLogin, quantidadeItemCarrinhoChanged }
)(Vitrine);
export default VitrineConnect;
