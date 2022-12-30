<script lang="ts">
	export let place: string;
	export let degree: string;
	export let studyProgram: string;
	export let startDate: string;
	export let endDate: string;
	export let link: string;
</script>

<div class="education-card">
	<h3>{place}</h3>
	<h4>{degree} in {studyProgram}</h4>
	<h5>Start {startDate} - End {endDate}</h5>
	<a href={link}>View site &#x1F517</a>
</div>

<style>
	.education-card {
		border-bottom: 0.01ch black solid;
		padding-bottom: 5%;
	}
	.education-card a {
		margin-right: 1%;
	}
	:global(body.dark-mode) .education-card {
		border-bottom: 0.01ch white solid;
	}
	:global(body.dark-mode) a {
		text-decoration: underline;
		color: #bfc2c7;
	}
	:global(body.dark-mode) a:hover {
		color: rgb(121, 121, 121);
	}
</style>
