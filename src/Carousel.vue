<template>
  <div>
    <b-carousel id="carousel" v-model="slide" :interval="4000" controls indicators background="#ababab" img-width="1024" img-height="480" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <b-carousel-slide caption="The Light of Season" text="NEW ARRIVAL" img-src="https://irenechutw.github.io/shopping-cart/src/assets/images/slide001.jpg"></b-carousel-slide>
      <b-carousel-slide caption="Make Innovation Create New Jeans" text="NEW ARRIVAL" img-src="https://irenechutw.github.io/shopping-cart/src/assets/images/slide002.jpg"></b-carousel-slide>
      <b-carousel-slide caption="Christmas present" text="NEW ARRIVAL" img-src="https://irenechutw.github.io/shopping-cart/src/assets/images/slide003.jpg"></b-carousel-slide>
      <b-carousel-slide caption="Mix & Match" text="NEW ARRIVAL" img-src="https://irenechutw.github.io/shopping-cart/src/assets/images/slide004.jpg"></b-carousel-slide>
      <b-carousel-slide caption="柔軟好感針織" text="NEW ARRIVAL" img-src="https://irenechutw.github.io/shopping-cart/src/assets/images/slide005.jpg"></b-carousel-slide>
      <b-carousel-slide caption="Refresh Your Style" text="Life" img-src="https://irenechutw.github.io/shopping-cart/src/assets/images/slide006.jpg"></b-carousel-slide>
    </b-carousel>

    <b-container fluid="xl" class="mt-5">
      <b-card overlay img-src="https://irenechutw.github.io/shopping-cart/src/assets/images/coupon.jpg" img-alt="Card Image" text-variant="white" title="歲末購物祭">
        <b-card-text>
          滿千送百、滿$499免運費
        </b-card-text>
      </b-card>
    </b-container>

    <b-container fluid="xl" class="mt-5">
      <p class="h2 mb-2">
        <b-icon icon="Instagram"></b-icon> Instagram</b-icon>
      </p>
      <b-row cols="3">
        <b-col class="mt-3">
          <b-img rounded fluid-grow src="https://irenechutw.github.io/shopping-cart/src/assets/images/outfit001.jpg" alt="Image 1"></b-img>
        </b-col>
        <b-col class="mt-3">
          <b-img rounded fluid-grow src="https://irenechutw.github.io/shopping-cart/src/assets/images/outfit002.jpg" alt="Image 2"></b-img>
        </b-col>
        <b-col class="mt-3">
          <b-img rounded fluid-grow src="https://irenechutw.github.io/shopping-cart/src/assets/images/outfit003.jpg" alt="Image 3"></b-img>
        </b-col>
        <b-col class="mt-3">
          <b-img rounded fluid-grow src="https://irenechutw.github.io/shopping-cart/src/assets/images/outfit004.jpg" alt="Image 4"></b-img>
        </b-col>
        <b-col class="mt-3">
          <b-img rounded fluid-grow src="https://irenechutw.github.io/shopping-cart/src/assets/images/outfit005.jpg" alt="Image 5"></b-img>
        </b-col>
        <b-col class="mt-3">
          <b-img rounded fluid-grow src="https://irenechutw.github.io/shopping-cart/src/assets/images/outfit006.jpg" alt="Image 6"></b-img>
        </b-col>
        <b-col class="mt-3">
          <b-img rounded fluid-grow src="https://irenechutw.github.io/shopping-cart/src/assets/images/outfit007.jpg" alt="Image 7"></b-img>
        </b-col>
        <b-col class="mt-3">
          <b-img rounded fluid-grow src="https://irenechutw.github.io/shopping-cart/src/assets/images/outfit008.jpg" alt="Image 8"></b-img>
        </b-col>
        <b-col class="mt-3">
          <b-img rounded fluid-grow src="https://irenechutw.github.io/shopping-cart/src/assets/images/outfit009.jpg" alt="Image 9"></b-img>
        </b-col>


      </b-row>
    </b-container>


  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel {
    text-shadow: 1px 1px 2px #333;
  }

  .card-img-overlay-bottom {
    .card-img-overlay {
      top: auto;
      bottom: 0;
    }
  }

  .card-body {
    text-shadow: 1px 1px 2px #333;
  }
</style>