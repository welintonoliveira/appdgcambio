import React, { Component } from "react";
import { Content, Container } from "native-base";
import { connect } from "react-redux";
import { WebView } from "react-native-webview";
import styles from "./styles";
import HeaderApp from "../../../components/HeaderApp";
import Loading from "../../../components/Loading";
import { makeLogin } from "../../../actions/AuthActions";

class DadosCliente extends Component {
  static navigationOptions = {
    header: null
  };

  back = () => {
    this.props.navigation.goBack();
  };

  getMessageCarrinho = message => {
    console.log("message", message);

    switch (message.TipoMensagem) {
      case "DadosClientePreenchidos":
        this.props.navigation.navigate("Endereco", {
          Origem: this.props.navigation.getParam("Origem", "Carrinho")
        });
        break;
      case "ShowErroMessage":
        alert(message.ErrorMessage);
        break;
      default:
        alert("mensagem inválida.");
        break;
    }
  };

  render() {
    return (
      <Container>
        <HeaderApp
          backClick={this.back}
          title="Cadastro/Dados Cliente"
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
        />
        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
          <WebView
            bounces={false}
            source={{ uri: this.props.urlDadosCliente }}
            injectedJavaScript={makeLogin(
              this.props.imeiAparelho,
              this.props.descricaoAparalhe
            )}
            ref={view => (this.webView = view)}
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
    urlDadosCliente: state.url.urlDadosCliente,
    imeiAparelho: state.auth.imeiAparelho,
    descricaoAparalhe: state.auth.descricaoAparalhe
  };
};

const DadosClienteConnect = connect(
  mapStateToProps,
  { makeLogin }
)(DadosCliente);
export default DadosClienteConnect;
