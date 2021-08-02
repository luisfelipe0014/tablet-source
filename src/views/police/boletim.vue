<template>
  <div class="dashboard">
    <div class="nav"><i class="fas fa-line-height"></i><i class="fas fa-cogs"></i></div>
    <div class="seach" style="margin: auto -5px;">
      <h5 style="margin-block: 10px 0px;font-weight: 500;font-family: 'Montserrat SemiBold';color: #2C2C2C;">Boletim de Ocorrência</h5>
        <div class="search-input">
          <input type="text" placeholder="Pesquisar Boletim.." v-model="search">
          <div class="icon"><i class="fas fa-search"></i></div>
        </div>
    </div>
    <div class="container">
      <div class="wrapper">
        <!-- <div class="card" v-for="beo in filteredList" :key="post"> -->

          <!-- <a v-bind:href="beo.id" target="_blank"> -->
            <!-- <img v-bind:src="post.img"/> -->
            <!-- <small>posted by: {{ post.author }}</small> -->
            <!-- {{ post.title }} -->
          <!-- </a> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoletimOcorrencia',
  data () {
    return {
      search: '',
      postList: [
        {
          id: 1,
          requerente: '124 - Matruz com Leite',
          data: new Date(),
          policial: '1 - Felipe Santos'
        },
        {
          id: 2,
          requerente: '124 - Matruz com Leite',
          data: new Date(),
          policial: '1 - Felipe Santos'
        },
        {
          id: 3,
          requerente: '124 - Matruz com Leite',
          data: new Date(),
          policial: '1 - Felipe Santos'
        },
        {
          id: 4,
          requerente: '124 - Matruz com Leite',
          data: new Date(),
          policial: '1 - Felipe Santos'
        },
        {
          id: 5,
          requerente: '124 - Matruz com Leite',
          data: new Date(),
          policial: '1 - Felipe Santos'
        },
        {
          id: 6,
          requerente: '124 - Matruz com Leite',
          data: new Date(),
          policial: '1 - Felipe Santos'
        },
        {
          id: 7,
          requerente: '124 - Matruz com Leite',
          data: new Date(),
          policial: '1 - Felipe Santos'
        },
        {
          id: 8,
          requerente: '124 - Matruz com Leite',
          data: new Date(),
          policial: '1 - Felipe Santos'
        },
        {
          id: 9,
          requerente: '124 - Matruz com Leite',
          data: new Date(),
          policial: '1 - Felipe Santos'
        }
      ]
    }
  },
  computed: {
    filteredList () {
      return this.postList.filter(post => {
        console.log(post)
        return post.id.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style scoped="true">

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

.nav i {
  cursor: pointer;
  color: #2C2C2C;
}

.container {
  position: relative;
  width: 810px;
  height: 478px;
  margin: 10px auto;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgb(0 0 0 / 14%);
  border-radius: 8px;
}

.seach {
  padding: 0px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.search-input{
  background: #fff;
  width: 175px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 2px 8px rgb(0 0 0 / 14%);
}
.search-input input{
  height: 30px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 0 25px 0 10px;
  font-size: 13px;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
}
.search-input.active input{
  border-radius: 5px 5px 0 0;
}
.search-input .autocom-box{
  padding: 0;
  opacity: 0;
  pointer-events: none;
  max-height: 280px;
  overflow-y: auto;
}
.search-input.active .autocom-box{
  padding: 10px 8px;
  opacity: 1;
  pointer-events: auto;
}
.autocom-box li{
  list-style: none;
  padding: 8px 12px;
  display: none;
  width: 100%;
  cursor: default;
  border-radius: 3px;
}
.search-input.active .autocom-box li{
  display: block;
}
.autocom-box li:hover{
  background: #efefef;
}
.search-input .icon{
  position: absolute;
  right: 0px;
  top: 0px;
  height: 29px;
  width: 29px;
  text-align: center;
  line-height: 33px;
  font-size: 14px;
  color: #7E72F2;
  cursor: pointer;
}

</style>
