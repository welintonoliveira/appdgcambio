import { StyleSheet, Platform, StatusBar } from "react-native";

import { colors, fonts, metrics } from "../../Styles";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
// const APPBAR_HEIGHT = Platform.OS === "ios" ? 54 : 56;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 104 : 56;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.header,
    paddingTop: Platform.OS === "ios" ? 40 : 30,
    paddingBottom: 50,
    margin: 0,
    height: APPBAR_HEIGHT
  },
  icon: {
    color: colors.black,
    marginTop: Platform.OS === "ios" ? 15 : 20,
    padding: Platform.OS === "ios" ? 15 : 10,
    height: 50
  },
  hederColor: {
    backgroundColor: colors.header
  },
  espacoLogo: {
    justifyContent: "center",
    width: "100%",
    height: 50,
    alignContent: "center",
    alignSelf: "center",
    marginTop: Platform.OS === "ios" ? 20 : 0
  },
  title: {
    color: colors.black,
    fontSize: 12,
    textAlign: "center"
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});

export default styles;
