import { createStackNavigator } from "react-navigation";

import PreloadLogin from "../../PreloadScreens/PreloadLogin";
import Login from "../../screens/Login";
import Entrar from "../../screens/Login/Entrar";
import EsqueciSenha from "../../screens/Login/EsqueciSenha";
import DadosCliente from "../../screens/Cadastro/DadosCliente";
import Endereco from "../../screens/Cadastro/Endereco";
import DocumentosCliente from "../../screens/DocumentosCliente";
import AlertaConfirmacao from "../../screens/AlertaConfirmacao";

export default createStackNavigator({
  PreloadLogin: PreloadLogin,
  Login: Login,
  DadosCliente: DadosCliente,
  Endereco: Endereco,
  DocumentosCliente: DocumentosCliente,
  AlertaConfirmacao: AlertaConfirmacao,
  Entrar: Entrar,
  EsqueciSenha: EsqueciSenha
});
