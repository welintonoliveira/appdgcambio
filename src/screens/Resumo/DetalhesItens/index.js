import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Content, Container, Row } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

import HeaderApp from "../../../components/HeaderApp";
import Loading from "../../../components/Loading";
import styles from "./styles";

export default class DetalhesItens extends Component {
  static navigationOptions = {
    Header: null,
    title: "Detalhe Pedido"
  };

  constructor(props) {
    super(props);
    this.state = {
      valorFrete: 0,
      valorRecolheIOF: 0,
      valorTotal: 0,
      tamanho: 1,
      itens: [
        {
          idMoeda: 1,
          moedaDescricao: "Dólar",
          quantidade: 300,
          taxa: 8.0,
          tipo: "Espécie",
          valorMoedaNacional: 2400.0,
          vet: 8.088
        }
        // {
        //   idMoeda: 1,
        //   moedaDescricao: "Dólar",
        //   quantidade: 300,
        //   taxa: 8.0,
        //   tipo: "Espécie",
        //   valorMoedaNacional: 2400.0,
        //   vet: 8.088
        // },
        // {
        //   idMoeda: 1,
        //   moedaDescricao: "Dólar",
        //   quantidade: 300,
        //   taxa: 8.0,
        //   tipo: "Espécie",
        //   valorMoedaNacional: 2400.0,
        //   vet: 8.088
        // },
        // {
        //   idMoeda: 1,
        //   moedaDescricao: "Dólar",
        //   quantidade: 300,
        //   taxa: 8.0,
        //   tipo: "Espécie",
        //   valorMoedaNacional: 2400.0,
        //   vet: 8.088
        // },
        // {
        //   idMoeda: 1,
        //   moedaDescricao: "Dólar",
        //   quantidade: 300,
        //   taxa: 8.0,
        //   tipo: "Espécie",
        //   valorMoedaNacional: 2400.0,
        //   vet: 8.088
        // },
        // {
        //   idMoeda: 1,
        //   moedaDescricao: "Dólar",
        //   quantidade: 300,
        //   taxa: 8.0,
        //   tipo: "Espécie",
        //   valorMoedaNacional: 2400.0,
        //   vet: 8.088
        // },
        // {
        //   idMoeda: 1,
        //   moedaDescricao: "Dólar",
        //   quantidade: 300,
        //   taxa: 8.0,
        //   tipo: "Espécie",
        //   valorMoedaNacional: 2400.0,
        //   vet: 8.088
        // },
        // {
        //   idMoeda: 1,
        //   moedaDescricao: "Dólar",
        //   quantidade: 300,
        //   taxa: 8.0,
        //   tipo: "Espécie",
        //   valorMoedaNacional: 2400.0,
        //   vet: 8.088
        // },
        // {
        //   idMoeda: 1,
        //   moedaDescricao: "Dólar",
        //   quantidade: 300,
        //   taxa: 8.0,
        //   tipo: "Espécie",
        //   valorMoedaNacional: 2400.0,
        //   vet: 8.088
        // },
        // {
        //   idMoeda: 1,
        //   moedaDescricao: "Dólar",
        //   quantidade: 300,
        //   taxa: 8.0,
        //   tipo: "Espécie",
        //   valorMoedaNacional: 2400.0,
        //   vet: 8.088
        // },
        // {
        //   idMoeda: 1,
        //   moedaDescricao: "Dólar",
        //   quantidade: 300,
        //   taxa: 8.0,
        //   tipo: "Espécie",
        //   valorMoedaNacional: 2400.0,
        //   vet: 8.088
        // }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1
          }}
        >
          <FlatList
            data={this.state.itens}
            keyExtractor={(item, index) => item.idMoeda.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  paddingRight: 20,
                  paddingLeft: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderBottomColor: colors.white,
                  borderBottomWidth: 1
                }}
              >
                {/* Esquerda */}
                <View style={styles.espacoEsquerda}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.textoQuantidade}>
                      {item.quantidade}x
                    </Text>
                    <Text style={styles.textoDescricaoMoeda}>
                      {item.moedaDescricao}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.buttonRemover}>
                    <View
                      style={{
                        flex: this.state.tamanho,
                        flexDirection: "row",
                        alignItems: "center"
                      }}
                    >
                      <Icon
                        name="times-circle"
                        size={10}
                        style={styles.iconRemover}
                      />
                      <Text style={styles.textButtonRemover}>Remover</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* Direita */}
                <View style={styles.espacoDireita}>
                  <Text style={styles.valorMoedaNacional}>
                    R$ {item.valorMoedaNacional}
                  </Text>
                  <Text style={styles.valorMoedaNacional}>
                    - Taxa {item.taxa}
                  </Text>
                  <Text style={styles.valorVet}>VET: R${item.vet}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: "orange" }}>
          <Text>Frete: {this.state.valorFrete}</Text>
          <Text>IOF: {this.state.valorRecolheIOF}</Text>
          <Text>Valor Total: {this.state.valorTotal}</Text>
        </View>
      </View>
    );
  }
}
