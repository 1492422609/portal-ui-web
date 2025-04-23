<template>
    <div class="Pbody">
      <div style="display:flex">
        <s-left choose="layoutUI" ></s-left>
     <!--中间活动说明区域-->
     <div class="Pweb-main">
    <!--标题说明-->
    <div class="Pweb-card">
      <p class="Pweb-t1">Layout 布局</p>
      <p class="Pweb-t4">合理的间距规范有助于研发团队更好地理解设计方案,并在一定程度上保证APP应用的风格统一。
        本组件系统间距规则都是在8的倍数上进行递增,移动端以 @1x 开发的情况下以4的倍数进行递增。定义几种常用增量关系,克制的有序的间距弹性，例：@2x(8/16/24/32/48/56/72/80); @1x(4/8/12/16/24/32/36/40)</p>
    </div>
    <!--引入说明-->
    <div class="Pweb-card">
      <p class="Pweb-t2">引入</p>
      <p class="Pweb-t4">通过以下方式来全局注册组件，更多注册方式请参考组件注册。</p>
      <div class="Pweb-code">
        <span> </span>
      </div>
    </div>
    <!--代码演示-->
    <div class="Pweb-card">
      <p class="Pweb-t2">代码演示</p>
      <p class="Pweb-t4">按钮支持 default、primary、primary2、success、warning、danger 、link五种类型;默认为 default。</p>
      <div class="Pweb-code">
          <span> </span>
        </div>
    </div>
  </div>
      </div>
     
   <!--右侧固定宽高展示区域-->
   <div class="Pweb-display Pweb-layout">
    <div class="Pweb-display-nav"><span class="iconfont arrow-left">&#xe750;</span>布局规范</div>
    <div class="Pweb-scroll Pweb-display-scroll">
      <div class="Pweb-display-card">
        <p class="Pweb-t3">白色背景</p>
        <img src="../../src/assets/img_layout_white.png" alt="" />
      </div>
      <div class="Pweb-display-card">
        <p class="Pweb-t3">灰底白色卡片</p>
        <img src="../../src/assets/img_layout_gray.png" alt="" />
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