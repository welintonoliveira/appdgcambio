import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";

import styles from './styles';

export default class InputText extends Component{
	constructor(props){
		super(props);
		this.state = {
			showSenha: true,
			iconName: "eye-slash",
		}
	}

	visualizarSenha = () => {
		if (this.state.showSenha === true) {
			this.setState({ showSenha: false, iconName: "eye" });
		} else {
			this.setState({ showSenha: true, iconName: "eye-slash" });
		}
	};


	render(){
		return(
			<View style={styles.container}>
				<View style={styles.areaInput}>
					<Text style={styles.title}>{this.props.title}</Text>
					<View style={styles.areaCampo}>
						<TextInput  
							style={styles.input} 
							secureTextEntry={(this.state.showSenha  === null || this.state.showSenha === undefined) ? false : this.state.showSenha}
							onChangeText={(text) => this.props.setTextValue(text)}
			        		value={this.props.value}
						/>
						{/*<View style={styles.areaIconeSenha}>*/}
		                  <TouchableHighlight style={styles.areaIconeSenha}
		                    underlayColor={null}
		                    onPress={()=> this.visualizarSenha()}
		                    underlay
		                  >
		                    <IconFontAwesome5
		                      name={this.state.iconName}
		                      style={styles.iconeVisualizacaoSenha}
		                    />
		                  </TouchableHighlight>
		                {/*</View>*/}	
					</View>
				</View>
				{
					!!this.props.errorMessage &&
					<Text style={styles.textoErro}>{this.props.errorMessage}</Text>
				}
			</View>
		);
	}
}