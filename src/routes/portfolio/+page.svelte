<script lang="ts">

  import Contactus from "$lib/components/Contactus.svelte";
	import Portfolio from "$lib/components/Portfolio.svelte";
	import PortfolioCard from "$lib/components/PortfolioCard.svelte";
	import client from "$lib/sanity";
	import { onMount } from "svelte";
  
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
    console.log("projects", projects);
  } catch (error) {
    console.error("Sanity fetch error:", error);
  }
});
</script>

<div class="py-8">
 
  <section class="px-[5%]">
    <div class="mx-auto max-w-7xl  text-center">
      <h2 class="mb-12 font-alice lg:text-5xl text-4xl font-normal">Portfolio</h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each projects as item}
        <a href={`/portfolio-details/${item.slug.current}`} class="block">

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
  <Contactus/>
</div>