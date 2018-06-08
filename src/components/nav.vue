<template>
<div>
  <ul class="navlist">
    <li>
      <router-link to="/home/">Home</router-link>
    </li>
    <li>
      <router-link to="/about/">About</router-link>
    </li>
    <li>
      <router-link to="/contact/">Contact me</router-link>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: "navbar" //一定不要用nav
}
</script>
<style lang="stylus">
  .navlist
    overflow hidden
    li
      display inline-block
      float left
      margin 5px 10px

</style>
