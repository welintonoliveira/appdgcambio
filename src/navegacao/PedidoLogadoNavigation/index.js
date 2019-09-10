import { createStackNavigator } from "react-navigation";

import PreloadPedidoLogado from "../../PreloadScreens/PreloadPedidoLogado";
import Pedidos from "../../screens/Pedidos";
import ComprovantePagamento from "../../screens/ComprovantePagamento";
import AlertaConfirmacao from "../../screens/AlertaConfirmacao";
import CancelarPedido from "../../screens/Pedidos/CancelarPedido";

export default createStackNavigator({
  PreloadPedidoLogado: {
    screen: PreloadPedidoLogado
  },
  MeusPedidos: {
    screen: Pedidos
  },
  ComprovantePagamento: {
    screen: ComprovantePagamento
  },
  AlertaConfirmacao: {
    screen: AlertaConfirmacao
  },
  CancelarPedido: {
    screen: CancelarPedido
  }
});
