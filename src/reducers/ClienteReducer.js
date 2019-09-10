export const Cliente = {
	cliente:{
		cpf: '',
		email: '',
		nomeCompleto: '',
		senha: '',
		senhaConfirmacao: '',
	}
};


const ClienteReducer = (state = Cliente, action) => {
	let actualState = null;

	if(action.type == 'clienteChanged'){
		actualState ={
			...state,
			cliente: action.payload.cliente
		}
	}else{
		actualState = {...state};
	}

	return actualState;
};

export default ClienteReducer;