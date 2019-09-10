export const clienteChanged = (cliente) => {
	return{
		type:'clienteChanged',
		payload:{
			cliente,
		}
	}
};