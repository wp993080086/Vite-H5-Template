import { Toast, ToastOptions } from 'vant'

const loadingExample = {
  /**
   * 普通
   * @param {String} text 文字
   * @param {ToastOptions} option 配置属性
   * @return {ToastOptions} 实例
   */
  show(text = '加载中', option: ToastOptions = {}) {
    return Toast.loading({
      message: text,
      duration: 0,
      forbidClick: true,
      ...option
    })
  },
  /**
   * 关闭提示
   * @return {Void} Void
   */
  hide() {
    Toast.clear()
  }
}
export default loadingExample
