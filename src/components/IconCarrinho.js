import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconBadge from "react-native-icon-badge";
import { colors } from "../Styles";

export default class IconCarrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.iconCarrinho.visible === true) {
      return (
        <TouchableHighlight
          underlayColor={null}
          onPress={() => this.props.changeUrl()}
        >
          <View>
            <Text />
            <IconBadge
              MainElement={
                <Icon
                  name="shopping-cart"
                  size={24}
                  color={colors.white}
                  style={{ marginTop: -15 }}
                />
              }
              BadgeElement={
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 10,
                    fontWeight: "bold"
                  }}
                >
                  {this.props.iconCarrinho.quantidadeItens}
                </Text>
              }
              IconBadgeStyle={{
                width: 1,
                height: 20,
                backgroundColor: colors.danger,
                marginTop: -14,
                opacity: 0.7
              }}
              Hidden={this.props.iconCarrinho.quantidadeItens == "0"}
            />
          </View>
        </TouchableHighlight>
      );
    } else {
      return <View />;
    }
  }
}
