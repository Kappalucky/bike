<template>
  <div id="app">
    <App-navbar />
    <main>
      <router-view :key="$route.path" />
    </main>
  </div>
</template>
<script>
import AppNavbar from '@/components/AppNavbar.vue';

export default {
	name: 'Bike-Store',
	components: {
		AppNavbar,
	},
};
</script>
<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: black;
	height: 100vh;
	width: 100vw;
}
</style>
