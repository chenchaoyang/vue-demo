<template>
<div>
  <!-- <label>name:</label><input type="text" v-model="value"> -->
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" :checked="value" @change="changeVal($event)">
    <label for="coding">Coding</label>
  </div>
</div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean
    }
  },
  created() {
    console.log("44", this.value);
  },
  watch: {
    // value: function(val, oldVal) {
    //   this.$emit('input', val);
    //}
  },
  methods: {
    changeVal(event) {
      this.$emit('input', event.target.checked);

    }
  }
}
</script>
