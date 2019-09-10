import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { Content, Container } from "native-base";
import MapView, { Marker } from "react-native-maps";

import HeaderApp from "../../components/HeaderApp";
import Loading from "../../components/Loading";
import PontoRetiradaMapa from "../../components/PontoRetiradaMapa";
import styles from "./styles";

export default class LojaDetalhe extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pontoRetirada: props.navigation.getParam("pontoRetirada", null),
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
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
          {this.state.isLoading === true && <Loading />}
          {this.state.isLoading === false && (
            <ImageBackground
              source={require("../../img/background-dg1.png")}
              style={{ width: "100%", height: "100%" }}
            >
              <View style={styles.backgroundOpacity}>
                <View style={styles.areaLocalizacaoPontoRetirada}>
                  <PontoRetiradaMapa pontoRetirada={this.state.pontoRetirada} />
                </View>
              </View>
            </ImageBackground>
          )}
        </Content>
      </Container>
    );
  }
}
