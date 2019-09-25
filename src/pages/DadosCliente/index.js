import React from 'react';
import { Container } from './styles';
import TextBox from '../../components/TextBox';

function DadosCliente(){
	return (
		<Container>
			<TextBox
				label="Nome Cliente" 
			/>
		</Container>
	);

}

export default DadosCliente;
