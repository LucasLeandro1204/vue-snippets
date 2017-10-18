<template>
  <article>
    <transition-group name="list" tag="ul">
      <li :key="donation.id" v-for="donation in donations">{{ donation.value }}</li>
    </transition-group>
  </article>
</template>

<script>
  import Moment from 'moment';
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

   li {
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }

  .list-leave-active {
    position: absolute;
  }
</style>