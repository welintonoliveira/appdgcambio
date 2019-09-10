export const Urls = {
  urlCarrinhoDefault:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/Carrinho.aspx",
  urlCarrinho: "https://hlg-dgc-ljc-web.primecase.com.br/mobile/Carrinho.aspx",
  urlMeusPedidos:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/MeusPedidos.aspx",
  urlLojas: "https://hlg-dgc-ljc-web.primecase.com.br/mobile/Lojas.aspx",
  urlAjuda: "https://hlg-dgc-ljc-web.primecase.com.br/mobile/Contato.aspx",
  urlCarrinhoItens:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/Carrinho.aspx?Page=ItensCarrinho",
  urlVitrineDeslogada:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/VitrineDeslogado.aspx",
  urlPedidoServiceGetAll:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/services/PedidoService.asmx/GetAll",
  urlDadosCliente:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/screens/Cadastro/DadosCliente.aspx",
  urlEndereco:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/screens/Cadastro/Endereco.aspx",

  // Versão 2.0
  urlVitrineCarrinho:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/VitrineCarrinho.aspx",
  urlFormaEntrega:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/FormaEntrega.aspx",
  urlItensCarrinho:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/ItemCarrinho.aspx",
  urlFormaPagamento:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/Pagamento.aspx",
  urlResumoPedido:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/ResumoPedido.aspx",
  urlEnderecoEntrega:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/EnderecoCliente.aspx",
  urlFinalidade:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/Finalidade.aspx",
  urlDadosBancariosCliente:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/DadosBancariosCliente.aspx",
  urlBancoIntermediador:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/BancoIntermediador.aspx",
  urlAgendamento:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/Agendamento.aspx",
  urlDadosRemetente:
    "https://hlg-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/DadosRemetente.aspx",
  urlVitrineNova:
    "https://hlg-dgc-ljc-web.primecase.com.br/Mobile/CarrinhoModelo1/initVitrine.aspx"
};

const UrlsReducer = (state = Urls, action) => {
  let actualState = null;

  switch (action.type) {
    case "urlCarrinhoChange":
      actualState = { ...state, urlCarrinho: action.payload.urlCarrinho };
      break;
    default:
      actualState = state;
      break;
  }

  return actualState;
};

export default UrlsReducer;
