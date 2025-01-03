<script>
	const testimonials = [
		{
			id: 1,
			name: 'Marilyn Torff',
			title: 'Minimalist Family Home',
			photo: '/images/client.png',
			quote:
				'Hiring them was the best decision we made. They handled everything seamlessly and delivered a design that is both functional and beautiful.'
		},
        {
			id: 2,
			name: 'Chance Calzoni',
			title: 'Boutique Storefront',
			photo: '/images/client4.png',
			quote: 'Creativity beyond bounds—our retail store is both beautiful and practical!'
		},
        {
			id: 3,
			name: 'Olivia T',
			title: 'Rustic Modern Home',
			photo: '/images/client.png',
			quote:
				'The design team completely reimagined our space, making it both elegant and cozy. Every guest now compliments our home!'
		},
		{
			id: 4,
			name: 'Sophia M',
			title: 'Luxury Living Room',
			photo: '/images/client2.png',
			quote: 'They transformed my space into a masterpiece, exceeding all expectations.'
		},
		{
			id: 5,
			name: 'James P',
			title: 'Corporate Office Design',
			photo: '/images/client.png',
			quote: 'A perfect blend of aesthetics and practicality for our retail store.'
		},
        {
			id: 6,
			name: 'Ethan R',
			title: 'Fine Dining Restaurant',
			photo: '/images/client.png',
			quote:
				'Our restaurant’s ambiance is now the talk of the town! The team created a space that matches the quality of our food.'
		},
		
		{
			id: 7,
			name: 'Charlotte K',
			title: 'Creative Studio Office',
			photo: '/images/client3.png',
			quote:
				'They listened to our needs and brought our vision to life. Our team now feels more motivated working in such a stunning office environment.'
		},
		{
			id: 8,
			name: 'Emma R',
			title: 'Luxury Penthouse',
			photo: '/images/client5.png',
			quote:
				'From concept to completion, their professionalism and passion for design shone through. The final result was simply breathtaking.'
		},
		{
			id: 9,
			name: 'Noah D',
			title: 'Coastal Vacation Home',
			photo: '/images/client4.png',
			quote:
				'We loved how they incorporated our personality into the design. It truly feels like ‘us,’ but elevated to a whole new level.'
		}
	];
</script>

<section class="bg-[#EBE2D5] py-12">
	<div class="mx-auto max-w-6xl px-4 text-center">
		<h2 class="font-alice mb-10 text-center text-2xl font-bold text-[#6b4c35] md:text-3xl">
			What Our Clients Say
		</h2>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as testimonial}
				<div class="relative flex flex-col items-center rounded-lg p-6 text-left">
					<!-- Quotation Icon -->
					<div class="absolute right-4 top-4">
						<img src="/icons/double-quotes-l.svg" alt="" />
					</div>
					<!-- Client Details -->
					<div class="text-left">
						<!-- Client Photo -->
						<img
							src={testimonial.photo}
							alt={testimonial.name}
							class="mb-4 h-16 w-16 rounded-full"
						/>
						<h3 class="text-lg font-semibold text-[#6b4c35]">
							{testimonial.name}
						</h3>
						<p
							class="font-raleway decoration-skip-ink-none text-sm font-normal italic leading-5 text-[#b89f7a] underline-offset-[from-font]"
						>
							{testimonial.title}
						</p>
						<p class="font-raleway mt-4 text-sm italic text-[#6A6866]">
							"{testimonial.quote}"
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
