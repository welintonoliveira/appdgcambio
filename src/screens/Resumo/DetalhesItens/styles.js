import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../../Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  textoQuantidade: {
    color: colors.warning,
    textAlign: "left",
    position: "relative",
    fontSize: fonts.bigger,
    marginRight: 5
  },
  textoDescricaoMoeda: {
    color: colors.white,
    textAlign: "left",
    fontSize: fonts.bigger
  },
  espacoMoeda: {
    flex: 1
  },
  espacoValores: {
    flex: 1
  },
  valorMoedaNacional: {
    color: colors.white,
    textAlign: "right"
  },
  valorVet: {
    backgroundColor: colors.warning,
    padding: 5,
    color: colors.black,
    textAlign: "right",
    fontSize: fonts.small
  },
  espacoEsquerda: {
    flex: 1
  },
  espacoDireita: {
    flex: 1
  },
  textButtonRemover: {
    color: colors.danger
  },
  buttonRemover: {
    flex: 1
  },
  iconRemover: {
    color: colors.danger,
    marginRight: 5
  }
});

export default styles;