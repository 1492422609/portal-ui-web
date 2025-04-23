<template>
    <div class="Pbody">
      <div style="display:flex">
        <s-left choose="colorUI" ></s-left>
     <!--中间活动说明区域-->
     <div class="Pweb-main">
    <!--标题说明-->
    <div class="Pweb-card">
      <p class="Pweb-t1">Color 色彩</p>
      <p class="Pweb-t4">色彩对产品的视觉传达和多维度信息的承载有着很重要的影响，色彩配置应当清晰、准确传达有效的信息和品牌感。</p>
    </div>
    <!--引入说明-->
    <div class="Pweb-card">
      <p class="Pweb-t2">引入</p>
      <p class="Pweb-t4">通过以下方式来全局注册组件，更多注册方式请参考组件注册。</p>
      <div class="Pweb-code">
        <span></span>
      </div>
    </div>
    <!--代码演示-->
    <div class="Pweb-card">
      <p class="Pweb-t2">代码演示</p>
      <p class="Pweb-t4">按钮支持 default、primary、primary2、success、warning、danger 、link五种类型;默认为 default。</p>
      <div class="Pweb-code">
          <span></span>

        </div>
    </div>
  </div>
      </div>
     
   <!--右侧固定宽高展示区域-->
   <div class="Pweb-display">
    <div class="Pweb-display-nav"><span class="iconfont arrow-left">&#xe750;</span>颜色规范</div>
    <div class="Pweb-scroll Pweb-display-scroll">
      <div class="Pweb-display-card">
        <p class="Pweb-t3">品牌色</p>
        <div class="Pweb-color postal-bg-default">
            <span class="main">品牌色 default <br> #18AE67</span>
            <span class="dark">+10% #000000 <br> #169C5C</span>
            <span class="light postal-text-default">+90% #FFFFFF <br> #E8F7F0</span>
        </div>
      </div>
      <div class="Pweb-display-card">
        <p class="Pweb-t3">辅助色</p>
        <div class="Pweb-color Pweb-color-fz postal-bg-danger ">
            <span class="main">错误/警示 danger <br> #FF5446</span>
            <span class="dark">#E54B3F</span>
            <span class="light postal-text-danger">#FFEEED</span>
        </div>
        <div class="Pweb-color Pweb-color-fz postal-bg-tips ">
            <span class="main">提示色 tips <br> #FF933B</span>
            <span class="dark">#E58435</span>
            <span class="light postal-text-tips">#FFF4EC</span>
        </div>
        <div class="Pweb-color Pweb-color-fz postal-bg-link ">
            <span class="main">链接色  link <br> ##0099E0</span>
            <span class="dark">#0089C9</span>
            <span class="light postal-text-link">#E6F5FC</span>
        </div>
      </div>
      <div class="Pweb-display-card">
        <p class="Pweb-t3">字体色</p>
        <div class="Pweb-color Pweb-color-fz">
            <span class="text text1">text1<br>#000000</span>
            <span class="text text2">text2<br>#66666f</span>
            <span class="text text3">text3<br>#99999f</span>
            <span class="text text4">text4<br>#C4C4CC</span>
        </div>
      </div> 
      <div class="Pweb-display-card">
        <p class="Pweb-t3">其他色</p>
        <div class="Pweb-color Pweb-color-fz">
            <span class="text ban">禁用色<br>#C5D1DB</span>
            <span class="text border">描边色<br>#E4E5E6</span>
            <span class="text gray">背景灰色<br>#f5f6f7</span>
            <span class="text white">背景白色<br>#ffffff</span>
        </div>
      </div>   
    </div>
  </div>
    </div>
    
  </template>
  <script setup>
  // import sHeader from '@/components/header.vue';
  import sLeft from '@/components/leftSide.vue';
  // import { ref } from 'vue'
  
  </script>
  <style>
  
  </style>