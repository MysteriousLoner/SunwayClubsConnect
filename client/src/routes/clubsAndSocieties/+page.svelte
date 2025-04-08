<script>
	let categories = [
	  {
		title: 'STUDENT LEADERSHIP BODIES',
		clubs: [
		  { name: 'SUSC', url: '/susc' },
		  { name: 'SCC', url: '/scc' },
		],
	  },
	  {
		title: 'ACCOUNTING & FINANCE',
		clubs: [
		  { name: 'SUNWAY CPA', url: '/sunway-cpa' },
		  { name: 'SUNWAY ACS', url: '/sunway-acs' },
		  { name: 'SUNWAY SAFE', url: '/sunway-safe' },
		  { name: 'SUNWAY FAS', url: '/sunway-fas' },
		],
	  },
	  {
		title: 'ARTS & MUSIC',
		clubs: [
		  { name: 'SUE', url: '/sue' },
		  { name: 'SUNWAY CHOIR', url: '/sunway-choir' },
		  { name: 'SUNWAY THEATRE CLUB', url: '/sunway-theatre-club' },
		  { name: 'SUCO', url: '/suco' },
		  { name: 'SUNWAY MUSIC SOCIETY', url: '/sunway-music-society' },
		],
	  },
	];
</script>

<div class="layout-container">
	<!-- Page Title -->
	<h1 class="title">CLUBS & SOCIETIES</h1>

	<!-- Club Categories -->
	<div class="categories-container">
		{#each categories as category}
			<section class="category-section">
				<h2 class="category-title">{category.title}</h2>
				<div class="clubs-container">
					{#each category.clubs as club}
						<a href={club.url} class="club-button">{club.name}</a>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>

<style>
	/* Layout Container */
	.layout-container {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start; /* Aligns all content to the left */
	}

	/* Page Title Styling */
	.title {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 1.5rem;
		text-align: left; /* Aligns text content to the left */
		margin-left: 0; /* Aligns with the left edge of the container */
	}

	/* Categories Container */
	.categories-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	/* Individual Category Section */
	.category-section {
		text-align: left;
	}

	.category-title {
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}

	/* Clubs Container */
	.clubs-container {
		display: flex;
		flex-wrap: wrap; /* Allows wrapping to next line if needed */
		gap: 1rem;
	}

	/* Club Button Styling */
	.club-button {
		display: inline-block;
		text-align: center;
		width: 200px;
		height: 50px;
		line-height: 50px;
		font-size: 1rem;
		color: white;
		background-color: #007bff;
		text-decoration: none;
		border-radius: 8px;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}

	.club-button:hover {
		background-color: #0056b3;
	}
</style>