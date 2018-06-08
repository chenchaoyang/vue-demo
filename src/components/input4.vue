<template>
<div>
  <label>name:</label><input type="text" v-model="data">
</div>
</template>
<script>
export default {
  props: {
    data: ''
  },
  watch: {
    data: function(val, oldVal) {
      this.$emit('update:data', val);
    }
  }
}
</script>
