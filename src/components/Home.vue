<template>
  <div class="dashboard">
    <div class="nav fixed-top"><i class="fas fa-line-height"></i><i class="fas fa-cogs"></i></div>
  </div>
</template>

<style scoped="true">

.dashboard{
  background-size: cover !important;
  background-position: center !important;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #fff;
}

.nav {
  width: 80%;
  margin-left: 198px;
  height: 50px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  font-size: 14px;
    transition: width .25s ease;
  -webkit-transition: width .25s ease;
  -moz-transition: width .25s ease;
  -ms-transition: width .25s ease;
  box-shadow: 0 19px 34px -15px #2e2f32;
  -webkit-box-shadow: 0 19px 34px -15px #2e2f32;
  -moz-box-shadow: 0 19px 34px -15px #2e2f32;
}

.fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}

.nav i {
  cursor: pointer;
}


</style>
