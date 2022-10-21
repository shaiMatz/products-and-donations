<template>

    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{ name: 'HomeView' }">
                    <img id="logo" src="../assets/amax1-removebg-preview.jpg">
                </router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <div class="dropdown">
                        <select v-model="$i18n.locale" class="dropbtn">
                            <option value="en">English</option>
                            <option value="he">עברית</option>
                        </select>
                    </div>
                </ul>
            </div>
        </nav>
        <div @click="toggleMobileNav" class="menu-btn" v-show="mobile">

            <div class="line line--1"></div>
            <div class="line line--2"></div>
            <div class="line line--3"></div>
        </div>
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">

                <div class="dropdown">
                    <select v-model="$i18n.locale" class="dropbtn">
                        <option value="en">English</option>
                        <option value="he">עברית</option>
                    </select>
                </div>

            </ul>
        </transition>

    </header>
</template>
  
<script>
// import menuIcon from "../assets/Icons/bars-regular.svg";

export default {
    name: "menu",
    components: {

    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windownWidth: null,
            locales: ["HE", "EN"]
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windownWidth = window.innerWidth;
            console.log(this.windownWidth)
            if (this.windownWidth <= 750) {
                this.mobile = true;
                console.log(this.mobile)
                return;
            }
            this.mobile = false;
            console.log(this.mobile)
            this.mobileNav = false;
            return;
        },

        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        }
    },

};
</script>
  
<style lang="scss" scoped>
header {
    background-color: #f6f6f8;
    padding: 0 25px;
    z-index: 99;
    position: absolute;
    width: 100%;


    #logo {
        display: inline-block;
        margin: 0;
        height: 20px;
        width: auto;

    }

    nav {
        display: flex;
        padding: 5px 0;

        .branding {
            display: flex;
            align-items: center;

            .header {
                font-weight: 600;
                font-size: 24px;
                color: #000;
                text-decoration: none;
            }
        }

        .nav-links {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: flex-end;

            ul {
                margin-right: 32px;


                .link:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    .dropbtn {
        color: #000;
        font-size: 16px;
        border: none;
        margin-top: 0;
        background-color: #f6f6f8;
        font-weight: 500;
        color: #000;
        text-decoration: none;
        padding: 10px;
        margin-right: 20px;

        &:hover {
            color: #1eb8b8;
        }

    }

    select:active {
        border: none;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }



    .dropdown:hover .dropdown-content {
        display: block;
    }

    // .dropdown:hover .dropbtn {
    //     background-color: #37a5c7;
    // }

    .menu-btn {
        cursor: pointer;
        position: absolute;
        top: 7px;
        right: 25px;
        height: 25px;
        width: auto;
        z-index: 5;

    }

    .menu-btn .line {
        padding: 0;
        width: 30px;
        background: #000;
        height: 2px;
        margin: 5px 0;
        transition: all 700ms cubic-bezier(.9, 0, .33, 1);
        color: #303030;
    }

    .menu-btn .line.line--1 {
        width: 30px;
        transform: rotate(0) translateY(0);
    }

    .menu-btn .line.line--1.line-cross {
        width: 30px;
        transform: rotate(45deg) translateY(10px);
        background: rgba(0, 0, 0, 0.6);
    }

    .menu-btn .line.line--2 {
        width: 28px;
        transform: translateX(0);
    }

    .menu-btn .line.line--2.line-fade-out {
        width: 28px;
        transform: translate(30px);
        opacity: 0;
    }

    .menu-btn .line.line--3 {
        width: 20px;
        transform: rotate(0) translateY(0);
    }

    .menu-btn .line.line--3.line-cross {
        width: 30px;
        transform: rotate(-45deg) translateY(-10px);
        background: rgba(0, 0, 0, 0.6);
    }

    .mobile-nav {
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: #303030;
        top: 0;
        left: 0;

        .link {
            padding: 15px 0;
            color: #fff;
        }
    }

    .mobile-nav .dropbtn {
        background-color: #303030;
        color: #fff;
        padding: 15px 0;
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: all 1s ease;
    }

    .mobile-nav-enter {
        transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
        transform: translateX(0);
    }

    .mobile-nav-leave-to {
        transform: translateX(-250px);
    }
}
</style>
  