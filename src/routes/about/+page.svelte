<script>
	import AwardsRecognitions from '$lib/components/Awards&Recognitions.svelte';
	import Contactus from '$lib/components/Contactus.svelte';
	import LastProjects from '$lib/components/LastProjects.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Work from '$lib/components/Work.svelte';

	// Data for the hero section
	const heroTitle = 'Crafting Timeless Interiors, Designed Around You';
	const title = 'Our Journey';
	const description = `Since our founding in [Year], we have worked with a diverse range of clients, transforming their visions into exceptional interiors. Each project is approached with an unwavering commitment to quality and a keen eye for detail. Over the years, we’ve been recognized for our innovative designs and exceptional service, earning accolades such as the Nippon Paint Young Designer Award (2013) and the Malaysia Mega Sale Carnival Awards (2009).`;
	const images = ['/images/illustration.png', '/images/illustration2.png'];

	const philosophytitle = 'Our Philosophy';
	const philosophydescription = `
      At the heart of our work lies a deep understanding that every space should reflect the unique personality and lifestyle of its owner. 
      We believe in creating interiors that stand the test of time—spaces that inspire, captivate, and enrich daily life.
      
      Our design approach is collaborative and client-focused, ensuring that your vision is at the core of every decision we make. From the initial consultation to the final installation, we’re with you every step of the way.
    `;
	const philosophyimages = ['/images/philosophy2.png', '/images/philosophy.png'];
</script>

<section class=" px-[5%] ">
<div class="max-w-[1200px] mx-auto py-[55px]" >
<div class="flex  flex-col items-center gap-8  lg:flex-row">
		<!-- Text Content -->
		<div class="text-left lg:w-1/2">
			<h1 class="font-alice mb-4 text-3xl font-semibold  md:text-4xl">{heroTitle}</h1>
			<p class="font-raleway leading-relaxed ">
				At MZ Design Consultancy, we specialize in creating bespoke interiors that blend luxury,
				functionality, and timeless elegance. Based in Malaysia, our studio has over 20 years of
				expertise in delivering personalized design solutions for residential, commercial, and
				institutional spaces.
			</p>
			<p class="font-raleway mt-4 leading-relaxed ">
				Our mission is simple: to craft spaces that not only look stunning but also feel like home.
				We create environments that go beyond aesthetics, seamlessly blending comfort and purpose to
				suit your lifestyle. From serene homes to iconic commercial hubs, our designs are tailored
				to inspire and endure.
			</p>
		</div>

		<!-- Image Grid -->
		<div class="h-fit lg:w-1/2">
			<div class="grid grid-cols-2 gap-4">
				<img
					src="/images/sera.png"
					alt="Team working on designs"
					class="h-[180px] w-full rounded-lg object-cover shadow-md"
				/>
				<img
					src="/images/sera2.png"
					alt="Designers reviewing layouts"
					class="h-[180px] w-full rounded-lg object-cover shadow-md"
				/>
				<img
					src="/images/sera3.png"
					alt="Modern workspace"
					class="col-span-2  h-[180px] w-[640px] rounded-lg object-cover shadow-md"
				/>
			</div>
		</div>
	</div>
</div>
	
</section>

<section class=" py-[75px] px-[5%]">
	<div class="mx-auto max-w-6xl px-4 text-center">
		<h2 class="font-alice mb-6 text-3xl font-bold ">{title}</h2>
		<div class="flex flex-col justify-center gap-6 sm:flex-row">
			{#each images as image}
				<img src={image} alt="Our Journey" class="w-full rounded-lg shadow-md sm:w-1/2" />
			{/each}
		</div>
		<p class="font-raleway mt-8 leading-relaxed ">{description}</p>
	</div>
</section>

<Work />

<AwardsRecognitions />

<section class=" py-[75px] px-[5%]">
  <div class="mx-auto flex max-w-[1220px] gap-12 md:gap-24 px-4 flex-col lg:flex-row items-center">
    <!-- Image Content -->
    <div class="grid grid-cols-2  md:h-[440px] gap-4 lg:w-1/2">
        <img src={philosophyimages[0]} alt="Our Philosophy" class="self-start rounded-lg object-cover shadow-md" />
        <img src={philosophyimages[1]} alt="Our Philosophy" class="self-end rounded-lg object-cover shadow-md" />
    </div>
    <!-- Text Content -->
    <div class="md:text-center text-left lg:w-1/2 lg:text-left">
        <h2 class="mb-6 text-3xl font-alice font-bold ">{philosophytitle}</h2>
        <p class="leading-relaxed font-raleway ">{philosophydescription}</p>
    </div>
</div>
</section>

<LastProjects title="Our Portfolio" />

<Contactus />
