<script lang="ts">
    type Duration = {
        from: string,
        to: string
    }

	export let company: string;
	export let jobTitle: string;
	export let skills: string;
	export let duration: Duration;
	export let link: string | undefined;
</script>

<head>
	<meta charset="UTF-8" />
</head>

<div class="work-card">
	<h3>{company}</h3>
	<h4>{jobTitle}</h4>
    <p>Skills: {skills}</p>
	<h5>{duration.from} - {duration.to}</h5>
	{#if typeof link !== 'undefined'}
		<a href={link}>Website &#127760;</a>
	{/if}
</div>

<style>
	.work-card {
		border-bottom: 0.01ch black solid;
		padding-bottom: 5%;
	}
	.work-card a {
		margin-right: 1%;
	}
	:global(body.dark-mode) .work-card {
		border-bottom: 0.01ch white solid;
	}
	:global(body.dark-mode) a {
		text-decoration: underline;
		color: #c6c6c6;
	}
	:global(body.dark-mode) a:hover {
		color: rgb(121, 121, 121);
	}
</style>
