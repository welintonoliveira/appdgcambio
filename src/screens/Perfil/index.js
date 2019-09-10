import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Content, Container } from "native-base";

import HeaderApp from "../../components/HeaderApp";
import styles from "./styles";

const Perfil = ({ navigation }) => (
  <Container>
    <HeaderApp
      initialRouter={true}
      backClick={this.back}
      title="Perfil"
      navigation={navigation}
      iconCarrinho={{ quantidadeItens: 0, visible: false }}
    />
    <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
      <ImageBackground
        source={require("../../img/background-dg1.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.backgroundOpacity}>
          <View style={styles.containerButtons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AlterarSenha")}
            >
              <Text style={styles.title}>Alterar Senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </Content>
  </Container>
);

Perfil.navigationOptions = {
  header: null
};

export default Perfil;
