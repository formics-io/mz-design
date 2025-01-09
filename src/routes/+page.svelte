<script>
	import Aboutus from '$lib/components/Aboutus.svelte';
	import AwardsRecognitions from '$lib/components/Awards&Recognitions.svelte';
	import Contactus from '$lib/components/Contactus.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import LastProjects from '$lib/components/LastProjects.svelte';
	import Testimonial from '$lib/components/Testimonial.svelte';
	import Vedios from '$lib/components/Vedios.svelte';
	import Work from '$lib/components/Work.svelte';
	import ClientLogoList from '$lib/components/ClientLogoList.svelte';
	import { LightbulbIcon, Building2Icon, GraduationCapIcon, Award, Play } from 'lucide-svelte';
	import HowWeWork from '$lib/components/HowWeWork.svelte';

	const features = [
		{
			icon: LightbulbIcon,
			title: 'Creative Skill Development',
			description: 'Industry-focused training under HRDF, enhancing workforce expertise.'
		},
		{
			icon: Award,
			title: 'Recognized Provider',
			description: 'Certified by HRD Corp, offering expert arts and interior design training.'
		},
		{
			icon: Building2Icon,
			title: 'Real Estate Training',
			description: 'High-end real estate and programs through Advisors Group.'
		},
		{
			icon: GraduationCapIcon,
			title: 'Expert Trainers',
			description: 'Workshops by certified trainers in traditional, contemporary, and digital art.'
		}
	];
	
</script>

<Hero />
<Aboutus />

