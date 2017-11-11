<template>
  <div id="box-wrapper">
    <donation-box :default="50" :total="1500" :deadLine="deadLine"></donation-box>
  </div>
</template>

<script>
  import Moment from 'moment';
  import DonationBox from './Box.vue';

  const donations = [
    { id: 3, date: Moment('20170613').format(), value: '400' },
    { id: 4, date: Moment('20170519').format(), value: '139' },
    { id: 1, date: Moment('20170703').format(), value: '25' },
    { id: 2, date: Moment('20150312').format(), value: '150' },
    { id: 5, date: Moment('20170225').format(), value: '230' },
    { id: 6, date: Moment('20141123').format(), value: '130' },
  ];
  
  export default {
    components: {
      DonationBox,
    },

    created () {
      /*
       * Simulate an API request.
       */
      setTimeout(() => {
        this.donations = donations.sort((a, b) => Moment(b.date).diff(Moment(a.date)));
      }, 1500);
    },

    data () {
      return {
        deadLine: Moment().add(13, 'days').endOf('day').fromNow('dd'), // drop add latter
        donations: [],
      };
    },
  };
</script>

<style lang="scss" scoped>
  #box-wrapper {
    padding: 15px;
    max-width: 380px;
    background-color: #607dee;
    font-family: 'Ubuntu', sans-serif !important;
  }
</style>