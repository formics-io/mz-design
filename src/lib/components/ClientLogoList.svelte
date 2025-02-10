<script>
	const clients = [
		{
			image: '/images/ClientMZ/1.svg',
			title: 'Perlis State Legislative Assembly'
		},
		{
			image: '/images/ClientMZ/2.svg',
			title: 'Kedah State Legislative Assembly'
		},
		{
			image: '/images/ClientMZ/3.svg',
			title: 'Jabatan Kerja Raya'
		},
		{
			image: '/images/ClientMZ/4.svg',
			title: 'Forest Research Institute Malaysia'
		},
		{
			image: '/images/ClientMZ/5.svg',
			title: 'Maxis Communication'
		},
		{
			image: '/images/ClientMZ/6.svg',
			title: 'UDA Holdings'
		},
		{
			image: '/images/ClientMZ/7.svg',
			title: 'Puspakom'
		},
		{
			image: '/images/ClientMZ/8.svg',
			title: 'The Malaysian Insurance Institute'
		},
		{
			image: '/images/ClientMZ/9.svg',
			title: 'Cypark Resources Berhad'
		},
		{
			image: '/images/ClientMZ/10.svg',
			title: 'Hotel Maluri'
		},
		{
			image: '/images/ClientMZ/11.svg',
			title: 'EDC Hotel Kuala Lumpur'
		},
		{
			image: '/images/ClientMZ/12.svg',
			title: 'Ras Niaga Sdn Bhd'
		}
	];
</script>

<section class="px-[5%] py-20">
	<div class="mx-auto max-w-[1300px]">
		<h1 class="text-center font-alice text-4xl font-medium leading-snug sm:mb-10 lg:text-5xl">
			Among Past Clients
		</h1>
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
			{#each clients as item}
				<div class="flex flex-col items-center gap-4">
					<img src={item.image} alt={item.title} class=" h-[180px] w-[180px] object-cover" />
				</div>
			{/each}
		</div>
	</div>
</section>
