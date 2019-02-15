import { TOGGLE_DIALOG, TOGGLE_WEBVIEW } from '../action-types'
import { combineReducers } from 'redux'

const initialState = {
  dialogConf: {
    vis: false,
    text: '渲染了'
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

export default combineReducers({
  dialog
  // webview
})