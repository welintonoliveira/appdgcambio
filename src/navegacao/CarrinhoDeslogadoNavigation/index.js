import { createStackNavigator } from "react-navigation";

import PreloadVitrineDeslogada from '../../PreloadScreens/PreloadVitrineDeslogada';
import VitrineDeslogada from '../../screens/VitrineDeslogada';
import Login from '../../screens/Login';
import DadosCliente from '../../screens/Cadastro/DadosCliente';
import Endereco from '../../screens/Cadastro/Endereco';
import DocumentosCliente from '../../screens/DocumentosCliente';
import AlertaConfirmacao from '../../screens/AlertaConfirmacao';
import VitrineCarrinho from '../../screens/VitrineCarrinho';
import Entrar from '../../screens/Login/Entrar';
import EsqueciSenha from '../../screens/Login/EsqueciSenha';

export default createStackNavigator({
  	PreloadVitrineDeslogada:PreloadVitrineDeslogada,
  	VitrineDeslogada:VitrineDeslogada,
  	Login:Login,
  	Entrar: Entrar,
  	EsqueciSenha:EsqueciSenha,
  	DadosCliente:DadosCliente,
  	Endereco:Endereco,
  	DocumentosCliente:DocumentosCliente,
  	AlertaConfirmacao:AlertaConfirmacao,
  	VitrineCarrinho: VitrineCarrinho,
});