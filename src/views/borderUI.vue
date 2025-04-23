<template>
    <div class="Pbody">
      <div style="display:flex">
        <s-left choose="borderUI" ></s-left>
     <!--中间活动说明区域-->
     <div class="Pweb-main">
    <!--标题说明-->
    <div class="Pweb-card">
     
      <p class="Pweb-t1">Border 边框</p>
      <p class="Pweb-t4">常规页面边框、线条按照统一规范设计，保持页面一致性；特殊情况再根据情况调整。</p>
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
   <div class="Pweb-display Pweb-border">
    <div class="Pweb-display-nav"><span class="iconfont arrow-left">&#xe750;</span>描边规范</div>
    <div class="Pweb-scroll Pweb-display-scroll">
      <div class="Pweb-display-card">
        <p class="Pweb-t3">线条</p>
        <a class="postal-line-up"></a>
        <a class="postal-line-up postal-line-dashed"></a>
      </div>
      <div class="Pweb-display-card">
        <p class="Pweb-t3">边框</p>
        <a class="postal-line column2"></a>
        <a class="postal-line column2 focus"></a>
      </div>
      <div class="Pweb-display-card">
        <p class="Pweb-t3">垂直文本</p>
        <ul class="Pweb-vertical">
            <li>文本</li>
            <li>文本</li>
            <li>文本</li>
        </ul>
        
      </div>
      <div class="Pweb-display-card">
        <p class="Pweb-t3">圆角规范</p>
        <a class="postal-line column2"></a>
        <a class="postal-line column2 Pweb-radius8"></a>
        <a class="postal-line column2 Pweb-radius16"></a>
        <a class="postal-line column2 Pweb-radius100"></a>
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