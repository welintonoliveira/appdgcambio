import React, { Component } from "react";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
import { Content, Container } from "native-base";
import { connect } from "react-redux";
import HeaderApp from "../../components/HeaderApp";
import UploadDocumento from "../../components/UploadDocumento";
import styles from "./styles";
import Loading from "../../components/Loading";

class DocumentosCliente extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      origem: props.navigation.getParam("Origem", "Carrinho"),
      showButtonContinue: false,
      isEnviando: false,
      paginaRedirecionamentoBotao: props.navigation.getParam(
        "PaginaRedirecionamentoBotao",
        "Carrinho"
      ),
      cliente: props.navigation.state.params.Cliente,
      data: {
        IDCliente: props.navigation.state.params.Cliente.ID,
        Documentos: [
          {
            NomeDocumento: "Documento Identificacao",
            NomeOriginal: "",
            Tamanho: 0,
            ContentType: "",
            Content: ""
          },
          {
            NomeDocumento: "Foto do Rosto",
            NomeOriginal: "",
            Tamanho: 0,
            ContentType: "",
            Content: ""
          },
          {
            NomeDocumento: "Comprovante Residencia",
            NomeOriginal: "",
            Tamanho: 0,
            ContentType: "",
            Content: ""
          }
        ]
      }
    };

    this.continuar = this.continuar.bind(this);
  }

  getFile(file, key) {
    try {
      let s = this.state;

      s.data.Documentos[key].NomeOriginal = file.Documento.NomeOriginal;
      s.data.Documentos[key].Tamanho = file.Documento.Tamanho;
      s.data.Documentos[key].ContentType = file.Documento.ContentType;
      s.data.Documentos[key].Content = file.Documento.Content;

      // Se todos os documentos tiverem adicionados exibe o botão de enviar
      s.showButtonContinue =
        s.data.Documentos[0].NomeOriginal !== "" &&
        s.data.Documentos[1].NomeOriginal !== "" &&
        s.data.Documentos[2].NomeOriginal !== ""
          ? true
          : false;

      this.setState(s);
    } catch (error) {
      alert(error + "A8B12");
    }
  }

  continuar() {
    try {
      // Valida se todos os documentos foram anexados
      if (
        this.state.data.Documentos[0].NomeOriginal === "" ||
        this.state.data.Documentos[1].NomeOriginal === "" ||
        this.state.data.Documentos[2].NomeOriginal === ""
      ) {
        alert(
          "É necessário anexar todos os documentos para poder seguir com a aprovaççao do cadastro."
        );
      } else {
        if (this.state.data.IDCliente <= 0) {
          alert(
            'Não foi possivel enviar seus anexos no momento entre em contato com o suporte informado o seguinte codigo: "MB89E"'
          );
        } else {
          // Habilita a exibição de envio do arquivo
          this.setState({ isEnviando: true });

          // Executa o envio dos documentos
          fetch(
            "https://hlg-dgc-ljc-web.primecase.com.br/Mobile/Services/DocumentoService.asmx/SendDocuments",
            {
              method: "POST",
              body: JSON.stringify(this.state.data)
            }
          )
            .then(response => {
              this.props.navigation.navigate("AlertaConfirmacao", {
                paginaRedirecionamentoBotao: this.state
                  .paginaRedirecionamentoBotao,
                titulo: "Cadastro efetuado",
                subtitulo: "Pronto, você já está pronto para operar!",
                nomeBotaoRedirecionamento: "Iniciar meu pedido",
                tipoAlerta: "Cadastro",
                cliente: this.state.cliente
              });
            })
            .catch(error => {
              alert(
                "Não foi possivel enviar seus arquivos, por favor entrar em contato com o suporte e enviar o erro exibido: " +
                  error
              );
            });
        }
      }
    } catch (error) {
      alert(error + "A4AA7");
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
          title="Lojas"
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
                <Text style={[styles.title, styles.text]}>
                  Anexo de documentos
                </Text>
                <View style={styles.areaSubTitle}>
                  <Text style={[styles.subTitle, styles.text]}>
                    Por favor, tire uma foto dos seguintes itens abaixo.
                  </Text>
                </View>
                <UploadDocumento
                  arquivo={{ key: 0, title: "RG ou CNH" }}
                  getFile={this.getFile.bind(this)}
                />
                <UploadDocumento
                  arquivo={{ key: 1, title: "Selfie" }}
                  getFile={this.getFile.bind(this)}
                  //typeCarmera={{ type: "front" }}
                />
                <UploadDocumento
                  arquivo={{ key: 2, title: "Comprovante Residência" }}
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

const mapStateToProps = state => {
  return {};
};

const DocumentosClienteConnect = connect(
  mapStateToProps,
  {}
)(DocumentosCliente);
export default DocumentosClienteConnect;
