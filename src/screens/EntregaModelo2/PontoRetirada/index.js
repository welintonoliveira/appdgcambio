import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";

import styles from './styles';

class PontoRetirada  extends Component{

	render(){
		return(
			<View>
				<Text>Ponto de Retirada</Text>
			</View>
		);
	}
}

const mapStateToProps = state => {
  return {
  	
  };
};

const PontoRetiradaConnect = connect(mapStateToProps, { })(PontoRetirada);
export default PontoRetiradaConnect;