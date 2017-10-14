<template>
  <article>
    <div class="header">
      <p>We still need <strong>$153</strong> to beat this project</p>
    </div>

    <div class="bar"></div>

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

  $white: #FFFFFF;
  $header: #5B5E69;
  $daysleft: #FFF;

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
    border-radius: $radius;
    background-color: $header;
    border-bottom: 2px solid $header + -40%;

    &::after,
    &::before {
      width: 10px;
      content: '';
      height: 15px;
      bottom: -15px;
      position: absolute;
      background-color: $header + -40%;
    }

    &::before {
      left: 30%;
    }

    &::after {
      right: 30%;
    }
  }

  .wrapper {
    strong {
      color: $daysleft;
    }
  }
</style> 