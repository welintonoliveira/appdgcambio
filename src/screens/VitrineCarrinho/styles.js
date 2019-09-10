import { StyleSheet } from "react-native";

import { colors, general } from "../../Styles";

const styles = StyleSheet.create({
  backgroundOpacity: general.backgroundOpacity,
  areaConteudoVitrine: {
    padding: 10
  },
  areaInputValue: {
    flexDirection: "row"
  },
  areaDetalheValorMoeda: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  informativoIof: {
    fontSize: 10,
    color: colors.white,
    textAlign: "center",
    marginTop: 10
  },
  informativoValorTaxa: {
    color: colors.white
  }
});

export default styles;
