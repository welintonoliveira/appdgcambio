import { createStackNavigator } from "react-navigation";

import PreloadPerfil from '../../PreloadScreens/PreloadPerfil';
import Perfil from '../../screens/Perfil';
import AlterarSenha from '../../screens/AlterarSenha';

export default createStackNavigator({
	PreloadPerfil: {
	    screen: PreloadPerfil
	},
	Perfil: {
		screen: Perfil
	},
	AlterarSenha: {
		screen: AlterarSenha
	}
});