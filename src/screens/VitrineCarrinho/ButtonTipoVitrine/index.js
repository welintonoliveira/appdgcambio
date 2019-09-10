import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { colors } from '../../../Styles';

const ButtonTipoVitrine = ({data, click}) => (
	<TouchableOpacity key={data.id} onPress={() => click(data.id)} style={[styles.button2, data.ativo === "True" ? styles.buttonChecked : styles.buttonNotChecked]}>
		<Text style={styles.texto}>{data.nome}</Text>
	</TouchableOpacity>
);

export default ButtonTipoVitrine;