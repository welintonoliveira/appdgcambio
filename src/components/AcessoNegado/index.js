import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Content, Container } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

import HeaderApp from '../HeaderApp';
import { colors, general } from '../../Styles';
import styles  from './styles';

const AcessoNegado = () =>(
	<Container>
		<HeaderApp 
			backClick={this.back}
			title="Acesso Negado"
	        navigation={this.props.navigation}
	        iconCarrinho={{ quantidadeItens: 0, visible: false }}
		/>
	    <Content contentContainerStyle={{ flex: 1 }}>
	    	<ImageBackground
	           source={require("../../img/background-dg1.png")}
	           style={{ width: "100%", height: "100%" }}
	        >
	        	<View style={general.backgroundOpacity}>
		        	<View style={styles.containerOffline}>
			          <View style={{ justiftyContent: "center", alignItems: "center" }}>
			            <Icon
			              name="window-close"
			              size={30}
			              color={colors.warning}
			              style={styles.disconnectedIcon}
			            />
			          </View>
			          <Text style={styles.tituloSemConexao}>Acesso Negado</Text>
			          <Text style={styles.informativoSemConexao}>
			            É necessário dar permissão de envio de notificações para poder utilizar o sistema.
			          </Text>
			          <Text style={styles.informativoSemConexao}>
			            Caso a permissão não esteja habilitada encerre o aplicativo e abra novamente aceitando a permissão.
			          </Text>
			           <TouchableOpacity
			            	onPress={this.props.reflesh}
			            	style={styles.botaoTentarNovamente}
			          >
			            <Text style={styles.buttonText}>Atualizar Permissão</Text>
			          </TouchableOpacity>
			        </View>
		        </View>
	    	</ImageBackground>
	    </Content>
	</Container>
);
