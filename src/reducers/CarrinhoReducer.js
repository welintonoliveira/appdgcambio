export const Carrinho = {
	cliente: {
		nome: 'welinton alex de oliveira',
		email: 'welintonoliveira@primecase.com.br'
	}
};


const CarrinhoReducer = (state = Carrinho, action) => {
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

export default CarrinhoReducer;