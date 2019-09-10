import { StyleSheet } from "react-native";
import { colors } from "../../../Styles";

const styles = StyleSheet.create({
  backgroundOpacity: {
    backgroundColor: "rgba(172,33,38, 0.7)",
    flex: 1,
    paddingTop: 10
  },
  areaInputEmailLogin: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  inputEmailLogin: {
    backgroundColor: colors.white,
    borderRadius: 50,
    paddingLeft: 30,
    height: 50
  },
  espacoLogoTopo: {
    aspectRatio: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20
  },
  espacoLogoRodape: {
    // aspectRatio: 1,
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
