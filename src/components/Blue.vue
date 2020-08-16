<template>
  <div>
    {{ counter }}
    <button @click="counter++"> + </button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      counter: 0,
    }
  },
  created(){
    console.log('ok')
  },
  deactivated() {
    console.log('deactivated')
  },
  activated() {
    console.log('activated')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  div {
    width: 500px;
    height: 200px;
    margin: auto;
    background: blue;
    color: white;
    font-size: 30px;
  }
</style>
