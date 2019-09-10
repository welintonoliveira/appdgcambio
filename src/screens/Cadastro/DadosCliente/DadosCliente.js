import React, { Component } from 'react';
import {View, Text, ScrollView, ImageBackground } from 'react-native';
import { Content, Container } from "native-base";
import { connect } from "react-redux";
import { setValueCPF, setValueEmail, setValueNome, setValueSenha, setValueSenhaCheck } from '../../../actions/CadastroActions';

import styles from './styles';
import HeaderApp from '../../../components/HeaderApp';
import TextInputCadastro from '../../../components/TextInputCadastro';
import ButtonNext from '../../../components/ButtonNext';
import { toCPF, toEmail, addMaskCPF } from '../../../configuracao/Helpers';
import AppCambioAPI from '../../../AppCambioAPI';


export class DadosCliente extends Component {

	static navigationOptions = {
    	header: null
	}

	constructor(props){
		super(props);
		this.state = {
			errorMessageCpf: '',
			errorMessageEmail: '',
			errorMessageNome: '',
			errorMessageSenha: '',
			errorMessageSenhaCheck: '',
			cpfChecked: false,
			isCarregando: false,
		}
	}

	next = () => {
		// Se o cpf ja for checado segue adinda caso o contrário faz a checagem do cpf
		if(this.state.cpfChecked){
			if(this.validarDados()){
				this.props.navigation.navigate('Endereco');
			}
		}else if(!this.state.cpfChecked){
			// Executa as validações bases para verificar se o CPF informado é um cpf valido
			result = toCPF(this.props.cpf);

			if(result.isValid){
				// Consulta se o ja existe um cliente cadastrado na base com o CPF informado
				this.checkClienteCPF(result.cpf);
			}else{
				this.setState({errorMessageCpf: result.errorMessage});
			}
		}
	}

	back = () => {
		this.props.navigation.goBack();
	}

	// Checa se existe um cliente cadastrado na base de dados com o email informado
	checkClienteEmail = async () => {
		let emailValido = false;
		try{

			// Recupera a chamada para validação dos dados do cliente
			let result  = await AppCambioAPI.checkEmail(this.props.email);

			if(result.errorMessage === ''){
				this.setState({errorMessageEmail: ''});
				emailValido = true;
			}else{
				this.setState({errorMessageEmail: result.errorMessage});
				emailValido = false;
			}
		}
		catch(err){
			alert(err);
		}

		return emailValido;
	}

	// Checa se existe um cliente cadastrado na base de dados com o cpf informado
	checkClienteCPF = async () => {
		try{
			// Recupera a chamada para validação dos dados do cliente
			let result  = await AppCambioAPI.checkCPF(this.props.cpf);

			if(result.errorMessage === ''){
				this.setState({cpfChecked: true, errorMessageCpf: ''});
			}else{
				this.setState({cpfChecked: false, errorMessageCpf: result.errorMessage});
			}
		}
		catch(err){
			alert(err);
		}
	}

	// Valida se os dados forma preenchidos corretamente
	validarDados =  () => {

		console.log('this.props', this.props);

		// Limpa as mensagens de erro antes de executar a validação
		this.setState({
			errorMessageCpf: '',
			errorMessageEmail: '',
			errorMessageNome: '',
			errorMessageSenha: '',
			errorMessageSenhaCheck: '',
		});

		// Declara a variável para indicar se o cliente é valido para seguir para proxima pagina
		let dadosValidos = false;

		// Executa a validação do e-mail
		dadosValidos = this.checkClienteEmail();

		// Exevuta a validação dos campos normais
		if(this.props.nomeCompleto.length == 0){
			this.setState({errorMessageNome: 'É necessário preencher o campo Nome.'});
			dadosValidos = false;
		}else if(this.props.senha.length === 0){
			this.setState({errorMessageSenha: 'É necessário preencher o campo Senha.'});
			dadosValidos = false;
		}else if(this.props.senhaCheck.length === 0){
			this.setState({errorMessageSenhaCheck: 'É necessário preencher o campo Confirmar Senha.'});
			dadosValidos = false;
		}else if(this.props.senha !== this.props.senhaCheck){
			this.setState({errorMessageSenhaCheck: 'Os valores dos campos de Senha e Confirmação de Senha são diferentes.'});
			dadosValidos = false;
		}

		return dadosValidos;
	}

