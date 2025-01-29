<script lang="ts">
	import { onMount } from "svelte";

	const images = [
		{ src: '/images/Projects/1-EventSpace/1.png', alt: 'Modern living room' },
		{ src: '/images/Projects/1-EventSpace/2.png', alt: 'Modern living room' },
		

		{ src: '/images/Projects/2-Taman/1.png', alt: 'Home office' },
		{ src: '/images/Projects/2-Taman/2.png', alt: 'Home office' },
		

		{ src: '/images/Projects/3-Istana/1.png', alt: 'Living room with fireplace' },
		{ src: '/images/Projects/3-Istana/2.png', alt: 'Living room with fireplace' },
		

		{ src: '/images/Projects/4-Corporate/1.png', alt: 'Modern bedroom' },
		{ src: '/images/Projects/4-Corporate/2.png', alt: 'Modern bedroom' },
		

		{ src: '/images/Projects/5-TheMet/1.png', alt: 'Modern bedroom' },
		{ src: '/images/Projects/5-TheMet/2.png', alt: 'Modern bedroom' },
		

		{ src: '/images/Projects/6-IstanaArau/1.png', alt: 'Modern bedroom' },
		{ src: '/images/Projects/6-IstanaArau/2.png', alt: 'Modern bedroom' },
		

		{ src: '/images/Projects/4-Corporate/1.png', alt: 'Modern bedroom' },
		{ src: '/images/Projects/5-TheMet/1.png', alt: 'Modern bedroom' },
		
	];
	let currentIndex = 0;
let translateX = 0;
let transitioning = false;
let intervalId: ReturnType<typeof setInterval>;
	let displayImages = [...images];


// Start auto-scroll
// const startAutoScroll = () => {
//   intervalId = setInterval(nextSlide, 3000); // Adjust interval as needed
// };

// const stopAutoScroll = () => {
//   clearInterval(intervalId);
// };

// Move to the next slide
const nextSlide = () => {
  if (transitioning) return;

  transitioning = true;
  currentIndex++;

  if (currentIndex === displayImages.length) {
    // Loop back to the first image
	
    setTimeout(() => {
      currentIndex = 0;
      translateX = 0; // Reset to first slide
      transitioning = false;
    }, 500); // Match the CSS transition duration
  } else {
    translateX = -currentIndex * 100;
    setTimeout(() => (transitioning = false), 500);
  }
};

// Move to the previous slide
const prevSlide = () => {
  if (transitioning) return;

  transitioning = true;
  currentIndex--;

  if (currentIndex < 0) {
    // Jump to the last image
    currentIndex = displayImages.length - 1;
    translateX = -currentIndex * 100;
    setTimeout(() => (transitioning = false), 500);
  } else {
    translateX = -currentIndex * 100;
    setTimeout(() => (transitioning = false), 500);
  }
};

// Touch event handlers for swipe
let startX = 0;

const handleTouchStart = (e: TouchEvent) => {
  startX = e.touches[0].clientX;
};

const handleTouchEnd = (e: TouchEvent) => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) prevSlide(); 
  else if (startX - endX > 50) nextSlide(); 
};




onMount(() => {
  setInterval(() => {
	displayImages = [...displayImages.slice(1), displayImages[0]];
  }, 3000); 
 
});

</script>

