import React, { Component } from 'react'
import {
	View,
	Text,
  Image,
  FlatList,
  StyleSheet
} from 'react-native'
import { Button, Toast, Steps } from 'antd-mobile-rn'
const Step = Steps.Step
import service from './../../util/service'
import Child from './child'
const url = 'https://imagescale.inke.cn:443/imageproxy2/dimgm/scaleImage?url=http%3A%2F%2Fimg2.inke.cn%2FMTUzMzM3OTEyNzIzMyM4MjgjanBn.jpg&w=120&h=120&s=80&c=0&o=0'
export default class BasePractice extends Component {

	constructor(props) {
		super(props)
		this.state = {
			text: '初始化'
    }
    this.handleToast = this.handleToast.bind(this)
	}

	componentDidMount() {
    console.log(service)
    service('https://actapi.busi.inke.cn/activity/sep18/bosom_friend_in_autumn/single_rank_new?uid=10970737').then(res => {
      console.log('res', res)
    }).catch($e => {
      console.log($e)
    })
  }
  
  handleToast () {
    Toast.success('hhahah', 3)
  }

	componentWillReceiveProps() {
		
	}

	render() {
    const { text } = this.state
    const { handleToast } = this
    return <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  img: {
    alignItems: 'center',
    height: 100,
    width: 100
  },
  btn: {
    width: 300,
    marginTop: 0,
    justifyContent: 'center'
  }
});
