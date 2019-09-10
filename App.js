import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Apresentacao from './src/init/Apresentacao';
import Home from './src/init/Home';

const Navegacao = createStackNavigator({
  Apresentacao: {
    screen: Apresentacao
  },
  Home: {
    screen: Home
  },
});

const App = createAppContainer(Navegacao);

export default App;