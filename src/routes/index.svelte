<script context="module">
	import education from '../data/education.json';
	import projects from '../data/projects.json';
	import EducationCard from '../lib/EducationCard.svelte';
	import ProjectCard from '../lib/ProjectCard.svelte';

	const EDUCATIONS = education.education;
	const PROJECTS = projects.projects;

	export const prerender = true;

	const LINKEDIN_LINK = 'https://www.linkedin.com/in/mikkel-aas-10a15a1a5/';
	const GITHUB_LINK = 'https://github.com/MikkelAas';
</script>

<head>
	<title>Mikkel Aas</title>

	<!-- Importing the Roboto font -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap"
		rel="stylesheet"
	/>
</head>

<div class="main">
	<div class="heading">
		<h1>Mikkel Aas</h1>
		<ul id="links">
			<li><a href={LINKEDIN_LINK}>LinkedIn</a></li>

			<li><a href={GITHUB_LINK}>GitHub</a></li>
		</ul>
	</div>
	<div class="body">
		<div class="education">
			<h2>Education &#x1F393</h2>
			{#each EDUCATIONS as education}
				<EducationCard
					place={education.place}
					degree={education.degree}
					studyProgram={education.studyProgram}
					startDate={education.startDate}
					endDate={education.endDate}
					link={education.link}
				/>
			{/each}
		</div>
		<div class="projects">
			<h2>Projects &#x1F6E0</h2>
			{#each PROJECTS as project}
				<ProjectCard
					title={project.title}
					about={project.about}
					year={project.year}
					codeLink={project.codeLink}
					documentPath={project.documentPath}
					articleLink={project.articeLink}
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
	}
	.main {
		display: grid;
		grid-template-rows: 20% 70% 10%;
		height: 100vh;
		margin: 0;
		border: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
	}
	.heading {
		grid-row: 1/2;
		justify-self: center;
		align-self: center;
		text-align: center;
	}
	#links {
		list-style: none;
		padding: 0;
	}

	ul#links li {
		display: inline;
		margin: 3%;
	}

	:global(a) {
		text-decoration: underline;
		color: black;
	}
	:global(a):hover {
		color: grey;
	}
	:global(h4, h5) {
		font-weight: 400;
	}
	:global(h3) {
		font-weight: 500;
	}
	.body {
		display: grid;
		grid-template-columns: 20% 60% 20%;
		grid-row: 2 / 3;
	}
	.education {
		grid-column: 2/3;
		margin: 10%;
		margin-top: 0%;
		margin-bottom: 5%;
	}
	.projects {
		grid-column: 2/3;
		margin: 10%;
		margin-top: 0%;
	}
</style>
