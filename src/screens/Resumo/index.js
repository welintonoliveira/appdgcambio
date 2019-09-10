import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Content, Container } from "native-base";

import HeaderApp from "../../components/HeaderApp";
import Loading from "../../components/Loading";
import { connect } from "react-redux";

import DetalhesItens from "./DetalhesItens";
import ResumoNavigation from "./ResumoNavigation";

import styles from "./styles";

export class Resumo extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <HeaderApp
          initialRouter={true}
          title="Resumo"
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
        />
        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
          <ImageBackground
            source={require("../../img/background-dg1.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={styles.backgroundOpacity}>
              <View style={styles.areaTitulo}>
                <Text style={styles.titulo}>Resumo</Text>
              </View>
              <ResumoNavigation />
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    quantidadeItensCarrinho: state.auth.quantidadeItensCarrinho
  };
};

const ResumoConnect = connect(
  mapStateToProps,
  {}
)(Resumo);
export default ResumoConnect;
