// import { fetch } from 'react-native';
const service = (url, param = {}, method = 'get') => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: param
    }).then(res => {
      console.log('res', res)
      // if (res.status === 200 && JSON.parse(res._bodyText).dm_error === 0) {
      //   resolve(res._bodyText)
      // } else {
      //   reject(res._bodyText)
      // }
    }).catch(err => {
      console.log('err', err)
      // reject(err._bodyText)
    })
  })
}

export default service