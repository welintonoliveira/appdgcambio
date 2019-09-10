import { StyleSheet } from "react-native";
import { colors } from '../../Styles';

const styles = StyleSheet.create({
  containerOffline: {
    backgroundColor: colors.greyLight,
    padding: 20,
    flex: 1,
    justifyContent: "center"
  },
  danger:{
   color: colors.danger
  },
  disconnectedIcon: {
    alignContent: "center",
    marginBottom: 20,
    color: "#54b86d"
  },
  tituloSemConexao: {
    color: colors.greyDark,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold"
  },
  informativoSemConexao: {
    color: colors.greyDark,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 10
  },
  buttonText: { 
    color: colors.white, 
    textAlign: "center" 
  },
  botaoTentarNovamente: {
    marginTop: 10,
    backgroundColor: "#54b86d",
    textAlign: "center",
    padding: 10,
    borderRadius: 5
  }
});

export default styles;