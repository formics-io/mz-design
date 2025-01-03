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
		}
	];


</script>



<section class=" py-20 px-[5%] ">
	<div class="flex flex-col items-end max-w-[1440px] px-4 mx-auto ">
		<!-- Section Header -->
		<div class="mx-auto mb-16 text-center">
			<h2 class="mb-6 font-serif text-4xl  lg:text-5xl font-alice">Awards & Recognitions</h2>
			<p class=" leading-relaxed font-raleway">
				Celebrating our journey of excellence and creativity with prestigious accolades that reflect
				our dedication and success.
			</p>
		</div>

		<!-- Awards Grid -->
		<div class="flex mx-auto overflow-x-auto gap-8 pb-4  max-w-[1200px] snap-x scroll-smooth" style="scroll-snap-align: start;">
			{#each awards as award}
				<div class="group min-w-[300px]  snap-center">
					<!-- Certificate Image -->
					<div class="mb-4 rounded-2xl  transition-all duration-300 hover:shadow-md">
						<img 
							src={award.image} 
							alt={award.title} 
							class="rounded-lg  md:h-[457px] md:w-full object-cover"
							style="width:400px" 
						/>
					</div>
		
					<!-- Award Info -->
					<div>
						<h3 class="font-serif text-xl ">
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
</section>

 
