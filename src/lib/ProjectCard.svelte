<script lang="ts">
	export let title: string;
    export let about: string;
    export let year: string;
	export let codeLink: string;
	export let documentPath: string | undefined;
	export let articleLink: string | undefined;

</script>

<div class="project-card">
	<h3>{title}</h3>
    <p>{about}</p>
    <h5>Year - {year}</h5>
	{#if typeof codeLink !== 'undefined'}
		<a href={codeLink}>Code</a>
	{/if}
	{#if typeof documentPath !== 'undefined'}
		<a href={documentPath}>Document</a>
	{/if}
	{#if typeof articleLink !== 'undefined'}
		<a href={articleLink}>Article</a>
	{/if}

</div>

<style>
    .project-card {
        border-bottom: 0.01ch black solid;
        padding-bottom: 5%;
    }
</style>
