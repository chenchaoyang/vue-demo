<template>
<div>
  <h2>test4</h2>
  <user-info :data.sync="name"></user-info>
  <button @click="checkdata">checkdata</button>
</div>
</template>
<script>
import userInfo from '@/components/input4.vue';
export default {
  components: {
    userInfo
  },
  data() {
    return {
      name: 'john'
    }
  },
  created() {

  },
  methods: {
    checkdata() {
      console.log("home", this.name);
    }

  }
}
</script>
