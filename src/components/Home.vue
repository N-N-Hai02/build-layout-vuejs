<template>
  <div>
    <Header :cart="cart"/>
    <div class="home container">
      <div class="row">
        <div class="col-md-9 pt-5">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
            <Product v-for="product in products" :product="product" :key="product.id" @add-to-cart="addCart" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Product from './Product.vue'
export default {
  name:'Home',
  components: {
    Product,
    Header
  },
  data() {
    return {
      products:[
      {
        id:1,
        name:'Pork Sandwich',
        image:require('@/assets/food_menu/single_food_1.png'),
        description:'They are wherein heaven seed hath nothing',
        price: 40
      },
      {
        id:2,
        name:'Roasted Marrow',
        image:require('@/assets/food_menu/single_food_2.png'),
        description:'They are wherein heaven seed hath nothing',
        price: 40
      },
       {
         id:3,
        name:'Summer Cooking',
         image:require('@/assets/food_menu/single_food_3.png'),
        description:'They are wherein heaven seed hath nothing',
        price: 40
      },
      {
        id:4,
        name:'Easter Delight',
         image:require('@/assets/food_menu/single_food_4.png'),
        description:'They are wherein heaven seed hath nothing',
        price: 40
      },
      {
        id:5,
        name:'Tiener Schnitze',
         image:require('@/assets/food_menu/single_food_5.png'),
        description:'They are wherein heaven seed hath nothing',
        price: 40
      },
      {
        id:6,
        name:'Chicken Roast',
         image:require('@/assets/food_menu/single_food_6.png'),
        description:'They are wherein heaven seed hath nothing',
        price: 40
      }
    ],
    cart:[]
    }
  },
  methods: {
    addCart(item)
    {
      this.cart.push(item)
    }
  },
}
</script>

<style>

</style>