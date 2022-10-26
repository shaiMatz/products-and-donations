<template>
  <div @mouseover="checkLang">
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
  </div>
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
  }, mounted() {
    fetch("https://jaffawebapidev.amax.co.il/API/LandingPage/GetLandingPages4Products?urlAddr=d71b4c3b-c489-42b9-b8dd-6caa0168d1e2&paramkey=jdhdksajd~4lkhDskk*(kksKHH^7*223!!!$&PageGUID=23ddsadffdsfdsf")
      .then(res => res.json())
      .then(data => this.data = data.Data.LandingPages4Products)
      .catch(err => console.log(err.message))
  },

  methods: {
    checkLang() {
      let currentPath = this.$router.currentRoute._rawValue.fullPath
      if (currentPath === '/he')
        this.$i18n.locale = 'he'
      else
        this.$i18n.locale = 'en'
    }
  }

};
</script>

<style>
#maintitle {
  padding-bottom: 50px;
}
</style>