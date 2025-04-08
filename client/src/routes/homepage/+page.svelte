<script>
	// Array for "UPCOMING EVENTS" section containing image addresses
	let eventImages = [
		'/placeholderEventImage.jpg',
		'/placeholderEventImage.jpg',
		'/placeholderEventImage.jpg',
		'/placeholderEventImage.jpg',
		'/placeholderEventImage.jpg',
        '/placeholderEventImage.jpg',
		'/placeholderEventImage.jpg',
		'/placeholderEventImage.jpg',
		'/placeholderEventImage.jpg',
		'/placeholderEventImage.jpg'
	];

	// Function to redirect "CLUB CONNECT" buttons to other pages
	function redirectTo(url) {
		window.location.href = url;
	}
</script>

<div class="layout-container">
	<!-- UPCOMING EVENTS Section -->
	<section class="events-section">
		<h2 class="section-title">UPCOMING EVENTS</h2>
		<div class="events-container">
			{#each eventImages as image}
				<div class="event-card">
					<img src={image} alt="Event" class="event-image" />
				</div>
			{/each}
		</div>
	</section>

	<!-- CLUB CONNECT Section -->
	<section class="club-connect-section">
		<h2 class="section-title">CLUB CONNECT</h2>
		<div class="club-buttons">
			<button
				class="club-button"
				on:click={() => redirectTo('/clubsAndSocieties')}
			>
				LIST OF C&S
			</button>
			<button
				class="club-button"
				on:click={() => redirectTo('https://student.sunway.edu.my/')}
			>
				STUDENT LIFE WEBSITE
			</button>
			<button
				class="club-button"
				on:click={() => redirectTo('/kyec')}
			>
				KNOW YOUR EXTRACURRICULAR (KYEC)
			</button>
		</div>
	</section>
</div>

<style>
	/* Layout Container */
	.layout-container {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	/* Section Title Styling */
	.section-title {
		font-size: 1.5rem;
		font-weight: bold;
		text-align: left; /* Aligns title to the left */
		margin-bottom: 1rem;
	}

	/* Upcoming Events Section */
	.events-section {
		width: 100%;
	}
	.events-container {
		display: flex;
		overflow-x: auto;
		gap: 1rem; /* Space between event cards */
		padding: 1rem 0;
	}

	.event-card {
		flex: 0 0 auto; /* Prevent cards from shrinking */
		width: 200px; /* Fixed width for cards */
		height: 150px; /* Fixed height for cards */
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}
	.event-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Club Connect Section */
	.club-connect-section {
		margin-top: 2rem;
	}

	.club-buttons {
		display: flex;
		justify-content: flex-start;
		gap: 1rem; /* Space between buttons */
	}

	.club-button {
		width: 200px; /* Matches width of event cards */
		height: 150px; /* Matches height of event cards */
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		border: none;
		background-color: #007bff;
		color: white;
		border-radius: 8px;
		cursor: pointer;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}

	.club-button:hover {
		background-color: #0056b3;
	}
</style>