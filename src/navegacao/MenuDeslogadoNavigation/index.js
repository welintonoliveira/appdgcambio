import React from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

import { colors } from "../../Styles";
import CarrinhoDeslogadoNavigation from "../CarrinhoDeslogadoNavigation";
import LojaNavigation from "../LojaNavigation";
import ContatoNavigation from "../ContatoNavigation";
import LoginNavigation from "../LoginNavigation";
import CustomMenuDeslogadoNavigation from "./CustomMenuDeslogadoNavigation";

const Navigation = createDrawerNavigator(
  {
    Home: {
      screen: CarrinhoDeslogadoNavigation,
      navigationOptions: {
        title: "HOME",
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
      }
    },
    MeusPedidos: {
      screen: LoginNavigation,
      navigationOptions: {
        title: "LOGIN",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="sign-out-alt"
            style={{ fontSize: 24, color: tintColor }}
          />
        )
      }
    },
    Lojas: {
      screen: LojaNavigation,
      navigationOptions: {
        title: "LOJAS",
        drawerIcon: ({ tintColor }) => (
          <Icon name="store-alt" style={{ fontSize: 24, color: tintColor }} />
        )
      }
    },
    Ajuda: {
      screen: ContatoNavigation,
      navigationOptions: {
        title: "AJUDA",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="question-circle"
            style={{ fontSize: 24, color: tintColor }}
          />
        )
      }
    }
  },
  {
    contentComponent: CustomMenuDeslogadoNavigation,
    contentOptions: {
      activeTintColor: colors.white,
      activeBackgroundColor: colors.primary
    }
  }
);

const AppContainer = createAppContainer(Navigation);

const MenuDeslogadoLogadoNavigation = () => <AppContainer />;

export default MenuDeslogadoLogadoNavigation;
