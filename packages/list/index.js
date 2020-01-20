import SoList from './src/list.vue'

SoList.install = function (Vue) {
  Vue.compponent(SoList.name, SoList)
}

export default SoList