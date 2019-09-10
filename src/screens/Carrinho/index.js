import React, { Component } from "react";
import { View, BackHandler, Text } from "react-native";
import { Content, Container } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-community/async-storage";
import { connect } from "react-redux";
import {
  makeLogin,
  quantidadeItemCarrinhoChanged
} from "../../actions/AuthActions";

import HeaderApp from "../../components/HeaderApp";
import Loading from "../../components/Loading";
import PontoRetiradaMapa from "../../components/PontoRetiradaMapa";
import styles from "./styles";

export class Carrinho extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      canGoBack: false,
      visible: true,
      urlCarrinho: this.props.urlCarrinho,
      showAnexoDocumento: false,
      showPedidoFinalizado: false,
      showCarrinhoWeb: true,
      isLoading: true,
      quantidadeItensCarrinho: 0,
      showMapa: false,
      dadosMapa: []
    };

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.getMessageCarrinho = this.getMessageCarrinho.bind(this);
  }

  changeUrlItensCarrinho() {
    this.setState({
      urlCarrinho: `${this.props.urlCarrinho}?Page=ItensCarrinho`
    });
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
    this.setState({ showMapa: false });
    if (this.state.canGoBack) {
      this.webref.goBack();
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
    switch (message.TipoMensagem) {
      case "CarrinhoAnexarComprovante":
        // Limpa a quantidade de itens do carrinho
        this.props.quantidadeItemCarrinhoChanged(0);
        // Redireciona o cliente para pagina de comprovante de pagamento
        this.props.navigation.navigate("ComprovantePagamento", {
          IDPedido: message.Data.IDPedido,
          IsNovoPedido: true
        });
        break;
      case "CarrinhoItemAdicionado":
        this.props.quantidadeItemCarrinhoChanged(message.Data.QuantidadeItens);
        break;
      case "AcessaMapa":
        let state = this.state;
        state.showMapa = true;
        state.dadosMapa = message.Data;
        this.setState(state);
        // this.setState({ showMapa: true, dadosMapa: message.data });
        break;
      default:
        alert("mensagem não suportada.");
        break;
    }
  }

  render() {
    return (
      <Container>
        <HeaderApp
          initialRouter={true}
          //backClick={this.back}
          title="Carrinho"
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
          //changeUrlItensCarrinho={this.changeUrlItensCarrinho.bind(this)}
        />
        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
          {this.state.showMapa == true && (
            <PontoRetiradaMapa pontoRetirada={this.state.dadosMapa} />
          )}
          {this.state.showMapa == false && (
            <WebView
              bounces={false}
              source={{ uri: this.state.urlCarrinho }}
              injectedJavaScript={makeLogin(
                this.props.imeiAparelho,
                this.props.descricaoAparalhe
              )}
              startInLoadingState={true}
              renderLoading={() => <Loading />}
              ref={r => (this.webref = r)}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)}
              onMessage={event => {
                this.getMessageCarrinho(JSON.parse(event.nativeEvent.data));
              }}
            />
          )}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    urlCarrinhoDefault: state.url.urlCarrinhoDefault,
    urlCarrinho: state.url.urlCarrinho,
    clienteNome: state.auth.clienteNome,
    quantidadeItensCarrinho: state.auth.quantidadeItensCarrinho,
    imeiAparelho: state.auth.imeiAparelho,
    descricaoAparalhe: state.auth.descricaoAparalhe
  };
};

const CarrinhoConnect = connect(
  mapStateToProps,
  { quantidadeItemCarrinhoChanged }
)(Carrinho);
export default CarrinhoConnect;
