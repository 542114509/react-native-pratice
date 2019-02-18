/**
 * @author songjf
 * @time 2019 02 18
 * @name Webview 业务层复用组件
 * @param
 */
import React, { Component } from 'react';
import { StyleSheet, WebView } from 'react-native';
import CWebview from '../components/Webview'
import { windowSize } from '../../../common/Util'

export default class WebScreen extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    
    }
  }

  componentDidMount () {
    
  }

  handleChangeText = () => {
    
  }

  render() {
    const { webview, navigation } = this.props
    return <CWebview navigation={navigation} url={navigation.state.params.url}/>
  }
}
