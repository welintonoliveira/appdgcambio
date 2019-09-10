import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

import styles from './styles';

const SemConexao = (refresh) => (
 	<View style={styles.containerOffline}>
		<View style={{ justiftyContent: "center", alignItems: "center" }}>
			<Icon
			name="wifi"
			size={30}
			color={styles.danger}
			style={styles.disconnectedIcon}
			/>
		</View>

		<Text style={styles.tituloSemConexao}>Sem conexão</Text>
		<Text style={styles.informativoSemConexao}>
		Verifique a sua conexão com a internet.
		</Text>
		<TouchableOpacity
		onPress={this.refresh}
		style={styles.botaoTentarNovamente}
		>
			<Text style={styles.buttonText}>Tentar novamente</Text>
		</TouchableOpacity>
	</View>
);

export default SemConexao;