<section class="overflow-hidden xxl:py-20">
	<div class="mx-auto pt-[40px]">
		<div
			class="mx-auto grid grid-cols-1 items-start justify-between gap-1 gap-x-10 px-[5%] lg:grid-cols-2"
			style="max-width:1300px"
		>
			<!-- Main Content -->
			<div class="order-1 text-center lg:mx-0 lg:min-w-[600px] lg:text-left">
				<h1 class="font-alice text-3xl leading-tight md:text-6xl">
					Your Dream Space,<br />
					Designed to Perfection.
				</h1>
				<p class="mt-6 text-[20px] text-lg">
					Designing bespoke interiors that inspire and captivate, blending style, functionality, and
					timeless elegance to create spaces you'll love.
				</p>
			</div>

			<!-- Carousel Images -->
			<!-- <div class="order-2 col-span-full mb-6 mt-10 w-full lg:order-4 lg:col-span-2">
				<div class="flex animate-scroll gap-4">
					{#each [...images, ...images] as { src, alt }, i (i)}
						<div class="w-full flex-none px-2 md:w-1/2 lg:w-1/3">
							<div class="overflow-hidden rounded-xl shadow-lg">
								<img {src} {alt} class="h-48 w-[450px] rounded-lg object-cover md:h-64" />
							</div>
						</div>
					{/each}
				</div>
			</div> -->
			<div
			class="order-2 col-span-full mb-6 mt-10 w-full lg:order-4 lg:col-span-2 relative overflow-hidden"
			on:touchstart={handleTouchStart}
			on:touchend={handleTouchEnd}
		  >
			<!-- Carousel Wrapper -->
			<div
			  class="flex transition-transform duration-500 ease-in-out"
			  style="transform: translateX({translateX}%)"
			>
			{#each displayImages as { src, alt }, i (i)}
			<div class="w-full flex-none px-2 md:w-1/2 lg:w-1/3 duration-500 ease-in-out">
				  <div class=" rounded-xl shadow-lg">
					<img {src} {alt} class="h-48 w-[450px] rounded-lg object-cover md:h-64" />
				  </div>
				</div>
			  {/each}
			</div>
		  
			<!-- Left Arrow Button -->
			<button
			  class="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200"
			  on:click={prevSlide}
			  aria-label="Previous Slide"
			>
			  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-6 w-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
			  </svg>
			</button>
		  
			<!-- Right Arrow Button -->
			<button
			  class="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200"
			  on:click={nextSlide}
			  aria-label="Next Slide"
			>
			  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-6 w-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
			  </svg>
			</button>
		  </div>
		  
		  
			<!-- Awards Grid -->
			<div class="order-3 mx-auto justify-self-end lg:order-2 lg:mx-0">
				<div
					class="grid grid-cols-1 place-items-center gap-y-6 md:grid-cols-2 lg:place-items-start"
				>
					<div class="h-28 w-48 rounded-lg">
						<div class="mb-3 flex items-center justify-center">
							<img src="/star.svg" alt="" class="h-8" />
						</div>
						<p class="text-center text-sm text-gray-600">
							Inaugural Women of Excellence Awards (2014)
						</p>
					</div>
					<div class="h-28 w-48 rounded-lg">
						<div class="mb-3 flex items-center justify-center">
							<img src="/star.svg" alt="" class="h-8" />
						</div>
						<p class="text-center text-sm text-gray-600">
							Awarded the Nippon Paint Young Designer Award (2013)
						</p>
					</div>
					<div class="h-28 w-48 rounded-lg">
						<div class="mb-3 flex items-center justify-center">
							<img src="/star.svg" alt="" class="h-8" />
						</div>
						<p class="text-center text-sm text-gray-600">
							Nippon Paint Young Designer Award (2013)
						</p>
					</div>
					<div class="h-28 w-48 rounded-lg">
						<div class="mb-3 flex items-center justify-center">
							<img src="/star.svg" alt="" class="h-8" />
						</div>
						<p class="text-center text-sm text-gray-600">Malaysia Mega Sale Carnival (2009)</p>
					</div>
				</div>
			</div>

			<div
				class="order-4 flex flex-col items-center justify-items-start gap-6 md:mt-10 lg:order-3 lg:flex-row"
			>
				<a href="portfolio">
					<button  class="font-medium relative inline-flex items-center justify-center rounded-full border px-6 py-2  overflow-hidden group">
						<span class="relative z-10 transition-colors duration-300 group-hover:text-white ">View Our Portfolio</span>
						<div class="absolute inset-x-0 bottom-0 h-0 bg-[#003EFF] outline-none transition-all duration-300 ease-out group-hover:h-full"></div>
					</button>
				</a>
				
				<p class="text-gray-600">
					Over <span class="font-semibold text-blue-600">100+</span> premium designs
				</p>
			</div>
			<!-- Company Logos -->
			<div
				class="order-4 mt-10 flex justify-end overflow-hidden  lg:order-3 lg:max-w-[500px] lg:justify-self-end"
			>
				<div class="flex animate-scroll gap-12">
					<img
						src="/images/ClientMZ/1.svg"
						alt="company logo"
						class="h-24 w-auto animate-scroll "
					/>
					<img
						src="/images/ClientMZ/2.svg"
						alt="company logo"
						class="h-24 w-auto animate-scroll "
					/>
					<img
						src="/images/ClientMZ/3.svg"
						alt="company logo"
						class="h-24 w-auto animate-scroll "
					/>
					<img
						src="/images/ClientMZ/4.svg"
						alt="company logo"
						class="h-24 w-auto animate-scroll "
					/>
					<img
						src="/images/ClientMZ/5.svg"
						alt="company logo"
						class="h-24 w-auto animate-scroll "
					/>
					<img
						src="/images/ClientMZ/6.svg"
						alt="company logo"
						class="h-24 w-auto animate-scroll "
					/>
					<img
						src="/images/ClientMZ/7.svg"
						alt="company logo"
						class="h-24 w-auto animate-scroll "
					/>
					<img
						src="/images/ClientMZ/8.svg"
						alt="company logo"
						class="h-24 w-auto animate-scroll "
					/>
					<img
						src="/images/ClientMZ/9.svg"
						alt="company logo"
						class="h-24 w-auto animate-scroll "
					/>
				</div>
			</div>
		</div>
	</div>
</section>
