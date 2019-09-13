import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../Styles';

const styles = StyleSheet.create({
	container:{
		margin: 10,
	},
	areaInput:{
		height:fonts.inputHeight,
		fontSize:fonts.input,
		borderBottomColor: colors.black,
		borderBottomWidth: 1,
	},
	input:{
		color: colors.black,
		height: 50
	},
	title:{
		color: colors.black,
		fontSize: fonts.input,
	},
	textoErro:{
		color:colors.red,
	}
});

export default styles;