import { createStackNavigator } from "react-navigation";

import PreloadAjuda from '../../PreloadScreens/PreloadAjuda';
import Ajuda from '../../screens/Ajuda';

export default createStackNavigator({
  	PreloadAjuda: PreloadAjuda,
  	Ajuda: Ajuda,
});