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
import { connect } from "react-redux";
import { logoutApp } from "../../../actions/AuthActions";
import { urlCarrinhoChange } from "../../../actions/UrlsActions";
import { colors } from "../../../Styles";
import AppCambioAPI from "../../../AppCambioAPI";
import LogoSvg from "../../../components/Logo/LogoSvg";

export class CustomMenuLogadoNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: colors.white,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 40,
            paddingBottom: 10
          }}
        >
          <LogoSvg width="900" height="200" viewbox={"0 0 612 792"} />
        </View>
        <ScrollView style={{ backgroundColor: colors.greyLight }}>
          <DrawerItems
            {...this.props}
            onItemPress={({ route, focused }) => {
              switch (route.routeName) {
                case "Home":
                  this.props.urlCarrinhoChange(this.props.urlCarrinhoDefault);
                  this.props.navigation.navigate("PreloadVitrineLogada");
                  break;
                case "MeusPedidos":
                  this.props.navigation.navigate("PreloadPedidoLogado");
                  break;
                case "Perfil":
                  this.props.navigation.navigate("PreloadPerfil");
                  break;
                case "Lojas":
                  this.props.navigation.navigate("PreloadLoja");
                  break;
                default:
                  this.props.navigation.navigate("PreloadAjuda");
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
                      // Desloga o cliente
                      this.props.logoutApp(this.props.tokenValidacao);
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
            source={require("../../../img/logoApp.png")}
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
    tokenValidacao: state.auth.tokenValidacao,
    urlCarrinhoDefault: state.url.urlCarrinhoDefault
  };
};

const CustomMenuLogadoNavigationConnect = connect(
  mapStateToProps,
  { logoutApp, urlCarrinhoChange }
)(CustomMenuLogadoNavigation);
export default CustomMenuLogadoNavigationConnect;
