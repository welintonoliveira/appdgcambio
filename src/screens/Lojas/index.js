import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { Content, Container } from "native-base";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

import Accordion from "react-native-collapsible/Accordion";
import Icon from "react-native-vector-icons/FontAwesome5";

import HeaderApp from "../../components/HeaderApp";
import Loading from "../../components/Loading";
import { colors } from "../../Styles";
import styles from "./styles";
import AppCambioAPI from "../../AppCambioAPI";

export default class Lojas extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      activeSections: [],
      pracas: [],
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.carregarLojas();
  }

  carregarLojas = () => {
    try {
      if (this.state.pracas.length === 0) {
        AppCambioAPI.getPracas()
          .then(result => {
            setTimeout(() => {
              this.setState({
                pracas: result.data,
                isLoading: true
              });
            }, 2500);
          })
          .catch(error => {
            this.setState({
              isLoading: true,
              errorMessage: error + "A887A"
            });
          });
      }
    } catch (err) {
      alert(err + "AOO32");
    }
  };

  _renderHeader = section => {
    return (
      <View style={styles.buttonDetalhe}>
        <Text style={[styles.titlePraca, { color: colors.white }]}>
          {section.descricao}{" "}
          <Icon name="chevron-down" size={10} style={styles.iconLoja} />
        </Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.areaCorpo}>
        <FlatList
          data={section.pontosRetirada}
          keyExtractor={(item, index) => item.idPontoRetirada.toString()}
          renderItem={({ item }) => (
            <PontoRetirada
              navigation={this.props.navigation}
              pontoRetirada={item}
            />
          )}
        />
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <Container>
        <HeaderApp
          initialRouter={true}
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
            <View style={styles.backgroundOpacity}>
              <View style={styles.container}>
                {/* <ShimmerPlaceHolder  */}
                {/* //style={{ margin: 10, height: '90%', width: '90%' }}
                  style={styles.buttonDetalhe}
                  autoRun={true} 
                  visible={this.state.isLoading}> */}
                {this.state.errorMessage !== "" && (
                  <View>
                    <Text>Erro: {this.state.errorMessage}</Text>
                  </View>
                )}
                {this.state.errorMessage === "" && (
                  <Accordion
                    sections={this.state.pracas}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                  />
                )}
                {/* </ShimmerPlaceHolder>                     */}
              </View>
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

class PontoRetirada extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setPontoRetiradaDetalhe = this.setPontoRetiradaDetalhe.bind(this);
  }

  setPontoRetiradaDetalhe() {
    this.props.navigation.navigate("LojaDetalhe", {
      pontoRetirada: this.props.pontoRetirada
    });
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.buttonPontoRetirada}
        onPress={this.setPontoRetiradaDetalhe}
      >
        <View style={styles.areaPontoRetirada}>
          <View style={styles.espacoIconPinRedondo}>
            <Icon name="map-marked-alt" size={15} style={styles.iconPin} />
          </View>
          <View style={styles.areaPontoRetiradaTexto}>
            <Text style={styles.pontoRetiradaTitle}>
              {this.props.pontoRetirada.nome}
            </Text>
            <Text style={styles.pontoRetiradaDescricao}>
              {this.props.pontoRetirada.descricaoFormatada}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
