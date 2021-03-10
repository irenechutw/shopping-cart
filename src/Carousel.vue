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
        <b-col class="mt-3" v-for="itemIg in itemIgs" :key="itemIg.id">
          <b-img rounded fluid-grow :src="itemIg.imgUrl" :alt="itemIg.alt"></b-img>
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
        sliding: null,
        itemIgs:[
          {
            id: "30001",
            imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/outfit001.jpg",
            alt: "Image 1"
          },
          {
            id: "30002",
            imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/outfit002.jpg",
          },
          {
            id: "30003",
            imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/outfit003.jpg",
          },
          {
            id: "30004",
            imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/outfit004.jpg",
          },
          {
            id: "30005",
            imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/outfit005.jpg",
          },
          {
            id: "30006",
            imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/outfit006.jpg",
          },
          {
            id: "30007",
            imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/outfit007.jpg",
          },
          {
            id: "30008",
            imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/outfit008.jpg",
          },
          {
            id: "30009",
            imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/outfit009.jpg",
          }
        ]
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