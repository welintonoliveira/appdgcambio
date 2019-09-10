import React, { Component } from "react";
import {
  View,
  BackHandler,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground
} from "react-native";
import { Content, Container } from "native-base";

import HeaderApp from "../../components/HeaderApp";
import UploadDocumento from "../../components/UploadDocumento";
import Loading from "../../components/Loading";
import styles from "./styles";

export default class ComprovantePagamento extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      showButtonContinue: false,
      isEnviando: false,
      isNewPedido: props.navigation.getParam("IsNovoPedido", false),
      paginaRedirecionamentoBotao: props.navigation.getParam(
        "PaginaRedirecionamentoBotao",
        "MeusPedidos"
      ),
      data: {
        IDPedido: props.navigation.getParam("IDPedido", 0),
        DescricaoFormaPagamento: props.navigation.getParam(
          "DescricaoFormaPagamento",
          ""
        ),
        IsOperacaoVenda: props.navigation.getParam("IsOperacaoVenda", false),
        Documento: {
          NomeDocumento: "Comprovante de Pagamento",
          NomeOriginal: "",
          Tamanho: 0,
          ContentType: "",
          Content: ""
        }
      }
    };

    this.continuar = this.continuar.bind(this);
  }

  getFile(file, key) {
    try {
      let s = this.state;

      s.data.Documento.NomeOriginal = file.Documento.NomeOriginal;
      s.data.Documento.Tamanho = file.Documento.Tamanho;
      s.data.Documento.ContentType = file.Documento.ContentType;
      s.data.Documento.Content = file.Documento.Content;

      // Se o comprovate estiver anexado exibe o botão para seguir o fluxo
      s.showButtonContinue =
        s.data.Documento.NomeOriginal !== "" ? true : false;

      this.setState(s);
    } catch (error) {
      this.alert(error + "AECFB");
    }
  }

  continuar() {
    try {
      // Valida se todos os documentos foram anexados
      if (
        this.state.data.Documento.NomeOriginal === "" ||
        this.state.data.Documento.Tamanho === 0
      ) {
        alert(
          "É necessário anexar todos os documentos para poder seguir com a aprovação do cadastro."
        );
      } else {
        if (this.state.data.IDPedido <= 0) {
          alert(
            'Não foi possivel enviar seus anexos no momento entre em contato com o suporte informado o seguinte codigo: "MB89E"'
          );
        } else {
          // Habilita a exibição de envio do arquivo
          this.setState({ isEnviando: true });

          fetch(
            "https://hlg-dgc-ljc-web.primecase.com.br/Mobile/Services/DocumentoService.asmx/SendComprovantePagamento",
            {
              method: "POST",
              body: JSON.stringify(this.state.data)
            }
          )
            .then(response => {
              console.log("enviar anexo");
              // Envia as informações para a proxima pagina
              this.props.navigation.navigate("AlertaConfirmacao", {
                paginaRedirecionamentoBotao: this.state
                  .paginaRedirecionamentoBotao,
                titulo: "Comprovante de Pagamento",
                subtitulo:
                  'Comprovante adicionado com sucesso, acompanhe o status do seu pedido pela tela "Pedidos"!',
                nomeBotaoRedirecionamento: "Voltar aos Pedidos",
                tipoAlerta: "ComprovantePagamento"
              });
            })
            .catch(error => {
              console.log("error", error);
              alert(
                "Não foi possivel enviar seus arquivos, por favor entrar em contato com o suporte e enviar o erro exibido: " +
                  error
              );
            });
        }
      }
    } catch (error) {
      alert(error + "AA9DB");
    }
  }

  back = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Container>
        <HeaderApp
          backClick={this.back}
          title="Comprovante de Pagamento"
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
        />
        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
          <ImageBackground
            source={require("../../img/background-dg1.png")}
            style={{ width: "100%", height: "100%" }}
          >
            {this.state.isEnviando === true && <Loading />}
            {this.state.isEnviando === false && (
              <View style={styles.backgroundOpacity}>
                {this.state.isNewPedido === true && (
                  <View>
                    <Text style={[styles.title, styles.text]}>
                      Pedido Realizado com Sucesso!!!
                    </Text>
                    <View style={styles.areaSubTitle}>
                      <View style={styles.espacoFormaPagamento}>
                        <Text style={styles.tituloFormaPagamento}>
                          {this.state.data.isOperacaoVenda === true
                            ? "Forma de Recebimento"
                            : "Forma de Pagamento"}
                        </Text>
                        <Text style={styles.textFormaPagamento}>
                          {this.state.data.DescricaoFormaPagamento}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
                {this.state.isNewPedido === false && (
                  <View>
                    <Text style={[styles.title, styles.text]}>
                      Anexar Comprovante de Pagamento
                    </Text>
                    <View style={styles.areaSubTitle}>
                      <Text style={[styles.subTitle, styles.text]}>
                        Por favor envie o anexo do comprovante para que possamos
                        concluir a analise de seu pedido.
                      </Text>
                    </View>
                  </View>
                )}

                <View style={styles.areaSubTitle}>
                  <Text style={[styles.subTitle, styles.text]}>
                    Por favor agora anexe seu comprovante.
                  </Text>
                </View>

                <UploadDocumento
                  arquivo={{ key: 0, title: "Comprovante de Pagamento" }}
                  getFile={this.getFile.bind(this)}
                />
                {this.state.showButtonContinue === true && (
                  <TouchableOpacity
                    onPress={this.continuar}
                    style={styles.button}
                  >
                    <Text style={styles.textButton}>Enviar</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
