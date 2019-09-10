import React, { Component } from "react";
import { View, Text, ActivityIndicator, ImageBackground } from "react-native";

import styles from "./styles";
import { colors } from '../../Styles';

const Loading = () => (
  <ImageBackground
    source={require("../../img/background-dg1.png")}
    style={{ width: "100%", height: "100%" }}
  >
    <View style={styles.backgroundOpacity}>
      <View style={styles.areaCarreganto}>
        <ActivityIndicator size="large" color={colors.greyDark} />
      </View>
    </View>
  </ImageBackground>
);

export default Loading;