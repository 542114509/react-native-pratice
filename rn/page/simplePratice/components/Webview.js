/**
 * @author songjf
 * @time 2019 02 15
 * @name Webview组件
 * @param { url }
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { windowSize } from '../../../common/Util'

@connect()
export default class WebviewComp extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {

  }

  handleChangeWebviewConfig = config => {
    console.log(config.title)
    console.log(this.props.navigation)
    this.props.navigation.setParams({
      title: config.title
    })
    console.log('after', this.props.navigation)
  }

  render() {
    const { url } = this.props
    return (
      <View style={styles.wrap}>
        <WebView
          onNavigationStateChange={this.handleChangeWebviewConfig}
          source={{ uri: url }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    height: windowSize.height,
    width: windowSize.width,
  },
});
