<template>
  <article class="top-navbar" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="contentheader">
        <img src="@/assets/logo.png" style="float: left; margin-left: 50px;">
        <ul>
            <li><a href="#" target="_self">CONTACT</a></li>
            <li><a href="#" target="_self">BLOG</a></li>
            <li><a href="#" target="_self">PAGE</a></li>
            <li><a href="#" target="_self">ABOUT</a></li>
            <li><a href="#" target="_self">Cart({{this.cart.length}})</a></li>
            <li><a class="active" href="#" target="_self">HOME</a></li>
           
        </ul>
    </div>
   
</article>
</template>

<script>
export default {
name:'CompHeader',
props:['cart'],
data() {
  return {
    image:require('@/assets/slider-01.jpg'),
 
    // image: {backgroundImage: " require('@/assets/slider-01.jpg')"}
  }
},
}
</script>

<style>
.quangcao1{
  width: 45%;
  float: right;
  padding-top: 20px;
}
.img-fluid{
  width: 80% ;
  height: 80%;
	box-shadow: 20px 20px 0px #d65106;
}
.top-navbar{
  position: relative;
  height: 600px;
  background-color: violet;
  /* background-image: url('@/assets/slider-01.jpg'); */
	z-index: 10;
}
.contentheader{
  width: 100%;
  height: 80px;
  background-color: white;
  position: fixed;
	width: 100%;
  border-radius: 0px 0px 100px 100px;
	box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.4);
	z-index: 100;
}
.contentheader ul{
 
  list-style:none;
  display: inline;
  
}
li a{
 
  font-size: 14px;
	padding: 10px 10px;
	border-radius: 4px;
	text-transform: uppercase;
  text-decoration: none;
  color: #010101;
  float: right;
  margin-right: 50px;
}

li a:hover:not(.active) {
  color: white;
  background-color: #d65106;
  font-weight: bold;
}
.active {
  background-color:  #d65106;
  color: white;
  font-weight: bold;
}
</style>