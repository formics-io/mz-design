<script>
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
</script>

<section class=" py-20">
	<div class="mx-auto max-w-7xl px-4">
		<!-- Section Title -->
		<h2 class="mb-16 text-center font-serif text-4xl lg:text-5xl">
			{title}
		</h2>

		<!-- Projects Grid -->
		<div class="mb-12 grid gap-8 md:grid-cols-3">
			{#each projects as project}
				<a href="/portfolio-details" class="group">
					<!-- Image Container -->
					<div class="mb-4 cursor-pointer overflow-hidden rounded-2xl">
						<img src={project.image} alt={project.title} class="h-[300px] w-full object-cover hover:scale-[1.03] transform transition-transform duration-300 " />
					</div>

					<!-- Project Info -->
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
		</div>

		<!-- View All Button -->
		<div class="text-center">
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
</section>
