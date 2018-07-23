<template lang="pug">
  main
    Navigation
    Section1
    h1 test!! what's up
    h1 {{ lodashData }}
    h5 Below is asyncData fetched
    pre {{ extract }}
    nuxt-link(to="/1") to 1
    nuxt-link(to="/2") to 2
</template>

<script>
import axios from '~/plugins/axios';
import Navigation from '~/components/Navigation';
import Section1 from '~/components/home/Section1';
import _ from 'lodash';
// import NoSSR from 'vue-no-ssr';
/* eslint-disable */
export default {
  components: {
    Navigation,
    Section1,
  },
  async asyncData({ params }) {
    const { data } = await axios.get(`https://swapi.co/api/starships/9/`).catch(err => err);
    // console.log(data);

    return {
      extract: data,
    };
  },
	data(){
  	return {
  		dataArr: [1,2,3,4]
	  }
	},
	computed: {
  	lodashData(){
  		return _
				  .chain(this.dataArr)
				  .map((item) => {
				  	return item * 3
				  });
	  }
	}
  // async asyncData(context) {
  //   const { data } = await axios.get('/api/users');
  //   console.log('asyncData');
  //   // console.log(context);
  //   return { users: data };
  // },
  // fetch({ store, params }) {
  //   console.log('fetch');
  // },
  // head() {
  //   console.log('head');
  //   console.log('??')
  //   return {
  //     title: 'Users',
  //   };
  // },
  // validate({ params, query, store}) {
  //   console.log('validate hook in regular route', params);
  //   return true;
  // },
};
</script>

<style lang="scss" scoped>
	h1{
		font-size: 100px;
	}
</style>
