<script>
	// imports
	import StickyContent from '../components/StickyContent.svelte';

	// svelte takes static directry as root
	let images = [
	  '/42KLLogo.png',
	  '/SCLogo.png',
	  '/studentLifeLogo.png',
	  '/SULogo.png',
	  '/SUSCLogo.png'
	];
</script>

<main>
	<slot /> <!-- Dynamically renders content from `page.svelte` -->
</main>


<!-- <footer class="footer-container">
	<div class="footer-content">
	<span>Powered by: </span>
	{#each images as image}
			<img src={image} alt="Logo" />
		{/each}
	</div>
</footer> -->

<!-- <style>
	.footer-container {
		position: fixed; /* Keeps footer fixed at the bottom */
		bottom: 0; /* Position at the bottom */
		width: 100%; /* Makes it span the entire width of the page */
		margin: 0; /* Ensures no extra margin around the footer */
		padding: 1rem 0;
		display: flex; /* Align content horizontally */
		align-items: center; /* Center vertically */
		justify-content: flex-end; /* Center horizontally */
		background-color: #bae2fd; /* Light background */
		border-top: 1px solid #ddd; /* Subtle border for aesthetics */
		box-sizing: border-box;
	}
	
	.footer-content {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 10px; /* Space between text and images */
		width: 97%; /* Take up 95% of the container width */
		padding-right: 3%;
	}
	
	.footer-content img {
		width: 50px; /* Adjust image size */
		height: auto;
	}
	</style> -->