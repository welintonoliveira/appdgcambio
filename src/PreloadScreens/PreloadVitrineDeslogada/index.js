import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { Content, Container } from 'native-base';
import HeaderApp from '../../components/HeaderApp';
import Loading from '../../components/Loading';

export default class PreloadVitrineDeslogada extends Component{

	static navigationOptions = {
		header: null
	}

	constructor(props){
		super(props);
		this.state = {};
	}

	componentWillMount(){
		this.props.navigation.dispatch(StackActions.reset({
			index:0,
			actions:[
				NavigationActions.navigate({ routeName: 'VitrineDeslogada'})
			]
		}));
	}

	render(){
		return(
		<Container>
			<HeaderApp 
				initialRouter={true}
				title="Cadastro/Login"
				navigation={this.props.navigation}
				iconCarrinho={{ quantidadeItens: 0, visible: false }}
			/>
	        <Content contentContainerStyle={{ flex: 1 }}>
				<Loading />
			</Content>
		</Container>

		);
	}
}