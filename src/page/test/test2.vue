<template>
<div>
  <h2>test2</h2>
  <user-info v-model="data" @input="getdata"></user-info>
</div>
</template>
<script>
import userInfo from '@/components/input2.vue';
export default {
  components: {
    userInfo
  },
  data() {
    return {
      data: true
    }
  },
  created() {

  },
  methods: {
    getdata(val) {
      console.log("home", val, this.data);

    }
  }
}
</script>
