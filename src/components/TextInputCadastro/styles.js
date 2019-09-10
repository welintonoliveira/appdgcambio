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
	},
	title:{
		color: colors.white,
		fontSize: fonts.input,
	},
	textoErro:{
		color:colors.red,
	}

	/*container:{
		//borderBottomColor: colors.white,
		borderColor: colors.white,
		//borderBottomWidth: 1,
		borderWidth: 1,
		//height: fonts.inputHeight,
		marginLeft: 15,
		marginRight: 15,
	},
	input:{
		paddingTop: 10,
		borderColor:colors.white,
		borderWidth:1,
		//paddingLeft: fonts.inputPaddingLeft,
		color: colors.white,
		fontSize: fonts.input
	},
	title:{
		color: colors.white,
		fontSize: fonts.input,
		//fontWeight:'bold',	
	},
	textoErro:{
		color:colors.red,
	}*/
});

export default styles;