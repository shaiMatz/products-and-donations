<template>
  <homeMenu />
  <header>
    <h2 id="maintitle" :class="{ HebrewT: $i18n.locale === 'he' }">{{ data[0].PageName }}
    </h2>
  </header>

  <htmlFile :productTitle="data[0]"  />
  <products v-bind:selected-product-info="selectedProductInfo" :allWithAmount="allWithAmount"
    :selectedProductAmount="selectedProductAmount" />
  <donations :productTitle="data[0]" v-bind:selected-product-info="selectedProductInfo"
    :selectedProductAmount="selectedProductAmount" :allWithAmount="allWithAmount" />
</template>

<script>
import htmlFile from "../components/htmlFile.vue";
import homeMenu from "../components/HomeMenu.vue";
import products from "../components/products.vue";
import donations from "../components/donations.vue";
export default {
  name: "HomeView",
  components: { htmlFile, homeMenu, products, donations },
  data() {
    return {
      data: "cvf",
      productTitle: [],
      selectedProductInfo: [],
      selectedProductAmount: [],
      allWithAmount: []
    };
  },
  mounted:function(){
        this.method1() //method1 will execute at pageload
        ,fetch(process.env.VUE_APP_JSON_LINK)
      .then(res => res.json())
      .then(data => this.data = data.Data.LandingPages4Products)
      .catch(err => console.log(err.message))
  },
  methods: {
    method1:function(){
      console.log('enter method1')
      let currentPath = window.location.pathname
      if (currentPath === '/he')
      {
        this.$i18n.locale = 'he'
        console.log('lang is he')

      }
      else
      {
        this.$i18n.locale = 'en'
        console.log('lang is en')

      }
    }
  },
 

};
</script>

<style>
#maintitle {
  padding-bottom: 50px;
}
</style>