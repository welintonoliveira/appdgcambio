import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, NativeModules } from "react-native";
import { Content, Container, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from 'react-redux';
import { atualizarDadosCliente, quantidadeItemCarrinhoChanged  } from '../../actions/AuthActions';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

export class AlertaConfirmacao extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {

    super(props);
    this.state = {
      tipoAlerta: props.navigation.getParam('tipoAlerta', 'Cadastro'),
      titulo: props.navigation.getParam('titulo', 'Cadastro efetuado'),
      subtitulo: props.navigation.getParam('subtitulo', 'Pronto, você já está pronto para operar!'),
      uriImageCadastro: require('../../img/successCadastro.png'),
      uriImageComprovantePagamento: require('../../img/successCadastro.png'),
      paginaRedirecionamentoBotao: props.navigation.getParam('paginaRedirecionamentoBotao', 'Carrinho'),
      nomeBotaoRedirecionamento: props.navigation.getParam('nomeBotaoRedirecionamento', 'Iniciar meu pedido'),
      cliente: props.navigation.state.params.cliente
    };

    console.log('props', props);

    this.logar = this.logar.bind(this);
  }

  logar(){

    if(this.state.tipoAlerta === 'Cadastro'){

      // Se a pagina for de carrinho pula o passo de exibir a vitrine novamente
      if(this.state.paginaRedirecionamentoBotao === 'Carrinho'){

        // Seta a quantidade de itens para 1, pois o cliente só ira passar por aqui uma vez
        this.props.quantidadeItemCarrinhoChanged(1);
      }

        // Persiste o token do cliente na base local para ser utilizado quando o cliente abrir o aplicativo novamente
        AsyncStorage.setItem('@primecaseTokenClienteDG', this.state.cliente.Token);

        // Atualiza os dados do cliente no reducer
        this.props.atualizarDadosCliente(this.state.cliente.ID, 
                        this.state.cliente.Nome, 
                        this.state.cliente.Email, 
                        this.state.cliente.Senha, 
                        this.state.cliente.Token, 
                        NativeModules.PlatformConstants.Model, 
                        true,
                        this.state.paginaRedirecionamentoBotao
        );
        
    }else if(this.state.tipoAlerta === 'ComprovantePagamento'){

      // Redireciona o cliente para pagina de meus pedidos
      this.props.navigation.navigate('MeusPedidos');
    }
  }

  render() {
    return (
      <Container>
        <Content style={styles.container} contentContainerStyle={{ flex: 1 }}>
          <View style={{ marginTop: 20 }}>
          {
            this.state.tipoAlerta === 'Cadastro' &&
            <Image
              source={this.state.uriImageCadastro}
              style={[
                styles.image,
                {
                  alignSelf: "center"
                }
              ]}
            />
          }
          {
            this.state.tipoAlerta === 'ComprovantePagamento' &&
            <Image
              source={this.state.uriImageComprovantePagamento}
              style={[
                styles.image,
                {
                  alignSelf: "center"
                }
              ]}
            />
          }
          </View>
          <View style={styles.containerText}>
            <Text style={styles.title}>{this.state.titulo}</Text>
            <Text style={styles.subTitle}>{this.state.subtitulo}</Text>
            <TouchableOpacity style={styles.button} onPress={this.logar}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row"
                }}
              >
                <Icon name="check" style={styles.icon} size={25} />
                <Text style={styles.textButton}>
                  {this.state.nomeBotaoRedirecionamento}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    paginaInicial: state.auth.paginaInicial,
    urlCarrinhoDefault: state.url.urlCarrinhoDefault,
    clienteID: state.auth.clienteID,
    clienteNome: state.auth.clienteNome,
  };
}

const AlertaConfirmacaoConnect = connect(mapStateToProps, { atualizarDadosCliente, quantidadeItemCarrinhoChanged })(AlertaConfirmacao);
export default AlertaConfirmacaoConnect;