import { StyleSheet } from 'react-native';
import { colors } from '../../Styles';

const styles = StyleSheet.create({
  backgroundOpacity: {
    backgroundColor: colors.blackTransparent,
    flex: 1
  },
  areaTitulo: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  titulo: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 20
  }
});