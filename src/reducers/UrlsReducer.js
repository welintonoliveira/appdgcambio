export const Urls = {
  urlCarrinhoDefault:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/Carrinho.aspx",
  urlCarrinho: "https://prd-dgc-ljc-web.primecase.com.br/mobile/Carrinho.aspx",
  urlMeusPedidos:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/MeusPedidos.aspx",
  urlLojas: "https://prd-dgc-ljc-web.primecase.com.br/mobile/Lojas.aspx",
  urlAjuda: "https://prd-dgc-ljc-web.primecase.com.br/mobile/Contato.aspx",
  urlCarrinhoItens:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/Carrinho.aspx?Page=ItensCarrinho",
  urlVitrineDeslogada:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/VitrineDeslogado.aspx",
  urlPedidoServiceGetAll:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/services/PedidoService.asmx/GetAll",
  urlDadosCliente:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/screens/Cadastro/DadosCliente.aspx",
  urlEndereco:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/screens/Cadastro/Endereco.aspx",

  // Versão 2.0
  urlVitrineCarrinho:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/VitrineCarrinho.aspx",
  urlFormaEntrega:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/FormaEntrega.aspx",
  urlItensCarrinho:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/ItemCarrinho.aspx",
  urlFormaPagamento:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/Pagamento.aspx",
  urlResumoPedido:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/ResumoPedido.aspx",
  urlEnderecoEntrega:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/EnderecoCliente.aspx",
  urlFinalidade:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/Finalidade.aspx",
  urlDadosBancariosCliente:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/DadosBancariosCliente.aspx",
  urlBancoIntermediador:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/BancoIntermediador.aspx",
  urlAgendamento:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/Agendamento.aspx",
  urlDadosRemetente:
    "https://prd-dgc-ljc-web.primecase.com.br/mobile/CarrinhoModelo1/DadosRemetente.aspx",
  urlVitrineNova:
    "https://prd-dgc-ljc-web.primecase.com.br/Mobile/CarrinhoModelo1/initVitrine.aspx"
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
