import { StyleSheet } from "react-native";

import { colors } from "../../Styles";

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.secondary,
    height: 55,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18
  }
});

export default styles;
