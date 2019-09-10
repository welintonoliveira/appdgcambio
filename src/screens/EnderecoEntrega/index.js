import React, { Component } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";
import { Content, Container } from "native-base";
import Loading from "../../components/Loading";
import HeaderApp from "../../components/HeaderApp";
import { makeLogin } from "../../actions/AuthActions";

import styles from "./styles";

class EnderecoEntrega extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  back = () => {
    this.props.navigation.goBack();
  };

  getMessageCarrinho = message => {
    switch (message.TipoMensagem) {
      case "NextFormaPagamento":
        this.props.navigation.navigate("FormaPagamento");
        break;
      case "NextCarteiraVazia":
        this.props.navigation.navigate("CarteiraVazia");
        break;
      case "SessaoExpirada":
        this.props.navigation.navigate("Vitrine");
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
          backClick={this.back}
          title="Endereço Entrega"
          navigation={this.props.navigation}
          iconCarrinho={{
            quantidadeItens: this.props.quantidadeItensCarrinho,
            visible: true
          }}
        />
        <WebView
          bounces={false}
          source={{ uri: this.props.urlEnderecoEntrega }}
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
    urlEnderecoEntrega: state.url.urlEnderecoEntrega,
    tokenValidacao: state.auth.tokenValidacao,
    descricaoAparalhe: state.auth.descricaoAparalhe
  };
};

const EnderecoEntregaConnect = connect(
  mapStateToProps,
  { makeLogin }
)(EnderecoEntrega);
export default EnderecoEntregaConnect;
