import { StyleSheet } from "react-native";

import { colors, general } from "../../Styles";

const styles = StyleSheet.create({
  backgroundOpacity: general.backgroundOpacity,
  titulo: {
    fontSize: 20,
    color: colors.warning,
    textAlign: "center"
  },
  descricao: {
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
    marginBottom: 10
  },
  areaLocalizacaoPontoRetirada: {
    flex: 3
  },
  mapa: {
    width: "100%",
    height: "100%"
  },
  areaTitulo: {},
  iconLoja: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 5,
    color: colors.warning
  }
});

export default styles;