	componentDidMount(){
		// Limpa os campos com os dados do cliente
	  	() =>	this.props.limparDadosCliente();	
	}

	// Atualiza o status do cpf de acordo com a atualização
	componentDidUpdate(){
		if(this.state.cpfChecked && this.props.cpf.length != 11){
			this.setState({cpfChecked:  false});
		}
	}

	/*setTextValue = (keyName, text) => {
		// Inicializa a variavel para receber o resultado das conversões
		let result = null;

		switch(keyName){
			case 'cpf':
				if(this.state.cpfChecked){
					this.setState({cpf: text, cpfChecked: false});
				}else{
					this.setState({cpf: text});	
				}
			break;
			case 'email':
				// Converte o texto no formato de e-mail executando as validações necessárias
				result = toEmail(text);

				// Verifica se a conversão do e-mail foi valida
				if(result.isValid === true){
					this.setState({email: result.email, emailValid: result.isValid, errorMessageEmail: ''});
				}else{
					this.setState({email: result.email, errorMessageEmail: result.errorMessage});
				}
			break;
			case 'nomeCompleto':
				this.setState({nomeCompleto: text});
			break;
			case 'senha':
				this.setState({senha: text});
			break;
			default:
				this.setState({senhaCheck: text});
			break;
		}
	}*/

	render() {
		return(
			<Container>
				<HeaderApp 
					backClick={this.back}
					title="Cadastro/Dados Cliente"
		            navigation={this.props.navigation}
		            iconCarrinho={{ quantidadeItens: 0, visible: false }}
				/>
				<Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
					<ImageBackground
						source={require("../../../img/background-dg1.png")}
						style={{ width: "100%", height: "100%" }}
					>
					    <View style={[styles.backgroundOpacity, {paddingTop: 30 }]}>
						    <ScrollView>
								<TextInputCadastro keyName="cpf" type="CPF" setTextValue={this.props.setValueCPF} value={this.props.cpf} title="CPF *" errorMessage={this.state.errorMessageCpf} />
								{
									this.state.cpfChecked &&
									<View>
										<TextInputCadastro keyName="email" keyboardType="email-address" setTextValue={this.props.setValueEmail} value={this.props.email} title="Email *" errorMessage={this.state.errorMessageEmail} />
										<TextInputCadastro keyName="nomeCompleto" setTextValue={this.props.setValueNome} value={this.props.nomeCompleto} title="Nome Completo *" errorMessage={this.state.errorMessageNome} />
										<TextInputCadastro keyName="senha" isPass={true} setTextValue={this.props.setValueSenha} value={this.props.senha} title="Senha *" errorMessage={this.state.errorMessageSenha} />
										<TextInputCadastro keyName="senhaCheck" isPass={true} setTextValue={this.props.setValueSenhaCheck} value={this.props.senhaCheck} title="Confirmar Senha *" errorMessage={this.state.errorMessageSenhaCheck} />
									</View>
								}
							</ScrollView>
							<ButtonNext title="CONTINUAR" nextClick={this.next} />
						</View>
					</ImageBackground>
				</Content>
			</Container>
		);
	}
}


const mapStateToProps = state => {
  return {
    cpf: state.cad.cpf,
    email: state.cad.email,
    nomeCompleto: state.cad.nomeCompleto,
    senha: state.cad.senha,
    senhaCheck: state.cad.senhaCheck,
  };
};

const DadosClienteConnect = connect(mapStateToProps, { setValueCPF, setValueEmail, setValueNome, setValueSenha, setValueSenhaCheck })(DadosCliente);
export default DadosClienteConnect;