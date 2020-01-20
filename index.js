import Button from './packages/button/index.js';
import List from './packages/list/index.js'

const components = [
  Button,
  List
]

const install = function (Vue, opts = {}) {
  // locale.use(opts.locale); //翻译  还需研究

  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  List,
}