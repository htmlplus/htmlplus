<template>
  <div class="container">
    <plus-intersection once @plus-change="onChange($event)">
      <plus-card elevation="10">
        <plus-spinner></plus-spinner>
        <img
          data-hidden="true"
          data-src="https://placekitten.com/200/200"
          alt="Lazy Image"
        />
      </plus-card>
    </plus-intersection>
  </div>
</template>

<script setup>
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/intersection.js';
  import '@htmlplus/core/spinner.js';

  function onChange(event) {
    if (!event.detail.isIntersecting) return;
    setTimeout(() => {
      const image = event.target.querySelector('img');
      const spinner = event.target.querySelector('plus-spinner');
      const src = image.getAttribute('data-src');
      image.setAttribute('src', src);
      image.removeAttribute('data-hidden');
      spinner.setAttribute('data-hidden', 'true');
    }, 1000);
  }
</script>

<style scoped>
  .container {
    position: relative;
    height: 20rem;
    overflow: auto;
    background-color: #eeeeee;
  }

  plus-intersection {
    text-align: center;
    margin: 1000px auto;
  }

  [data-hidden] {
    display: none;
  }

  img {
    display: block;
    width: 12rem;
    height: 12rem;
    object-fit: cover;
  }

  plus-card {
    display: inline-block;
  }

  plus-spinner {
    margin: 1rem;
  }
</style>
