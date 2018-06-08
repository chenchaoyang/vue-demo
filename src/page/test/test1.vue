<template>
<div>
  <h2>test1</h2>
  <user-info :data="data" @change="getData"></user-info>
  {{obj}} {{arr}}
  <button @click="check">checkjgfgdfc</button>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import userInfo from '@/components/userInfo.vue';
export default {
  components: {
    userInfo
  },
  data() {
    return {
      data: 'john',
      obj: {
        a: 1,
        b: 2
      },
      arr: [1, 2, 3]
    }
  },
  created() {
    this.obj = Object.assign(this.obj, {
      c: 3,
      b: 9
    }, {
      d: 8,
      b: 100
    });

    this.$set(this.obj, 'as', '123ddd');
  },
  methods: {
    getData(val) {
      console.log("home", val, this.data);
      this.data = val;
      console.log(this.data);
    },
    check() {
      //Vue.set(this.arr, '0', 100);
      this.arr.splice(0, 1, 199);
      console.log(this.arr);
    }
  },
}
</script>
