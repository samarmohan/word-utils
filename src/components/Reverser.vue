<template>
	<div class="reverser">
		<h2>A simple message reverser</h2>
		<div class="container ">
			<p>{{ toBeReversed }}</p>
			<input id="copyText" class="input" v-model="toBeReversed" />
			<button v-on:click="copy" class="btn btn-success btn-sm m-2">
				Copy Text
			</button>
			<br /><br />
			<button class="btn btn-info" v-on:click="reverseMessage">
				Reverse!
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Reverser",
	data() {
		return {
			toBeReversed: "Hello",
		};
	},
	methods: {
		reverseMessage() {
			this.toBeReversed = this.toBeReversed
				.split("")
				.reverse("")
				.join("");
		},
		copy() {
			const copyText = document.getElementById("copyText");
			copyText.select();
			copyText.setSelectionRange(0, 99999);
			document.execCommand("copy");
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
button:active {
	transform: translate(1px, 1px);
}
</style>
