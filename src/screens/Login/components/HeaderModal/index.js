import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import styles from "./styles";

const HeaderModal = ({ title, closeModal }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
    <TouchableOpacity onPress={() => closeModal()} style={styles.button}>
      {/* <Icon name="closecircle"  style={styles.icon} /> */}
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  </View>
);

export default HeaderModal;
