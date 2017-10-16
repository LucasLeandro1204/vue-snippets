<template>
  <article>
    <div class="header">
      <p>We still need <strong>$ {{ needed }}</strong> to beat this project</p>
    </div>

    <div class="bar">
      <div :style="{ width: remainPercent + '%' }"></div>
    </div>

    <div class="wrapper">
      <p>There's <strong>{{ deadLine }} left</strong> to help this project.</p>
      <p>We have <strong v-text="donors"></strong> donors who believe and support this project, every dollar helps.</p>
      <div>
        <input type="text" v-model.number="donation" @focus="show = true" @blur="show = false" @keydown="show = false">
        <span>$</span>
        <button @click.prevent="donate">Contribute</button>
        <transition name="fade">
          <ul v-show="show">
            <li :class="{ active: suggestion == donation }" v-for="suggestion in suggestions" @click.prevent="donation = suggestion">$ {{ suggestion }}</li>
          </ul> 
        </transition>
      </div>
    </div>

    <div class="inputs">
      <button>Why give $ 404?</button>
      <button>Share this project</button>
    </div>
  </article>
</template>

<script>
  import Store from './store.js';
  import Tween from '@tweenjs/tween.js';

  export default {
    mixins: [Store],

    props: {
      deadLine: {},
      total: Number,
      default: Number,
      suggestions: {
        type: Array,
        default: () => ([
          15, 25, 50, 150,
        ]),
      },
    },

    data () {
      return {
        donation: this.default,
        show: false,
        needed: 0,
      };
    },

    watch: {
      donation (value, oldValue) {
        if (value === '' || value < 0) {
          this.donation = 0;
        } else if (/[^0-9]/.test(value)) {
          this.donation = oldValue;
        }
      },

      donations () {
        this.animateRemain();

        const animate = () => Tween.update() ? requestAnimationFrame(animate) : null;

        animate();
      }
    },

    computed: {
      remain () {
        const remain = this.donations.reduce((remain, donation) => remain - donation.value, this.total);

        return remain <= 0 ? 0 : remain;
      },

      remainPercent () {
        return 100 - (this.remain * 100 / this.total);
      }
    },

    created () {
      this.needed = this.remain;
    },

    methods: {
      donate () {
        this.donations.push({
          date: Date.now(),
          value: this.donation,
        });
      },

      animateRemain () {
        new Tween.Tween({ tweeningNumber: this.needed })
          .easing(Tween.Easing.Quadratic.Out)
          .to({ tweeningNumber: this.remain }, 500)
          .onUpdate(to => this.needed = to.tweeningNumber.toFixed(0))
          .start();
      }
    }
  }
</script>

<style lang="scss" scoped>
  $py: 1rem;
  $px: 1rem;
  $radius: .25rem;

  $gray: #7d7d7d;
  $white: #FFFFFF;
  $black: #000000;
  $header: #7591ff;
  $daysleft: #e76322;

  article {
    padding: 0 15px;
    max-width: 390px;
    line-height: 1.7;
  }

  strong {
    font-weight: 500;
  }

  input,
  button {
    width: 50%;
    color: $gray;
    cursor: pointer;
    font-weight: 700;
    border: 2px solid $white + -15%;
    border-radius: $radius;
    background-color: $white + -5%;

    &:hover {
      background-color: $white + -10%;
    }
  }

  .header,
  .wrapper {
    padding: $py $px;
    margin-bottom: 1rem;
  }

  .header {
    color: $white;
    position: relative;
    text-align: center;
    border-radius: $radius;
    background-color: $header;
    // border-bottom: 2px solid $white;

    &::after {
      width: 0;
      height: 0;
      content: '';
      right: 1rem;
      bottom: -.6rem;
      position: absolute;
      border-style: solid;
      border-width: .6rem .6rem 0 .6rem;
      border-color: $header transparent transparent transparent;
    }
  }

  .bar {
    background-color: $white;

    div {
      padding: .3rem 0;
      transition: all .3s;
      background-color: #F0F;
    }
  }

  .wrapper {
    color: $gray;
    background-color: $white;
    border: 1px solid $white + -15%;

    strong {
      color: $daysleft;
    }

    p {
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      position: relative;
    }

    input,
    button {
      font-size: 1.4rem;
      padding: .5rem $px;
    }

    input {
      padding-left: 2rem;
      margin-right: .5rem;
    }

    button {
      color: $white;
      margin-left: .5rem;
      border-color: #2ecc71;
      background-color: #2ecc71;

      &:hover {
        background-color: #2ecc71 + 10%;
      }
    }

    span {
      left: .7rem;
      top: .125rem;
      font-size: 1.4rem;
      position: absolute;
    }
  }

  ul {
    top: 57px;
    padding: 0;
    width: 50%;
    list-style: none;
    position: absolute;
    border-radius: $radius;
    background-color: $white;
    border: 2px solid $white + -15%;
    box-shadow: 3px 3px 6px 1px rgba($black, .2);

    li {
      cursor: pointer;
      padding: 5px 15px;

      &:hover,
      &.active {
        background-color: $white + -10%;
      }
    }

    &::after {
      width: 0;
      height: 0;
      left: .3rem;
      content: '';
      top: -.6rem;
      position: absolute;
      border-style: solid;
      border-width: 0 .6rem .6rem .6rem;
      border-color: transparent transparent $white + -15% transparent;
    }
  }

  .inputs {
    display: flex;

    button {
      font-size: 1rem;
      padding: .5rem $px;

      &:first-of-type {
        margin-right: .5rem;
      }

      &:last-of-type {
        margin-left: .5rem;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(5px);
  }
</style> 