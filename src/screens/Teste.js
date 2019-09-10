import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

export default class Teste extends Component{

	constructor(props){
		super(props);
		this.state ={
			visible: false
		}
	}

	static navigationOptions = {
	    header: null
	};

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				visible: true
			})
		}, 2500);
	}

	render(){
		return(
			<View style={{flex: 1, paddingTop: 54}}>
				<ShimmerPlaceHolder autoRun={true} style={{ marginBottom: 7, backgroundColor: '#00ffff' }} visible={this.state.visible}>
			  		<Text style={{color: '#333', fontSize: 30}}>
			    		Wow, awesome here.
			  		</Text>
				</ShimmerPlaceHolder>
				<ShimmerPlaceHolder autoRun={true} style={{ marginBottom: 7 }} visible={this.state.visible}>
			  		<Text style={{color: '#333', fontSize: 30}}>
			    		Wow 2, awesome here.
			  		</Text>
				</ShimmerPlaceHolder>
				<ShimmerPlaceHolder autoRun={true} style={{ marginBottom: 7 }} visible={this.state.visible}>
			  		<Text style={{color: '#333', fontSize: 30}}>
			    		Wow 3, awesome here.
			  		</Text>
				</ShimmerPlaceHolder>
			</View>
		);
	}
}