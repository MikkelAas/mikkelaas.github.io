<script>
	import { onMount } from 'svelte';

	// keeps track of the dark mode status
	let isDarkMode = false;

	onMount(() => {
		// when mounting, check what the previous dark mode state was
		if (localStorage.getItem('isDarkMode')?.includes('true')) {
			isDarkMode = true;
			window.document.body.className = 'dark-mode';
		} else {
			isDarkMode = false;
		}
	});

	function toggle() {
		// togle dark mode class name
		window.document.body.classList.toggle('dark-mode');

		// change dark mode value
		isDarkMode = !isDarkMode;

		// save dark mode value to the local storage
		localStorage.setItem('isDarkMode', isDarkMode.toString());
	}
</script>

{#if isDarkMode}
	<button on:click={toggle}> Light mode </button>
{:else}
	<button on:click={toggle}> Dark mode </button>
{/if}

<style>
	button {
		background-color: #121212;
		color: white;
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		text-transform: uppercase;
		width: 15%;
		height: 15%;
		min-width: 50px;
		min-height: 60px;
		max-width: 150px;
	}

	button:hover {
		background-color: #2c2c2c;
	}

	:global(body.dark-mode) button {
		background-color: #ffffff;
		color: black;
	}

	:global(body.dark-mode) button:hover {
		background-color: #efefef;
	}
</style>
