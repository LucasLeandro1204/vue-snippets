<template>
  <section>
    <donation-box :default="50" :total="1500" :deadLine="deadLine"></donation-box>
    <donation-list></donation-list>
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
        deadLine: Moment().add(15, 'days').endOf('day').fromNow('dd'), // drop add latter
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
    justify-content: space-between;
    font-family: 'Ubuntu', sans-serif;
  }
</style>