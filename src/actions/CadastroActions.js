export const setValueCPF = (cpf) => {
	return{
		type:'setValueCPF',
		payload:{
			cpf
		}
	}
};

export const setValueEmail = (email) => {
	return{
		type:'setValueEmail',
		payload:{
			email
		}
	}
};

export const setValueNome = (nomeCompleto) => {
	return{
		type:'setValueNome',
		payload:{
			nomeCompleto
		}
	}
};

export const setValueSenha = (senha) => {
	return{
		type:'setValueSenha',
		payload:{
			senha
		}
	}
};

export const setValueSenhaCheck = (senhaCheck) => {
	return{
		type:'setValueSenhaCheck',
		payload:{
			senhaCheck
		}
	}
};

export const limparDadosCliente = () => {
	return{
		type:'setValueSenhaCheck',
		payload:{
			cpf: '',
			email: '',
			nomeCompleto: '',
			senha: '',
			senhaCheck: '',
		}
	}
};


