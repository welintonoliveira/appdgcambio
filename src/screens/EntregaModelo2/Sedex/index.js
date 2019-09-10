import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";

import styles from './styles';

class Sedex  extends Component{

	render(){
		return(
			<View>
				<Text>Sedex</Text>
			</View>
		);
	}
}

const mapStateToProps = state => {
  return {
  	
  };
};

const SedexConnect = connect(mapStateToProps, { })(Sedex);
export default SedexConnect;