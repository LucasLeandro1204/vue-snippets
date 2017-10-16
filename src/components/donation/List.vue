<template>
  <article>
    <transition-group tag="ul">
        <li :key="index" v-for="(donation, index) in donations">{{ donation.value }} <span></span></li>
    </transition-group>
  </article>
</template>

<script>
  import Store from './store.js';

  export default {
    mixins: [Store],
  }
</script>

<style lang="scss" scoped>
  article {
    padding: 0 15px;
  }

  ul {
    padding: 0;
    list-style: none;
  }
</style>