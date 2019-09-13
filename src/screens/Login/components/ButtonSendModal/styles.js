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
		borderWidth: 1,
		borderColor: colors.black,
		height: 50,
		borderRadius: 5
	},
	texto:{
		fontSize:20,
		color: colors.black,
	}

});

export default styles;