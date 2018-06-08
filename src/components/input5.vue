<template>
<div>
  <div>
    <!-- <input type="checkbox" id="coding" name="interest" value="coding" :checked="checked" @change="changeVal($event)"> -->
    <label for="coding">Coding</label>
    <input type="text" v-model="userinfo.name.first">
    <input type="text" v-model="userinfo.age">
    <input type="text" v-model="userinfo.email">

  </div>
</div>
</template>
<script>
export default {
  // model: {
  //   prop: 'userinfo',
  //   event: 'change'
  // },
  props: {
    userinfo: Object,
    arr: Array
  },
  created() {
    console.log(this.userinfo);
    console.log(this.arr);
    this.arr.push(100);
    this.userinfo.age = 100;
    // this.$watch('userinfo', function(val, oldVal) {
    //   //this.$emit('change', val);
    // }, {
    //   deep: true
    // });
  },
  methods: {

  }
}
</script>
