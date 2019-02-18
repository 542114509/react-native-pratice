/**
 * @author songjf
 * @time 2019 02 15
 * @name banner
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { windowSize } from '../../../common/Util';
import Swiper from 'react-native-swiper';

const BANNER_CONFIG = [{
  img: 'http://img.ikstatic.cn/MTU0ODkzMjY2ODY0OCMxNDkjanBn.jpg',
  url: 'https://boc.inke.cn/banner/201901/spring-festival/index.html?from=banner&inkewtype=web&inkewid=spring_festival_201901&inkewname=xinchunjianianhua_201901&iksonic=1&web_entrance_id=1'
}, {
  img: 'http://img.ikstatic.cn/MTU0OTAxMDA2NDY4NSMxMzMjcG5n.png',
  url: 'https://boc.inke.cn/banner/201901/recall/index.html?from=banner&inkewtype=web&inkewid=recall_201901&inkewname=yonghuzhaohui_201901&iksonic=1&web_entrance_id=1'
}, {
  img: 'http://img.ikstatic.cn/MTU0OTAxMDA2NDY4NSMxMzMjcG5n.png',
  url: 'https://boc.inke.cn/banner/201901/recall/index.html?from=banner&inkewtype=web&inkewid=recall_201901&inkewname=yonghuzhaohui_201901&iksonic=1&web_entrance_id=1'
}, {
  img: 'http://img.ikstatic.cn/MTU0ODM5OTEzMDk0MyM0NDkjanBn.jpg',
  url: 'https://boc.inke.cn/innerapp/lucky-gift/index.html?web_entrance_id=1'
}]

@connect()
export default class Banner extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      bannerList: []
    }
  }

  componentDidMount () {
    this.handleGetBannerList()
  }

  handleGetBannerList = () => {
    this.setState({
      bannerList: BANNER_CONFIG
    })
  }

  handleClickItem = (e, url) => {
    this.props.onSkip('web', url)
  }

  render() {
    const { bannerList } = this.state

    const renderSwiperItem = () => {
      return bannerList.map((i, index) => <TouchableWithoutFeedback onPress={e => { this.handleClickItem(e, i.url) }} key={index}>
        <View style={styles.item}>
          <Image style={styles.img} source={{ uri: i.img }} />
        </View>
      </TouchableWithoutFeedback>)
    }

    return (
      <Swiper
        loop={true}     //若为false，滑动到最后一张就不再滑到第一张，待会测试
      >
      { renderSwiperItem() }
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: 100,
    width: windowSize.width
  },
  img: {
    height: '100%',
    width: '100%'
  }
});
