import React, { Component } from "react";
import { View, BackHandler, StyleSheet, Platform } from "react-native";
import { Content, Container } from "native-base";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";
import Loading from "../../components/Loading";

import HeaderApp from "../../components/HeaderApp";

class Ajuda extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      canGoBack: false,
      visible: true
    };

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick(){
    if (this.state.canGoBack) {
      this.refs[WEBVIEW_REF].goBack();
      return true;
    } else {
      return false;
    }
  }

  onNavigationStateChange(navState){
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  render(){
    return (
      <Container>
        <HeaderApp
          initialRouter={true}
          title="Ajuda"
          navigation={this.props.navigation}
          iconCarrinho={{ quantidadeItens: 0, visible: false }}
        />
        <Content contentContainerStyle={{ flex: 1 }}>
          <WebView
            bounces={false}
            ref={WEBVIEW_REF}
            onNavigationStateChange={this.onNavigationStateChange.bind(this)}
            source={{ uri: this.props.urlAjuda }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            renderLoading={() => <Loading />}
            onLoadEnd={syntheticEvent => {
              const { nativeEvent } = syntheticEvent;
            }}
          />
        </Content>
      </Container>
    );
  }
}

const WEBVIEW_REF = "WEBVIEW_REF";

const mapStateToProps = state => {
  return {
    urlAjuda: state.url.urlAjuda
  };
};

const AjudaConnect = connect(
  mapStateToProps,
  {}
)(Ajuda);
export default AjudaConnect;