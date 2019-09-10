import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import MenuDeslogadoNavigation from '../MenuDeslogadoNavigation';
import MenuLogadoNavigation from '../MenuLogadoNavigation';

const AutenticacaoNavigation = (isUserConnected) =>{ 
	return createAppContainer(
		createSwitchNavigator(
		  {
		    MenuLogadoNavigation: MenuLogadoNavigation,
		    MenuDeslogadoNavigation: MenuDeslogadoNavigation,
		  },
		  {
		    initialRouteName: isUserConnected ? 'MenuLogadoNavigation' : 'MenuDeslogadoNavigation',
		})
	);
}

export default AutenticacaoNavigation;