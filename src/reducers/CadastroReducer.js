export const Cadastro = {
	cpf: '',
	email: '',
	nomeCompleto: '',
	senha: '',
	senhaCheck: '',
	cep: '',
	idTipoEndereco: 0,
	idCidade: 0,
	idUF:0,
	bairro: '',
	logradouro: '',
	numero: '',
	complemento: '',
};

const CadastroReducer = (state = Cadastro, action) => {

	let actualState = null;

	switch(action.type){
		case 'setDadosCliente':
			actualState = 
			{
				...state, 
				cpf: action.payload.cpf,
				email: action.payload.email,
				nomeCompleto: action.payload.nomeCompleto,
				senha: action.payload.senha,
			};
			break;
		case 'setDadosEndereco':
			actualState = 
			{
				...state, 
				cep: action.payload.cep,
				idTipoEndereco: action.payload.idTipoEndereco,
				idCidade: action.payload.idCidade,
				idUF: action.payload.idUF,
				bairro: action.payload.bairro,
				logradouro: action.payload.logradouro,
				numero: action.payload.numero,
				complemento: action.payload.complemento,
			};
			break;
		case 'setValueCPF':
			actualState = 
			{
				...state, 
				cpf: action.payload.cpf,
			};
			break;
		case 'setValueEmail':
			actualState = 
			{
				...state, 
				email: action.payload.email,
			};
			break;
		case 'setValueNome':
			actualState = 
			{
				...state, 
				nomeCompleto: action.payload.nomeCompleto,
			};
			break;
		case 'setValueSenha':
			actualState = 
			{
				...state, 
				senha: action.payload.senha,
			};
			break;
		case 'setValueSenhaCheck':
			actualState = 
			{
				...state, 
				senhaCheck: action.payload.senhaCheck,
			};
			break;
		case 'limparDadosCliente':
			actualState = 
			{
				...state, 
				cpf: action.payload.cpf,
				email: action.payload.email,
				nomeCompleto: action.payload.nomeCompleto,
				senha: action.payload.senha,
				senhaCheck: action.payload.senhaCheck,
			};
			break;
		default:
			actualState = state;
			break;
	}

	return actualState;
}

export default CadastroReducer;