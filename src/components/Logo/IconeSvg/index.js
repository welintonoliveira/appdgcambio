import React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";

import { colors } from "../../../Styles";

export default (Icone = () => (
  <Svg
    id="prefix__Layer_1"
    x={0}
    y={0}
    viewBox="10 200 800 300"
    // xmlSpace="preserve"
    width="300"
    height="80"
    fill={colors.white}
  >
    <Path
      className="prefix__st0"
      d="M381 296H254v-53h92zM381 419.3H254V472h92zM510 359.2h-60.3L372.3 243l58.7-.4z"
    />
    <Path className="prefix__st0" d="M431 471.1l-59-.4 78.6-113.4 59.4 1.9z" />
    <Path
      className="prefix__st0"
      d="M254 331.3h196.7v50.3H254zM522 337.7l-29-44 36-51.1h57.3zM523.7 377.7L493 419.3l34.3 51.8h59z"
    />
  </Svg>
));
