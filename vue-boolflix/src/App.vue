<template>
  <div id="app">
    <header-box @search="search"/>
    <main-container :movies="moviesList"/>
  </div>
</template>

<script>
import HeaderBox from './components/HeaderBox.vue';
import MainContainer from './components/MainContainer.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HeaderBox,
    MainContainer
  },
  data() {
    return {
      moviesList: [],
      seriesList: [],
      api_key: '8bf258bbaf83c13c1a40da7cda1cf3a1'
    }
  },
  mounted() {
    // this.searchMovies('titanic')
  },
  methods: {
    
    search(query) {
      this.searchMovies(query)
      this.searchTv(query)
    },

    async searchMovies(query) {
      this.moviesList = await this.callApi('movie', query)
    },
    async searchTv(query) {
      this.seriesList = await this.callApi('tv', query);
    },
  
    async callApi(type, query) {

      // type: movie, tv

      const params = {
        query: query,
        api_key: this.api_key
      }

      // https://api.themoviedb.org/3/search/movie?query=${query}&api_key=8bf258bbaf83c13c1a40da7cda1cf3a1

      const results = await axios.get(`https://api.themoviedb.org/3/search/${type}`, { params }
        )
        .then((res) => {
          console.log('HO RISPOSTO', res.data.results)
          return res.data.results;
        })
      
      return results;
      
    }

  }
}
</script>

<style lang="scss">

</style>
