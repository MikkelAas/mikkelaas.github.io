<script context="module">
	import DarkModeToggle from '$lib/DarkModeToggle.svelte';
	import WorkCard from '$lib/WorkCard.svelte';
	import education from '../data/education.json';
	import projects from '../data/projects.json';
	import work from '../data/work.json'
	import EducationCard from '../lib/EducationCard.svelte';
	import ProjectCard from '../lib/ProjectCard.svelte';

	const EDUCATIONS = education.education;
	const PROJECTS = projects.projects;
	const WORK = work.work;

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
		<div id="options-bar">
			<DarkModeToggle />
		</div>

		<h1>Mikkel Aas</h1>
		<ul id="links">
			<li><a href={LINKEDIN_LINK}>LinkedIn</a></li>

			<li><a href={GITHUB_LINK}>GitHub</a></li>
		</ul>
	</div>
	<div class="content">
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
		<div class="work">
			<h2>Work &#x1f9f3</h2>
			{#each WORK as work}
				<WorkCard
					company={work.company}
					jobTitle={work.jobTitle}
					skills={work.skills}
					duration={work.duration}
					link={work.link}
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
	<div class="footer">
		<h3>🚀</h3>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		transition: background-color 0.3s;
	}
	.main {
		display: grid;
		grid-template-rows: 20% auto 10%;
		height: 100vh;
		margin: 0;
		border: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
	}
	.heading {
		grid-row-start: 1;
		grid-row-end: 2;
		justify-self: center;
		align-self: center;
		text-align: center;
		width: 100%;
	}
	.footer {
		grid-row-start: 3;
		grid-row-end: 4;
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
	.content {
		grid-row-start: 2;
		grid-row-end: 3;
		display: grid;
		grid-template-columns: 20% 60% 20%;
	}
	.education {
		grid-column: 2/3;
		margin: 10%;
		margin-top: 0%;
		margin-bottom: 5%;
	}
	.work {
		grid-column: 2/3;
		margin: 10%;
		margin-top: 0%;
	}
	.projects {
		grid-column: 2/3;
		margin: 10%;
		margin-top: 0%;
	}
	:global(body.dark-mode) {
		background-color: #121212;
		color: #bfc2c7;
	}
	:global(body.dark-mode) a {
		text-decoration: underline;
		color: #bfc2c7;
	}
	:global(body.dark-mode) a:hover {
		color: rgb(121, 121, 121);
	}
	#options-bar {
		text-align: left;
		margin: 1%;
	}

	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
		.content {
			display: grid;
			grid-template-columns: 5% 90% 5%;
		}
	}
</style>
