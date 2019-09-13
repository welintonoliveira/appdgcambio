import { StyleSheet } from 'react-native';
import { colors, general } from '../../Styles';

const styles = StyleSheet.create({
  	backgroundOpacity: general.backgroundOpacity,
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
		borderColor: colors.black
	},
	title:{
		fontSize: 18,
		color: colors.black,
	}	
});

export default styles;