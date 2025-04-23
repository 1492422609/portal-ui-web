<template>
    <div class="Pweb-side">
    <div class="Pweb-scroll Pweb-side-scroll">
      <p class="nav-title">组件</p>
      <div class="module">
          <p class="module-title">基础组件</p>
          <ul>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe" :class="choose == 'layoutUI' ? 'current' : ''"  @click="gotoNext('layoutUI')">Layout 布局</a></li>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe" :class="choose == 'colorUI' ? 'current' : ''"  @click="gotoNext('colorUI')">Color 色彩</a></li>
              <li><a target="myIframe"  :class="choose == 'Typography' ? 'current' : ''"  @click="gotoNext('TypographyFont')">Typography 字体</a></li>
              <!-- 原选中代码，移除 href 属性 -->
              <li><a target="myIframe" :class="choose == 'buttonUI' ? 'current' : ''"  @click="gotoNext('buttonUI')">Button 按钮</a></li>
              <li><a target="myIframe" :class="choose == 'borderUI' ? 'current' : ''" @click="gotoNext('borderUI')">Border 边框</a></li>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe" :class="choose == 'iconUI' ? 'current' : ''" @click="gotoNext('iconUI')">Icon 图标</a></li>
          </ul>
      </div>
      <div class="module">
          <p class="module-title">反馈组件</p>
          <ul>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe">Dialog 弹出框</a></li>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe">Toast 轻提示</a></li>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe">Popover 气泡弹出框</a></li>
          </ul>
      </div>
      <div class="module">
          <p class="module-title">表单组件</p>
          <ul>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe">Form 表单</a></li>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe">Picker 选择器</a></li>
          </ul>
      </div>
      <div class="module">
          <p class="module-title">其他组件</p>
          <ul>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe">Navbar 导航栏</a></li>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe">Tab 标签栏</a></li>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe">Searchbar 搜索栏</a></li>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe">Collapse 折叠面板</a></li>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe">Empty 空状态</a></li>
              <!-- 移除 href 属性 -->
              <li><a target="myIframe">Swiper 轮播图</a></li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'



export default {
  props: {
    choose: {
      type: String,
      default: ''
    }
  },
  setup() {
    const router = useRouter();
    function gotoNext(name) {
      router.push({ name: name })
    }
    return { gotoNext }
},
}
</script>

<style scoped>

</style>
    