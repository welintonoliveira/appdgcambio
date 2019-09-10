import { StyleSheet } from "react-native";

import { colors } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight
  },
  title: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10
  },
  subTitle: {
    color: "black",
    fontSize: 17,
    textAlign: "center"
  },
  containerText: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
    paddingTop: 10
  },
  button: {
    backgroundColor: "rgba(40, 167, 69, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    marginTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 10,
    zIndex: 2
  },
  textButton: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    zIndex: 1,
    marginLeft: 20,
    textTransform: "uppercase",
    marginTop: 3,
    textAlign: "center"
  },
  icon: {
    color: colors.white,
    textAlign: "center"
  }
});

export default styles;