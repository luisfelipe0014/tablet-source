<template>
  <div class="dashboard">
    <div class="nav"><i class="fas fa-line-height"></i><i class="fas fa-cogs"></i></div>
    <div style="padding: 0px 17px;">
      <h5 style="margin-block: 10px 0px;font-weight: 500;font-family: 'Montserrat SemiBold';color: #c2c2c2;">Olá Policial!</h5>
    </div>
    <div class="cards">
      <div class="card-policiais card">
        <div class="title">Policiais</div>
        <div class="value">163</div>
        <div class="icon"><i class="fas fa-users" style="color: #7E72F2!important;"></i></div>
      </div>
      <div class="card-boletins card">
        <div class="title">Boletins</div>
        <div class="value">163</div>
        <div class="icon"><i class="fas fa-file-alt" style="color: #2DCD7A!important;"></i></div>
      </div>
      <div class="card-prisoes-hoje card">
        <div class="title">Prisões Hoje</div>
        <div class="value">163</div>
        <div class="icon"><i class="fab fa-keycdn" style="color: #ED5F5F!important;"></i></div>
      </div>
      <div class="card-boletins-hoje card">
        <div class="title">Boletins Hoje</div>
        <div class="value">163</div>
        <div class="icon"><i class="fas fa-file-alt" style="color: #FF9F43!important;"></i></div>
      </div>
    </div>
    <div style="padding: 0px 17px;">
      <h5 style="margin-block: 0px 0px;font-weight: 500;font-family: system-ui; color: #c2c2c2;">Estatísticas Semanal</h5>
    </div>
    <div class="grafic">
      <line-chart :data="data" :data2="data2" :labels="labels"/>
    </div>
  </div>
</template>
<script>
import LineChart from '../../components/LineChart.vue'

export default {
  name: 'dashPM',
  components: {
    LineChart
  },
  data () {
    return {
      labels: [
        '23/07',
        '24/07',
        '25/07',
        '26/07',
        '27/07',
        '28/07',
        '29/07'
      ],
      data: [150, 100, 50, 100, 50, 100, 50],
      data2: [100, 50, 100, 50, 100, 50, 100]
    }
  }
}
</script>
<style scoped="true">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
div{
  font-family: 'Montserrat', sans-serif;
}
.dashboard{
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  /* background: #F9F9F9;
  box-shadow: 0px 2px 8px rgb(0 0 0 / 8%); */
}

.nav {
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgb(0 0 0 / 14%);
  border-radius: 8px;
  width: 810px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  font-size: 14px;
  transition: width .25s ease;
  margin: 10px;
}

.fixed-top {
  position: relative;
  right: 0;
  left: 0;
  z-index: 1030;
}

.nav i {
  cursor: pointer;
  color: #2C2C2C;
}

.cards {
  display: flex;
  height: 90px;
  flex-direction: row;
  flex-wrap: nowrap;
}

.cards>.card {
  width: 100%;
  margin: 12px 15px;
  padding: 8px;
}

.card {
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgb(0 0 0 / 14%);
  border-radius: 8px;
}

.card .title {
  color: #2C2C2C;
  font-family: "Montserrat Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
}

.card .value {
  font-family: "Montserrat SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 36px;
  color: #2C2C2C;
}

.card .icon {
  margin: auto 120px;
  position: absolute;
  top: 18px;
  font-size: 25px;
  z-index: 9999;
}

.card .icon:before {
  content: '';
  position: absolute;
  background: #D5D1FB;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -9;
}

.card-boletins .icon:before {
  background: #E6F7EE;
}

.card-prisoes-hoje .icon:before {
  background: #FCEAEA;
}

.card-boletins-hoje .icon:before {
  background: #FFDFC2;
}

.grafic {
  position: relative;
  width: 800px;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgb(0 0 0 / 14%);
  border-radius: 8px;
}
</style>
