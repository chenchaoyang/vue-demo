<template>
<div>
  <h2>test5</h2>
  <user-info :userinfo="defaultObj" :arr='defaultArr'></user-info>
  <button @click="checkValChange">checkValChange</button>
</div>
</template>
<script>
import userInfo from '@/components/input5.vue';
export default {
  components: {
    userInfo
  },
  data() {
    return {
      defaultObj: {
        name: {
          first: 'lily'
        },
        email: '122@126.com',
        age: '13'
      },
      defaultArr: [1, 2]
    }
  },
  created() {

  },
  methods: {
    checkValChange() {
      console.log("obj", this.defaultObj);
      console.log("arr", this.defaultArr);
    }

  }
}
</script>
