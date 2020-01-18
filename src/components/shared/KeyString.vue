<template>
  <div id="key-string" v-on:click="copyKey" v-if="keyString">
    <div class="label">Share this key :</div>
    <div :ref="'keyString'">{{ `http://localhost:8080/${keyString}` }}</div>
  </div>
</template>

<script>
export default {
  name: "KeyString",
  props: { keyString: String },
  methods: {
    copyKey() {
      var range;
      if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(this.$refs.keyString);
        range.select();
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(this.$refs.keyString);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
      document.execCommand("copy");
    },
  },
};
</script>

<style lang="scss" scoped>
#key-string {
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 5px 15px;
  width: fit-content;
  border-radius: 10px;
  background-color: lightgrey;
  cursor: pointer;

  .label {
    margin-bottom: 5px;
  }

  &:hover {
    background-color: gray;
    color: white;
    :not(.label) {
      text-decoration: underline;
    }
  }
}
</style>
