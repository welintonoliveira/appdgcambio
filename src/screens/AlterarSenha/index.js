import React, { Component } from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { Content, Container } from "native-base";
import { connect } from 'react-redux';
import { atualizarSenha } from '../../actions/AuthActions';
import md5 from "md5";

import Loading from '../../components/Loading';
import HeaderApp from '../../components/HeaderApp';
import InputText from '../../components/InputText';
import InputPassWord from '../../components/InputPassWord';
import ButtonNext from '../../components/ButtonNext';
import AppCambioAPI from '../../AppCambioAPI';

import styles from './styles';

class AlterarSenha extends Component{
	static navigationOptions = {
	    header: null
	};

	constructor(props){
		super(props);
		this.state = {
			senhaAntiga: '',
			senhaNova: '',
			senhaNovaConfirmacao: '',
			senhaAntigaErrorMessage: '',
			senhaNovaErrorMessage: '',
			senhaNovaConfirmacaoErrorMessage: '',
		}
	}

	setSenhaAntigaValue = (text) =>{
		this.setState({senhaAntiga: text});
	}

	setSenhaNovaValue = (text) =>{
		this.setState({senhaNova: text});
	}

	setSenhaNovaConfirmacaoValue = (text) =>{
		this.setState({senhaNovaConfirmacao: text});
	}


	back = () =>{
		this.props.navigation.goBack();
	}

	alterSenhaClick = () => {
		try{
			// Valida os dados da senha para alteração
			if(this.state.senhaAntiga === ''){
				this.setState({senhaAntigaErrorMessage: "É necessário preencher o campo senha atual."});
			}else if(this.state.senhaNova === ''){
				this.setState({senhaNovaErrorMessage: "É necessário preencher o campo nova senha."});
			}else if(this.state.senhaNovaConfirmacao === ''){
				this.setState({senhaNovaConfirmacaoErrorMessage: "É necessário preencher o campo nova senha confirmação."});
			}else if(this.state.senhaNova !== this.state.senhaNovaConfirmacao){
				this.setState({senhaNovaConfirmacaoErrorMessage: "O campo nova senha e senha de confirmação possuem valores diferentes."});
			}else{
				// Cria um hash com a senha informada pelo cliente
        		let senhaAntigaHash = md5(this.state.senhaAntiga);

        		let senhaUper = senhaHash.toUpperCase();


				AppCambioAPI.alterarSenha(this.props.clienteEmail, senhaUper , this.state.senhaNova).then((response) =>{

					// Executa a mensagem de erro informada serviço
					if(response.errorMessage !== ''){
						alert(response.errorMessage);
					}else{

						// Atualiza a senha do cliente logado
						this.props.atualizarSenha(this.state.senhaNova);

						// Limpa os campos com os dados informados pelo cliente
						this.setState({
							senhaAntiga: '',
							senhaNova: '',
							senhaNovaConfirmacao: '',
							senhaAntigaErrorMessage: '',
							senhaNovaErrorMessage: '',
							senhaNovaConfirmacaoErrorMessage: '',
						});

						// Avisa o cliente que a senha foi alterada com sucesso
						alert("Senha alterada com sucesso.");
					}	

				}).catch((error) =>{
					alert(error);
				});
			}
		}catch(err){
			alert(err);
		}
	}

	render(){
		return(
			<Container>
				<HeaderApp 
					backClick={this.back}
					title="Alterar Senha"
					navigation={this.props.navigation}
					iconCarrinho={{ quantidadeItens: 0, visible: false }}
				/>
				<Content contentContainerStyle={{ flex: 1 }}>
					<ImageBackground
						source={require("../../img/background-dg1.png")}
						style={{ width: "100%", height: "100%" }}
					>
		            	<View style={[styles.backgroundOpacity, {paddingTop: 30}]}>
		            		<ScrollView>
								<InputPassWord setTextValue={this.setSenhaAntigaValue} value={this.state.senhaAntiga} title="Senha atual*" errorMessage={this.state.senhaAntigaErrorMessage} />
								<InputPassWord setTextValue={this.setSenhaNovaValue} value={this.state.setSenhaNovaValue} title="Nova senha*" errorMessage={this.state.senhaNovaErrorMessage} />
								<InputPassWord setTextValue={this.setSenhaNovaConfirmacaoValue} value={this.state.senhaNovaConfirmacao} title="Repita a nova senha*" errorMessage={this.state.senhaNovaConfirmacaoErrorMessage} />
							</ScrollView>
							<ButtonNext title="CONTINUAR" nextClick={this.alterSenhaClick} />
						</View>
					</ImageBackground>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = state => {
  return {
  	clienteSenha: state.auth.clienteSenha,
  	clienteEmail: state.auth.clienteEmail,
  };
};

const AlterarSenhaConnect = connect(
  mapStateToProps,
  { atualizarSenha }
)(AlterarSenha);
export default AlterarSenhaConnect;