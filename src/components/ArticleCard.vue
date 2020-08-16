<template>
  <div class="card-container">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content">Default content</slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .card-container{
    width: 550px;
    margin: auto;
    box-shadow: 1px 1px 2px #ccc;
    padding: 25px;
    border-radius: 3px;
    .title {
      border-bottom: 1px solid #ccc;
    }
    h1 {
      color: red;
    }
  }
</style>
