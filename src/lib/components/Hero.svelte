<script>
	const images = [
		{ src: '/images/banner.png', alt: 'Modern living room' },
		{ src: '/images/banner (1).png', alt: 'Home office' },
		{ src: '/images/banner (2).png', alt: 'Living room with fireplace' },
		{ src: '/images/image.png', alt: 'Modern bedroom' }
	];

	
</script>

<section class="overflow-hidden  py-20">
	<div class="mx-auto   pt-[70px]">
		<div class="grid grid-cols-1 px-[5%] gap-1 lg:grid-cols-2 justify-between	items-start	gap-x-10	mx-auto " style="max-width:1300px">
			<!-- Main Content -->
			<div class="order-1 text-center lg:mx-0 lg:text-left lg:min-w-[600px]">
				<h1 class="font-alice text-3xl leading-tight  md:text-6xl ">
					Your Dream Space,<br />
					Designed to Perfection.
				</h1>
				<p class="mt-6  text-lg   text-[20px]">
					Designing bespoke interiors that inspire and captivate, blending style, functionality, and
					timeless elegance to create spaces you'll love.
				</p>
			</div>

			<!-- Carousel Images -->
			<div class="order-2 col-span-full mt-10 w-full  lg:order-4 lg:col-span-2 mb-6">
				<div class="flex animate-scroll gap-4">
					{#each [...images, ...images] as { src, alt }, i (i)}
						<div class="w-full flex-none px-2 md:w-1/2 lg:w-1/3">
							<div class="overflow-hidden rounded-xl shadow-lg">
								<img {src} {alt} class="h-48 w-full rounded-lg object-cover md:h-64" />
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Awards Grid -->
			<div class="order-3 mx-auto lg:order-2 lg:mx-0 justify-self-end">
				<div class="grid grid-cols-2 place-items-center gap-y-6 lg:place-items-start lg:grid-cols-2 ">
					<div class="h-28 w-48 rounded-lg ">
						<div class="mb-3 flex items-center justify-center">
							<img src="/star.svg" alt="" class="h-8" />
						</div>
						<p class="text-center text-sm text-gray-600">
							Inaugural Women of Excellence Awards (2014)
						</p>
					</div>
					<div class="h-28 w-48 rounded-lg ">
						<div class="mb-3 flex items-center justify-center">
							<img src="/star.svg" alt="" class="h-8" />
						</div>
						<p class="text-center text-sm text-gray-600">
							Awarded the Nippon Paint Young Designer Award (2013)
						</p>
					</div>
					<div class="h-28 w-48 rounded-lg ">
						<div class="mb-3 flex items-center justify-center">
							<img src="/star.svg" alt="" class="h-8" />
						</div>
						<p class="text-center text-sm text-gray-600">
							Nippon Paint Young Designer Award (2013)
						</p>
					</div>
					<div class="h-28 w-48 rounded-lg ">
						<div class="mb-3 flex items-center justify-center">
							<img src="/star.svg" alt="" class="h-8" />
						</div>
						<p class="text-center text-sm text-gray-600">Malaysia Mega Sale Carnival (2009)</p>
					</div>
				</div>
			</div>

			<div class="order-4 md:mt-10 flex flex-col justify-items-start	 items-center 	 gap-6 lg:order-3 lg:flex-row">
				<button
					class="rounded-full border  px-6 py-2 font-medium  transition-colors  "
				>
					View Our Portfolio
				</button>
				<p class="text-gray-600">
					Over <span class="font-semibold text-blue-600">100+</span> premium designs
				</p>
			</div>
			<!-- Company Logos -->
			<div class="order-4 lg:justify-self-end  mt-10 flex  justify-end  opacity-50 lg:order-3  lg:max-w-[500px] overflow-hidden ">
				<div class="flex gap-12  animate-scroll">
				<img src="/images/logoList/apple (1).png" alt="company logo" class="h-12 w-auto grayscale animate-scroll" />
				<img src="/images/logoList/ibm (1).png" alt="company logo" class="h-12 w-auto grayscale animate-scroll" />
				<img src="/images/logoList/microsoft (1).png" alt="company logo" class="h-12 w-auto grayscale animate-scroll" />
				<img src="/images/logoList/intel.png" alt="company logo" class="h-12 w-auto grayscale animate-scroll" />
				<img src="/images/logoList/google.png" alt="company logo" class="h-12 w-auto grayscale animate-scroll" />
					<img src="/images/logoList/apple (1).png" alt="company logo" class="h-12 w-auto grayscale animate-scroll" />
				<img src="/images/logoList/ibm (1).png" alt="company logo" class="h-12 w-auto grayscale animate-scroll" />
				<img src="/images/logoList/microsoft (1).png" alt="company logo" class="h-12 w-auto grayscale animate-scroll" />
				<img src="/images/logoList/intel.png" alt="company logo" class="h-12 w-auto grayscale animate-scroll" />
				</div>
				
			</div>
			
		</div>
	</div>
</section>
