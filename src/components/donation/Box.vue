<template>
  <article>
    <div class="header">
      <p>We still need <strong>$153</strong> to beat this project</p>
    </div>

    <div class="bar">
      <div></div>
    </div>

    <div class="wrapper">
      <p><strong>14 days left</strong> to donate to this project</p>
      <p>We have 14 donors who believe and support this project, every dollar helps.</p>
      <div>
        <input type="text">
        <button @cick.prevent="">Contribute</button>
      </div>
    </div>

    <div class="inputs">
      <button>Why give $404?</button>
      <button>Share this project</button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  $py: 1rem;
  $px: 1rem;
  $radius: .25rem;

  $gray: #7d7d7d;
  $white: #FFFFFF;
  $header: #5B5E69;
  $daysleft: #e76322;

  article {
    line-height: 1.7;
    max-width: 360px;
  }

  strong {
    font-weight: 500;
  }

  .header,
  .wrapper {
    padding: $py $px;
  }

  .header {
    color: $white;
    position: relative;
    text-align: center;
    margin-bottom: 1rem;
    border-radius: $radius;
    // background-color: $header;
    border-bottom: 2px solid $white;

    &::after {
      width: 0;
      height: 0;
      content: '';
      right: 1rem;
      bottom: -.6rem;
      position: absolute;
      border-style: solid;
      border-width: .6rem .6rem 0 .6rem;
      border-color: $white transparent transparent transparent;
    }
  }

  .bar {
    background-color: $white;

    div {
      width: 50%;
      padding: .3rem 0;
      background-color: #F0F;
    }
  }

  .wrapper {
    color: $gray;
    background-color: $white;
    border: 1px solid $white + -15%;
    border-radius: 0 0 $radius $radius;

    strong {
      color: $daysleft;
    }

    p {
      margin-bottom: .5rem;
    }
  }
</style> 