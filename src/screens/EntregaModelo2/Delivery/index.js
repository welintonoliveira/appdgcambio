import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";

import styles from './styles';

class Delivery  extends Component{

	render(){
		return(
			<View>
				<Text>Delivery</Text>
			</View>
		);
	}
}

const mapStateToProps = state => {
  return {
  	
  };
};

const DeliveryConnect = connect(mapStateToProps, { })(Delivery);
export default DeliveryConnect;