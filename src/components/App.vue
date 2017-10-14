<template>
  <section id="component" :style="{ backgroundColor }">
    <component :is="currentComponent"></component>
  </section>
</template>

<script>
  import Donate from './donate/Main.vue';

  export default {
    components: {
      Donate,
    },

    data () {
      return {
        currentComponent: 'donate',
        colors: {
          donate: '#ECF0F1',
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

  #component {
    display: flex;
    min-height: 100vh;
    padding: 50px 15px;
    align-items: center;
    justify-content: center;
  }
</style>
