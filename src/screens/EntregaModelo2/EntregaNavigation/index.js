import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator, createAppContainer } from 'react-navigation';

import PontoRetirada from './PontoRetirada';
import Delivery from './Delivery';
import Sedex from './Sedex';

const EntregaNavigation = createMaterialBottomTabNavigator({
  PontoRetirada: PontoRetirada,
  Delivery: Delivery,
  Sedex: Sedex,
});

export default createAppContainer(EntregaNavigation);