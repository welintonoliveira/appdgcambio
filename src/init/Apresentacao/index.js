import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Video from 'react-native-video';

import styles from './styles';

export default class Apresentacao extends Component{

	static navigationOptions = {
	    header: null
	}

	componentDidMount(){

		setTimeout(()=>{
			this.props.navigation.dispatch(StackActions.reset({
				index:0,
				actions:[
					NavigationActions.navigate({ routeName: 'Home'})
				]
			}));
			//this.props.navigation.navigate('Home');
		}, 4200);
	}

	render(){
		return(
			<View style={{flex:1}}>
			<Video 
				source={require('../../video/dgcambio-video.mp4')} 
				style={styles.backgroundVideo} 
		    />
		    </View>
		);
	}
} 