export default {
  template: `<component :is="random"></component>`,

  data () {
    const components = Object.keys(Object.getPrototypeOf(this.$root.$options.components))
      .filter(component => component.startsWith('Snippet') && ! component.endsWith('Random'));
    const random = components.sort(() => Math.random() - 0.5).pop();

    return {
      random,
    };
  },
};
