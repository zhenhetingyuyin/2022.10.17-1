import React, { Component } from 'react';
import { Globalstyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle />
        <Header />
        <Iconfont />
      </Provider>
    )
  }
}