import React from 'react';
import { View, TextInput, Text } from 'react-native';

import TextInputMask from 'react-native-text-input-mask';

import styles from './styles';

const TextInputCadastro = ({keyName, value, title, errorMessage, setTextValue , keyboardType, isPass}) =>(
	<View style={styles.container}>
		<View style={styles.areaInput}>
			<Text style={styles.title}>{title}</Text>
			{
				keyName !== 'cpf' && 
				<TextInput  
					style={styles.input} 
					secureTextEntry={(isPass  === null || isPass === undefined) ? false : isPass}
					keyboardType={keyboardType ? keyboardType : 'default'}
					onChangeText={(text) => setTextValue(text)}
	        		value={value}
				/>	
			}
			{
				keyName === 'cpf' && 
				<TextInputMask
					style={styles.input}
					keyboardType="numeric" 
				  	refInput={ref => { this.input = ref }}
				  	onChangeText={(formatted, extracted) => {
				  		setTextValue(extracted);
				  	}}
				  	mask={"[000].[000].[000]-[00]"}
				/>
			}	
		</View>
		{
			!!errorMessage &&
			<Text style={styles.textoErro}>{errorMessage}</Text>
		}
	</View>
);

export default TextInputCadastro;
