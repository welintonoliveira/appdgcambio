import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../Styles';

const styles = StyleSheet.create({
	container:{
		margin: 10,
	},
	areaInput:{
		height:fonts.inputHeight,
		fontSize:fonts.input,
		borderBottomColor: colors.white,
		borderBottomWidth: 2,
	},
	input:{
		color: colors.white,
		height: 50,
		fontSize: 16,
		textAlign: 'right'
	},
	title:{
		color: colors.white,
		fontSize: 16,
	},
	textoErro:{
		color:colors.red,
	}
});

export default styles;