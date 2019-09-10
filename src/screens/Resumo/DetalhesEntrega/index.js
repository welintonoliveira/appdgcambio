import React, { Component } from "react";
import { View, Text } from "react-native";
import { Content, Container } from "native-base";

import HeaderApp from "../../../components/HeaderApp";
import Loading from "../../../components/Loading";

import styles from './styles';

export default class DetalhesEntrega extends Component {
  static navigationOptions = {
    Header: null,
    title: "Detalhe Entrega"
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Detalhes Entrega</Text>
      </View>
    );
  }
}
