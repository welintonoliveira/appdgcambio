import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';

const PedidoVazio = () =>(
	<ImageBackground
        source={require("../../../img/background-dg1.png")}
        style={{ width: "100%", height: "100%" }}
    >
       	<View style={styles.backgroundOpacity}>
			<View style={styles.container}>
				<Text style={styles.title}>Nenhum pedido encontrado.</Text>	
			</View>
		</View>
	</ImageBackground>
);

export default PedidoVazio;