export const Endereco = {
	endereco:{
		cep: '',
		tipoEndereco: {
			idTipoEndereco: 0,
			descricao: ''
		},
		cidade: {
			idCidade: 0,
			descricao: ''
		},
		uf: {
			idUF: 0,
			descricao: ''
		},
		bairro: '',
		logradouro: '',
		numero: '',
		complemento: '',
	}
};


const EnderecoReducer = (state = Endereco, action) => {
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

export default EnderecoReducer;