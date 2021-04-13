<template>
	<div class="container">
		<p class="is-size-2">A simple message reverser</p>
		<div class="field">
			<div class="control">
				<input
					id="copyText"
					class="input is-info is-rounded is-hovered is-focused"
					type="text"
					v-model="toBeReversed"
				/>
			</div>
			<button
				v-on:click="copy"
				class="button is-success is-rounded is-small m-2"
			>
				Copy Text
			</button>
			<br /><br />
			<button class="button is-info is-rounded" v-on:click="reverseMessage">
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
button:active {
	transform: translate(1px, 1px);
}
</style>
