import React, { Component } from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";

import { colors } from "../../Styles";
import CarrinhoLogadoNavigation from "../CarrinhoLogadoNavigation";
import LojaNavigation from "../LojaNavigation";
import ContatoNavigation from "../ContatoNavigation";
import PedidoLogadoNavigation from "../PedidoLogadoNavigation";
import CustomMenuLogadoNavigation from "./CustomMenuLogadoNavigation";
import PerfilNavigation from '../PerfilNavigation';

const Navigation = initialRoute => {
  console.log("initialRoute", initialRoute);
  return createAppContainer(
    createDrawerNavigator(
      {
        Home: {
          screen: CarrinhoLogadoNavigation,
          navigationOptions: {
            title: "HOME",
            drawerIcon: ({ tintColor }) => (
              <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
            )
          }
        },
        MeusPedidos: {
          screen: PedidoLogadoNavigation,
          navigationOptions: {
            title: "PEDIDOS",
            drawerIcon: ({ tintColor }) => (
              <Icon
                name="clipboard-list"
                style={{ fontSize: 24, color: tintColor }}
              />
            )
          }
        },
        Perfil: {
          screen: PerfilNavigation,
          navigationOptions: {
            title: "PERFIL",
            drawerIcon: ({ tintColor }) => (
              <Icon name="user-edit" style={{ fontSize: 24, color: tintColor }} />
            )
          }
        },
        Lojas: {
          screen: LojaNavigation,
          navigationOptions: {
            title: "LOJAS",
            drawerIcon: ({ tintColor }) => (
              <Icon
                name="store-alt"
                style={{ fontSize: 24, color: tintColor }}
              />
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
        initialRouteName: initialRoute === "Carrinho" ? "Home" : "MeusPedidos",
        contentComponent: CustomMenuLogadoNavigation,
        contentOptions: {
          activeTintColor: colors.black,
          activeBackgroundColor: colors.primary
        }
      }
    )
  );
};

class MenuLogadoNavigation extends Component {
  render() {
    const NavigationCustom = Navigation(this.props.paginaInicial);
    return <NavigationCustom />;
  }
}

const mapStateToProps = state => {
  return {
    paginaInicial: state.auth.paginaInicial
  };
};

const MenuLogadoNavigationConnect = connect(
  mapStateToProps,
  {}
)(MenuLogadoNavigation);
export default MenuLogadoNavigationConnect;
