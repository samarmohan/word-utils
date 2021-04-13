<template>
	<Reverser />
</template>

<script>
import Reverser from "./components/Reverser.vue";

export default {
	name: "App",
	components: {
		Reverser,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
</style>
