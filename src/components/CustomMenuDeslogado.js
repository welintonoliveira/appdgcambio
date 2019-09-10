import React, { Component } from "react";
import {
  BackHandler,
  ImageBackground,
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
import { authChanged } from "../actions/AuthActions";

import { colors } from "../Styles";

export class CustomMenuDeslogado extends Component {
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
            justifyContent: "center"
          }}
        >
          {/* <ImageBackground
            source={{
              uri: require("../img/background-dg1.png")
            }}
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              resizeMode: "stretch",
              paddingTop: 40,
              paddingBottom: 20
            }}
          > */}
          <View style={styles.overlay} />
          <Image
            source={require("../img/logo.png")}
            style={{ height: 120, width: 120, zIndex: 20 }}
          />
          {/* </ImageBackground> */}
        </View>
        <ScrollView style={{ backgroundColor: colors.greyLight }}>
          <DrawerItems
            {...this.props}
            onItemPress={({ route, focused }) => {
              switch (route.routeName) {
                case "Home":
                  this.props.navigation.navigate("InitVitrineDeslogada");
                  break;
                case "MeusPedidos":
                  this.props.navigation.navigate("InitLoginPedido");
                  break;
                case "Lojas":
                  this.props.navigation.navigate("InitLojas");
                  break;
                default:
                  this.props.navigation.navigate("InitAjuda");
                  break;
              }
            }}
          />
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
            source={require("../img/logoApp.png")}
            style={{ height: 30, width: 30, borderRadius: 15 }}
          />
          <Text>www.primecase.com.br</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)"
  }
});

const mapStateToProps = state => {
  return {
    urlCarrinho: state.url.urlCarrinho
  };
};

const CustomMenuDeslogadoConnect = connect(
  mapStateToProps,
  { authChanged }
)(CustomMenuDeslogado);
export default CustomMenuDeslogadoConnect;
