<template>
  <!-- <button class="so-btn_primary" style="color:orange">{{test}} {{t('el.test.name')}}</button> -->
  <button class="so-btn_primary" style="color:orange">{{ t('el.test.name') }}</button>
</template>
<script type="text/babel">
// import { t } from "../../../src/locale";
// import Locale from 'element-ui/src/mixins/locale';
import Locale from "../../../src/mixins/locale";

export default {
  //mixins用来挂载t(翻译)函数
  mixins: [Locale],
  name: "SoButton",
  data() {
    return {
      msg: "button"
    };
  },
  computed: {
    // test() {
    //   return t("el.test.name");
    // }
  }
};
</script>