import React, { Component } from "react";
import { View, Text} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { Provider } from "react-redux";

import MenuNavigation from "../../navegacao/MenuNavigation";
import Loading from "../../components/Loading";
import SemConexao from '../SemConexao';
import Store from '../Store';

export default class Home extends Component {
  static navigationOptions = {
      header: null
  }
  
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
      isCarregando: true,
    };

    this.refresh();
  }

  // Remove o envt list assim que o controle for criado
  componentWillUnmount() {
    NetInfo.removeEventListener("connectionChange", this.refresh);
  }

  componentDidMount() {

    console.log('Home');

    // Checa o estado da conexão de internet
    NetInfo.addEventListener("connectionChange", this.refresh);
  }

  refresh = () => {
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({ 
        isConnected: isConnected,
        isCarregando:false
        });
    });
  }

  render() {
    if (this.state.isConnected === false) {
      return <SemConexao refresh={this.refresh} />;
    } else if (this.state.isCarregando === true) {
      return <Loading />;
    } else {
      return(
        <Provider store={Store}>
          <MenuNavigation />
        </Provider>
      )
    }
  }
}