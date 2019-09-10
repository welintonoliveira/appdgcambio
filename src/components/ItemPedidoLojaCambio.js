import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

import {colors} from "../Styles";

export default class ItemPedidoLojaCambio extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<View style={styles.area}>
				<View style={styles.areaTituloItemPedido}>
					<Icon name="list" size={17} style={styles.iconTitulo} />
					<Text style={styles.titulo}>Itens do pedido</Text>
				</View>
				<View style={styles.areaItemPedido}>
					<Text style={[styles.texto, styles.tipoItem]}>{this.props.item.tipoItemPedido}</Text>
					<Text style={styles.texto}>Moeda: {this.props.item.descricaoMoeda}</Text>
					<Text style={styles.texto}>Quantidade: {(parseFloat(this.props.item.quantidade).toFixed(2)).replace('.', ',')}</Text>
					<Text style={styles.texto}>Taxa: R$ {(parseFloat(this.props.item.taxa).toFixed(5)).replace('.', ',')}</Text>
					<Text style={styles.texto}>Valor Item: R$ {(parseFloat(this.props.item.valorItem).toFixed(2)).replace('.', ',')}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	area:{
		marginTop:20,
		marginBottom: 20,
	},
	areaTituloItemPedido:{
		flexDirection:'row',
		justifyContent: 'center',
		marginBottom:5
	},
	titulo:{
		color:colors.white,
		fontSize: 15,
		marginLeft: 5
	},
	iconTitulo:{
		color:colors.white
	},
	areaItemPedido:{
		flexDirection:'column',
		justifyContent: 'center',
		alignItems:'center'
	},
	texto:{
		color:colors.white,
		fontSize:12
	},
	tipoItem:{
		fontWeight:'bold',
		fontSize: 13
	}
});
