<template>
<div>
  <label>name:</label><input type="text" v-model="data">
</div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {
      temp: this.data

    }
  },
  created() {

  },
  watch: {
    data: function(val, oldVal) {
      this.$emit('change', val);
    }
  },
  methods: {

  }
}
</script>
