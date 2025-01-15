<script>
	const awards = [
		{
			image: '/images/awards/award.jpeg', 
			title: 'Inaugural Women of Excellence Awards',
			year: '2014'
		},
		{
			image: '/images/awards/award1.jpeg', 
			title: 'MALAYSIA MEGA SALE CARNIVAL',
			year: '2009'
		},
		{
			image: '/images/awards/award2.jpeg', 
			title: 'Nippon Paint Young Designer',
			year: '2013'
		},
		{
			image: '/images/awards/award3.jpeg', 
			title: 'Nippon Paint Young Designer',
			year: '2013'
		},
		
	];

  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  export const ssr = false;

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
          pin: ".pin",
		start: "top center",
		end: "+=300",
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
	  white-space: nowrap;
	  /* height: 100vh; */
	  height: auto;

	}
  </style>

  
   <section class=" px-[5%] " >
	<div class="flex flex-col  " >
	 
	  <div class="mx-auto mb-16 text-center">
		<h2 class="mb-6 font-serif text-4xl lg:text-5xl font-alice">Awards & Recognitions</h2>
		<p class="leading-relaxed font-raleway">
		  Celebrating our journey of excellence and creativity with prestigious accolades that reflect
		  our dedication and success.
		</p>
	  </div>
  
	  
	  <div id="horizontalContainer" class="horizontal-container w-full mx-auto " >
		<div id="horizontal" class="flex gap-x-4  mx-auto" style="align-items: flex-center;" >
		  {#each awards as award}
			<div class="group  snap-center">
			 
			  <div id="start" class="mb-4 rounded-2xl  hover:shadow-md ">
				<img 
				  src={award.image} 
				  alt={award.title} 
				  class="rounded-lg  object-cover"
				  style="width:100%; height:100%; max-height:550px;" 
				/>
			  </div> 
	  
			 
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

 
