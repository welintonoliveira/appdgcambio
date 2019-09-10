import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal, TextInput, TouchableHighlight } from 'react-native';
import { Content, Container } from 'native-base';
import { connect } from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome5";

import md5 from 'md5';

import { authChanged, setSenhaLogin, setEmailLogin, setEmailEsqueciMinhaSenha } from '../actions/AuthActions';

import AppCambioApi from '../AppCambioAPI';
import HeaderCarrinho from '../components/HeaderCarrinho';

export class Login55 extends Component{

	static navigationOptions = {
	    header: null
	};

	constructor(props){
		super(props);
		this.state = {
			modalLoginVisible: false,
			modalEsqueciMinhaSenhaVisible: false,
			showSenha: true,
			iconeSenhaNome : 'eye-slash'
		};

		this.abrirModalLogin = this.abrirModalLogin.bind(this);
		this.fecharModalLogin = this.fecharModalLogin.bind(this);
		this.abrirModalEsqueciMinhaSenha = this.abrirModalEsqueciMinhaSenha.bind(this);
		this.fecharModalEsqueciMinhaSenha = this.fecharModalEsqueciMinhaSenha.bind(this);
		this.logar = this.logar.bind(this);
		this.visualizarSenha = this.visualizarSenha.bind(this);
	}

	// Envia uma nova senha para o cliente
	enviarSenha(){
		if(this.props.clienteEmailEsqueciMinhaSenhaValid === true){

			AppCambioApi.enviarSenha(this.props.clienteEmailEsqueciMinhaSenha)
			.then((r)=>{
				let s = this.state;
				s.modalEsqueciMinhaSenhaVisible = false;
				s.modalLoginVisible = false;
				this.setState(s);

				console.log('result', r);
				alert('Senha enviada com sucesso!');
			}).catch((err) =>{
				console.log('Erro', err)
				alert(err);
			});
		}else{

			alert('E-mail inválido.');
		}
	}

	// Executa o login da loja
	logar(){
		if(this.props.clienteEmailValid === true && this.props.clienteSenhaValid === true){
			let senhaHash = md5(this.props.clienteSenha);

			AppCambioApi.login(this.props.clienteEmail, senhaHash.toUpperCase() , this.props.imeiAparelho, this.props.descricaoAparalhe).then((r)=>{
				if(r.errorMessage !== ''){
					alert(r.errorMessage);
				}else{
					// loga o cliente no sistema
					this.props.authChanged(r.data.ClienteID, r.data.ClienteNome, 'MeusPedidos', true);
				}
			}).catch((err) =>{
			  	alert(err);
			});
		}
	}

	visualizarSenha(){
		if(this.state.showSenha === false){
			let s = this.state;
			s.iconeSenhaNome = 'eye-slash';
			s.showSenha = true;
			this.setState(s);
		}else{
			let s = this.state;
			s.iconeSenhaNome = 'eye';
			s.showSenha = false;
			this.setState(s);
		}
	}

	abrirModalEsqueciMinhaSenha(){
		console.log('abrirModalEsqueciMinhaSenha');
		let s = this.state;
		s.modalEsqueciMinhaSenhaVisible = true;
		s.modalLoginVisible = false;
		this.setState(s);
	}

	fecharModalEsqueciMinhaSenha(){
		this.setState({modalEsqueciMinhaSenhaVisible: false});
	}

	abrirModalLogin(){
		this.setState({modalLoginVisible: true});
	}

	fecharModalLogin(){
		this.setState({modalLoginVisible: false});
	}

