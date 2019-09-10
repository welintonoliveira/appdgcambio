export const Autenticacao = {
	clienteID: 0,
	clienteNome: '',
	paginaInicial: 'Carrinho',
	clienteLogado: false,
	clienteEmail:'',
	clienteSenha:'',
	tokenValidacao: '',
	descricaoAparalho:'',
	quantidadeItensCarrinho: 0,			
	tokenCliente : '',
	tokenType: '',
};

const AuthReducer = (state = Autenticacao, action) => {

	let actualState = null;

	switch(action.type){
		case 'RESET_APP':
			actualState = Autenticacao;
			break;
		case 'paginaInicialChanged':
			actualState = 
			{
				...state, 
				paginaInicial: action.payload.paginaInicial,
			};
			break;
		case 'quantidadeItemCarrinhoChanged':
			actualState = 
			{
				...state, 
				quantidadeItensCarrinho: action.payload.quantidadeItensCarrinho,
			};
			break;
		case 'getTokenCliente':
			actualState = 
			{
				...state, 
				tokenCliente: action.payload.tokenCliente,
				tokenType: action.payload.tokenType,
			};
			break;
		case 'atualizarDadosCliente':
			actualState = 
			{
				...state, 
				clienteID: action.payload.clienteID,
				clienteNome: action.payload.clienteNome,
				clienteEmail: action.payload.clienteEmail,
				clienteSenha: action.payload.clienteSenha,
				tokenValidacao: action.payload.tokenValidacao,
				descricaoAparalho: action.payload.descricaoAparalho,
				clienteLogado: action.payload.clienteLogado,
				paginaInicial: action.payload.paginaInicial,
			};
			break;
		case 'atualizarSenha':
			actualState = 
			{
				...state, 
				clienteSenha: action.payload.clienteSenha
			};
			break;
		default:
			actualState = state;
			break;
	}

	return actualState;
}

export default AuthReducer;