<!-- 
Title: String Art Generator
Author(s): Owen Mundy (2023), Alexander H. (2009)
Date: 2023
License: MIT
-->

<script>
	import * as F from "./lib/functions.js";
	let title = "String Art Generator",
		str = title,
		arr;

	let w = 70,
		h = 50,
		fmin = 1,
		fmax = 25;

	// credit: https://stackoverflow.com/a/71619350/441878
	const splitEmoji = (string) =>
		[...new Intl.Segmenter().segment(string)].map((x) => x.segment);

	function generate() {
		// arr = F.shuffleArray(str.split(""));

		// this method works with emoji *and* text
		arr = F.shuffleArray(splitEmoji(str));

		if (arr.length > 0) title = "";
		// console.log("generate()", arr);
	}

	const clickTitle = () => {
		str = title;
		title = "";
	};

	const samples = [
		"The quick brown fox jumps over the lazy dog",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
		"🌶️🥬🥒🥑🧅🥕🥖🧀🫛🧄🍋🥭🥚🫑🥙🥗🌱🥦🥄🍴" +
			"🌶️🥬🥒🥑🧅🥕🥖🧀🫛🧄🍋🥭🥚🫑🥙🥗🌱🥦🥄🍴",
	];
	const addSample = () => {
		let newstr = `${str}`;
		let safety = 0;
		// loop until the chosen string is different (prevents repeated phrases)
		while (++safety < 10 && newstr == str) {
			newstr = samples[Math.floor(Math.random() * samples.length)];
			console.log(safety, newstr);
		}
		str = newstr;
	};
	// Svelte reactive statements
	// https://svelte.dev/docs/svelte-components#script-3-$-marks-a-statement-as-reactive
	$: str, generate();
</script>

<main>
	<div>
		{#if title}
			<button class="showviz interactive" on:click={clickTitle}>
				<!-- Svelte @html expression to inject HTML
            https://svelte.dev/docs/special-tags#html -->
				<h1 class="logo">{@html title}</h1>
			</button>
		{/if}
	</div>

	<div
		class="interactive"
		on:click={generate}
		on:keyup={generate}
		role="button"
		tabindex="0"
	>
		<!-- Svelte #key causes the element (or component) to completely update when the prop changes 
        https://svelte.dev/docs/logic-blocks#key -->
		{#key arr}
			<!-- Svelte #each block
        https://svelte.dev/docs/logic-blocks#each -->
			{#each arr as letter}
				<!-- Svelte style directive
                https://svelte.dev/docs/element-directives#style-property -->
				<div
					class="char"
					style:color="#{F.randomHex()}"
					style:left="{F.randomInt(45 - w / 2, 40 + w / 2)}%"
					style:top="{F.randomInt(50 - h / 2, 40 + h / 2)}%"
					style:transform="rotate({F.randomInt(0, 360)}deg)"
					style:font-size="{F.randomInt(fmin, fmax)}rem"
				>
					{letter}
				</div>
			{/each}
		{/key}
	</div>

	<div class="sticky-footer">
		<div class="grid-container">
			<div class="note">
				Type or <button class="sm" on:click={addSample}>add</button>
				sample text. Tweak parameters and
				<button class="sm" on:click={generate}>regenerate</button>
				the visualization.
			</div>

			<div>
				<textarea id="str" bind:value={str}></textarea>
				<label class="note" for="str" style="visibility: hidden;">
					Enter text for transformation
				</label>
			</div>

			<!-- tutorial -->
			<div>
				<label class="note" for="fmin">font--</label>
				<input id="fmin" type="range" min=".5" max="100" bind:value={fmin} />
				<span class="digit">{fmin}</span>
				<br />

				<label class="note" for="fmax">font++</label>
				<input id="fmax" type="range" min=".5" max="100" bind:value={fmax} />
				<span class="digit">{fmax}</span>
			</div>

			<div>
				<label class="note" for="w">width</label>
				<input id="w" type="range" min="0" max="100" bind:value={w} />
				<span class="digit">{w}</span>
				<br />

				<label class="note" for="w">height</label>
				<input id="h" type="range" min="0" max="100" bind:value={h} />
				<span class="digit">{h}</span>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
	.showviz {
		background-color: transparent;
		border: none;
		width: 100%;
	}
	/* remove halo */
	.showviz:focus {
		outline: 0 !important;
		-webkit-box-shadow: none !important;
		box-shadow: none !important;
	}

	.interactive {
		cursor: pointer;
	}

	.showviz h1 {
		color: var(--purple);
		margin-bottom: 12rem;
	}
	.logo {
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em var(--purple-50a));
	}
	.grid-container {
		display: grid;
		align-items: center;
		gap: 0.5rem;
		grid-template-columns: 2fr 2fr 2fr 2fr;
		grid-template-rows: 1fr;

		/* grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); */
		grid-auto-flow: column;
	}
	@media (max-width: 991.98px) {
		.grid-container {
			grid-template-columns: 2fr 2fr;
			grid-template-rows: 2fr 2fr;
		}
	}

	.grid-container > div {
		height: 100px;
		/* border: 1px solid red; */
	}
	.sticky-footer {
		box-sizing: border-box;
		width: 100%;
		/* height: 200px; */
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 0 1rem;
		/* background-color: #303030; */
	}
	textarea {
		width: 100%;
		height: 50px;
		padding: 0.5rem;
		/* box */
		background-color: var(--button-bg);
		border: none;
		/* underline */
		/* background-color: var(--body-bg);
		border: none;
        border-bottom: 2px solid #333; */
		/* padding-bottom: 12px;
        margin-bottom: 20px; */
	}
	.digit {
		display: inline-block;
		width: 3rem;
		margin: 3px 3px;
		padding: 2px 0;

		background-color: var(--button-bg);
		border-radius: 8px;
	}
	.note {
		text-align: left !important;
		color: #888;
	}

	.char {
		position: absolute;
		line-height: 0%;
	}
</style>
