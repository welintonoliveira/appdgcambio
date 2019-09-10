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
		borderBottomWidth: 1,
	},
	input:{
		color: colors.white,
		height: 50
	},
	title:{
		color: colors.white,
		fontSize: fonts.input,
	},
	textoErro:{
		color:colors.red,
	}
});

export default styles;