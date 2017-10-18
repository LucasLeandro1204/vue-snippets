<template>
  <article>
    <transition-group name="list" tag="ul">
        <li :key="index" v-for="(donation, index) in donations">{{ donation.value }} <span></span></li>
    </transition-group>
  </article>
</template>

<script>
  import Moment from 'moment';
  import Store from './store.js';

  export default {
    mixins: [Store],

    computed: {
      donationsChunkByYear () {
        return this.donations.reduce((donations, donation) => {
          const year = Moment(donation.date).format('Y');

          if (! donations[year]) {
            donations[year] = [];
          }

          donations[year].push(donation);

          return donations;
        }, {});
      },

      donationsAsArray () {
        return Object.keys(this.donationsChunkByYear)
          .sort((a, b) => b - a) // We have to order this shit again.
          .map((date) => this.donationsChunkByYear[date]);
      }
    },
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