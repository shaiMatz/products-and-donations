<template>

    <div class="row">
        <label>
            <input type="checkbox" name="" />
            <div class="icon-box" @click="saveProduct(); checkIfAllWithAmount()"
             :class="{iconBox1:selected != 'x 0 = 0$'}">
                <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                    <symbol id="checkmark" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-miterlimit="10" fill="none"
                            d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                        </path>
                    </symbol>
                </svg>

                <div class="promoted-checkbox" @click.stop="selectA">
                    <input id="tmp" type="checkbox" class="promoted-input-checkbox" />
                    <label for="tmp">
                        <svg>
                            <use xlink:href="#checkmark" />
                        </svg>
                    </label>
                </div>
                <h4 v-if="$i18n.locale === 'en'">{{ productName.ProdName }}</h4>
                <h4 :class="{HebrewT:$i18n.locale === 'he'}" v-else>{{ productName.ProdNameHe }}</h4>
                <div class="NOProducts" v-if="$i18n.locale === 'en'">
                    <p>{{$t("amount")}}</p>
                    <select v-model="selected" @click.stop="selectA">
                        <option selected>x 0 = 0$</option>
                        <option v-for="n in productName.MaxItems" :key="n" v-bind:value="{ id: n.id, text: n }">
                            x {{ n }} = {{productName.Price*selected.text }}$
                        </option>
                    </select>

                </div>
                <div class="NOProducts" v-else>

                    <select v-model="selected" @click.stop="selectA" class="amountSelect">
                        <option selected>x 0 = 0$</option>
                        <option v-for="n in productName.MaxItems" :key="n" v-bind:value="{ id: n.id, text: n }">
                            x {{ n }} = {{productName.Price*selected.text }}$
                        </option>
                    </select>
                    <span>{{$t("amount")}}</span>

                </div>
                <div class="priceP">
                    <span v-if="productName.Price*selected.text+1"> </span>
                    <p v-else> {{$t("price")}} </p>
                </div>
            </div>
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedProducts: [],
            selected: 'x 0 = 0$'
        }
    },
    props: [
        'productName',
        'selectedProductInfo',
        'selectedProductAmount',
        'allWithAmount'
    ],
    methods: {

        selectA() {
            console.log("selected")
            if (this.selectedProductInfo.includes(this.productName)) {
                var index = this.selectedProductInfo.indexOf(this.productName);
                this.selectedProductAmount[index] = this.selected.text
            }
        },
        saveProduct() {
            console.log(this.selectedProductInfo)
            if (this.selectedProductInfo.includes(this.productName)) {
                console.log('entered')
                var index1 = this.selectedProductInfo.indexOf(this.productName);
                var index2 = this.selectedProductAmount.indexOf(this.selected.text);
                if (index1 > -1) {
                    this.selectedProductInfo.splice(index1, 1);
                    this.selectedProductAmount.splice(index2, 1);
                }
            }
            else {
                this.selectedProductInfo.push(this.productName)
                this.selectedProductAmount.push(this.selected.text)
            }
            console.log(this.selected)

        },
        checkIfAllWithAmount() {
            let amountLen = this.selectedProductAmount.length
            let productLen = this.selectedProductInfo.length
            console.log(this.selectedProductAmount)
            console.log(this.selectedProductInfo)
            console.log("amount:" + amountLen)
            console.log("product:" + productLen)

            for (let i = 0; i < amountLen; i++) {
                if (this.selectedProductAmount[i] != null) {
                    this.allWithAmount[0] = true
                }
            }
            this.allWithAmount[0] = false
        }

    },

}
</script>

<style lang="scss" scoped>
.row {
    margin: 10px;

    h4 {
        text-align: center;
        padding: 10px 20px;
        word-wrap: break-word;
    }

    label {
        cursor: pointer;
        display: flex;
        font-size: 14px;

        input[type="checkbox"] {
            display: none;
        }

    }



}

$brand: cadetblue;
$grey-25: #e6e6e6;
$grey-5: #fcfcfc;

*,
*:before,
*:after {
    box-sizing: border-box;
}

.NOProducts {
    padding: 10px 20px;
    align-self: center;
    position: absolute;
    bottom: 40px;
    left: 20%;

    select {
    
        padding: 3px 20px 3px 50px;
        color: #353746;
    }
}



.NOProducts p {
    font-size: 14px;
    text-align: center;
}



.NOProducts span {
    padding-left: 10px;
    font-size: 14px;
}

.priceP {
    position: absolute;
    // background-color: #8dc3e7;
    width: fit-content;
    border-radius: 10px;
    // border: 2px solid #35374642;
    // box-shadow: 0px 2px 5px -2px hsla(207, 94%, 79%, 0.25);
    bottom: 15px;
    left: 24%;
    padding-bottom: 8px;

    span {
        margin: 1px 10px;

    }

    p {
        font-size: 12px;
        text-align: center;
        margin: 1px 10px;
    }

}



.promoted-checkbox {

    align-self: flex-end;

    label {
        color: $brand;
        line-height: 40px;
        cursor: default;
        position: relative;

        &:after {
            content: "";
            height: 20px;
            width: 20px;
            margin-right: 1rem;
            float: left;
            border: 1px solid #35374642;
            border-radius: 3px;
            transition: 0.15s all ease-out;
        }
    }

    svg {
        stroke: $brand;
        stroke-width: 2px;
        height: 0;
        width: 24px;
        position: absolute;
        left: 2px;
        top: -6px;
        stroke-dasharray: 33;
    }
}

@keyframes draw-checkbox {
    0% {
        stroke-dashoffset: 33;
    }

    100% {
        stroke-dashoffset: 0;
    }
}


.row label .icon-box {
    position: relative;
    display: flex;
    width: 350px;
    height: 250px;
    padding: 20px;
    flex-direction: column;
    border: 1px solid #35374600;
    color: #353746;
    border-radius: 5px;
    font-size: 21px;
    transition: 0.5s;
    user-select: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    background-color: #FFF;

    &:hover {
        background-color: rgba(255, 255, 255, 0.644);
        box-shadow: -10px 20px 30px rgba(0, 0, 0, .12);
    }
}

.row label .iconBox1 {
    color: #353746;
    --shadow: 0 0 0 3px var(--card-shadow);
    box-shadow: -10px 20px 30px rgba(0, 0, 0, .12);

    svg {
        height: 25px;
        animation: draw-checkbox ease-in-out 0.2s forwards;
    }

    label {

        &:after {
            border: 1px solid $brand;
            background-color: $grey-25;
        }
    }

}

.row label .icon-box span {
    font-size: 16px;
}

@media (max-width: 790px) {

    .row label {
        padding-left: 0;
    }
}
</style>