	render(){
		return(
			<Container>
		       	<HeaderCarrinho navigation={this.props.navigation} iconCarrinho={{ quantidadeItens: 0, visible: false }} />
		        <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
		        	<ImageBackground
			            source={require("../img/background-dg1.png")}
			            style={{ width: "100%", height: "100%" }}
			        >
			        	<View style={styles.backgroundOpacity}>

			        		<Modal 
			        			animationType="slide"
			        			transparent={true}
			        			visible={this.state.modalEsqueciMinhaSenhaVisible}
						        onRequestClose={() => {}}
			        		>
			        			<View style={styles.areaModalEsqueciMinhaSenha}>
			        				<View style={styles.areaTituloModalLogin}>
			        					<View>
			        						<Text style={styles.textoTituloLogin}>Esqueci minha senha</Text>
			        					</View>
			        					<TouchableOpacity onPress={this.fecharModalEsqueciMinhaSenha} style={styles.buttonFecharModalLogin}>
			        						<Text style={styles.iconeFecharModalLogin}>X</Text>
			        					</TouchableOpacity>
			        				</View>
			        				<View style={styles.areaInputEmailLogin}>
			        					<TextInput style={styles.inputEmailLogin} 
			        						placeholder="E-mail"
			        						placeholderTextColor="#333"
			        						onChangeText={(text)=> this.props.setEmailEsqueciMinhaSenha({text})}
			        						value={`${this.props.clienteEmailEsqueciMinhaSenha}`}
			        					/>
			        				</View>
			        				<View style={styles.areaButtonEntrar}>
			        					<TouchableOpacity onPress={this.enviarSenha} style={styles.buttonLogar}>
			        						<Text style={styles.buttonLogarTexto}>SOLICITAR NOVA SENHA</Text>
			        					</TouchableOpacity>
			        				</View>
			        			</View>
					        </Modal>	

			        		<Modal 
			        			animationType="slide"
			        			transparent={true}
			        			visible={this.state.modalLoginVisible}
						        onRequestClose={() => {}}
			        		>
			        			<View style={styles.areaModalLogin}>
			        				<View style={styles.areaTituloModalLogin}>
			        					<View>
			        						<Text style={styles.textoTituloLogin}>Faça o login para continuar</Text>
			        					</View>
			        					<TouchableOpacity onPress={this.fecharModalLogin} style={styles.buttonFecharModalLogin}>
			        						<Text style={styles.iconeFecharModalLogin}>X</Text>
			        					</TouchableOpacity>
			        				</View>
			        				<View style={styles.areaInputEmailLogin}>
			        					<TextInput style={styles.inputEmailLogin} 
			        						placeholder="E-mail"
			        						placeholderTextColor="#333"
			        						onChangeText={(text) => this.props.setEmailLogin({text})}
        									value={this.props.clienteEmail}
			        					/>
			        				</View>
			        				<View style={styles.areaInputSenhaLogin}>
			        					<TextInput style={styles.inputSenhaLogin} 
			        						placeholder="Senha"
			        						placeholderTextColor="#333"
			        						secureTextEntry={this.state.showSenha}
			        						onChangeText={(text)=> this.props.setSenhaLogin({text})}
			        						value={this.props.clienteSenha}
			        					/>
			        					<View style={styles.areaIconeVisualizacaoSenha}>
				        					<TouchableHighlight underlayColor={null} onPress={this.visualizarSenha} underlay>
					        					<Icon name={this.state.iconeSenhaNome} style={styles.iconeVisualizacaoSenha} />
				        					</TouchableHighlight>
			        					</View>
			        				</View>
			        				<View style={styles.areaButtonEntrar}>
			        					<TouchableOpacity onPress={this.logar} style={styles.buttonLogar}>
			        						<Text style={styles.buttonLogarTexto}>ENTRAR</Text>
			        					</TouchableOpacity>
			        				</View>
			        				<View style={styles.areaButtonEsqueceuSuaSenha}>
			        					<TouchableOpacity onPress={this.abrirModalEsqueciMinhaSenha} style={styles.buttonEsqueciMinhaSenha}>
			        						<Text style={styles.buttonEsqueciMinhaSenhaTexto}>Esqueceu sua senha?</Text>
			        					</TouchableOpacity>
			        				</View>
			        			</View>
					        </Modal>		
					        <View style={styles.areaLogin}>
			        			<TouchableOpacity underlay onPress={this.abrirModalLogin} style={[styles.buttonClienteExistente, styles.itenInline]}>
			        				<Icon name="key" style={styles.icon} />
			        				<Text style={styles.buttonLoginTexto}>Já sou cadastrado</Text>
			        			</TouchableOpacity>
								<TouchableOpacity onPress={()=> this.props.navigation.navigate('Cadastro')} style={[styles.buttonNovoCliente, styles.itenInline]}>
									<Icon name="user-plus" style={styles.icon} />
									<Text style={styles.buttonLoginTexto}>Novo cadastro</Text>
								</TouchableOpacity>
							</View>
			        	</View>		
			        </ImageBackground>
			    </Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	backgroundOpacity: {
	    backgroundColor: "rgba(0, 0, 0, 0.8)",
	    flex: 1
	},
	areaLogin:{
		top:'15%',
		width:'100%',
		paddingLeft: '5%',
		paddingRight: '5%',
	},
	itenInline:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	buttonClienteExistente:{
		backgroundColor:'#28a745',
		height:60,
	},
	buttonNovoCliente:{
		backgroundColor:'#000',
		height:60,
		marginTop: 20
	},
	icon:{
		color:'#fff',
		marginRight: 5,
		fontSize: 15
	},
	buttonLoginTexto:{
		color:'#fff',
		fontSize: 17
	},

	// Modal Login
	areaModalLogin:{
		marginRight:10,
		marginLeft:10,
		marginTop:10, 
		width:'95%',
		backgroundColor:'rgb(44,83,100)',
		borderRadius:4,
		height: 350
	},
	areaTituloModalLogin:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		paddingTop:20,
		paddingBottom:20,
	},
	textoTituloLogin:{
		color:'#FFFFFF',
		fontSize: 20,
		fontWeight:'bold'
	},
	buttonFecharModalLogin:{
		paddingLeft: 20,
	},
	iconeFecharModalLogin:{
		color:'#FFFFFF',
		fontSize: 18,
		fontWeight:'bold'
	},
	areaInputEmailLogin:{
		marginTop: 30,
		paddingLeft: 30,
		paddingRight: 30
	},
	inputEmailLogin:{
		backgroundColor:'#FFFFFF',
		borderRadius:50,
		paddingLeft:30,
	},
	areaButtonEntrar:{
		marginTop: 20,
		paddingLeft: 30,
		paddingRight: 30
	},
	buttonLogar:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'rgba(56,239,125,1)',
		height: 50,
		borderRadius: 50
	},
	buttonLogarTexto:{
		fontSize:20,
		color:'#FFFFFF',
	},
	areaButtonEsqueceuSuaSenha:{
		marginTop: 5,
	},
	buttonEsqueciMinhaSenha:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		height: 50
	},
	buttonEsqueciMinhaSenhaTexto:{
		color:'#FFFFFF',
		fontSize: 16,
	},
	areaInputSenhaLogin:{
		flexDirection:'row',
		marginTop: 20,
		paddingLeft: 30,
		paddingRight: 30
	},
	inputSenhaLogin:{
		backgroundColor:'#FFFFFF',
		borderBottomLeftRadius: 50,
		borderTopLeftRadius: 50,
		paddingLeft:30,
		width: '80%'
	},
	iconeVisualizacaoSenha:{

	},
	areaIconeVisualizacaoSenha:{
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#FFFFFF',
		borderBottomRightRadius: 50,
		borderTopRightRadius: 50,
		width: '20%'
	},

	// Modal Esqueci minha senha
	areaModalEsqueciMinhaSenha:{
		marginRight:10,
		marginLeft:10,
		marginTop:10, 
		width:'95%',
		backgroundColor:'rgb(44,83,100)',
		borderRadius:4,
		height: 270
	},
});

const mapStateToProps = (state) =>{
  return{
  	clienteEmailValid: state.auth.clienteEmailValid,
	clienteSenhaValid: state.auth.clienteSenhaValid,
  	clienteSenha: state.auth.clienteSenha,
  	clienteEmail: state.auth.clienteEmail,
    imeiAparelho: state.auth.imeiAparelho,
    descricaoAparalhe: state.auth.descricaoAparalhe,
    clienteEmailEsqueciMinhaSenha: state.auth.clienteEmailEsqueciMinhaSenha,
    clienteEmailEsqueciMinhaSenhaValid: state.auth.clienteEmailEsqueciMinhaSenhaValid,
  };
}

const Login55Connect = connect(mapStateToProps, { authChanged, setEmailLogin, setSenhaLogin, setEmailEsqueciMinhaSenha })(Login55);
export default Login55Connect;
