import { StyleSheet } from "react-native";
import { colors } from "../../../Styles";

const styles = StyleSheet.create({
  areaModalCancelamento: {
    top: "10%",
    margin: 10,
    width: "95%",
    //height: "70%",
    height: 300,
    backgroundColor: colors.white,
    borderRadius: 3
  },
  tituloModalCancelamento: {
    fontSize: 18,
    color: colors.greyDark,
    textAlign: "center",
    fontWeight: "bold"
  },
  linhaModalCancelamento: {
    borderWidth: 0.3,
    borderColor: colors.greyLight,
    marginTop: 20,
    marginBottom: 20
  },
  inputMotivoCancelamento: {
    borderWidth: 1,
    borderColor: colors.greyLight,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 10,
    height: 40
  },
  areaTituloCancelamento: {
    flexDirection: "row",
    height: 60
  },
  areaButtonFecharModal: {
    width: "10%",
    paddingTop: "5%"
  },
  buttonFecharModal: {
    color: colors.greyDark,
    fontSize: 20,
    fontWeight: "bold",
    //alignSelf:'flex-end'
    textAlign: "center"
  },
  inputButtonCancelar: {
    backgroundColor: colors.danger,
    width: "60%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
