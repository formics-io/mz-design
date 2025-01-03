<script>
	const projects = [
		{
			title: 'Airlie Gardens',
			location: 'Middle East',
			image: '/images/lastimage.png' // Replace with your actual image path
		},
		{
			title: 'Gulf Villa',
			location: 'Middle East',
			image: '/images/lastimage2.png' // Replace with your actual image path
		},
		{
			title: 'Muscat Villa',
			location: 'Middle East',
			image: '/images/lastimage3.png' // Replace with your actual image path
		}
	];

	export let title = "Latest Projects";
</script>

<section class=" py-20">
	<div class="mx-auto max-w-7xl px-4">
		<!-- Section Title -->
		<h2 class="mb-16 text-center font-serif text-4xl  lg:text-5xl">
			{title}
		</h2>

		<!-- Projects Grid -->
		<div class="mb-12 grid gap-8 md:grid-cols-3">
			{#each projects as project}
				<a href="/portfolio-details" class="group">
					<!-- Image Container -->
					<div class="mb-4 cursor-pointer overflow-hidden rounded-2xl">
						<img src={project.image} alt={project.title} class="h-[300px] w-full object-cover" />
					</div>

					<!-- Project Info -->
					<div class="text-center">
						<h3 class="mb-1 font-serif text-xl ">
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
			<button class="relative inline-flex items-center justify-center rounded-full border border-gray-400 px-6 py-2  overflow-hidden group">
				<span class="relative z-10 transition-colors duration-300 group-hover:text-white ">View All</span>
				<div class="absolute inset-x-0 bottom-0 h-0 bg-blue-600 outline-none transition-all duration-300 ease-out group-hover:h-full"></div>
			</button>
		</div>		
	</div>
</section>
