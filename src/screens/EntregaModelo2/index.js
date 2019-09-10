import React from 'react';
import { ImageBackground, View, Text, ScrollView } from 'react-native';
import { Content, Container } from "native-base";
import { connect } from "react-redux";

import HeaderApp from '../../../components/HeaderApp';
import Loading from '../../../components/Loading';
import ButtonNext from '../../../components/ButtonNext';

import EntregaNavigation from './EntregaNavigation';

import styles from './styles';

next () => {
	alert('Segue para pagina de itens do carrinho');
}

back = () => {
	this.props.navigation.goBack();
}

const Entrega = () => (
	<Container>
		<HeaderApp 
			backClick={this.back}
			title="Forma de Entrega"
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
						<EntregaNavigation />
					</ScrollView>
					<ButtonNext title="CONTINUAR" nextClick={this.next} />
				</View>
			</ImageBackground>
		</Content>
	</Container>
);

const mapStateToProps = state => {
  return {
  	
  };
};

const EntregaConnect = connect(mapStateToProps, { })(Entrega);
export default EntregaConnect;
