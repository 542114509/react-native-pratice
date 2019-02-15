import { TOGGLE_DIALOG, TOGGLE_WEBVIEW } from '../action-types'
import { combineReducers } from 'redux'

const initialState = {
  dialogConf: {
    vis: false,
    text: '渲染了'
  },
  webview: {
    url: 'https://boc.inke.cn/banner/201810/mood-food/index.html?from=banner&inkewtype=web&inkewid=mood_food_201811&inkewname=qingxuliiaoli201811&iksonic=1'
  }
}

function dialog (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DIALOG:
      return {
        ...state,
        dialogConf: {
          ...action.status,
        }
      }

    default:
      return state
  }
}

function webview (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_WEBVIEW:
      return {
        ...state,
        webview: {
          ...action.url,
        }
      }

    default:
      return state
  }
}
export default combineReducers({
  dialog,
  webview
})