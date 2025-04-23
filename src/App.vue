<template>
  <!-- <div class="Pbody"> -->
    <s-header name="测试用" ></s-header>
  <!-- <s-left name="测试用" ></s-left> -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component
        :is="Component"
        v-if="$route.meta.keepAlive"
        :key="$route.path"
      />
    </keep-alive>
    <component
      :is="Component"
      v-if="!$route.meta.keepAlive"
      :key="$route.path"
    />
  </router-view>
  <!-- </div> -->
 
  
</template>
<script setup>
import sHeader from '@/components/header.vue';
// import sLeft from '@/components/leftSide.vue';
// import { useRouter,} from "vue-router";
// let router = useRouter()

</script>