import { TOGGLE_DIALOG } from '../action-types'

export const toggleDialog = status => ({ type: TOGGLE_DIALOG, status })

export const toggleWebView = url => ({ type: TOGGLE_WEBVIEW, url })
