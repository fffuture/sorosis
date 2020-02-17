// import Button from '../packages/button/index.js';
// import List from '../packages/list/index.js'
import Button from 'packages/button/index.js';
import List from 'packages/list/index.js'


// import locale from 'sorosis/src/locale';
import locale from 'sorosis-ui/src/locale';

const components = [
  Button,
  List
]

const install = function (Vue, opts = {}) {
  // locale.use(opts.locale); //翻译  还需研究
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.1.5',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Button,
  List,
}