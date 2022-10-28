<template>
    <div class="box">
        <div class="head">

            <h2 :class="{HebrewT:$i18n.locale === 'he'}">{{$t("products")}}
                <span :class="{HebrewT:$i18n.locale === 'he'}"> {{$t("selectProduct")}} </span>
                <div class="currency">
                    <span :class="{Hebrew:$i18n.locale === 'he'}">{{$t("currency")}}
                        <select class="dropbtn">
                            <option v-for="(currency, i) in currencies" :key="`currency-${i}`" :value="currency">
                                {{ currency }}
                            </option>
                        </select>
                    </span>


                </div>
            </h2>



            <div class="products">


                <label v-for="(dataN, i) in data" :key="`dataN-${i}`">
                    <div id="productN">
                        <product :productName="data[i]" v-bind:selected-product-info="selectedProductInfo"
                            :selectedProductAmount="selectedProductAmount" :allWithAmount="allWithAmount" />
                    </div>
                </label>
            </div>

        </div>
    </div>
</template>

<script>
import product from "../components/product.vue";
export default {
    components: { product },
    data() {
        return {
            data: [],
            currencies: ["ILS", "US$",
                "EUR"],
            productName: []
        };
    },
    mounted() {
        fetch(process.env.VUE_APP_JSON_LINK)
            .then(res => res.json())
            .then(data => this.data = data.Data.LandingPages4Products_Items)
            .catch(err => console.log(err.message))
    },
    props: [
        'allWithAmount',
        'selectedProductInfo',
        'selectedProductAmount'
    ],

}
</script>

<style lang="scss" scoped>
.box {

    .Hebrew {
        direction: rtl;
    }

    padding-bottom: 100px;
    background-color: #f6f6f8;
    padding: 30px 50px;

    p {
        padding-top: 10px;
        padding-left: 80px;
    }

    .currency {
        span {
            select option {
                background-color: #82caff;
            }
        }
    }

    .head {
        margin: 0 auto;

        .products {
            padding: 30px 0;
            display: flex;
            overflow: auto;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin: 1em;

            #productN {
                justify-content: flex-start;
            }
        }
    }

    .products:last-child {
        margin-right: auto;
    }

    @media (max-width: 910px)  {
        text-align: center;
        justify-content: center;

        .products {
            padding-left: 0;
            justify-content: center;
        }


    }


}
</style>