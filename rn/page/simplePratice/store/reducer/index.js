import { TOGGLE_DIALOG } from '../action-types'

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

export default dialog