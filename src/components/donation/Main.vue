<template>
  <section>
    <donation-box :default="50" :total="1500" :deadLine="deadLine"></donation-box>
  </section>
</template>

<script>
  import Moment from 'moment';
  import DonationBox from './Box.vue';
  import DonationList from './List.vue';

  export default {
    components: {
      DonationBox,
      DonationList,
    },

    data () {
      return {
        deadLine: Moment().add(14, 'minutes').fromNow(),
        donations: [
          { date: Date.now(), value: '1' },
          { date: Date.now(), value: '12' },
          { date: Date.now(), value: '30' },
          { date: Date.now(), value: '150' },
        ],
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