import { StyleSheet } from "react-native";

import { colors, general } from "../../Styles";

const styles = StyleSheet.create({
  backgroundOpacity: {
    backgroundColor: "rgba(172,33,38, 0.7)",
    flex: 1,
    paddingTop: 40
  },
  areaLogin: {
    marginTop: 20,
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  buttonClienteExistente: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.white,
    height: 60
  },
  itenInline: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: "#fff",
    marginRight: 5,
    fontSize: 15
  },
  buttonLoginTexto: {
    color: "#fff",
    fontSize: 17
  },
  buttonNovoCliente: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.white,
    // backgroundColor: colors.secondary,
    height: 60,
    marginTop: 20
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
  },
});

export default styles;
