import { StyleSheet } from "react-native";
import { colors, general } from "../../../Styles";

const styles = StyleSheet.create({
  backgroundOpacity: general.backgroundOpacity,
  areaInputEmailLogin: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  inputEmailLogin: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    height: 50,
  },
  espacoLogoTopo: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  espacoLogoRodape: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  container: {
    flex: 5
  }
});

export default styles;
