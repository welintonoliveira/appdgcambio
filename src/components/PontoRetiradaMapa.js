import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome5";

import { colors } from "../Styles";

export default class PontoRetiradaMapa extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.areaTitulo}>
          <Icon
            name="store-alt"
            size={20}
            color={colors.white}
            style={styles.iconLoja}
          />
          <Text style={styles.titulo}>
            {this.props.pontoRetirada.nome}
          </Text>
          <Text style={styles.descricao}>
            {this.props.pontoRetirada.descricaoFormatada}
          </Text>
        </View>
        <MapView
          style={styles.mapa}
          region={{
            latitude: parseFloat(this.props.pontoRetirada.latitude),
            longitude: parseFloat(this.props.pontoRetirada.longitude),
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          <Marker
            coordinate={{
              latitude: parseFloat(this.props.pontoRetirada.latitude),
              longitude: parseFloat(this.props.pontoRetirada.longitude)
            }}
            title={this.props.pontoRetirada.nome}
            description={this.props.pontoRetirada.descricao}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titulo: {
    fontSize: 20,
    color: colors.warning,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  descricao: {
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  areaLocalizacaoPontoRetirada: {
    flex: 3
  },
  mapa: {
    width: "100%",
    height: "100%"
  },
  areaTitulo: {},
  iconLoja: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 5,
    color: colors.warning
  }
});
