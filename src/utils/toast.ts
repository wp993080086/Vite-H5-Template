import { Toast, Dialog, Notify, ToastOptions, DialogOptions, NotifyOptions } from 'vant'

/**
 * 普通提示
 * @param {String} text 文字
 * @param {ToastOptions} option 配置属性
 */
export const toast = (text: string, option: ToastOptions = {}) => {
  return Toast({
    message: text,
    position: 'top',
    overlay: false,
    forbidClick: true,
    duration: 2000,
    ...option
  })
}
/**
 * 关闭提示
 * @return {Void} void
 */
export const close = () => {
  Toast.clear()
}
/**
 * alert提示框
 * @param {String} text 文案
 * @param {Object} option 配置属性
 */
export const alert = (text: string, option: DialogOptions = {}) => {
  return new Promise((resolve, reject) => {
    Dialog.alert({
      title: '温馨提示',
      message: text,
      ...option
    })
      .then(() => {
        resolve(true)
      })
      .catch(error => {
        reject(error)
      })
  })
}
/**
 * confirm确认框
 * @param {String} text 文案
 * @param {Object} option 配置属性
 */
export const confirm = (text: string, option: DialogOptions = {}) => {
  return new Promise((resolve, reject) => {
    Dialog.confirm({
      title: '温馨提示',
      message: text,
      ...option
    })
      .then(() => {
        resolve(true)
      })
      .catch(error => {
        reject(error)
      })
  })
}
/**
 * notify通知
 * @param {String} text 文案
 * @param {Object} option 配置属性
 */
export const notify = (text: string, option: NotifyOptions = {}) => {
  return Notify({
    message: text,
    duration: 3000,
    ...option
  })
}
