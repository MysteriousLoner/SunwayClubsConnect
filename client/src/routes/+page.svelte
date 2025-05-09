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
                    <div class="w-48 h-36 rounded-lg shadow-md overflow-hidden flex-shrink-0">
                        <img src={image} alt="Event" class="w-full h-full object-cover" />
                    </div>
                {/each}
            </div>
        </section>

        <!-- CLUB CONNECT Section -->
        <section class="mt-8">
            <h2 class="text-xl font-bold text-left mb-4">CLUB CONNECT</h2>
            <div class="flex justify-start gap-4">
                <button class="w-48 h-36 flex items-center justify-center text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                    on:click={() => redirectTo('/clubsAndSocieties')}>
                    LIST OF C&S
                </button>
                <button class="w-48 h-36 flex items-center justify-center text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                    on:click={() => redirectTo('https://student.sunway.edu.my/')}>
                    STUDENT LIFE WEBSITE
                </button>
                <button class="w-48 h-36 flex items-center justify-center text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                    on:click={() => redirectTo('/kyec')}>
                    KNOW YOUR EXTRACURRICULAR (KYEC)
                </button>
            </div>
        </section>
    </div>
</div>
