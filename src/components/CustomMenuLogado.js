import React, { Component } from "react";
import {
  BackHandler,
  Alert,
  Text,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { DrawerItems } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import CookieManager from "react-native-cookies";
import { connect } from "react-redux";
import { authChanged, logoutApp } from "../actions/AuthActions";
import { urlCarrinhoChange } from "../actions/UrlsActions";
import { colors } from "../Styles";

export class CustomMenuLogado extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: 150,
            backgroundColor: colors.white,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={require("../img/logoApp.png")}
            style={{ height: 120, width: 120, borderRadius: 60 }}
          />
        </View>
        <ScrollView style={{ backgroundColor: colors.greyLight }}>
          <DrawerItems
            {...this.props}
            onItemPress={({ route, focused }) => {
              switch (route.routeName) {
                case "Home":
                  this.props.urlCarrinhoChange(this.props.urlCarrinhoDefault);
                  this.props.navigation.navigate("InitCarrinho");
                  break;
                case "MeusPedidos":
                  this.props.navigation.navigate("InitPedidos");
                  break;
                case "Lojas":
                  this.props.navigation.navigate("InitLojas");
                  break;
                //case 'Perfil':
                //  this.props.navigation.navigate('InitPerfil');
                //  break;
                default:
                  this.props.navigation.navigate("InitAjuda");
                  break;
              }
            }}
          />
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "Sair",
                "Você quer sair?",
                [
                  {
                    text: "Cancelar",
                    onPress: () => {
                      return null;
                    }
                  },
                  {
                    text: "Confirmar",
                    onPress: () => {
                      this.props.logoutApp(this.props.imeiAparelho);
                    }
                  }
                ],
                { cancelable: false }
              )
            }
          >
            <View style={{ marginLeft: 20, flex: 1, flexDirection: "row" }}>
              <Icon name="sign-out-alt" size={24} />
              <Text
                style={{
                  fontSize: 18,
                  color: colors.greyDark,
                  paddingLeft: 30,
                  fontWeight: "bold"
                }}
              >
                Sair
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            height: 70,
            backgroundColor: colors.white,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={require("../img/logo.png")}
            style={{ height: 30, width: 30, borderRadius: 15 }}
          />
           <Text>www.primecase.com.br</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    imeiAparelho: state.auth.imeiAparelho,
    urlCarrinhoDefault: state.url.urlCarrinhoDefault
  };
};

const CustomMenuLogadoConnect = connect(
  mapStateToProps,
  { authChanged, logoutApp, urlCarrinhoChange }
)(CustomMenuLogado);
export default CustomMenuLogadoConnect;
