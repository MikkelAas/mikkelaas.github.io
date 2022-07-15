<script>
	function toggle() {
		window.document.body.classList.toggle('dark-mode');
		isDarkMode = !isDarkMode;
		sessionStorage.setItem('isDarkMode', isDarkMode.toString());
	}

	let isDarkMode = false;
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
	}
	:global(body.dark-mode) button {
		background-color: #ffffff;
		color: black;
	}
</style>
