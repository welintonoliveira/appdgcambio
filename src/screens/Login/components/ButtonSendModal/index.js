import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const ButtonSendModal = ({title, sendClick}) => (
	<View style={styles.container}>
		<TouchableOpacity onPress={()=> sendClick()} style={styles.button}>
			<Text style={styles.texto}>{title}</Text>
		</TouchableOpacity>
	</View>
);

export default ButtonSendModal;