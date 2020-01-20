/**
 * 引入和注册组件
 *  element-ui使用的是字体图标  放在theme-chlk下的src/fonts下（font文件）
 * 
 * 这个项目暂时也存放在theme-chlk/src/assets下（暂时使用图片文件）
 * 
 * theme-chalk/common 存在各种变量(颜色、字体等)、 各种过度效果(包含路由跳转过渡)
 * 
 */

// import Vue from 'vue';
import SoButton from './button/index';
import SoList from './list/index';

const components = [
  SoButton,
  SoList,
]

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component))
  // Vue.prototype.$message = message
}

export default {
  install,
  SoButton,
  SoList
}

