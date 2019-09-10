import { StyleSheet } from 'react-native';

import { colors } from '../../Styles';

const styles = StyleSheet.create({
  backgroundOpacity: {
    backgroundColor: colors.blackTransparent,
    flex: 1
  },
  areaCarreganto: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  textoCarregamento: {
    color: colors.white,
    fontSize: 18
  },
});

export default styles;