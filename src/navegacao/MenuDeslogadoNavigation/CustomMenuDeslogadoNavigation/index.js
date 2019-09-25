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
import LogoSvg from '../../../components/Logo/LogoSvg';

import { authChanged } from "../../../actions/AuthActions";
import { colors } from "../../../Styles";

class CustomMenuDeslogadoNavigation extends Component {
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
                  this.props.navigation.navigate("VitrineDeslogada");
                  break;
                case "MeusPedidos":
                  this.props.navigation.navigate("PreloadLogin");
                  break;
                case "Lojas":
                  this.props.navigation.navigate("PreloadLoja");
                  break;
                default:
                    this.props.navigation.navigate('PreloadAjuda');
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
            source={require("../../../img/logoApp.png")}
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

const CustomMenuDeslogadoNavigationConnect = connect(
  mapStateToProps,
  { authChanged }
)(CustomMenuDeslogadoNavigation);
export default CustomMenuDeslogadoNavigationConnect;