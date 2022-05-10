import { Toast, ToastOptions } from 'vant'

const toastExample = {
  /**
   * 普通提示
   * @param {String} text 文字
   * @param {ToastOptions} option 配置属性
   */
  info(text: string, option: ToastOptions = {}) {
    return Toast({
      message: text,
      type: 'text',
      position: 'top',
      overlay: false,
      forbidClick: true,
      duration: 2000,
      ...option
    })
  },
  /**
   * 成功提示
   * @param {String} text 文字
   * @param {ToastOptions} option 配置属性
   */
  success(text: string, option: ToastOptions = {}) {
    return Toast({
      type: 'success',
      message: text,
      position: 'top',
      overlay: false,
      forbidClick: true,
      duration: 2000,
      ...option
    })
  },
  /**
   * 失败提示
   * @param {String} text 文字
   * @param {ToastOptions} option 配置属性
   */
  fail(text: string, option: ToastOptions = {}) {
    return Toast({
      type: 'fail',
      message: text,
      position: 'top',
      overlay: false,
      forbidClick: true,
      duration: 2000,
      ...option
    })
  },
  /**
   * 关闭提示
   * @return {Void} Void
   */
  close() {
    Toast.clear()
  }
}
export default toastExample
