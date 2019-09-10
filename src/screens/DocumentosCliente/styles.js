import { StyleSheet } from 'react-native';

import { colors, general } from '../../Styles';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    color: colors.white,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  areaSubTitle: {
    marginBottom: 10
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "normal"
  },
  areaMensagemCliente: {
    flex: 1,
    backgroundColor: colors.greyDark
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    position: "absolute",
    left: 0,
    right: 0
  },
  textButton: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18
  },
  backgroundOpacity: general.backgroundOpacity,
  areaCarreganto: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  textoCarregamento: {
    color: colors.white,
    fontSize: 18
  }
});

export default styles;