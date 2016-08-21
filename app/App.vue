<template>
  <h1>This some day will be a layout</h1>
        <a v-link="{ path: '/view1' }">Go to 1</a>
        <a v-link="{ path: '/view2' }">Go to 2</a>
        <router-view></router-view>
</template>

<script>
  module.exports = {
    data () {
      return {
        var: "hi",
      }
    }
  }
</script>