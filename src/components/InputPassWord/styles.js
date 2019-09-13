import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../Styles';

const styles = StyleSheet.create({
	container:{
		margin: 10,
	},
	areaCampo:{
		flexDirection:'row',
		height: fonts.inputHeight,
	},
	areaInput:{
		//flexDirection:'row',
		//backgroundColor: '#ff0000',
	},
	input:{
		color: colors.black,
		borderBottomColor: colors.black,
		borderBottomWidth: 1,
		width: '80%',
	},
	title:{
		color: colors.black,
		fontSize: fonts.input,
	},
	textoErro:{
		color:colors.red,
	},
	areaIconeSenha:{
		justifyContent: "center",
    	alignItems: "center",
		borderBottomColor: colors.black,
		borderBottomWidth: 1,
		width: '20%'		
	}
});

export default styles;