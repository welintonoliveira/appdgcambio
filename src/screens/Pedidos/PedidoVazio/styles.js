import { StyleSheet } from 'react-native';

import {colors} from '../../../Styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
		justifyContent: 'center',
		alignItems:'center'
	},
	title:{
		color: colors.white,
		fontSize: 17
	},
	backgroundOpacity:{
		backgroundColor: colors.blackTransparent,
	    flex: 1
	}
});

export default styles;