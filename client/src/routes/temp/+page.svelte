<script>
	// imports
	import StickyContent from '../../components/StickyContent.svelte';

	// svelte takes the static directory as root
	let images = [
		'/42KLLogo.png',
		'/SCLogo.png',
		'/studentLifeLogo.png',
		'/SULogo.png',
		'/SUSCLogo.png'
	];
</script>

<div class="layout-container">
	<section class="content-container">
		<!-- Centered Image -->
		<img src="/TempLogo.png" alt="logo" class="centered-image" />

		<!-- Horizontal Buttons -->
		<div class="button-container">
			<a href="/register" class="action-button">I'm a club manager</a>
			<a href="/homepage" class="action-button">I'm  a student</a>
		</div>

		<h1 href="/login">Swithc to management account</h1>
	</section>

	<footer class="footer-container">
		<div class="footer-content">
			<span>Powered by: </span>
			{#each images as image}
				<img src={image} alt="Logo" />
			{/each}
		</div>
	</footer>
</div>

<style>
	/* Layout container to ensure footer stays at the bottom */
	.layout-container {
		display: flex;
		flex-direction: column; /* Stack content vertically */
		min-height: 100vh; /* Full height of the viewport */
	}

	/* Allow content to grow and take up remaining space */
	.content-container {
		flex: 1; /* Pushes the footer to the bottom */
		display: flex;
		flex-direction: column;
		align-items: center; /* Centers content horizontally */
		justify-content: center; /* Centers content vertically */
		padding: 2rem; /* Adds space around content */
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
		text-decoration: none; /* Removes underline */
	}

	/* Hover effect for the buttons */
	.action-button:hover {
		background-color: #0056b3; /* Darkens button color on hover */
	}

	/* Footer styling */
	.footer-container {
		background-color: #bae2fd; /* Light background */
		border-top: 1px solid #ddd; /* Subtle border for aesthetics */
		padding: 1rem 0; /* Add vertical padding */
		display: flex;
		justify-content: flex-end; /* Align content to the right */
	}

	.footer-content {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 10px; /* Space between text and images */
		width: 97%; /* Take up the container width */
		padding-right: 3%;
	}

	.footer-content img {
		width: 50px; /* Adjust image size */
		height: auto;
	}
</style>