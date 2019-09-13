import { StyleSheet } from "react-native";
import { colors, general } from "../../../Styles";

const styles = StyleSheet.create({
  backgroundOpacity: general.backgroundOpacity,
  areaInputEmailLogin: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  inputEmailLogin: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    height: 50
  },
  areaInputSenhaLogin: {
    flexDirection: "row",
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50
  },
  inputSenhaLogin: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    width: "80%"
  },
  areaIconeVisualizacaoSenha: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    width: "20%"
  },
  areaButtonEntrar: {
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30
  },
  buttonLogarTexto: {
    fontSize: 20,
    color: "#FFFFFF"
  },
  areaButtonEsqueceuSuaSenha: {
    marginTop: 5
  },
  buttonEsqueciMinhaSenha: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  buttonEsqueciMinhaSenhaTexto: {
    color: colors.black,
    fontSize: 16
  },
  espacoLogoTopo: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center"
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
