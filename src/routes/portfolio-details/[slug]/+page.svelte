 <script lang="ts">
  import { page } from '$app/stores';
	import Contactus from '$lib/components/Contactus.svelte';
	import LastProjects from '$lib/components/LastProjects.svelte';
  import client from "$lib/sanity";
  import { onMount } from "svelte";

  let project: any = null;
  let slug = $page.params.slug; 

  onMount(async () => {
    try {
      const query = `*[_type == "project" && slug.current == "${slug}"][0]{
        title,
        subtitle,
        "coverImageUrl": coverImage.asset->url,
        gallery,
        "galleryUrls": gallery[].asset->url,
        description,
        url
      }`;

      project = await client.fetch(query);
      console.log("Project details:", project);
    } catch (error) {
      console.error("Sanity fetch error:", error);
    }
  });
</script>

{#if project}
<section class="">
  <div class="max-w-5xl mx-auto px-4 py-10">
  
    <div class="text-center mb-16">
      <h1 class="text-4xl lg:text-5xl font-serif  mb-2">
        {project.title}
      </h1>
      <p class="text-gray-600 text-lg">
        {project.subtitle}
      </p>
    </div>

  
    <div class="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-10">
     
      <div class="col-span-1 md:col-span-4">
        <img
          src={project.galleryUrls[0]}
          alt="Living room"
          class="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div class="col-span-1 md:col-span-2">
        <img
          src={project.galleryUrls[1]}
          alt="Bedroom"
          class="w-full h-full object-cover rounded-2xl"
        />
      </div>

     
      <div class="col-span-1 md:col-span-2">
        <img
          src={project.galleryUrls[2]}
          alt="Living space"
          class="w-full h-[250px] object-cover rounded-2xl"
        />
      </div>
      <div class="col-span-1 md:col-span-4">
        <img
          src={project.galleryUrls[3]}
          alt="Sofa arrangement"
          class="w-full h-[250px] object-cover rounded-2xl"
        />
      </div>

     
      <div class="col-span-1 md:col-span-2">
        <img
          src={project.galleryUrls[4]}
          alt="Living area"
          class="w-full h-[418px] object-cover rounded-2xl"
        />
      </div>
      <div class="col-span-1 md:col-span-4">
        <img
          src={project.galleryUrls[5]}
          alt="Dining area"
          class="w-full h-[418px] object-cover rounded-2xl"
        />
      </div>
    </div>
  </div>
</section> 
{:else}
  <p class="text-center text-gray-600 py-12">Loading project details...</p>
{/if} 

 <LastProjects title="Related Projects"/>

<Contactus/> 













