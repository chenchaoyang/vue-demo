<template>
<div>
  <h2>test3</h2>
  <user-info v-model="name" @change="getdata"></user-info>
</div>
</template>
<script>
import userInfo from '@/components/input3.vue';
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
    getdata(val) {
      console.log("home", val, this.name);

    }

  }
}
</script>
