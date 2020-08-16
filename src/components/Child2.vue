<template>
  <div>
    {{ title() }}
  </div>
</template>

<script>
export default {
  inject: [ 'title' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
