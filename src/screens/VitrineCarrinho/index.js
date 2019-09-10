import React, { Component } from "react";
import {
  ScrollView,
  Picker,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from "react-native";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";

import HeaderApp from "../../components/HeaderApp";
import InputValue from "../../components/InputValue";
import SeletorVitrine1 from "./SeletorVitrine1";
import SeletorVitrineMoeda from "./SeletorVitrineMoeda";
import ButtonNext from "../../components/ButtonNext";
import ButtonTipoVitrine from "./ButtonTipoVitrine";
import Loading from "../../components/Loading";

import AppCambioAPI from "../../AppCambioAPI";

import {
  changeValorMe,
  changeValorMn,
  changeItemVitrine,
  changeProduto,
  changeTipoOperacao,
  changePraca,
  setValorInicial
} from "../../store/ducks/vitrine";

import styles from "./styles";

class VitrineCarrinho extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoad: true,
      tiposOperacao: [],
      pracas: [],
      itensVitrine: [],
      titleButtonCompra: 'COMPRAR',
    };
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    try {
      AppCambioAPI.getVitrine()
        .then(r => r.json())
        .then(json => {
          console.log("json", json);

          if (json && json.produtos.length > 0) {
            // Inicializa o carregamento da vitrine
            this.carregarVitrineInit(
              json,
              json.produtos[0].id,
              json.tiposOperacao[0].id
            );
          }
        })
        .catch(erro => {
          alert(erro + "M31F1");
        });
    } catch (err) {
      alert(err + "M7387");
    }
  };

  carregarVitrineInit = (array, idProduto, idTipoOperacao) => {
    // Configura os dados da vitrine inicial
    this.props.changeProduto(idProduto);

    // Atualiza a listagem do state
    this.setState({
      data: array,
      isLoad: false
    });

    // Carrega os tipos de operação inicial do sistema
    this.carregarTiposOperacaoInit(array.tiposOperacao, idProduto);

    // carregarPracas
    this.carregarPracas(array.pracas);

    // Recupera a praça id
    let idPraca = array.pracas[0].id;

    // Carrega os itens da vitrine
    this.carregarItensVitrineInit(
      array.itensVitrine,
      idProduto,
      idTipoOperacao,
      idPraca
    );
  };

  // Carrega os tipos de operação
  carregarTiposOperacaoInit = (array, idProduto, idTipoOperacao) => {
    let result = array.filter(function(item, index) {
      return item.idProduto == idProduto;
    });

    this.setState({
      tiposOperacao: result,
      titleButtonCompra: result[0].buttonTitle
    });

    // Configura o tipo de operação inicial
    this.props.changeTipoOperacao(result[0].id);
  };

  // Inicializa o carregamento dos itens da vitrine
  carregarItensVitrineInit = (array, idProduto, idTipoOperacao, idPraca) => {
    let response = array.filter(function(item, index) {
      return (
        item.idTipoMoeda == idProduto &&
        item.idPraca == idPraca &&
        item.idTipoItemCarrinho == idTipoOperacao
      );
    });

    // Atualiza o id do item da vitrine no reducer
    this.props.changeItemVitrine(response[0].id);

    // Configura os valores iniciais da vitrine
    this.configurarValoresVitrine(response[0]);

    // Configura os itens da vitrine
    this.setState({
      itensVitrine: response
    });
  };

  // Carrega os tipos de operação
  carregarPracas = array => {
    this.setState({
      pracas: array
    });

    this.props.changePraca(array[0].id);
  };

  // Carrega todos os dados da vitrine
  carregarVitrine = (array, idProduto) => {
    // Configura os dados da vitrine inicial
    this.props.changeProduto(idProduto);

    // Atualiza a listagem do state
    this.setState({
      data: array,
      isLoad: false
    });

    // Carrega os tipos de operação inicial do sistema
    this.carregarTiposOperacao(array.tiposOperacao, idProduto);

    // Aguarda o redux retornar o tipo de operação
    setTimeout(() => {
      // carregarPracas
      this.carregarPracas(array.pracas);

      // Carrega os itens da vitrine
      this.carregarItensVitrine(array.itensVitrine, idProduto);
    }, 50);
  };

  // Carrega os tipos de operação
  carregarTiposOperacao = (array, idProduto) => {
    let result = array.filter(function(item, index) {
      return item.idProduto == idProduto;
    });

    this.setState({
      tiposOperacao: result,
      titleButtonCompra: result[0].buttonTitle
    });

    // Configura o tipo de operação inicial
    this.props.changeTipoOperacao(result[0].id);
  };

  // Carrega os tipos de operação
  carregarPracas = array => {
    this.setState({
      pracas: array
    });

    this.props.changePraca(array[0].id);
  };

  carregarItensVitrine = (array, idProduto) => {
    let idTipoOperacao = this.props.idTipoOperacao;
    let idPraca = this.props.idPraca;

    let response = array.filter(function(item, index) {
      return (
        item.idTipoMoeda == idProduto &&
        item.idPraca == idPraca &&
        item.idTipoItemCarrinho == idTipoOperacao
      );
    });

    // Atualiza o id do item da vitrine no reducer
    this.props.changeItemVitrine(response[0].id);

    // Configura os valores iniciais da vitrine
    this.configurarValoresVitrine(response[0]);

    // Configura os itens da vitrine
    this.setState({
      itensVitrine: response
    });
  };

  /*componentWillUnmount() {
	    this._isMounted = false;
	}*/

  // Executa troca da vitrine
  changeVitrine = idProduto => {
    // Recupera os dados
    let data = this.state.data;

    for (let i = 0; i < data.produtos.length; i++) {
      if (data.produtos[i].id == idProduto) {
        data.produtos[i].ativo = "True";
      } else {
        data.produtos[i].ativo = "False";
      }
    }

    // Atualiza a vitrine selecionada no state
    this.setState({ data: data });

    // Atualiza o carregamento dos dados da vitrine
    this.carregarVitrine(this.state.data, idProduto);
  };

  configurarValoresVitrine = item => {
    const { piso, taxa, siglaMoeda } = item;

    let valorMn = piso * taxa;

    this.props.setValorInicial(piso, valorMn, taxa, siglaMoeda);
  };

  onChangeTipoOperacao = idTipoOperacao => {
    // Atualiza no redux o id do tipo de operação
    this.props.changeTipoOperacao(idTipoOperacao);

    let result = this.state.data.tiposOperacao.filter(function(item, index){
      return item.id == idTipoOperacao;
    })

    // Troca a descrição do botão de compra
    this.setState({
      titleButtonCompra: result[0].buttonTitle
    });

    // Recupera o id do produto
    let idProduto = this.props.idProduto;

    // Recarrega a coleção de praças
    this.carregarPracas(this.state.data.pracas);

    // Carrega os itens da vitrine
    this.carregarItensVitrine(this.state.data.itensVitrine, idProduto);
  };

  onChangePraca = idPraca => {
    // Atualiza no redux o id da praça
    this.props.changePraca(idPraca);

    let idProduto = this.props.idProduto;

    // Carrega os itens da vitrine
    this.carregarItensVitrine(this.state.data.itensVitrine, idProduto);
  };

  onChangeItemVitrine = idItemVitrine => {
    // Atualiza no redux o id do item da vitrine
    this.props.changeItemVitrine(idItemVitrine);

    let idProduto = this.props.idProduto;
    let idTipoOperacao = this.props.idTipoOperacao;
    let idPraca = this.props.idPraca;

    // Recupera o item selecionado da vitrine
    let result = this.state.itensVitrine.filter(function(item, index) {
      return item.id == idItemVitrine;
    });

    // Atualiza os valores dos itens da vitrine
    this.configurarValoresVitrine(result[0]);
  };

  setValue = e => {
    this.seletorPraca.closeItens();
    this.seletorItensVitrine.closeItens();
    this.seletorTipoOperacao.closeItens();
  };

  sendCompra3 = () =>{
    let idTipoOperacao = this.props.idTipoOperacao;
    let isRecarga = this.props.isRecarga;
    let idPraca = this.props.idPraca;
    let idItemVitrine = this.props.idItemVitrine;
    let quantidadeMe = this.props.valorMe;

    this.webView.injectJavaScript(`sendCompraItem('${idTipoOperacao}', '${isRecarga}', '${idPraca}', '${idItemVitrine}', '${quantidadeMe}');
      true;
    `);
  }

  getMessageCarrinho = (message) => {
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
      <TouchableWithoutFeedback onPress={this.setValue}>
        <View style={{ flex: 1 }}>
          <HeaderApp
            initialRouter={true}
            title="Vitrine"
            navigation={this.props.navigation}
            iconCarrinho={{ quantidadeItens: 0, visible: false }}
          />
          <ImageBackground
            source={require("../../img/background-dg1.png")}
            style={{ width: "100%", height: "100%", flex: 1 }}
          >
            <KeyboardAvoidingView
              behavior="padding"
              enabled
              style={{
                flex: 1,
                flexDirection: "column"
              }}
            >
              {this.state.isLoad === true && <Loading />}
              {this.state.isLoad === false && (
                <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "space-between",
                    paddingBottom: 65
                  }}
                >
                  <View style={{ display: "none"}}>
                    <WebView
                      ref={r => (this.webView = r)}
                      bounces={false}
                      source={{ uri: this.props.urlVitrineNova}}
                      startInLoadingState={true}
                      renderLoading={() => <Loading />}
                      onMessage={event => {
                        this.getMessageCarrinho(JSON.parse(event.nativeEvent.data));
                      }}
                    />
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    {this.state.data &&
                      this.state.data.produtos &&
                      this.state.data.produtos.map((item, index) => (
                        <ButtonTipoVitrine
                          key={item.id}
                          data={item}
                          click={this.changeVitrine}
                        />
                      ))}
                  </View>
                  <View style={styles.backgroundOpacity}>
                    <View style={styles.areaConteudoVitrine}>
                      <View>
                        {this.state.tiposOperacao &&
                          this.state.tiposOperacao.length > 0 && (
                            <SeletorVitrine1
                              title="Escolha o tipo de operação"
                              itens={this.state.tiposOperacao}
                              onSetVitrine={this.onChangeTipoOperacao}
                              ref={r => (this.seletorTipoOperacao = r)}
                            />
                          )}
                      </View>
                      <View>
                        {this.state.pracas && this.state.pracas.length > 0 && (
                          <SeletorVitrine1
                            title="Escolha sua região"
                            itens={this.state.pracas}
                            onSetVitrine={this.onChangePraca}
                            ref={r => (this.seletorPraca = r)}
                          />
                        )}
                      </View>
                      <View>
                        {this.state.itensVitrine &&
                          this.state.itensVitrine.length > 0 && (
                            <View>
                              <SeletorVitrineMoeda
                                title="Escolha sua moeda"
                                itens={this.state.itensVitrine}
                                onSetVitrine={this.onChangeItemVitrine}
                                ref={r => (this.seletorItensVitrine = r)}
                              />
                              <View style={styles.areaInputValue}>
                                <View
                                  style={{ width: "45%", marginRight: "5%" }}
                                >
                                  <InputValue
                                    title="Quantia Desejada"
                                    keyboardType="money"
                                    value={this.props.valorMe.toString()}
                                    setTextValue={this.props.changeValorMe}
                                  />
                                </View>
                                <View
                                  style={{ width: "45%", marginLeft: "5%" }}
                                >
                                  <InputValue
                                    title="Total em reais"
                                    keyboardType="numeric"
                                    value={this.props.valorMn.toString()}
                                    setTextValue={this.props.changeValorMn}
                                  />
                                </View>
                              </View>

                              <View
                                style={[
                                  styles.areaDetalheValorMoeda,
                                  { flexDirection: "row", width: "100%" }
                                ]}
                              >
                                <Text style={styles.informativoValorTaxa}>
                                  {this.props.siglaMoeda} 1,00 = R${" "}
                                  {this.props.taxa}
                                </Text>
                              </View>
                              <Text style={styles.informativoIof}>
                                * Taxa calculada sem IOF
                              </Text>
                            </View>
                          )}
                      </View>
                    </View>
                  </View>
                </ScrollView>
              )}
            </KeyboardAvoidingView>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%"
              }}
            >
              <ButtonNext title={this.state.titleButtonCompra} nextClick={() => this.sendCompra3()} />
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
  return {
    valorMe: state.vitrine.valorMe,
    valorMn: state.vitrine.valorMn,
    taxa: state.vitrine.taxa,
    siglaMoeda: state.vitrine.siglaMoeda,
    idProduto: state.vitrine.idProduto,
    idTipoOperacao: state.vitrine.idTipoOperacao,
    idPraca: state.vitrine.idPraca,
    urlVitrineNova: state.url.urlVitrineNova,
    isRecarga: state.vitrine.isRecarga
  };
};

const VitrineCarrinhoConnect = connect(
  mapStateToProps,
  {
    changeValorMe,
    changeValorMn,
    changeItemVitrine,
    changeProduto,
    changeTipoOperacao,
    changePraca,
    setValorInicial
  }
)(VitrineCarrinho);
export default VitrineCarrinhoConnect;
