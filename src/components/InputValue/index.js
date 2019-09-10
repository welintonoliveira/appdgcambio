import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import styles from "./styles";

export default class InputValue extends Component{

  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.areaInput}>
          <Text style={styles.title}>{this.props.title}</Text>

          <TextInputMask
            style={styles.input}
            type={"money"}
            options={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: this.props.cifrao,
              suffixUnit: ""
            }}
            onChangeText={value => this.props.setTextValue(value)}
            value={this.props.value}
          />
        </View>
      </View>
    );
  }
}