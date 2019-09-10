import metrics from "./metrics";
import colors from "./colors";
import fonts from "./fonts";

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  section: {
    margin: metrics.doubleBaseMargin
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: fonts.regular,
    alignSelf: "center",
    marginBottom: metrics.doubleBaseMargin
  },
  backgroundOpacity: {
    flex: 1,
    paddingTop: 30
  }
};

export default general;
