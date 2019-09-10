import React, { Component } from 'react';
import { Modal, View, TextInput, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import HeaderModal from '../components/HeaderModal';
import ButtonSendModal from '../components/ButtonSendModal';
import { toEmail } from '../../../configuracao/Helpers';
import AppCambioAPI from '../../../AppCambioAPI';

export default class ModalNovaSenha extends Component{
	state = {
		email: '',
	}

	enviarNovaSenha = async () =>{
		try{

			let result = toEmail(this.state.email);

			if(result.isValid){
				let response = await AppCambioAPI.enviarNovaSenha(result.email);

				if(response.errorMessage === ''){
					alert('Foi enviado um e-mail com uma nova senha para o seu acesso.');
				}else{
					alert(response.errorMessage);
				}
			}else{
				alert(result.errorMessage);
			}
		}catch(err){
			alert(err);
		}
	}

	setEmailValue =(text) =>{
		this.setState({email: text});
	}	

	render(){
		return(
			<Modal 
				animationType="slide"
				transparent={true}
				visible={this.props.visible}
		        onRequestClose={() => {}}
			>
				<View style={styles.container}>
					<HeaderModal closeModal={() => this.props.closeModalNovaSenha()} title="Esqueci minha senha" />
					<View style={styles.areaInputEmailLogin}>
						<TextInput style={styles.inputEmailLogin} 
							placeholder="E-mail"
							placeholderTextColor="#333"
							onChangeText={(text)=> this.setEmailValue(text)}
							value={this.state.email}
						/>
					</View>
					<ButtonSendModal title="SOLICITAR NOVA SENHA" sendClick={this.enviarNovaSenha} />
				</View>
	        </Modal>
		);
	}
}