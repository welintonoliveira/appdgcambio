import { createStackNavigator } from "react-navigation";

import PreloadLoja from '../../PreloadScreens/PreloadLoja';
import Lojas from '../../screens/Lojas';
import LojaDetalhe from '../../screens/LojaDetalhe';

export default createStackNavigator({
  PreloadLoja: {
    screen: PreloadLoja
  },
  Lojas: {
    screen: Lojas
  },
  LojaDetalhe: {
    screen: LojaDetalhe
  }
});