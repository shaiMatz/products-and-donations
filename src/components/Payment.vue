<template>
  <div class="backdrop" @click.self="closePayment">
    <div class="modal">
      <h3>order summary </h3>
      <div class="orderS">
        <div v-for="(product,i) in selectedProductInfo" :key="`product-${i}`">
          <div class="line">
            <span id="amount" style="text-align:left;">x{{selectedProductAmount[i]}}</span>
            <span>{{product.ProdName}}</span>
            <span style="float:right;">{{product.Price}} ILS x {{selectedProductAmount[i]}} = {{product.Price*selectedProductAmount[i]}} ILS</span>
          </div>
        </div>
        <div class="line" v-show="donObject!=''" v-if="!isOther">
          <span id="amount" style="text-align:left;">x1</span>
          <span style="text-align:left;" v-if="hideDonName==0">Donation -
            {{donObject.LandingPages4Products_Donation_Items_Name}}</span>
          <span style="text-align:left;" v-else>Donation</span>
          <span style="float:right;"> {{donObject.LandingPages4Products_Donation_Items_Amount}} ILS</span>
        </div>
        <div v-else class="line">
          <span id="amount" style="text-align:left;">x1</span>
          <span style="text-align:left;">Donation</span>
          <span style="float:right;"> {{donObject}} ILS</span>

        </div>
      </div>
      <h4 class="total">
        <span style="float:right;">total: {{Sum}} ILS</span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePayment() {
      this.$emit('close')
    },

  },
  props: [
    'selectedProductInfo',
    'selectedProductAmount',
    'donObject', 'hideDonName',
    'isOther'
  ],
  computed: {
    Sum() {
      let sum = 0
      console.log('don:'+this.donObject)
      if (this.selectedProductInfo) {
        for (let i = 0; i < this.selectedProductInfo.length; i++) {
          sum += this.selectedProductInfo[i].Price * this.selectedProductAmount[i]
          console.log('entered')
        }
      }
      console.log(this.donObject)
      if (this.donObject != ''&&!this.isOther) {
        sum += this.donObject.LandingPages4Products_Donation_Items_Amount
        console.log('entered if:' + this.donObject.LandingPages4Products_Donation_Items_Amount)

      }
    
      else if (this.isOther) {
        sum += this.donObject
        console.log('entered else if')
      }

      return sum
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 70%;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;

  #amount {
    font-weight: 600;
    color: #08080862;
    margin-right: 30px;
  }

  h3 {
    text-transform: uppercase;
  }

 

  .orderS {
    position: relative;
    border-bottom: 1px solid #35374642;
    padding-bottom: 20px;
    height: fit-content;
    .line {
    position: relative;
    margin-top: 10px;
    margin-right:30px;
    padding: 20px 30px;
  }
  span {
      font-weight: 550;
      color: #08080896;

    }
  }

  .total {
    text-transform: capitalize;
    font-weight: 550;
    padding: 20px 30px;

  }

}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>