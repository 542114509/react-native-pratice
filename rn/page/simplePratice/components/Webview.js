/**
 * @author songjf
 * @time 2019 02 15
 * @name Webview 底层组件
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
    this.props.navigation.setParams({ // 设定webview标题
      title: config.title
    })
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
    height: windowSize.height - 60, // 减去导航bar的高度
    width: windowSize.width,
  },
});
