import { StyleSheet } from "react-native";

import { colors } from "../../../Styles";

const styles = StyleSheet.create({
   areaButtonTipoVitrine: {
    flexDirection: "row"
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    color: colors.white
  },
  buttonNotChecked: {
    backgroundColor: colors.black
  },
  buttonChecked: {
    backgroundColor: "transparent"
  },
  button2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 60
  }
});

export default styles;
