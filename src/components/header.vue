<template>
    <div class="Pweb-header">
        <img src="@/assets/logo.png" alt="" class="Pweb-logo" />
        <ul class="Pweb-header-info">
          <li><a>说明</a></li>
          <li><a class="current">组件</a></li>
          <li><a>｜</a></li>
          <li><a>v1.10</a></li>
        </ul>
      </div>
    </template>
    
    <script>
      
    import '../font/iconfont.css'
    import '../css/frame.css'
    import '../css/postal.css'
    export default {
      name: 'HelloWorld',
      props: {
        msg: String
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    </style>
    