import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ImagePicker from "react-native-image-picker";
import { colors } from "../Styles";

export default class UploadDocumento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageAnexada: false
    };

    this.setFile = this.setFile.bind(this);
  }

  setFile(){

    try{
      let options = {
        title: 'Tire uma Foto',
        takePhotoButtonTitle: 'Tirar Foto',
        chooseFromLibraryButtonTitle:'Escolha uma foto existente',
        mediaType: 'photo',
        quality:0.6
      };

      // Indica que o cliente está utilizando semente a imagem de selfie
      if(this.props.typeCarmera !== null && this.props.typeCarmera !== undefined && this.props.typeCarmera.type === 'front'){
        options = {...options, chooseFromLibraryButtonTitle: null, cameraType: this.props.typeCarmera.type};
        
      }

      ImagePicker.showImagePicker(options, (r)=>{
        if(r.uri){

          let file = {
          Documento:{
              NomeDocumento: r.fileName,
              NomeOriginal: r.fileName,
              Tamanho: r.fileSize,
              ContentType: r.type,
              Content: r.data
            }
          }

          this.props.getFile(file, this.props.arquivo.key);

          this.setState({imageAnexada: true});
        }
      });
    } catch (error) {
      alert(error + " A30D5");
    }
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TouchableOpacity style={styles.button} onPress={this.setFile}>
          <View style={styles.espacoInternoBotao}>
            {this.state.imageAnexada === true ? (
              <View style={styles.wrapIcon}>
                <Icon style={styles.icon} name="check" size={30} />
              </View>
            ) : (
              <View style={styles.wrapIcon}>
                <Icon style={styles.icon} name="camera-retro" size={30} />
              </View>
            )}

            <View>
              <Text style={styles.text}>{this.props.arquivo.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  espacoInternoBotao: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  icon: {
    color: colors.primary,
    marginBottom: 10
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5
  },
  wrapIcon: {
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 50,
    paddingTop: 9,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20
  }
});
