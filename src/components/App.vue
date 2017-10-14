<template>
  <main :style="{ backgroundColor }">
    <component :is="currentComponent"></component>
  </main>
</template>

<script>
  import Donation from './donation/Main.vue';

  export default {
    components: {
      Donation,
    },

    data () {
      return {
        currentComponent: 'donation',
        colors: {
          donation: '#ECF0F1',
        }
      };
    },

    computed: {
      backgroundColor () {
        return this.colors[this.currentComponent];
      }
    },
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    box-sizing: border-box;

    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  body {
    font-size: 16px;
  }

  main {
    display: flex;
    min-height: 100vh;
    padding: 50px 15px;
    align-items: center;
    justify-content: center;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    justify-content: center;
  }
</style>
