<template>
  <div class="col mb-4">
        <div class="card">
            <img :src="product.image" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">
                ${{product.price}}
                <br/>
                <small>
                {{product.description}}
                </small>
            </p>
            <button @click="addToCart" class="btn btn-primary btn-block">Add To Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'Product',
  props:['product'],// như là 1 đối tượng 
  data() {
    return {
     
    }
  },
  methods: {
    addToCart()
    {
      var data=this.product
      this.$emit('add-to-cart',data)
    }
  },
}
</script>

<style>

</style>