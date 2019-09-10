import { StyleSheet } from 'react-native';

import { colors } from '../../../Styles';

const styles = StyleSheet.create({
	areaButtonTipoVitrine:{
		flexDirection: 'row',
	},
	button:{
		height: 60,
		paddingTop: 20,
		paddingBottom: 20,
		borderWidth: 1,
		borderColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	texto:{
		fontSize: 16,
		textAlign: 'center'
	},
	buttonNotChecked:{
		backgroundColor: colors.black,
	},
	buttonChecked:{
		backgroundColor: colors.secondary,
	},
	textoNotChecked:{
		color: colors.white
	},
	textoChecked:{
		color: colors.black
	},



	button2:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: colors.white
	}
});

export default styles;