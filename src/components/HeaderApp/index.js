import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { Header, Body, Left, Right } from "native-base";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconIonicons from "react-native-vector-icons/Ionicons";
import LogoSvg from "../Logo/LogoSvg";

import { colors } from "../../Styles";
import styles from "./styles";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const HeaderApp = ({
  navigation,
  title,
  backClick,
  initialRouter = false,
  showLogo = true,
  showDrawer = true,
  showBackButton = true
}) => (
  <View>
    <MyStatusBar backgroundColor={colors.header} barStyle="dark-content" />
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "flex-start", paddingLeft: 20 }}>
        {initialRouter == false && showBackButton == true ? (
          <IconIonicons
            name="ios-arrow-back"
            style={styles.icon}
            size={24}
            onPress={() => backClick()}
          />
        ) : (
          <View />
        )}
      </View>
      {initialRouter == true && <View />}

      {showLogo == true ? (
        <View
          style={{
            width: 200,
            flex: 3
          }}
        >
          <View style={styles.espacoLogo}>
            <LogoSvg width="200" height="100" />
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      ) : (
        <View />
      )}
      {showDrawer == true ? (
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            paddingRight: 20
          }}
        >
          <IconFontAwesome5
            name="bars"
            style={styles.icon}
            size={24}
            onPress={() => {
              if (navigation !== undefined) {
                navigation.openDrawer();
              }
            }}
          />
        </View>
      ) : (
        <View />
      )}
    </View>
  </View>
);

export default HeaderApp;
