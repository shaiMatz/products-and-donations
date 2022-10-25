<template>
    <div class="box" @mouseover="checkIfAllWithAmount">
        <h2 :class="{HebrewT:$i18n.locale === 'he'}">{{$t("Donation")}}
            <span>{{productTitle.DonationDescription}}</span>
        </h2>

        <div class="selectBox">
            <div class="Description">
                <span :class="{HebrewT:$i18n.locale === 'he'}">{{$t("donationDes")}}</span>
            </div>
            <div class="Don" :class="{hideCl:productTitle.HideDonationNames==0}">
                <p :class="{HebrewT:$i18n.locale === 'he'}">{{$t("donatingM")}}</p>
                <section :class="{hideClass:productTitle.HideDonationNames==0}">
                    <div class="inputGroup" :class="{pressedR:chosen==dataN.LandingPages4Products_Donation_Items_Id}"
                        @click="pressedRadio(dataN.LandingPages4Products_Donation_Items_Id); pressedSaveO(dataN)"
                        for="radio1" v-for="(dataN, i) in data" :key="`dataN-${i}`">
                        <label for="dataN.text" v-show="productTitle.HideDonationNames==0">
                            {{dataN.LandingPages4Products_Donation_Items_Name}}: </label>
                        <label for="dataN.text">{{dataN.LandingPages4Products_Donation_Items_Amount}}</label>
                    </div>
                </section>
                <div v-show="chosen!=data1" :class="{pressedR:chosen==data1}" class="inputGroup" id="other"
                    @click="pressedRadio(data1)">
                    <span :class="{HebrewT:$i18n.locale === 'he'}">{{$t("other")}}</span>

                </div>
                <input v-show="chosen==data1" v-model="message" type="number" class="form__input" id="name"
                    placeholder="Type another amount" required="" />
                <div class="continueB">
                    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
                    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
                    <a @click="togglePayment()" class="button1" :class="{HebrewT:$i18n.locale === 'he'}">{{$t("Summary")}}</a>
                    <!-- <button class="btn btn-2 btn-sep icon-cart" @click="togglePayment()">Summary and Payment</button> -->
                </div>
                <p class="errorMsg" v-show="!allWithAmount[0]" :class="{HebrewT:$i18n.locale === 'he'}">{{$t("errorAmount")}}</p>
            </div>

        </div>
    </div>

    <div v-if="showPayment">
        <Payment @close="togglePayment" v-bind:selected-product-info="selectedProductInfo" :isOther="isOther"
            :selectedProductAmount="selectedProductAmount" :donObject="donObject"
            :hideDonName='productTitle.HideDonationNames' />
    </div>

</template>

<script>
import Payment from '../components/Payment.vue'
export default {

    data() {
        return {
            data: [],
            chosen: "",
            data1: 100000,
            showPayment: false,
            message: '',
            donObject: '',
            isOther: false,


        };
    },
    components: {
        Payment
    },
    mounted() {
        fetch("https://jaffawebapidev.amax.co.il/API/LandingPage/GetLandingPages4Products?urlAddr=d71b4c3b-c489-42b9-b8dd-6caa0168d1e2&paramkey=jdhdksajd~4lkhDskk*(kksKHH^7*223!!!$&PageGUID=23ddsadffdsfdsf")
            .then(res => res.json())
            .then(data => this.data = data.Data.LandingPages4Products_Donation_Items)
            .catch(err => console.log(err.message))

    },
    props: [
        'productTitle', 'productName',
        'selectedProductInfo',
        'selectedProductAmount',
        'allWithAmount'
    ],

    methods: {
        pressedRadio(chose) {
            console.log(chose)
            if (this.chosen != chose) {
                this.chosen = chose
                this.isOther = false
            }
            if (this.chosen == this.data1)
                this.donObject = ''
        },
        togglePayment() {
            if (this.allWithAmount[0]) {
                if (this.chosen == this.data1) {
                    this.donObject = this.message
                    this.isOther = true

                }
                console.log(this.donObject)
                this.showPayment = !this.showPayment
                console.log('togglePayment: ' + this.showPayment)
            }
        },
        pressedSaveO(obj) {
            this.donObject = obj
        },
        checkIfAllWithAmount() {
         
            let amountLen = this.selectedProductAmount.length
            let productLen = this.selectedProductInfo.length
            if(productLen == 0){
                this.allWithAmount[0] = false
            }
            else
            {console.log(this.selectedProductAmount)
            console.log(this.selectedProductInfo)
            console.log("amount:" + amountLen)
            console.log("product:" + productLen)

            for (let i = 0; i < amountLen; i++) {
                console.log(this.selectedProductAmount[i])
                if (this.selectedProductAmount[i] != null) {
                    this.allWithAmount[0] = true
                }
                else
                    this.allWithAmount[0] = false
            }}

        }

    },

}
</script>

