<template>
  <div id="app">

    <Child1></Child1>

    <async-component></async-component>

    <Child></Child>

    <nav class="nav">
      <button @click="selectedComponent = 'Blue' "> Blue </button>
      <button @click="selectedComponent = 'Red' " > Red </button>
    </nav>

    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

    <HelloWorld/>
    <article-card>
      <h1 slot="title"> {{ title }} </h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis aspernatur obcaecati voluptates at eius consequuntur, libero labore similique harum quia numquam! Laborum accusamus dolorum recusandae quia distinctio in libero. </p>
    </article-card>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ArticleCard from './components/ArticleCard.vue'
import Blue from './components/Blue.vue'
import Red from './components/Red.vue'
import Child from './components/Child.vue'
import Child1 from './components/Child1.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ArticleCard,
    Blue,
    Red,
    Child,
    Child1
  },
  data(){
    return {
      title: 'My title',
      selectedComponent: 'Blue',
    }
  },
  provide() {
    return {
      title: () => 'New Title' //this.title
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  width: 500px;
  margin: auto;
  padding: 20px;
  button{
    margin: 0px 10px;
  }
}
</style>