<!-- services -->
<section class="py-16  px-[5%] max-w-[1200px] mx-auto">
	<div class=" mx-auto">
		<!-- Heading -->
		<div class="text-center">
			<h2 class="text-3xl font-bold  md:text-4xl">Our Services</h2>
			<p class="mx-auto mt-4 text-lg ">
				Discover a wide range of professional design solutions crafted to transform your vision into
				reality. From planning and architecture to bespoke interiors and training programs, we bring
				creativity and expertise to every project.
			</p>
		</div>

		<!-- Services Grid -->
		<div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Service 1 -->
			<div class="text-center hover:shadow-2xl p-4 rounded-lg	">
				<div class="flex justify-center">
					<img src="/icons/Frame.svg" alt="Planning Icon" class="mb-4 h-12 w-12" />
				</div>
				<h3 class="text-xl font-semibold ">Planning</h3>
				<p class="mt-2 ">
					We create strategic, detailed plans for seamless execution and optimal results.
				</p>
			</div>

			<!-- Service 2 -->
			<div class="text-center hover:shadow-2xl p-4 rounded-lg	">
				<div class="flex justify-center">
					<img src="/icons/Frame (1).svg" alt="Architecture Icon" class="mb-4 h-12 w-12" />
				</div>
				<h3 class="text-xl font-semibold ">Architecture</h3>
				<p class="mt-2 ">
					We create sustainable, functional, and aesthetically inspiring architectural designs.
				</p>
			</div>

			<!-- Service 3 -->
			<div class="text-center hover:shadow-2xl p-4 rounded-lg	">
				<div class="flex justify-center">
					<img src="/icons/Frame (2).svg" alt="Interior Design Icon" class="mb-4 h-12 w-12" />
				</div>
				<h3 class="text-xl font-semibold ">Interior Design</h3>
				<p class="mt-2 ">
					Transform your spaces into beautiful, functional, and personalized environments.
				</p>
			</div>

			<!-- Service 4 -->
			<div class="text-center hover:shadow-2xl p-4 rounded-lg	">
				<div class="flex justify-center ">
					<img src="/icons/Frame (3).svg" alt="Landscape Design Icon" class="mb-4 h-12 w-12" />
				</div>
				<h3 class="text-xl font-semibold ">Landscape Design</h3>
				<p class="mt-2 ">
					We design outdoor spaces that blend nature and structure, creating serene environments.
				</p>
			</div>

			<!-- Service 5 -->
			<div class="text-center hover:shadow-2xl p-4 rounded-lg	">
				<div class="flex justify-center">
					<img src="/icons/Frame (4).svg" alt="Lighting Design Icon" class="mb-4 h-12 w-12" />
				</div>
				<h3 class="text-xl font-semibold ">Lighting Design</h3>
				<p class="mt-2 ">
					Enhance your spaces with lighting that adds ambiance, functionality, and elegance.
				</p>
			</div>

			<!-- Service 6 -->
			<div class="text-center hover:shadow-2xl p-4 rounded-lg	">
				<div class="flex justify-center">
					<img src="/icons/Frame (5).svg" alt="Graphics Icon" class="mb-4 h-12 w-12" />
				</div>
				<h3 class="text-xl font-semibold ">Graphics</h3>
				<p class="mt-2 ">
					Bring your ideas to life with graphic designs that captivate and communicate effectively.
				</p>
			</div>

			<!-- Service 7 -->
			<div class="text-center hover:shadow-2xl p-4 rounded-lg	">
				<div class="flex justify-center">
					<img src="/icons/Frame (6).svg" alt="Paintings Icon" class="mb-4 h-12 w-12" />
				</div>
				<h3 class="text-xl font-semibold ">Paintings/Art Pieces</h3>
				<p class="mt-2 ">
					Add character to your spaces with custom or curated art pieces that resonate with your
					style.
				</p>
			</div>

			<!-- Service 8 -->
			<div class="text-center 	hover:shadow-2xl p-4 rounded-lg	">
				<div class="flex justify-center">
					<img src="/icons/Frame (7).svg" alt="Art Gallery Icon" class="mb-4 h-12 w-12" />
				</div>
				<h3 class="text-xl font-semibold ">Art Gallery</h3>
				<p class="mt-2 ">
					Explore our virtual gallery featuring exceptional works by talented artists and graduates.
				</p>
			</div>

			<!-- Service 9 -->
			<div class="text-center hover:shadow-2xl p-4 rounded-lg	">
				<div class="flex justify-center">
					<img src="/icons/Frame (8).svg" alt="Workshop Icon" class="mb-4 h-12 w-12" />
				</div>
				<h3 class="text-xl font-semibold ">Workshop & Training Provider</h3>
				<p class="mt-2 text-gray-600">
					Empowering individuals with skills in arts, design, and real estate through certified
					training.
				</p>
			</div>
		</div>
	</div>
</section>


<HowWeWork/>

<section class=" py-20 px-[5%] max-w-[1300px] mx-auto">
	<div class="mx-auto ">
		<div class="grid gap-16 lg:grid-cols-2">
			<!-- Left Column - Hero Text -->
			<div class="space-y-6">
				<h1 class="font-alice text-3xl leading-tight  md:text-5xl">
					Empowering Creativity,<br />
					Shaping the Future with<br />
					MZ Design Consultancy
				</h1>

				<p class="max-w-xl font-raleway md:text-lg leading-relaxed ">
					Transform your skills and unleash your creative potential with MZ Design Consultancy. We
					offer world-class training in arts, interior design, and real estate, empowering
					individuals and professionals to excel and innovate in their fields.
				</p>
			</div>

			<!-- Right Column - Features Grid -->
			<div class="grid gap-6 md:grid-cols-2">
				{#each features as feature}
					<div
						class="space-y-4 font-raleway rounded-lg border-[1.5px]  p-6 shadow-[0px_8px_64px_0px_#5A46351A]"
					>
						<svelte:component
							this={feature.icon}
							class="h-6 w-6  shadow-[0px_8px_64px_0px_#8F8F8F29]"
						/>
						<h3 class="font-serif text-xl ">
							{feature.title}
						</h3>
						<p class="">
							{feature.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
<Work/>
<LastProjects/>
<AwardsRecognitions/>
<Vedios/>
<ClientLogoList />
<Testimonial/>
<Contactus />
