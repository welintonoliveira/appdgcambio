import { StyleSheet } from 'react-native';

import { colors } from '../../Styles';

const styles = StyleSheet.create({
  headerTitle: {
    color: colors.white,
    fontSize: 20,
    flexDirection: "row",
    flex: 1,
    marginTop: 15
  },
  boxIcone: {
    flexDirection: "row"
  },
  icone: {
    color: colors.white,
    marginRight: 15
  },
  container: {
    marginTop: 100,
    marginLeft: 100
  },
  topbar: {
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  topbarTextDisabled: {
    color: "gray"
  },
  activityIndicatorStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  stylOld: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  styleNew: {
    flex: 1
  },
  WebViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  }
});

export default styles;