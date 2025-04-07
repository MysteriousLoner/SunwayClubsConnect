<section class="content-container">
	<!-- Centered Image -->
	<img src="/TempLogo.png" alt="logo" class="centered-image" />

	<!-- Horizontal Buttons -->
	<div class="button-container">
		<button class="action-button">Button 1</button>
		<button class="action-button">Button 2</button>
	</div>
</section>

<style>
	/* Container for the whole content */
	.content-container {
		display: flex;
		flex-direction: column;
		align-items: center; /* Centers content horizontally */
		justify-content: center; /* Centers content vertically */
		padding: 2rem; /* Adds space around content */
		height: 100vh; /* Makes container occupy full viewport height */
	}

	/* Styling for the centered image */
	.centered-image {
		max-width: 100%; /* Ensures image is responsive */
		width: 300px; /* Sets a fixed width */
		height: auto; /* Maintains aspect ratio */
		margin-bottom: 1rem; /* Adds spacing below the image */
	}

	/* Container for the buttons */
	.button-container {
		display: flex; /* Displays buttons horizontally */
		gap: 1rem; /* Adds space between buttons */
	}

	/* Styling for the buttons */
	.action-button {
		padding: 0.5rem 1rem; /* Adds space inside the button */
		border: none; /* Removes default border */
		background-color: #007bff; /* Sets button background color */
		color: white; /* Sets text color */
		border-radius: 4px; /* Rounds button corners */
		cursor: pointer; /* Adds a pointer cursor */
		font-size: 1rem; /* Sets font size */
	}

	/* Hover effect for the buttons */
	.action-button:hover {
		background-color: #0056b3; /* Darkens button color on hover */
	}
</style>
