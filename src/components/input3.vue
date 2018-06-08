<template>
<div>
  <label>name:</label><input type="text" v-model="data">
</div>
</template>
<script>
export default {
  model: {
    prop: 'data',
    event: 'change'
  },
  props: {
    data: String
  },
  watch: {
    data: function(val, oldVal) {
      this.$emit('change', val);
    }
  }
}
</script>
