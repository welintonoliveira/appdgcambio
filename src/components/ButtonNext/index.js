import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles';

const ButtonNext = ({title, nextClick}) =>(
	<TouchableOpacity onPress={()=> nextClick()}> 
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	</TouchableOpacity>
);

export default ButtonNext;