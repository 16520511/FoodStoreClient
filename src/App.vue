<template>
  <div id="app">
    <NavBar />
    <router-view  />
  </div>
</template>

<script>
import axios from './axios'
import NavBar from './components/NavBar'

export default {
    name: 'App',
    components: {NavBar},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {font-family: "BaufraW01-Regular"; src: url("//db.onlinewebfonts.com/t/4d66a3130e8f4215e669c8f0321fd945.eot"); src: url("//db.onlinewebfonts.com/t/4d66a3130e8f4215e669c8f0321fd945.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/4d66a3130e8f4215e669c8f0321fd945.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/4d66a3130e8f4215e669c8f0321fd945.woff") format("woff"), url("//db.onlinewebfonts.com/t/4d66a3130e8f4215e669c8f0321fd945.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/4d66a3130e8f4215e669c8f0321fd945.svg#BaufraW01-Regular") format("svg"); }
@font-face {font-family: "Noto Sans"; src: url("//db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.eot"); src: url("//db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.woff") format("woff"), url("//db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.svg#Noto Sans") format("svg"); }
@font-face {font-family: "MuseoW01-900"; src: url("//db.onlinewebfonts.com/t/4cc9d692753925335e7af83ecf6e6815.eot"); src: url("//db.onlinewebfonts.com/t/4cc9d692753925335e7af83ecf6e6815.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/4cc9d692753925335e7af83ecf6e6815.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/4cc9d692753925335e7af83ecf6e6815.woff") format("woff"), url("//db.onlinewebfonts.com/t/4cc9d692753925335e7af83ecf6e6815.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/4cc9d692753925335e7af83ecf6e6815.svg#MuseoW01-900") format("svg"); }

body {
    margin: 0;
    font-size: 1.2rem !important;
}

.color-primary {
    background-color: #ff4100 !important;
    color: white !important;
    border: none !important;
}

.color-primary:hover {
    background-color: #e64712 !important;
}

.divider {
    background-color: #ff4100;
    height: 0.4rem;
    width: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
}

h1,h2,h3,h4,h5 {
    font-family: "MuseoW01-900";
}

p {
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.el-button span {
    font-size: 1.2rem;
}

.el-input__inner {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.2rem !important;
    padding: 1.5rem 1rem !important;
}

.grid-header,.header-bar {
    border: 1px solid orangered;
    border-radius: 2rem;
    background-color: orangered;
    color: white;
}

.grid-header .el-col h5,.header-bar h5 {
    margin: 1rem;
    text-align: center;
}
</style>
