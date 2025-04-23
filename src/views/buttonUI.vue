<template>
    <div class="Pbody">
      <div style="display:flex">
        <s-left choose="buttonUI" ></s-left>
     <!--中间活动说明区域-->
     <div class="Pweb-main">
    <!--标题说明-->
    <div class="Pweb-card">
      <p class="Pweb-t1">Button 按钮</p>
      <p class="Pweb-t4">常用的操作按钮,保持按钮的一致性对于页面的规整性至关重要。</p>
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
    <div class="Pweb-display-nav"><span class="iconfont arrow-left">&#xe750;</span>按钮规范</div>
    <div class="Pweb-scroll Pweb-display-scroll">
      <div class="Pweb-display-card">
        <p class="Pweb-t3">按钮颜色</p>
        <button class="postal-btn postal-btn-nm">默认按钮</button>
        <button class="postal-btn postal-btn-nm postal-bg-danger">危险按钮</button>
        <button class="postal-btn postal-btn-nm postal-bg-tips">提示按钮</button>
        <button class="postal-btn postal-btn-nm postal-bg-link">其他按钮</button>
      </div>
      <div class="Pweb-display-card">
        <p class="Pweb-t3">朴素按钮</p>
        <button class="postal-btn postal-btn-nm postal-btn-primary">边框按钮</button>
        <button class="postal-btn postal-btn-nm postal-btn-primary2">浅色按钮</button>
        <button class="postal-btn postal-btn-nm postal-btn-gray">灰色按钮</button>
      </div>
      <div class="Pweb-display-card">
        <p class="Pweb-t3">禁用按钮</p>
        <button class="postal-btn postal-btn-nm postal-btn-disabled">不可点击按钮</button>
      </div>
      <div class="Pweb-display-card">
        <p class="Pweb-t3">按钮尺寸</p>
        <button class="postal-btn postal-btn-lg">大型按钮</button>
        <button class="postal-btn postal-btn-nm">常规按钮</button>
        <button class="postal-btn postal-btn-sm">小型按钮</button>
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