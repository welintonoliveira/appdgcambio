import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";

import DetalhesItens from "../DetalhesItens";
import DetalhesEntrega from "../DetalhesEntrega";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const Tabavigation = createMaterialTopTabNavigator({
  DetalhesItens: DetalhesItens,
  DetalhesEntrega: DetalhesEntrega
});

const ResumoNavigation = createAppContainer(Tabavigation);

export default ResumoNavigation;
// export default class ResumoNavigation extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }
