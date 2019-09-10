import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { clienteChanged } from "../../actions/CarrinhoActions";

class TesteReducer extends Component{

	static navigationOptions = {
	    header: null
	};

	constructor(props){
		super(props);
		this.state = {
			//pagamento: this.props.pagamento,
		};
	}

	setCliente = () => {

		let cliente:{
			nome: 'welinton alex de oliveira',
			idade: 13,
			senha: 'teste'
		};

		this.props.clienteChanged(cliente);
	}

	componentDidMount(){

		//console.log('cliente', this.props.pagamento);

		/*this.setCliente();

		setTimeout(()=>{
			console.log('cliente 0', this.props.cliente);

		}, 3000);*/
	}

	render(){
		return(
			<View>
				<Text>Testevvta vatva </Text>
				<Text>Cliente ID: {this.props.clienteID} </Text>
				<Text>Cliente ID: {this.props.cliente.nome} </Text>
				<Text>Cliente ID: {this.props.cliente.email} </Text>
			</View>
		)
	}
}

const mapStateToProps = state => {
	console.log('state', state);
  return {
    cliente: state.car.cliente,
    clienteID: state.auth.clienteID,
  };
};

const TesteReducerConnect = connect(mapStateToProps,  { clienteChanged })(TesteReducer);
export default TesteReducerConnect;
