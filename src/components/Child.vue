<template>
  <div>
    <p> {{ title }} </p>
    <p> Version App : {{ versionApp }} </p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: this.$parent.title,
      versionApp: this.$root.versionApp
    }
  },
  created() {
    console.log(this.$parent)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  div {
    width: 200px;
    height: 200px;
    margin: auto;
    background: #ccc;
  }
</style>
