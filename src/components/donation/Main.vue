<template>
  <section>
    <donation-box></donation-box>

  </section>
</template>

<script>
  import DonationBox from './Box.vue';
  import DonationList from './List.vue';

  export default {
    components: {
      DonationBox,
      DonationList,
    },

    data () {
      return {
        donators: [],
      };
    },
  };
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    justify-content: center;
    font-family: 'Ubuntu', sans-serif;
  }
</style>