import React, { Component } from 'react';
import { Alert, Platform, NativeModules, PermissionsAndroid, View, Text } from "react-native";
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { atualizarDadosCliente } from '../../actions/AuthActions';
import Loading from '../../components/Loading';
import AcessoNegado from '../../components/AcessoNegado';
import AppCambioAPI from '../../AppCambioAPI';
import AutenticacaoNavigation from '../AutenticacaoNavigation';

class MenuNavigation extends Component {
	constructor(props){
		super(props);
		this.state ={
			isClienteConectado: this.props.clienteLogado,
		}
	}

	checkUsuarioLogado = async () => {
		try{
			// Recupera os dados gravados do cliente
			let token = await AsyncStorage.getItem('@primecaseTokenCliente');

			// Se existir alguma informação gravada no aplicativo
			if(token){

				// Checa se o token ainda está vinculado ao cliente ou se foi removido por outro aparelho
				AppCambioAPI.checkClienteLogadoByToken(token).then((result) =>{

					// Exibe o erro na consulta do cliente pelo token informado
					if(result.errorMessage !== '' || result.data.ClienteID <= 0){
						// Limpa os dados do cliente da base deslogando o mesmo
						AsyncStorage.removeItem('@primecaseTokenCliente');

						// Aguarda 1 segundo e envia o cliente para area deslogada para poder seguir com a utilização do sistema
						setTimeout(()=>{
							// navega o cliente para o menu deslogado
							this.setState({isClienteConectado: false});
						}, 3000);
					}else{
						// Atualiza os dados do cliente no reducer
						this.props.atualizarDadosCliente(result.data.ClienteID, 
														result.data.ClienteNome, 
														result.data.ClienteEmail, 
														result.data.ClienteSenha, 
														result.data.Token, 
														NativeModules.PlatformConstants.Model, 
														true,
														'Carrinho'
						);
					}

				}).catch((error) =>{
					console.log('error', error);
				});

				
			}else{
				// navega o cliente para o menu deslogado
				this.setState({isClienteConectado: false});
			}

		}catch(err){
			alert(err);
		} 
	}

	componentDidMount() {
		// Executa a checagem do usuário logado
		this.checkUsuarioLogado();
    }

    componentDidUpdate(){

    	// Direciona o cliente de acordo com o estado do mesmo
		if(this.props.clienteLogado !== this.state.isClienteConectado){
			// Navega o cliente para area logada
			this.setState({isClienteConectado: this.props.clienteLogado});
		}
	}

	render(){
		const AutenticacaoNavigationCustom = AutenticacaoNavigation(this.state.isClienteConectado);
		return (
			<AutenticacaoNavigationCustom />
		);
	}
}

const mapStateToProps = (state) =>{
	return{
		clienteLogado: state.auth.clienteLogado,
		paginaInicial: state.auth.paginaInicial,
		clienteNome: state.auth.clienteNome,
		clienteEmail: state.auth.clienteEmail,
		clienteSenha: state.auth.clienteSenha,
		tokenValidacao: state.auth.tokenValidacao,
		descricaoAparalhe: state.auth.descricaoAparalhe,
	};
}

const MenuNavigationConnect = connect(mapStateToProps, { atualizarDadosCliente })(MenuNavigation);
export default MenuNavigationConnect;