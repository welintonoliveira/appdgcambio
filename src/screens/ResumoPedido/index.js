import React, { Component } from "react";
import { View } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";
import { Content, Container } from "native-base";
import PontoRetiradaMapa from "../../components/PontoRetiradaMapa";
import Loading from "../../components/Loading";
import HeaderApp from "../../components/HeaderApp";

import { quantidadeItemCarrinhoChanged } from "../../actions/AuthActions";

import { makeLogin } from "../../actions/AuthActions";

import styles from "./styles";

class ResumoPedido extends Component {
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
      case "NextFormaEntrega":
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "Entrega" })]
          })
        );
        break;
      case "CarrinhoAnexarComprovante":
        // Limpa a quantidade de itens do carrinho
        this.props.quantidadeItemCarrinhoChanged(0);
        // Redireciona o cliente para pagina de comprovante de pagamento
        this.props.navigation.navigate("ComprovantePagamento", {
          IDPedido: message.Data.IDPedido,
          DescricaoFormaPagamento: message.Data.DescricaoFormaPagamento,
          IsOperacaoVenda: message.Data.IsOperacaoVenda,
          IsNovoPedido: true
        });
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
          title="Resumo"
          navigation={this.props.navigation}
          iconCarrinho={{
            quantidadeItens: this.props.quantidadeItensCarrinho,
            visible: true
          }}
        />
        <WebView
          bounces={false}
          source={{ uri: this.props.urlResumoPedido }}
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
    urlResumoPedido: state.url.urlResumoPedido,
    tokenValidacao: state.auth.tokenValidacao,
    descricaoAparalhe: state.auth.descricaoAparalhe
  };
};

const ResumoPedidoConnect = connect(
  mapStateToProps,
  { makeLogin, quantidadeItemCarrinhoChanged }
)(ResumoPedido);
export default ResumoPedidoConnect;
