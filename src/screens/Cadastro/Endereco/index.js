import React, { Component } from "react";
import { NativeModules } from "react-native";
import { Content, Container } from "native-base";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";
import styles from "./styles";
import HeaderApp from "../../../components/HeaderApp";
import Loading from "../../../components/Loading";

import { setPageOrigemCadastro } from "../../../actions/AuthActions";

class Endereco extends Component {
  static navigationOptions = {
    header: null
  };

  back = () => {
    this.props.navigation.goBack();
  };

  getMessageCarrinho = message => {
    switch (message.TipoMensagem) {
      case "VitrinePedidoCadastro":
        this.props.navigation.navigate("DocumentosCliente", {
          Cliente: message.Data,
          PaginaRedirecionamentoBotao: "Carrinho"
        });
        break;
      case "PedidosCadastro":
        this.props.navigation.navigate("DocumentosCliente", {
          Cliente: message.Data,
          PaginaRedirecionamentoBotao: "MeusPedidos"
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
          title="Cadastro/Endereço"
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
        />
        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
          <WebView
            bounces={false}
            source={{ uri: this.props.urlEndereco }}
            injectedJavaScript={setPageOrigemCadastro(
              this.props.navigation.getParam("Origem", "Carrinho")
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
    urlEndereco: state.url.urlEndereco
  };
};

const EnderecoConnect = connect(
  mapStateToProps,
  { setPageOrigemCadastro }
)(Endereco);
export default EnderecoConnect;