<style lang="scss" scoped>
.box {
    min-height: 750px;
    background-color: #f6f6f8;
    padding: 30px 50px;
    padding-bottom: 180px;

    h1 {
        font-weight: 600;
        font-size: 30px;
        color: #000;
        text-transform: uppercase;
        padding: 10px;
        padding-top: 30px;
        padding-left: 80px;
    }

    .selectBox {
        display: flex;
        height: fit-content;
        width: 100%;
        padding: 50px 0;
        margin-top: 30px;
        box-shadow: 0px 2px 10px hsla(207, 9%, 42%, 0.25);
        border-radius: 8px;

        .errorMsg {
            color: crimson;
            font-weight: 600;
            font-size: 12px;
        }

        .Description {
            span {
                font-family: "Raleway";
                font-size: 19px;
                font-weight: 300;
                letter-spacing: 3px;
                padding: 30px 0;
            }

            box-shadow: 0px 0px 30px hsla(210, 17%, 93%, 0.25);
            border-radius: 8px;
            text-align: center;
            width: 40%;
            height: fit-content;
            align-items: center;
            padding: 7% 60px;
            margin-left: 100px;
            // position: absolute;
            background-color: #fff;
            margin-top:2%;

        }

        .Don {
            // background-color: antiquewhite;

            width: 800px;
            padding-top: 60px;
            padding-left: 7%;

            section {
                display: flex;
                margin-top: 30px;

            }

            .hideClass {
                flex-direction: column;

                .inputGroup {
                    width: 495px;
                }
            }

            p {
                padding-left: 20px;
                letter-spacing: 2px;

            }

            a.button1 {
                border-radius: 2em;
                display: inline-block;
                padding: 0.65em 10.1em;
                border: 0.2em solid #ffffff;
                margin: 1.5em 0.3em 0.3em 10px;
                box-sizing: border-box;
                text-decoration: none;
                font-weight: 300;
                color: #000000;
                text-align: center;
                transition: all 0.2s;
                box-shadow: 0px 2px 10px rgba(0, 0, 0, .12);
                cursor: pointer;
            }

            a.button1:hover {
                color: #000000;
                background-color: #ffffff;
                box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.12);
            }

            @media all and (max-width:30em) {}

            .inputGroup {
                background-color: #fff;
                height: 50px;
                text-align: center;
                padding: 15px 80px 15px 70px;
                margin: 10px;
                border-radius: 5px;
                box-shadow: 0px 2px 5px -2px hsla(207, 94%, 79%, 0.25);
                cursor: pointer;

                &:hover {
                    box-shadow: 0px 2px 10px rgba(0, 0, 0, .12);

                }

                label {
                    cursor: pointer;
                }
            }

            #other {
                width: 495px;
                padding: 12px 20px;

            }

            .pressedR {
                box-shadow: 0px 0px 10px rgba(0, 0, 0, .12);
                border: 2px solid #35374642;

            }

            .form__input {
                font-family: 'Roboto', sans-serif;
                color: #333;
                font-size: 1rem;
                margin: 10px 10px;
                padding: 1rem 2rem;
                border-radius: 0.2rem;
                background-color: rgb(255, 255, 255);
                border: none;
                width: 490px;
                display: block;
                border-bottom: 0.3rem solid transparent;
                transition: all 0.3s;
                box-shadow: 0px 2px 10px rgba(0, 0, 0, .12);
                border-radius: 5px;

            }

        }

        .hideCl {
            padding-top: 0;
        }

    }



    @media (max-width: 1200px) and (min-width: 550px) {
        .selectBox {
            flex-direction: column;
            align-items: center;
            box-shadow: none;
            padding: 0;

            .Description {
                margin: 0;
                width: 60%;
            }

            .Don {
                padding-left: 0;
                width: min-content;


            }

            .hideCl {
                padding-top: 50px;
            }
        }


        .box .selectBox .Don a.button1 {
            display: block;
            margin: 0.2em auto;
            padding: 10px 5px;

        }




    }
}

@media (max-width: 550) and (min-width: 350) {
    .box .selectBox {
        flex-direction: column;
        align-items: center;
        box-shadow: none;
        padding: 0;
    }

    .box .selectBox .Description {
        margin: 0;
        width: 80%;

    }
    .box .selectBox .Don p{
        position: relative;
        width:inherit;
        padding: 30px 20px;
        padding-bottom: 0;
    }
    .box .selectBox .Don {
        width: auto;
    }

    .box .selectBox .Don .hideClass .inputGroup {
        width: 85%;
        padding: 0;
        padding-top:15px;
    }

    .box .selectBox .Don #other {
        width: 85%;

    }

    .box .selectBox .Don a.button1 {
        display: block;
        margin: 0.2em auto;
        padding: 10px 5px;
        margin-right: 20px;
    }
}

@media (max-width: 550px) {
    .box .selectBox {
        flex-direction: column;
        align-items: center;
        box-shadow: none;
        padding: 0;
    }

    .box .selectBox .Description {
        margin: 0;
        width: 140%;

    }
    .box .selectBox .Don p{
        position: relative;
        width:inherit;
        padding: 30px 20px;
        padding-bottom: 0;
    }
    .box .selectBox .Don {
        width: auto;
    }

    .box .selectBox .Don .hideClass .inputGroup {
        width: 100%;
        padding: 0;
        padding-top:15px;
        margin:0;
        margin-bottom: 20px;
        height: 70px;
        min-height: fit-content;

    }

    .box .selectBox .Don #other {
        width: 100%;
margin:0;
    }

    .box .selectBox .Don a.button1 {
        display: block;
        margin: 0.2em auto;
        padding: 10px 5px;
        margin-right: 20px;
    }
}

// 
//     .selectBox {
//         flex-direction: column;
//         align-items: center;
//         box-shadow: none;
//         padding: 0;

//         .Description {
//             margin: 0;
//             width: 50%;
//         }

//         .Don {
//             padding-left: 0;
//             width: auto;

//             #other {
//                 width: 50px;
//             }

//             .hideClass {
//                 .inputGroup {
//                     width: 50px;
//                 }
//             }
//         }

//         .hideCl {
//             padding-top: 100px;
//         }

//     }

//     .btn-sep {
//             padding: 15px 13px 15px 15px;
//         }


// }
</style>