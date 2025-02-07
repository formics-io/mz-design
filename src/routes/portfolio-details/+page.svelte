 <!-- <script>
	import Contactus from "$lib/components/Contactus.svelte";
	import LastProjects from "$lib/components/LastProjects.svelte";

  const title = "Airlie Gardens Project";
  const subtitle = "Middle East";
  const images = [
    {
      src: "/images/portfolio/portfolio-detail.png",
      className: "col-span-1 md:col-span-3 lg:col-span-3"
    },
    {
      src: "/images/portfolio/portfolio3.png",
      className: "col-span-1 md:col-span-3 lg:col-span-3"
    },
    {
      src: "/images/portfolio/portfolio-detail2.png",
      className: "col-span-1 md:col-span-3 lg:col-span-3"
    },
    {
      src: "/images/portfolio/portfolio-detail5.png",
      className: "col-span-1 md:col-span-3 lg:col-span-3"
    },
    {
      src: "/images/Rectangle 14.png",
      className: "col-span-1 md:col-span-3 lg:col-span-3"
    },
    {
      src: "/images/portfolio/portfolio2.png",
      className: "col-span-1 md:col-span-3 lg:col-span-3"
    }
  ];
</script>

<section class="">
  <div class="max-w-5xl mx-auto px-4 py-10">
  
    <div class="text-center mb-16">
      <h1 class="text-4xl lg:text-5xl font-serif  mb-2">
        {title}
      </h1>
      <p class="text-gray-600 text-lg">
        {subtitle}
      </p>
    </div>

  
    <div class="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-10">
     
      <div class="col-span-1 md:col-span-4">
        <img
          src={images[0].src}
          alt="Living room"
          class="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div class="col-span-1 md:col-span-2">
        <img
          src={images[1].src}
          alt="Bedroom"
          class="w-full h-full object-cover rounded-2xl"
        />
      </div>

     
      <div class="col-span-1 md:col-span-2">
        <img
          src={images[2].src}
          alt="Living space"
          class="w-full h-[250px] object-cover rounded-2xl"
        />
      </div>
      <div class="col-span-1 md:col-span-4">
        <img
          src={images[3].src}
          alt="Sofa arrangement"
          class="w-full h-[250px] object-cover rounded-2xl"
        />
      </div>

     
      <div class="col-span-1 md:col-span-2">
        <img
          src={images[4].src}
          alt="Living area"
          class="w-full h-[418px] object-cover rounded-2xl"
        />
      </div>
      <div class="col-span-1 md:col-span-4">
        <img
          src={images[5].src}
          alt="Dining area"
          class="w-full h-[418px] object-cover rounded-2xl"
        />
      </div>
    </div>
  </div>
</section> 

 <LastProjects title="Related Projects"/>

<Contactus/> 


 -->
 <script>
  import { page } from '$app/stores';
	import client from '$lib/sanity';
  import { onMount } from 'svelte';
 

  /**
	 * @type {{ title: any; }}
	 */
  let project;
  /**
	 * @type {string}
	 */
  let slug;

  onMount(() => {
    const unsubscribe = page.subscribe(async ($page) => {
      slug = $page.params.slug; // Get the slug from the URL

      if (slug) {
        const query = `*[_type == "project" && slug.current == $slug][0]`;
        project = await client.fetch(query, { slug });
      }
    });

    return () => unsubscribe();
  });
</script>

{#if project}
  <h1>{project.title}</h1>
{:else}
  <p>Loading...</p>
{/if}







