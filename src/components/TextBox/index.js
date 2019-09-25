import React from 'react';
import { Campo, Input, Label } from './styles';

export default function TextBox({ label }){
	return(
		<Campo>
			<Label>{label}</Label>
			<Input />
		</Campo>
	);
};