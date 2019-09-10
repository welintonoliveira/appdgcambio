import React from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles';

const InputText = ({value, title, errorMessage, setTextValue , keyboardType, isPass}) =>(
	<View style={styles.container}>
		<View style={styles.areaInput}>
			<Text style={styles.title}>{title}</Text>
			<TextInput  
				style={styles.input} 
				secureTextEntry={(isPass  === null || isPass === undefined) ? false : isPass}
				keyboardType={keyboardType ? keyboardType : 'default'}
				onChangeText={(text) => setTextValue(text)}
        		value={value}
			/>	
		</View>
		{
			!!errorMessage &&
			<Text style={styles.textoErro}>{errorMessage}</Text>
		}
	</View>
);

export default InputText;
