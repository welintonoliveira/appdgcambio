// Valida se o cpf informado é valido
const isCpfValid = (cpf) =>{	
    if (cpf.length !== 11)
        return false;

    //Valida se todos algarismos são iguais
    let todosIguais = true;
    let temp = cpf;
    for (let i = 1; i < temp.length; i++)
    {
        if (temp.substr(i, 1) != temp.substr(i - 1, 1))
        {
            todosIguais = false;
            break;
        }
    }

    if (todosIguais)
        //Como todos os algorismos são iguais, o cpf é inválido.
        return false;

    //Validação de digito verificador
    let soma1 = 0;
    let soma2 = 0;
    let dig1 = 0;
    let dig2 = 0;
    let resto1 = 0;
    let resto2 = 0;

    for (let i = 0; i < 9; i++)
    {
        soma1 += parseInt(cpf[i]) * (10 - i);
    }
    resto1 = soma1 % 11;
    dig1 = 11 - resto1;
    if (dig1 > 9) dig1 = 0;

    for (let j = 0; j < 9; j++)
    {
        soma2 += parseInt(cpf[j]) * (11 - j);
    }
    soma2 += dig1 * 2;
    resto2 = soma2 % 11;
    dig2 = 11 - resto2;

    if (dig2 > 9) dig2 = 0;

    if ((dig1.toString() != cpf[9]) || (dig2.toString() != cpf[10]))
        return false;

    return true;
}

// Converte o valor do campo text para um cpf e faz a validação
export const toCPF = (text) =>{
	// Expressão regular para validar o formato do cpf
	let expressaoCPF = /[0-9]/;

	// Objeto a ser retornado
	let result = {
		cpf:  text,
		isValid:false,
		errorMessage:'O valor informado no campo CPF é inválido.'
	};

	if(text.length <= 0){
		result.errorMessage = 'É necessário preencher o CPF';
	}else if(text.length == 11){

		// Valida se o email está de acordo com a expressão regular
		if(expressaoCPF.test(text)){
			// Valida se o cpf é valido
			if(isCpfValid(text)){
				result.isValid = true;
				result.errorMessage = '';
			}else{
				result.errorMessage = 'O CPF informado não contém uma numeração valida.';		
			}
		}else{
			result.errorMessage = 'Não é permitido letras e caracteres especiais para o campo CPF.';
		}
	}

	// Retorna o resultado da conversão
	return result;
}

// Remover para arquivo externo
export const toEmail = (text) =>{

	// Expressão regular para validar o formato do email
	let expressaoEmail = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

	// Objeto a ser retornado
	let result = {
		email:'',
		isValid:false,
		errorMessage:''
	};

	if(text.length <= 0){
		console.log('91');
		result.email = text;
		result.errorMessage = 'É necessário preencher o campo e-mail';
	}else{
		// converte o e-mail para minusculo
		let email= text.toLowerCase();

		// Valida se o email está de acordo com a expressão regular
		if(expressaoEmail.test(email)){
			result.email = email;
			result.isValid = true;
		}else{
			result.email = email;
			result.errorMessage = 'O e-mail informado não é válido.';
		}
	}

	// Retorna o resultado da conversão
	return result;
}

// Converte o valor no formato de cep
const toCEP = (cep) =>{
	let expressaoCEP = /[0-9]/;

	let result = {
		cep:  cep,
		isValid:false,
		errorMessage:'É necesário preencher o campo CEP.'
	};

	// Verifica se foi informado algum dado do cep
	if(cep.length > 0){
		if(expressaoCEP.test(cep)){
			result.isValid = true;
			result.errorMessage = '';
		}else{
			result.errorMessage = 'O campo CEP não permite letras e caracteres especiais.';
		}
	}
	
	return result;
}

