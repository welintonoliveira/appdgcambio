import { StyleSheet } from 'react-native';

import { colors } from '../../Styles';

const styles = StyleSheet.create({
	containerOffline: {
	    padding: 20,
	    flex: 1,
	    justifyContent: "center"
  	},
  	disconnectedIcon: {
	    alignContent: "center",
	    marginBottom: 20,
	    color: "#54b86d"
	},
  	tituloSemConexao: {
	    color: colors.white,
	    fontSize: 20,
	    textAlign: "center",
	    fontWeight: "bold"
	},
  	informativoSemConexao: {
	    color: colors.white,
	    fontSize: 15,
	    textAlign: "center",
	    marginBottom: 10
	},
	botaoTentarNovamente: {
	    marginTop: 10,
	    backgroundColor: "#54b86d",
	    textAlign: "center",
	    padding: 10,
	    borderRadius: 5
	},
	buttonText: { 
		color: colors.white, textAlign: "center" 
	},
});
