import React, { Component } from "react";
import { Content, Container } from "native-base";
import { View, Text, ImageBackground } from "react-native";

import HeaderApp from "../../components/HeaderApp";

import styles from "./styles";
export class CarteiraVazia extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <HeaderApp
          initialRouter={true}
          title="Pedidos"
          navigation={this.props.navigation}
          showDrawer={true}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
        />
        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
          <ImageBackground
            source={require("../../img/background-dg1.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={styles.backgroundOpacity}>
              <View style={styles.container}>
                <Text style={styles.title}>
                  Nenhum item adicionado à Carteira.
                </Text>
              </View>
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

export default CarteiraVazia;
