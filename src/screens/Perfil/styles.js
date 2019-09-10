import { StyleSheet } from 'react-native';
import { colors } from '../../Styles';

const styles = StyleSheet.create({
  	backgroundOpacity:{
		backgroundColor: colors.blackTransparent,
	    flex: 1
	},
	containerButtons:{
		
	},
	button:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		borderRadius: 5,
		height: 60,
		borderWidth: 1,
		borderColor: colors.white
	},
	title:{
		fontSize: 18,
		color: colors.white,
	}	
});

export default styles;