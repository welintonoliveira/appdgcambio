export const Entrega = {
	idTipoEntrega: 0,
};

const EntregaReducer = (state = Entrega, action) => {

	let actualState = null;

	switch(action.type){
		case 'authChanged':
			actualState = 
			{
				...state, 
				idTipoEntrega: action.payload.clienteID,
			};
			break;
		default:
			actualState = state;
			break;
	}

	return actualState;
}

export default EntregaReducer;