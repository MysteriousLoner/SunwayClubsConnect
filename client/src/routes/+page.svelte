<script>
    import { Card } from "flowbite-svelte";
    import { GiftBoxSolid, ArrowUpRightFromSquareOutline } from "flowbite-svelte-icons";
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

<div class="h-full min-h-screen bg-gradient-to-l from-blue-400 to-teal-500 p-4 text-white">
    <div class="flex flex-col p-4">
        <!-- Header containing button to switch to admin mode -->
        <button 
                class="absolute top-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
                on:click={() => redirectTo('/login')}>
                Switch to Admin Mode
        </button>

        <!-- UPCOMING EVENTS Section -->
        <section class="w-full">
            <h2 class="text-xl font-bold text-left mb-4">UPCOMING EVENTS</h2>
            <div class="flex overflow-x-auto gap-4 py-4">
                {#each eventImages as image}
                    <Card class="p-4 sm:p-6 md:p-8 w-72 sm:w-80 md:w-96 flex-shrink-0">
                        <div class="h-48 overflow-hidden rounded">
                            <img src={image} alt="Event" class="w-full object-cover" />
                        </div>
                        <a href="/">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Placeholder Event</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">An intresting event happening in campus! Located at xxx at xxx pm.</p>
                        <a href="/" class="text-primary-600 inline-flex items-center hover:underline">
                            link to event
                            <ArrowUpRightFromSquareOutline class="ms-2.5 h-4 w-4" />
                        </a>
                    </Card>
                {/each}
            </div>
        </section>

        <!-- CLUB CONNECT Section -->
        <section class="w-full mt-8">
            <h2 class="text-xl font-bold text-left mb-4">CLUB CONNECT</h2>
            <div class="flex overflow-x-auto gap-4 py-4">
                <button class="w-48 h-36 flex-shrink-0 flex items-center justify-center text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                    on:click={() => redirectTo('/clubsAndSocieties')}>
                    LIST OF C&S
                </button>
                <button class="w-48 h-36 flex-shrink-0 flex items-center justify-center text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                    on:click={() => redirectTo('https://student.sunway.edu.my/')}>
                    STUDENT LIFE WEBSITE
                </button>
                <button class="w-48 h-36 flex-shrink-0 flex items-center justify-center text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                    on:click={() => redirectTo('/kyec')}>
                    KNOW YOUR EXTRACURRICULAR (KYEC)
                </button>
            </div>
        </section>
    </div>
</div>
