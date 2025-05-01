


<script lang="ts">
	export let portfolioItems:any = [];
	import PortfolioCard from "$lib/components/PortfolioCard.svelte";

	console.log("Received Portfolio Items:", portfolioItems); 

  </script>
  
  <section class="px-[5%]">
	<div class="mx-auto max-w-7xl px-4 text-center">
	  <h2 class="mb-12 font-alice text-5xl font-normal">Portfolio</h2>
	  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each portfolioItems as item}
		  <PortfolioCard title={item.title} subtitle={item.subtitle} image={item.coverImage.asset.url} />
		{/each}
	  </div>
	</div>
  </section>
  
  


