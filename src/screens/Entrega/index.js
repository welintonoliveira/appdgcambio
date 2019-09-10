import React, { Component } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";
import { Content, Container } from "native-base";
import PontoRetiradaMapa from "../../components/PontoRetiradaMapa";
import Loading from "../../components/Loading";
import HeaderApp from "../../components/HeaderApp";

import { makeLogin } from "../../actions/AuthActions";
import styles from "./styles";

class Endereco extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      dadosMapa: {},
      showMapa: false
    };
  }

  back = () => {
    this.props.navigation.goBack();
  };

  getMessageCarrinho = message => {
    switch (message.TipoMensagem) {
      case "NextItensCarrinho":
        this.props.navigation.navigate("ItensCarrinho");
        break;
      case "NextCarteiraVazia":
        this.props.navigation.navigate("CarteiraVazia");
        break;
      case "SessaoExpirada":
        this.props.navigation.navigate("Vitrine");
        break;
      case "NextAbrirMapa":
        this.props.navigation.navigate("LojaDetalhe", {
          pontoRetirada: message.Data
        });
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
          title="Forma de Entrega"
          navigation={this.props.navigation}
          iconCarrinho={{
            quantidadeItens: this.props.quantidadeItensCarrinho,
            visible: true
          }}
        />
        {this.state.showMapa == true && (
          <PontoRetiradaMapa pontoRetirada={this.state.dadosMapa} />
        )}
        {this.state.showMapa == false && (
          <WebView
            bounces={false}
            source={{ uri: this.props.urlFormaEntrega }}
            injectedJavaScript={makeLogin(
              this.props.tokenValidacao,
              this.props.descricaoAparalhe
            )}
            startInLoadingState={true}
            renderLoading={() => <Loading />}
            ref={r => (this.webref = r)}
            onMessage={event => {
              console.log("event.nativeEvent.data", event.nativeEvent.data);
              this.getMessageCarrinho(JSON.parse(event.nativeEvent.data));
            }}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    quantidadeItensCarrinho: state.auth.quantidadeItensCarrinho,
    urlFormaEntrega: state.url.urlFormaEntrega,
    tokenValidacao: state.auth.tokenValidacao,
    descricaoAparalhe: state.auth.descricaoAparalhe
  };
};

const EnderecoConnect = connect(
  mapStateToProps,
  { makeLogin }
)(Endereco);
export default EnderecoConnect;
