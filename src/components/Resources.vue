<template>
  <div class="resources">
    <h1>Resources</h1>
    <p>{{ message }}</p>
    <ul>
      <li v-for="resource in $store.state.redux.resources.items">
        {{ resource.key }}





      </li>
    </ul>
  </div>
</template>

<script>
  import store from '@/vuexStore'

  export default {
    name: 'resources',
    computed: {
      message: function () {
        return Object.keys(store.state.redux.messages).reduce((message, key) => {
          const errorMessage = store.state.redux.messages[key].errorMessage
          return `${message.length > 0 ? message + ' ' : ''}${errorMessage}`
        }, '')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }
</style>
