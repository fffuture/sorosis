<template>
  <div id="app">
    A UI FrameWork!!!
    <button @click="setLang('zh-CN')">中文</button>
    <button @click="setLang('en')">英文</button>
    <so-button></so-button>
    <so-list v-for="(item,index) in 3" :key="index"></so-list>
  </div>
</template>

<script>
import { use } from "main/locale";
import zhLocale from "main/locale/lang/zh-CN";
import enLocale from "main/locale/lang/en";

const LANGUAGE_KID = ["zh-CN", "en"]; //预设语言种类

// localStorage.setItem("SOROSIS_LANGUAGE", "en");

const localize = lang => {
  //只是单纯的设置语言，页面不会实时跟随变化。
  //解决方案，设置个current lang = zhLocale | enLocale,然后显示的内容用computed来做，相当于做了个变化检测（观察者模式）
  switch (lang) {
    case "zh-CN":
      use(zhLocale);
      break;
    default:
      console.log("执行");
      use(enLocale);
  }
};
localize(localStorage.getItem("SOROSIS_LANGUAGE"));

export default {
  name: "app",
  components: {},
  created: function() {},
  methods: {
    setLang(lang) {
      // console.log("执行设置语言");
      // alert("设置成功，请刷新页面");

      localStorage.setItem("SOROSIS_LANGUAGE", lang);
      alert("切换语言成功！！");
      location.reload();
      // localize(localStorage.getItem("SOROSIS_LANGUAGE"));
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
