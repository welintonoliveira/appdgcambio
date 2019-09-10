import { StyleSheet } from "react-native";

import { colors } from "../../../../Styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "center",
    // backgroundColor: colors.primary
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginLeft: 10
  },
  icon: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default styles;
