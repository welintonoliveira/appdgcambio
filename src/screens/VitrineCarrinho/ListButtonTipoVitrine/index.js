import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import { colors } from '../../../Styles';

class ListButtonTipoVitrine extends Component{

	render(){
		return(
			<FlatList
				horizontal={true}
			  	data={this.props.itens}
			  	keyExtractor={item => item.id.toString()}
			  	renderItem={({item}) => <Button id={item.id} count={this.props.itens.length}  click={this.props.onSetVitrine} title={item.descricao} check={item.ativo} />}
			/>
		);
	}
}

const Button = ({id, click, title, check, count}) => (
	//<TouchableOpacity onPress={() => click(id)} style={[styles.button, check === true ? styles.buttonChecked : styles.buttonNotChecked, { flex: count }]}>
	<TouchableOpacity onPress={() => click(id)} style={styles.button2}>
		<Text style={[styles.texto, check === true ? styles.textoChecked : styles.textoNotChecked]}>10</Text>
	</TouchableOpacity>
);

export default ListButtonTipoVitrine;