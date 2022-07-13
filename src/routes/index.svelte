<script context="module">
	export const prerender = true;

	const LINKEDIN_LINK = 'https://www.linkedin.com/in/mikkel-aas-10a15a1a5/';
	const GITHUB_LINK = 'https://github.com/MikkelAas';
</script>

<head>
	<title>Mikkel Aas</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
</head>

<div class="main">
	<div class="heading">
		<h1>Mikkel Aas</h1>
		<ul id="links">
			<li><a href={LINKEDIN_LINK}>LinkedIn</a></li>

			<li><a href={GITHUB_LINK}>GitHub</a></li>
		</ul>
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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
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

	a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		color: grey;
	}
</style>
