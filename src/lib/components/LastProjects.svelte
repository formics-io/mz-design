<!-- <script>
	const projects = [
		{
        title: "Event Space",
        location: "Kota Bharu",
        image: "/images/Projects/1-EventSpace/1.png",
      },
      {
        title: "Twelve, Taman Ira",
        location: "perlis",
        image: "/images/Projects/2-Taman/1.png",
      },
      {
        title: "Istana Bukit Malut",
        location: "Langkawi",
        image: "/images/Projects/3-Istana/1.png",
      },
	];

	export let title = 'Latest Projects';
</script> -->

<!-- <section class=" py-20">
	<div class="mx-auto max-w-7xl px-4">
		<h2 class="mb-16 text-center font-serif text-4xl lg:text-5xl">
			{title}
		</h2>

		<div class="mb-12 grid gap-8 md:grid-cols-3">
			{#each projects as project}
				<a href="/portfolio-details" class="group">
					<div class="mb-4 cursor-pointer overflow-hidden rounded-2xl">
						<img src={project.image} alt={project.title} class="h-[300px] w-full object-cover hover:scale-[1.03] transform transition-transform duration-300 " />
					</div>

					<div class="text-center">
						<h3 class="mb-1 font-serif text-xl">
							{project.title}
						</h3>
						<p class="">
							{project.location}
						</p>
					</div>
				</a>
			{/each}
		</div> -->
<!--  -->
<script lang="ts">

	
	  import client from "$lib/sanity";
	  import { onMount } from "svelte";
	
	  let limitedProjects:any = [];
	let projects:any = [];
  
  onMount(async () => {
	try {
	
	  const query = `*[_type == "project"]{
		title,
		subtitle,
		"coverImageUrl": coverImage.asset->url,
		gallery,
		"galleryUrls": gallery[].asset->url,
		slug,
		description,
		url
	  }`;
	  projects = await client.fetch(query);
	   limitedProjects = projects.slice(0, 3); // Get the first 3 items

	} catch (error) {
	  console.error("Sanity fetch error:", error);
	}
  });
  </script>
  
  <div class="py-8 ">
   
	<section class="px-[5%]">
	  <div class="mx-auto max-w-7xl px-4 text-center">
		<h2 class="mb-12 font-alice text-5xl font-normal">Portfolio</h2>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
		  {#each limitedProjects as item}
		  <!-- <a href={`/portfolio-details/${item.slug.current}`} class="block"> -->
			<a on:click={() => window.location.href = `/portfolio-details/${item.slug.current}`} class="block">

  
			<div class="rounded-lg overflow-hidden">
			  <!-- Image Section -->
			  <div class="overflow-hidden rounded-lg">
				<img 
				  src={item.coverImageUrl} 
				  alt={item.title} 
				  class="md:w-[450px] h-[350px] w-full object-cover transform transition-transform duration-300 hover:scale-[1.03]" 
				/>
			  </div>
	
			  <!-- Content Section -->
			  <div class="p-4 text-center">
				<h3 class="text-lg font-normal font-raleway">{item.title}</h3>
				<p class="font-normal text-sm font-raleway">{item.subtitle}</p>
			  </div>
			</div>
		  </a>
		  {/each}
		</div>
	  </div>
	</section>
	
		  

		<div class="text-center mt-5">
			<a href="/portfolio" class="no-underline">
				<button
				class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gray-400 px-6 py-2"
			>
				<span class="relative z-10 transition-colors duration-300 group-hover:text-white"
					>View All</span
				>
				<div
					class="absolute inset-x-0 bottom-0 h-0 bg-[#003EFF] outline-none transition-all duration-300 ease-out group-hover:h-full"
				></div>
			</button>
			</a>
			
		</div>
	</div>
