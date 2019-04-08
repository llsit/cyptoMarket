import React, { Component } from 'react';
import Header from './component/Header'
import DataCoin from './component/DataCoin'
import Store from './store'
import { getAllTicker } from "./store/action/ticker";
import { Provider } from "react-redux";
import { AppLoading } from 'expo';
import { Container, View, StyleProvider } from 'native-base';
import platform from './native-base-theme/variables/platform';
import getTheme from './native-base-theme/components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(platform)}>
        <Provider store={Store} >
          <View style={{ height: 24 }} />
          <Container style={{ backgroundColor: '#e6e6e6' }}>
            <Header />
            <DataCoin />
          </Container>
        </Provider>
      </StyleProvider >
    );
  }
}


Store.dispatch(getAllTicker());
