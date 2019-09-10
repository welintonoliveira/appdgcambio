import { StyleSheet, Platform } from "react-native";

import { colors, general } from "../../Styles";

const styles = StyleSheet.create({
  backgroundOpacity: general.backgroundOpacity,
  areaCarreganto: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  textoCarregamento: {
    color: colors.white,
    fontSize: 18
  },
  areaDescricaoPontoRetirada: {
    flexDirection: "column"
  },
  textoPontoRetirada: {
    color: colors.white,
    fontSize: 16
  },
  button: {
    backgroundColor: "rgba(40, 167, 69, 0.8)",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 5
  },
  container: {
    paddingTop: 20
  },

  // Controle customizado (PontoRetirada)
  areaTituloPraca: {
    height: 60,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  tituloPraca: {
    color: colors.greyDark,
    fontSize: 2
  },

  // Praça
  areaCabecario: {
    borderColor: colors.white,
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10
  },
  titlePraca: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },

  // PontoRetirada
  areaCorpo: {},
  areaPontoRetirada: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  areaPontoRetiradaTexto: {
    flex: 3,
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  pontoRetiradaTitle: {
    fontSize: 15,
    color: colors.warning
  },
  pontoRetiradaDescricao: {
    fontSize: 13,
    color: colors.white
  },
  pontoRetiradaImage: {
    width: 80,
    height: 80
  },
  buttonPontoRetirada: {
    backgroundColor: "rgba(71, 71, 71, 0.4)",
    marginLeft: 10,
    marginRight: 10
  },
  containerTitulo: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red"
  },
  iconLoja: {
    color: colors.warning
  },
  iconPin: {
    color: "black"
  },
  espacoIconPinRedondo: {
    marginLeft: 10,
    backgroundColor: colors.white,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.warning
  },
  buttonDetalhe: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    borderColor: colors.white,
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    height: Platform.OS === "ios" ? 60 : 40,
    marginBottom: 10
  },
  areaTitulo: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  titulo: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "normal"
  }
});

export default styles;
