export default {
  template: `
    <component :is="random" />
  `,

  data () {
    const components = Object.keys(Object.getPrototypeOf(this.$root.$options.components))
      .filter(component => component.startsWith('Snippet') && !component.endsWith('Random')); // to avoid recursion
    const random = components.sort(() => Math.random() - 0.5).pop();

    return {
      random,
    };
  },
};
