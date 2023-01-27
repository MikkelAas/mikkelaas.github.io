<script lang="ts">
	const languages = [
		{
			id: 'en',
			text: 'English'
		},
		{
            id: 'nb',
            text: 'Norsk'
        }
	];

	let selected: string;

	function onChange() {
		console.log('Selected language: ' + selected);
	}
</script>

<select on:select={onChange} bind:value={selected} name="Language" id="select-language">
	{#each languages as language}
		<option value={language.id}>{language.text}</option>
	{/each}
</select>

<style>
</style>
