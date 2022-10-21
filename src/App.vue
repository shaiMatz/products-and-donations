
<template>
  <HomeView />
  <!-- <HelloI18n /> -->
</template>

<script>
import HomeView from './views/HomeView.vue';
import HelloI18n from './components/HelloI18n.vue';
export default {
  name: "app",
  components: { HomeView, HelloI18n }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/earlyaccess/opensanshebrew.css);
@import url(https://fonts.googleapis.com/earlyaccess/opensanshebrewcondensed.css);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans Hebrew', serif, sans-serif, Arial, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.HebrewT {
  direction: rtl;
  font-family: 'Open Sans Hebrew';
  font-weight: 500;
}

nav {
  padding: 30px;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}

header {
  background-color: #f6f6f8;

  #maintitle {
    text-align: center;
    padding-top: 100px;
    font-size: 40px;
  }

  #PageDescription {
    padding-top: 10px;
  }
}

h1 {
  font-family: "Raleway";
}

h2 {
  text-align: center;

  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway";
  font-weight: 300;
  font-size: 35px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  text-transform: uppercase;
}

h2 span {
  display: block;
  line-height: 1.3;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px;
  line-height: 3em;
  color: rgba(0, 0, 0, 0.514);
  padding-bottom: 10px;
}

h2 em {
  font-style: normal;
  font-weight: 600;
}
</style>
