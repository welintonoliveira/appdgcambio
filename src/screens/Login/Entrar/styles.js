import { StyleSheet } from "react-native";
import { colors } from "../../../Styles";

const styles = StyleSheet.create({
  backgroundOpacity: {
    backgroundColor: "rgba(172,33,38, 0.7)",
    paddingTop: 10,
    flex: 1
  },

  areaInputEmailLogin: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  inputEmailLogin: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingLeft: 30,
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
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    paddingLeft: 30,
    width: "80%"
  },
  areaIconeVisualizacaoSenha: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
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
    color: "#FFFFFF",
    fontSize: 16
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
