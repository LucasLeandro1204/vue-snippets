export default {
  computed: {
    donations () {
      return this.$parent.donations;
    },
    
    donors () {
      return this.donations.length;
    }
  },
};