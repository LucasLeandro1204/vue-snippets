<template>
  <section>
    <article>
      <donatation-box></donatation-box>
    </article>

    <article>
      <donation-list></donation-list>
    </article>
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
  }
</style>