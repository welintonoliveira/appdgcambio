import { StyleSheet } from "react-native";

import { colors, general } from "../../Styles";

const styles = StyleSheet.create({
  backgroundOpacity:  general.backgroundOpacity,
  areaLogin: {
    marginTop: 20,
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  buttonClienteExistente: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.black,
    height: 60
  },
  itenInline: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: colors.black,
    marginRight: 5,
    fontSize: 15
  },
  buttonLoginTexto: {
    color: colors.black,
    fontSize: 17
  },
  buttonNovoCliente: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.black,
    height: 60,
    marginTop: 20
  },
  espacoLogoTopo: {
    aspectRatio: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20
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
  },
});

export default styles;
