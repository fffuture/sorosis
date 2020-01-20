import SoButton from './src/button.vue'

SoButton.install = function (Vue) {
  Vue.compponent(SoButton.name, SoButton)
}

export default SoButton