import { StyleSheet } from 'react-native';

import { colors } from '../../../../Styles';

const styles = StyleSheet.create({
	container:{
		marginTop: 20,
		paddingLeft: 30,
		paddingRight: 30
	},
	button:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:colors.success,
		height: 50,
		borderRadius: 50
	},
	texto:{
		fontSize:20,
		color: colors.white,
	}

});

export default styles;