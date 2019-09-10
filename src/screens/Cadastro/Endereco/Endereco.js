import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Content, Container } from "native-base";

import styles from "./styles";
import { general } from "../../../Styles";
import HeaderApp from "../../../components/HeaderApp";
import ButtonNext from "../../../components/ButtonNext";
import TextInputCadastro from "../../../components/TextInputCadastro";

export default class Endereco extends Component {
  state = {};

  static navigationOptions = {
    header: null
  };

  next = () => {
    alert("Endereço >> Upload Documento");
  };

  back = () => {
    this.props.navigation.goBack();
    //this.props.navigation.navigate('DadosCliente');
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
          <ImageBackground
            source={require("../../../img/background-dg1.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={styles.backgroundOpacity}>
              <ScrollView>
                <TextInputCadastro
                  keyName="cep"
                  type="numeric"
                  setTextValue={this.setTextValue}
                  value={this.state.cep}
                  title="CEP *"
                  errorMessage={this.state.errorMessageCep}
                />
                <TextInputCadastro
                  keyName="tipoEndereco"
                  setTextValue={this.setTextValue}
                  value={this.state.tipoEndereco}
                  title="Tipo do Endereço *"
                  errorMessage={this.state.errorMessageTipoEndereco}
                />
                <TextInputCadastro
                  keyName="cidade"
                  setTextValue={this.setTextValue}
                  value={this.state.cidade}
                  title="Cidade *"
                  errorMessage={this.state.errorMessageCidade}
                />
                <TextInputCadastro
                  keyName="uf"
                  setTextValue={this.setTextValue}
                  value={this.state.cidade}
                  title="UF *"
                  errorMessage={this.state.errorMessageUF}
                />
                <TextInputCadastro
                  keyName="bairro"
                  setTextValue={this.setTextValue}
                  value={this.state.bairro}
                  title="Bairro *"
                  errorMessage={this.state.errorMessageBairro}
                />
                <TextInputCadastro
                  keyName="logradouro"
                  setTextValue={this.setTextValue}
                  value={this.state.bairro}
                  title="Logradouro *"
                  errorMessage={this.state.errorMessageLogradouro}
                />
                <TextInputCadastro
                  keyName="numero"
                  type="numeric"
                  setTextValue={this.setTextValue}
                  value={this.state.numero}
                  title="Número *"
                  errorMessage={this.state.errorMessageNumero}
                />
                <TextInputCadastro
                  keyName="complemento"
                  setTextValue={this.setTextValue}
                  value={this.state.complemento}
                  title="Complemento"
                  errorMessage={this.state.errorMessageComplemento}
                />
              </ScrollView>
              <ButtonNext title="CONTINUAR" nextClick={this.next} />
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
