import { BackHandler } from 'react-native';
import CookieManager from 'react-native-cookies';
import AsyncStorage from '@react-native-community/async-storage';

import AppCambioAPI from '../AppCambioAPI.js';

export const paginaInicialChanged = (paginaInicial) => {
	return{
		type:'paginaInicialChanged',
		payload:{
			paginaInicial,
		}
	}
};

export const clienteIDChanged = (clienteID) => {
	return{
		type:'clienteIDChanged',
		payload:{
			clienteID,
		}
	}
};

export const quantidadeItemCarrinhoChanged = (quantidadeItensCarrinho) => {
	return{
		type:'quantidadeItemCarrinhoChanged',
		payload:{
			quantidadeItensCarrinho,
		}
	}
};

export const makeLogin = (imeiApp, descricaoApp) => {
	 return `
      logarUsuario('${imeiApp}', '${descricaoApp}');
      true;
    `;
}

export const logoutApp = (token) =>{
	return (dispatch) => {
	    AppCambioAPI.deslogarCliente(token).then(function(response){
			if(response.errorMessage === ''){
				AsyncStorage.removeItem('@primecaseTokenCliente');
				dispatch({
					type:'RESET_APP'
				});
				CookieManager.clearAll();
	            BackHandler.exitApp();  						
			}else{
				alert(response.errorMessage);
			}	

		}).catch(function(error){
			alert(error);
		});
	};
};

export const setPageOrigemCadastro = (pagina) => {
	 return `
      setPageOrigemCadastro('${pagina}');
      true;
    `;
}

// Executa a validação do usuario de acordo com o IMEI do aparelho
export const getTokenCliente = (email, senha) =>{
	return (dispatch) =>{
		 AppCambioAPI.getTokenCliente(email, senha)
			.then(function(response){
				dispatch({
					type:'getTokenCliente',
					payload:{
						tokenCliente: response.access_token,
						tokenType: response.token_type,
					}
				});
			})
			.catch(function(error){
				dispatch({
					type:'getTokenCliente',
					payload:{
						tokenCliente: '',
						tokenType: '',
					}
				});
		});
	}
}


// Executa a atualização dos dados do cliente no reducer para utilização nas paginas internas
export const atualizarDadosCliente = (clienteID, clienteNome, clienteEmail, clienteSenha, tokenValidacao, descricaoAparalho, clienteLogado, paginaInicial) => {
	return{
		type:'atualizarDadosCliente',
		payload:{
			clienteID,
			clienteNome,
			clienteEmail,
			clienteSenha,
			tokenValidacao,
			descricaoAparalho,
			clienteLogado,
			paginaInicial,
		}
	}
};

// Atualiza a senha do cliente
export const atualizarSenha = (clienteSenha) => {
	return{
		type:'atualizarSenha',
		payload:{
			clienteSenha
		}
	}
};