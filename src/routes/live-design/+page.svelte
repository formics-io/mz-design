<script lang="ts">
	import Contactus from '$lib/components/Contactus.svelte';

	
	import PortfolioCard from '$lib/components/PortfolioCard.svelte';

	const portfolioItems = [
		{
			id: 1,
			image: '/images/Projects/1-EventSpace/1.png',
		},
		{
			id:2,
			image: '/images/Projects/1-EventSpace/2.png',
		},
		{
			id:3,
			image: '/images/Projects/1-EventSpace/3.png',
		}
    ]

  </script>
  
 
<section class="py-[5%] px-[5%]">
	<div class="mx-auto max-w-7xl px-4 text-center">
		<h2 class="mb-12 font-alice text-5xl font-normal">Live Design</h2>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each portfolioItems as item}
			<div class="rounded-lg overflow-hidden">
				<!-- Image Section -->
				<div class="overflow-hidden rounded-lg">
					<img 
						src={item.image} 
						alt="Portfolio Image"
						class=" md:w-[450px] h-[350px] w-full object-cover transform transition-transform duration-300 hover:scale-[1.03] " 
					/>
				</div>
		  
			
			</div>
			{/each}
		</div>
	</div>
</section> 

