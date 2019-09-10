import { createStackNavigator } from "react-navigation";

import PreloadVitrineLogada from "../../PreloadScreens/PreloadVitrineLogada";
import Vitrine from "../../screens/Vitrine";
import VitrineCarrinho from "../../screens/VitrineCarrinho";
import Entrega from "../../screens/Entrega";
import ItensCarrinho from "../../screens/ItensCarrinho";
import FormaPagamento from "../../screens/FormaPagamento";
import ResumoPedido from "../../screens/ResumoPedido";
import ComprovantePagamento from "../../screens/ComprovantePagamento";
import AlertaConfirmacao from "../../screens/AlertaConfirmacao";
import EnderecoEntrega from "../../screens/EnderecoEntrega";
import CarteiraVazia from "../../screens/CarteiraVazia";
import BancoIntermediador from "../../screens/BancoIntermediador";
import Finalidade from "../../screens/Finalidade";
import DadosBancarioCliente from "../../screens/DadosBancarioCliente";
import Agendamento from "../../screens/Agendamento";
import DadosRemetente from "../../screens/DadosRemetente";
import LojaDetalhe from "../../screens/LojaDetalhe";

export default createStackNavigator({
  PreloadVitrineLogada: PreloadVitrineLogada,
  //Vitrine: VitrineCarrinho,
  Vitrine: Vitrine,
  Entrega: Entrega,
  ItensCarrinho: ItensCarrinho,
  FormaPagamento: FormaPagamento,
  ResumoPedido: ResumoPedido,
  ComprovantePagamento: ComprovantePagamento,
  AlertaConfirmacao: AlertaConfirmacao,
  EnderecoEntrega: EnderecoEntrega,
  CarteiraVazia: CarteiraVazia,
  BancoIntermediador: BancoIntermediador,
  DadosBancarioCliente: DadosBancarioCliente,
  Finalidade: Finalidade,
  Agendamento: Agendamento,
  DadosRemetente: DadosRemetente,
  LojaDetalhe: LojaDetalhe
});
