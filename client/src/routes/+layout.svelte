<script>
	// imports
	import StickyContent from '../components/StickyContent.svelte';
	import "../app.css";

	// svelte takes static directry as root
	let images = [
	  '/42KLLogo.png',
	  '/SCLogo.png',
	  '/studentLifeLogo.png',
	  '/SULogo.png',
	  '/SUSCLogo.png'
	];
</script>

<main class="h-screen">
	<!-- Dynamically renders content from `page.svelte` -->
	<slot /> 
</main>
