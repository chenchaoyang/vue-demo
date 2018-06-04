<template>
<div>
  <h2>{{msg}}</h2>
  <p>
    Hello everyone!Welcome to my home.
  </p>
  <city-selector v-model="defaultAddress" @change="changeVal" />
</div>
</template>

<script>
import citySelector from './citySelector/citySelect.vue';
export default {
  components: {
    citySelector
  },
  data() {
    return {
      msg: 'Home',
      defaultAddress: '河南省 驻马店市 遂平县'
    }
  },
  methods: {
    changeVal() {

    }
  }
}
</script>
