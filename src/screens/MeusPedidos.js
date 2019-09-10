import React, { Component } from "react";
import {
  View,
  BackHandler,
  StyleSheet,
  PermissionsAndroid
} from "react-native";
import { Content, Container } from "native-base";
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/FontAwesome5";
import HeaderCarrinho from "../../components/HeaderCarrinho";
import { connect } from "react-redux";
import {
  authChanged,
  makeLogin,
  clientePropriedadesChanged
} from "../../actions/AuthActions";
import { colors } from "../../Styles";

import Loading from "../../components/Loading";

export class MeusPedidos extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      canGoBack: false,
      visualizacao: true,
      idPedido: 15
    };

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.getMessageCarrinho = this.getMessageCarrinho.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick() {
    if (this.state.canGoBack) {
      this.webView.goBack();
      return true;
    } else {
      return false;
    }
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  getMessageCarrinho(message) {
    console.log("message", message);

    switch (message.TipoMensagem) {
      case "Pedidos":
        this.props.authChanged(
          message.Data.ID,
          message.Data.Nome,
          "MeusPedidos",
          true
        );
        break;
      case "PedidosCadastro":
        // Atualiza o nome do cliente na base no aplicativo
        //this.props.clientePropriedadesChanged(message.Data.ID, message.Data.Nome);
        this.props.navigation.navigate("DocumentosCliente", {
          IDCliente: message.Data.ID,
          PaginaRedirecionamentoBotao: "Carrinho"
        });
        break;
      case "PedidosAnexarComprovante":
        this.props.navigation.navigate("ComprovantePagamento", {
          IDPedido: message.Data.IDPedido,
          IsNovoPedido: false
        });
        break;
      default:
        alert("mensagem não suportada.");
        break;
    }
  }

  render() {
    return (
      <Container>
        <HeaderCarrinho
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
        />
        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
          <WebView
            bounces={false}
            source={{ uri: this.props.urlMeusPedidos }}
            injectedJavaScript={makeLogin(
              this.props.imeiAparelho,
              this.props.descricaoAparalhe
            )}
            startInLoadingState={true}
            renderLoading={() => <Loading />}
            ref={view => (this.webView = view)}
            onNavigationStateChange={this.onNavigationStateChange.bind(this)}
            onMessage={event => {
              this.getMessageCarrinho(JSON.parse(event.nativeEvent.data));
            }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    color: colors.white
  },
  boxIcone: {
    flexDirection: "row"
  },
  icone: {
    color: colors.white,
    marginRight: 15
  },
  container: {
    marginTop: 100,
    marginLeft: 100
  }
});

const mapStateToProps = state => {
  return {
    urlMeusPedidos: state.url.urlMeusPedidos,
    clienteLogado: state.auth.clienteLogado,
    imeiAparelho: state.auth.imeiAparelho,
    descricaoAparalhe: state.auth.descricaoAparalhe
  };
};

const MeusPedidosConnect = connect(
  mapStateToProps,
  { authChanged, clientePropriedadesChanged }
)(MeusPedidos);
export default MeusPedidosConnect;
