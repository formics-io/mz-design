<script>
	const awards = [
		{
			image: '/images/awards/APPRECIATION-LETTER-MZDC.jpeg', // Replace with your actual certificate image
			title: 'Inaugural Women of Excellence Awards',
			year: '2014'
		},
		{
			image: '/images/awards/Picture6.jpg', // Replace with your actual certificate image
			title: 'MALAYSIA MEGA SALE CARNIVAL',
			year: '2009'
		},
		{
			image: '/images/awards/Picture8.jpg', // Replace with your actual certificate image
			title: 'Nippon Paint Young Designer',
			year: '2013'
		},
		{
			image: '/images/awards/Picture42.jpg', // Replace with your actual certificate image
			title: 'Nippon Paint Young Designer',
			year: '2013'
		},
		
	];

  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  
  onMount(() => {
    const horizontal = document.getElementById("horizontal");
    const horizontalContainer = document.getElementById("horizontalContainer");

    if (horizontal && horizontalContainer) {
      gsap.to("#horizontal", {
        x: () => -(horizontal.scrollWidth - horizontalContainer.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalContainer,
          pin: true,
          start: "top top",
          end: () => `+=${horizontal.scrollWidth - horizontalContainer.clientWidth}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
        }
      });
    } else {
      console.error("Element not found: horizontal or horizontalContainer");
    }
  });
</script>


<style>
	.horizontal-container {
	  /* overflow-x: hidden; */
	  white-space: nowrap;
	  
	}
	
	
  </style>
  
  <section class="py-20 px-[5%] ">
	<div class="flex flex-col items-end max-w-[1440px] px-4 mx-auto" style="align-items: flex-start;">
	  <!-- Section Header -->
	  <div class="mx-auto mb-16 text-center">
		<h2 class="mb-6 font-serif text-4xl lg:text-5xl font-alice">Awards & Recognitions</h2>
		<p class="leading-relaxed font-raleway">
		  Celebrating our journey of excellence and creativity with prestigious accolades that reflect
		  our dedication and success.
		</p>
	  </div>
  
	  <!-- Awards Grid -->
	  <div id="horizontalContainer" class="horizontal-container flex  gap-8 pb-4 w-full snap-x scroll-smooth " >
		<div id="horizontal" class="flex gap-8 " style="align-items: flex-start;" >
		  {#each awards as award}
			<div class="group  snap-center">
			  <!-- Certificate Image -->
			  <div class="mb-4 rounded-2xl transition-all duration-300 hover:shadow-md ">
				<img 
				  src={award.image} 
				  alt={award.title} 
				  class="rounded-lg md:h-[457px] md:w-full object-cover"
				  style="width:100%; height:100%; max-height:457px;" 
				/>
			  </div>
	  
			  <!-- Award Info -->
			  <div>
				<h3 class="font-serif text-xl">
				  {award.title}
				</h3>
				<p class="text-gray-600">
				  {award.year}
				</p>
			  </div>
			</div>
			
		  {/each}
		</div>
	  </div>
	</div>
  </section>

 
