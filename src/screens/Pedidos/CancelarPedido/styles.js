import { StyleSheet } from "react-native";
import { colors, general } from "../../../Styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    padding: 10
  },
  tituloCancelamento: {
    fontSize: 18,
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20
  },
  inputMotivoCancelamento: {
    backgroundColor: colors.white,
    borderRadius: 50,
    paddingLeft: 30,
    height: 50
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
  iconWarning: {
    color: colors.warning,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 10
  },
  espacoAlerta: {
    // backgroundColor: colors.warning,
    // borderWidth: 2,
    // borderColor: colors.warning,
    // borderRadius: 10,
    padding: 10,
    marginBottom: 20
  }
});

export default styles;
