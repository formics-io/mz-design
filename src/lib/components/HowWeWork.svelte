<script>
  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  export const ssr = false;

    const steps = [
		{
			number: '01',
			title: 'Understanding Your Vision',
			description:
				'With over 20 years of expertise, we work closely with clients to understand their unique needs and aspirations, ensuring every design is tailored to their vision.',
			images: ['/images/Rectangle 14.png', '/images/Frame 108.png']
		},
		{
			number: '02',
			title: 'Collaborating to Create',
			description:
				'Partner with our expert designers to craft bespoke solutions. From functional layouts to artistic details, we bring your ideas to life with precision and creativity.',
			images: ['/images/Rectangle 15.png', '/images/Rectangle 14 (1).png']
		},
		{
			number: '03',
			title: 'Seamless Execution',
			description:
				'We source premium materials and trusted partners to ensure every design is executed flawlessly, transforming concepts into functional spaces.',
			images: ['/images/Rectangle 14.png', '/images/Frame 108.png']
		}
	];

    
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
		start: "top+=350 center",
		end: "top+=300 bottom",
          scrub: 0.3,
          invalidateOnRefresh: true,
		  
        }
      });
    } else {
      console.error("Element not found: horizontal or horizontalContainer");
    }
  });
</script>




<section class=" px-[5%] py-6">
    <div class="mx-auto " id="horizontalContainer">
      <h2 class="lg:mb-20 mb-10 text-center font-serif lg:text-5xl xl:text-5xl xxl:text-5xl text-4xl">How We Work</h2>
  
      <!-- Horizontal Scroll Section -->
      <div
        class="flex space-x-16  "
        id="horizontal"
      >
        {#each steps as step}
          <!-- Individual Step -->
         
          <div class="flex-shrink-0 w-80 flex flex-col space-y-6 ">
            <!-- Step Number -->
            <div
              class="flex h-8 w-8 items-center justify-center rounded-full  text-sm font-medium  md:h-12 md:w-12 md:text-lg"
            >
              {step.number}
            </div>
  
            <!-- Step Content -->
            <div class="space-y-4">
              <h3 class="font-alice text-2xl ">{step.title}</h3>
              <p class="leading-relaxed font-raleway ">
                {step.description}
              </p>
            </div>
  
            <!-- Step Images -->
            <div class="mt-6 grid grid-cols-2 gap-2">
              {#each step.images as image}
                <img
                  src={image}
                  alt="Interior design"
                  class="h-48 w-full rounded-lg object-cover"
                  loading="lazy"
                />
              {/each}
            </div>
          </div>
         
        {/each}
      </div>
    </div>
  </section>