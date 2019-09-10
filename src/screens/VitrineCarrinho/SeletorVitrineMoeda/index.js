import React, { Component } from "react";
import { FlatList, View, Text, TouchableOpacity, Image } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

export default class SeletorVitrineMoeda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: "none",
      position: "relative",
      itens: this.props.itens,
      selectValue: this.props.itens[0].id,
      selectText: this.props.itens[0].nome
    };
  }

  onSetVitrine = (id, descricao) => {
    this.selectedItem();

    this.setState({
      selectValue: id,
      selectText: descricao
    });

    this.props.onSetVitrine(id);
  };

  selectedItem = () => {
    if (this.state.visible === "none") {
      this.setState({ visible: "flex", position: "absolute" });
    } else {
      this.setState({ visible: "none", position: "relative" });
    }
  };

  componentDidUpdate() {
    if (this.state.itens != this.props.itens) {
      this.setState({
        itens: this.props.itens,
        selectValue: this.props.itens[0].id,
        selectText: this.props.itens[0].nome
      });
    }
  }

  getWidthItens = itens => {
    let quantidadeItens = itens.length;

    if (quantidadeItens == 1) {
      return 43;
    } else if (quantidadeItens == 2) {
      return 86;
    } else if (quantidadeItens == 3) {
      return 129;
    } else {
      return 172;
    }
  };

  closeItens = () => {
    this.setState({ visible: "none", position: "relative" });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ paddingBottom: 10 }}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.selectedItem()}
          style={styles.areaDefaultItem}
        >
          <View style={styles.areatitleDefaultItem}>
            <Text style={styles.titleDefaultItem}>{this.state.selectText}</Text>
          </View>
          <View style={styles.areaIconDefaultItem}>
            <IconIonicons
              name="md-arrow-dropdown"
              style={styles.icon}
              size={18}
            />
          </View>
        </TouchableOpacity>
        <View
          style={[
            styles.areaItens,
            {
              position: this.state.position,
              display: this.state.visible,
              height: this.getWidthItens(this.props.itens)
            }
          ]}
        >
          <FlatList
            horizontal={false}
            data={this.props.itens}
            keyExtractor={item => item.key.toString()}
            renderItem={({ item }) => (
              <Button data={item} click={this.onSetVitrine} />
            )}
          />
        </View>
      </View>
    );
  }
}

const Button = ({ data, click }) => (
  <TouchableOpacity
    key={data.key}
    onPress={() => click(data.id, data.nome)}
    style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row'}}
  >
    <View style={{ width: '20%'}}>
     <Image
            //source={require(`../../../img/bandeiras/${data.codigoBacen}.png`)}
            source={require(`../../../img/bandeiras/220.png`)}
            style={{ height: 30, width: 30, borderRadius: 15 }}
          />
    </View>
    <View style={{ width: '80%'}}>
      <Text style={styles.label}>{data.nome}</Text>
    </View>
  </TouchableOpacity>
);
