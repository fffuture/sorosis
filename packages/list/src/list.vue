<template>
  <ul class="so-list so-line-both">
    <li v-for="(item, i) in listData" :key="i">
      <div class="so-icon-container">
        <i class="so-icon" :style="{backgroundImage:'url('+ item.icon +')'}"></i>
      </div>
      <div class="so-content-container so-line-bottom">
        <span>{{ item.name }}</span>
        <span class="so-icon-arrow_right"></span>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "SoList",
  props: ["iconSize", "listData"],
  data() {
    return {};
  },
  computed: {
    // localList: function() {
    //   let defaultData = [
    //     {
    //       name: "支付1"
    //       // icon: require("../assets/icon/me/so-icon-pay.png")
    //     }
    //   ];
    //   return typeof this.listData === undefined ? this.listData : defaultData;
    // }
  }
};
</script>
<style lang="stylus" scoped>
$--main-font-size = 1.46rem;
$--main-font-color = #303030;
$--top-line-color = #d4d4d4;

// @import '../../theme-chalk/common/var';

// @require ('../../theme-chalk/common/var');
.so-list {
  color: $--main-font-color;
}

.so-line-both {
  position: relative;

  &:before, &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    border-top: 1px solid $--top-line-color;
    transform-origin: 50% 50%;
    transform: scale(1, 0.3);
    z-index: 1;
  }

  &:after {
    top: auto;
    bottom: 0;
  }
}

.so-line-top {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    border-top: 1px solid $--top-line-color;
    transform-origin: 50% 50%;
    transform: scale(1, 0.3);
    z-index: 1;
  }
}

.so-line-bottom {
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    border-top: 1px solid $--top-line-color;
    transform-origin: 50% 50%;
    transform: scale(1, 0.3);
    z-index: 1;
  }
}

ul {
  list-style: none;
  position: relative;
  margin: 0;
  // margin: 0.8rem 0 0 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #fff;

  .so-icon-arrow_right {
    display: inline-block;
    width: 1.32rem;
    height: 1.32rem;
    background-image: url('../../theme-chalk/assets/icon-arrow_right.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .so-icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-size: 120% 120%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .so-icon-container {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    width: 5.3rem;
    height: 100%;
    overflow: hidden;
  }

  li {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 5.21rem;
    font-size: $--main-font-size;
    color: #0d0d0d;

    .icon {
      display: inline-block;
      width: 5.32rem;
      height: 100%;
      line-height: 5.21rem;
      text-align: center;
    }

    .so-content-container {
      position: relative;
      box-sizing: border-box;
      padding-right: 1.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
    }
  }

  li:last-child .so-line_bottom:after {
    display: none;
  }
}
</style>