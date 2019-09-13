  
  import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal, TextInput, TouchableHighlight, NativeModules } from 'react-native';
import { Content, Container } from 'native-base';
import { connect } from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome5";
import md5 from 'md5';
import AsyncStorage from '@react-native-community/async-storage';

import HeaderModal from '../components/HeaderModal';
import ButtonSendModal from '../components/ButtonSendModal';
import { atualizarDadosCliente, getTokenCliente } from '../../../actions/AuthActions';
import AppCambioAPI from '../../../AppCambioAPI';
import { toEmail} from '../../../configuracao/Helpers';

import styles from './styles';

export class ModalLogin extends Component{

	constructor(props){
		super(props);
		this.state = {
			email:'',
			senha:'',
			showSenha: true,
			iconName:'eye-slash',
			pageInicial: this.props.navigation.getParam('Page', 'Pedidos')
		}
	}

	// Executa o login da loja
	logar = () => {
		try{
			// Recupera a senha para validação
			let senhaEnvio = this.state.senha;

			// Executa as validações do email
			let emailEnvio = toEmail(this.state.email);

			// Exibe a mensagem de erro do email inválido
			if(emailEnvio.isValid === false){
				// Exibe a mensagem de erro para o cliente
				alert(emailEnvio.errorMessage);

			}else if(senhaEnvio.length === 0){
				// Avisa o cliente que precisa preeencher o campo senha
				alert('É necessário preencher o campo Senha.');

			}else{
				// Cria um hash com a senha informada pelo cliente
				let senhaHash = md5(this.state.senha);

				let senhaUper = senhaHash.toUpperCase();

				// Executa o login do cliente
				AppCambioAPI.login(emailEnvio.email, senhaUper, NativeModules.PlatformConstants.Model).then((response) => {

					// Se houver mensagem de erro ao efetuar o login
					if(response.errorMessage !== ''){
						// Se o erro for por que o cliente está logado em outro aparelho, possibilita o deslogue do cliente
						if(response.errorMessage.includes('E631D')){

							// Possibilita o cliente deslogar o mesmo usuario logado em outro aparelho
							this.props.openModalDeslogar(emailEnvio.email, senhaUper);

						}else{
							// Exibe a mensagem de erro do login
							alert(response.errorMessage);	
						}

					}else{
						// Persiste o token do cliente na base local para ser utilizado quando o cliente abrir o aplicativo novamente
						AsyncStorage.setItem('@primecaseTokenClienteDG', response.data.Token);

						// Atualiza os dados do cliente no reducer
						this.props.atualizarDadosCliente(response.data.ClienteID, 
														response.data.ClienteNome, 
														response.data.ClienteEmail, 
														response.data.ClienteSenha, 
														response.data.Token, 
														NativeModules.PlatformConstants.Model, 
														true,
														this.state.pageInicial
						);
					}

				}).catch((error) =>{
					alert(error);
				});
			}
		}catch(err){
			alert(err);
		}
	}

	// Configura os dados do email do cliente
	setEmailLogin = (email) => {
		this.setState({email: email.text});
	}

	// Configura os dados da senha do lotin do cliente
	setSenhaLogin = (senha) => {
		this.setState({senha: senha.text});
	}

	visualizarSenha = () =>{
		if(this.state.showSenha === true){
			this.setState({showSenha: false, iconName:'eye-slash'});		
		}else{
			this.setState({showSenha: true, iconName:'eye'});
		}
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
					<HeaderModal closeModal={() => this.props.closeModalLogin()} title="Faça o login para continuar" />
					
					<View style={styles.areaInputEmailLogin}>
						<TextInput style={styles.inputEmailLogin} 
							keyboardType="email-address"
							placeholder="E-mail"
							placeholderTextColor="#333"
							onChangeText={(text) => this.setEmailLogin({text})}
							value={this.state.email}
						/>
					</View>
					<View style={styles.areaInputSenhaLogin}>
						<TextInput style={styles.inputSenhaLogin} 
							placeholder="Senha"
							placeholderTextColor="#333"
							secureTextEntry={this.state.showSenha}
							onChangeText={(text)=> this.setSenhaLogin({text})}
							value={this.state.senha}
						/>
						<View style={styles.areaIconeVisualizacaoSenha}>
							<TouchableHighlight underlayColor={null} onPress={this.visualizarSenha} underlay>
		    					<Icon name={this.state.iconName} style={styles.iconeVisualizacaoSenha} />
							</TouchableHighlight>
						</View>
					</View>
					<ButtonSendModal title="ENTRAR" sendClick={this.logar} />
					
					<View style={styles.areaButtonEsqueceuSuaSenha}>
						<TouchableOpacity onPress={()=> this.props.openModalNovaSenha()} style={styles.buttonEsqueciMinhaSenha}>
							<Text style={styles.buttonEsqueciMinhaSenhaTexto}>Esqueceu sua senha?</Text>
						</TouchableOpacity>
					</View>
				</View>
		    </Modal>	
		);
	}
}

const mapStateToProps = state => {
  return {
  };
};

const ModalLoginConnect = connect(
  mapStateToProps,
  { atualizarDadosCliente, getTokenCliente }
)(ModalLogin);
export default ModalLoginConnect;