<template>
  <div>
    <b-container fluid="xl">
      <form action="">
        <div class="cart">
          <b-sidebar id="sidebar-backdrop" title="購物車" backdrop right shadow>
            <b-row v-for="(product, index) in cartList" :key="product.id" class="cart-list" no-gutters>
              <b-col cals="4" class="mr-2">
                <b-img :src="product.imgUrl" fluid thumbnail></b-img>
              </b-col>
              <b-col cols="8" class="cart-listDetail">
                <p class="cart-title">{{ product.title }}</p>
                <div class="d-flex">
                  <div>
                    <b-button pill variant="outline-secondary" @click="amountLess(product)">-</b-button>
                    <span class="count">{{ product.countPlus }}</span>
                    <b-button pill variant="outline-secondary" @click="amountPlus(product)">+</b-button>
                  </div>
                  <div class="price-xs text-right ml-auto">
                    <span class="price-dollar">NT$</span>
                    <span>{{ product.sum }}</span>
                  </div>
                </div>
                <b-button class="btn-delete" @click="remove(product)">
                  <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                </b-button>
              </b-col>
            </b-row>

            <b-row class="cart-list">
              <b-col>Total：</b-col>
              <b-col>
                <div class="price text-right ml-auto">
                  <span class="price-dollar">NT$</span>
                  <span>{{ unitPricePlus }}</span>
                </div>
              </b-col>
            </b-row>

          </b-sidebar>
        </div>

        <b-tabs content-class="mt-3" align="center" class="mt-3">
          <b-tab title="Women" active>
            <b-row cols="1" cols-sm="2" cols-lg="3">

              <b-col v-for="(product, index) in products" v-bind="product" :key="product.id">
                <b-card :title="product.title" :img-src="product.imgUrl" img-alt="Image" img-top class="mb-4">
                  <b-card-text>
                    <b-row>
                      <b-col cols="6">
                        <b-button pill variant="outline-secondary" @click="countLess(product)">-</b-button>
                        <span class="count">{{ product.count }}</span>
                        <b-button pill variant="outline-secondary" @click="countPlus(product)">+</b-button>
                      </b-col>
                      <b-col cols="6" class="price text-right">
                        <span class="price-dollar">NT$</span>
                        <span>{{ product.price }}</span>
                      </b-col>
                    </b-row>
                  </b-card-text>
                  <b-button variant="dark" block v-b-toggle.sidebar-backdrop @click="addToList(product)">加入購物車</b-button>
                </b-card>
              </b-col>

            </b-row>
          </b-tab>

          <b-tab title="Man">
            <b-row cols="1" cols-sm="2" cols-lg="3">
              <b-col v-for="(product, index) in productsMen" v-bind="product" :key="product.id">
                <b-card :title="product.title" :img-src="product.imgUrl" img-alt="Image" img-top class="mb-4">
                  <b-card-text>
                    <b-row>
                      <b-col cols="6">
                        <b-button pill variant="outline-secondary" @click="countLess(product)">-</b-button>
                        <span class="count">{{ product.count }}</span>
                        <b-button pill variant="outline-secondary" @click="countPlus(product)">+</b-button>
                      </b-col>
                      <b-col cols="6" class="price text-right">
                        <span class="price-dollar">NT$</span>
                        <span>{{ product.price }}</span>
                      </b-col>
                    </b-row>
                  </b-card-text>
                  <b-button variant="dark" block v-b-toggle.sidebar-backdrop @click="addToList(product)">加入購物車</b-button>
                </b-card>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data(){
    return {
      productsAll:[],
      productsMen: [
        {
          id: "101",
          title: "優質短袖T-shirt",
          imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/man/man-100001.jpg",
          price: "790",
          count: 1,
          countPlus: 0
        },
        {
          id: "102",
          title: "優質短袖T-shirt",
          imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/man/man-100002.jpg",
          price: "790",
          count: 1,
          countPlus: 0
        },
        {
          id: "103",
          title: "優質短袖T-shirt",
          imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/man/man-100003.jpg",
          price: "790",
          count: 1,
          countPlus: 0
        },
        {
          id: "104",
          title: "優質短袖T-shirt",
          imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/man/man-100004.jpg",
          price: "790",
          count: 1,
          countPlus: 0
        },
        {
          id: "105",
          title: "優質短袖T-shirt",
          imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/man/man-100005.jpg",
          price: "790",
          count: 1,
          countPlus: 0
        },
        {
          id: "106",
          title: "優質短袖T-shirt",
          imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/man/man-100006.jpg",
          price: "790",
          count: 1,
          countPlus: 0
        }
      ],
      products: [
        {
          id: "201",
          title: "褐色系時尚精品組合",
          imgUrl: "https://irenechutw.github.io/shopping-cart/src/assets/images/women/woman-200001.jpg",
          price: "3500",
          count: 1,
          countPlus: 0
        },
        {
          id: "202",
          title: "褐色系時尚精品組合",
          imgUrl:
            "https://irenechutw.github.io/shopping-cart/src/assets/images/women/woman-200002.jpg",
          price: "3500",
          count: 1,
          countPlus: 0
        },
        {
          id: "203",
          title: "超時尚牛仔褲",
          imgUrl:
            "https://irenechutw.github.io/shopping-cart/src/assets/images/women/woman-200003.jpg",
          price: "1200",
          count: 1,
          countPlus: 0
        },
        {
          id: "204",
          title: "休閒牛仔褲",
          imgUrl:
            "https://irenechutw.github.io/shopping-cart/src/assets/images/women/woman-200004.jpg",
          price: "2300",
          count: 1,
          countPlus: 0
        },
        {
          id: "205",
          title: "休閒感微短版上衣",
          imgUrl:
            "https://irenechutw.github.io/shopping-cart/src/assets/images/women/woman-200005.jpg",
          price: "790",
          count: 1,
          countPlus: 0
        },
        {
          id: "206",
          title: "韓版復古牛仔外套",
          imgUrl:
            "https://irenechutw.github.io/shopping-cart/src/assets/images/women/woman-200006.jpg",
          price: "1290",
          count: 1,
          countPlus: 0
        }
      ]
    }
  },
  methods: {
    countPlus (product) {
      product.count++;
    },
    countLess (product) {
      if (product.count > 1) {
        product.count--;
      }
    },
    amountPlus (product) {
      product.countPlus++;
    },
    amountLess (product) {
      product.countPlus--;
    },
    addToList (product){
      product.countPlus += product.count;
    },
    remove (product){
      product.countPlus = 0;
    }
  },
  computed:{
    cartList(){
      var newWomen = this.products
                .filter(p => p.countPlus)
                .map(p => {
                    p.sum = p.countPlus * p.price
                    return p
                });
      var newMen = this.productsMen
                .filter(p => p.countPlus)
                .map(p => {
                    p.sum = p.countPlus * p.price
                    return p
                });
      return newWomen.concat(newMen);
    },
    unitPricePlus(){
      return this.cartList.reduce((sum, p) => (sum + p.sum), 0)
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {

    &-dark {
      background: linear-gradient(to bottom right, #343a40, #000);
    }

    &-outline-secondary {

      &:focus,
      &:active,
      &:visited {
        background-color: #fff;
        box-shadow: none;
      }
    }

    &-delete {
      position: absolute;
      top: 5px;
      right: 0;
      width: 35px;
      max-width: 100%;
      height: 35px;
      padding: 0;
      background-color: #ccc;
      border-color: #ccc;

      @media (max-width: 576px) {
        width: 25px;
        height: 25px;
      }
    }

    .b-icon.bi {
      width: 100%;
      transform: scale(0.8);

      @media (max-width: 576px) {
        vertical-align: initial;
        transform: scale(0.6);
      }
    }

    &-danger:focus,
    &-dark:focus {
      box-shadow: none;
    }
  }

  .rounded-pill {
    display: inline-flex;
    justify-content: center;
    border: 0;
    border-radius: 100%;
    padding: 0;
    width: 30px;
    height: 30px;
    font-weight: bolder;

    background-color: #fff;
    border: 1px solid #ccc;
    color: gray;
    line-height: 1.2;

    @media (max-width: 576px) {
      width: 25px;
      height: 25px;
      font-size: 0.9rem;
    }

    &:focus,
    &:active,
    &:visited {
      background-color: #fff;
    }
  }
</style>