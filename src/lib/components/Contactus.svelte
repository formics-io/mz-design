<script>
    	const contacts = [
		{
			id: 1,
			icon: '/icons/contactMZ/Email.svg', 
			title: 'Email',
			detail: 'admin@mz02.com',
			buttonLabel: 'CONTACT'
		},
		{
			id: 2,
			icon: '/icons/contactMZ/Phone.svg', 
			title: 'Phone',
			detail: 'Office. 03-61862822' ,
			buttonLabel: 'CALL'
		},
		{
			id: 3,
			icon: '/icons/contactMZ/location.svg', 
			title: 'Office',
			detail: '57A, Jalan SG 3/1, Pusat Bandar Sri Gombak, 68100 Batu Caves Selangor, Malaysia',
			buttonLabel: 'LOCATION'
		},
		{
			id: 4,
			icon: '/icons/contactMZ/WHATSAPP.svg', 
			title: 'Whatsapp',
			detail: '+601158671745',
			buttonLabel: 'CONTACT'
		}
	];
</script>

<section class=" py-[40px] px-[5%] mx-auto">
	<div class="mx-auto max-w-[1260px] justify-items-center items-center text-center flex flex-col">
        <div class="flex flex-col items-center justify-center">
            <h2 class="mb-2 text-4xl lg:text-5xl font-normal font-alice leading-[57.15px] text-center  underline-offset-[from-font] decoration-skip-ink-none">Contact Us</h2>
            <p class="mb-10 max-w-[700px] font-lg font-raleway text-center lg:font-xl">
                Get in touch with us for your design needs. Whether it’s a question, a project inquiry, or
                feedback, we’re here to help.
            </p>
        </div>
		<div class="grid md:grid-cols-2 2xl:grid-cols-4 gap-4 mx-auto justify-center ">
			{#each contacts as contact}
			<div class=" w-full h-full rounded-xl border p-6 text-left shadow-md flex flex-col">
				<img class="flex-shrink-0 text-2xl max-w-[24px]" src={contact.icon} alt={contact.title} />
			
				<div class="flex-grow">
					<h3 class="text-lg mt-4 font-semibold">{contact.title}</h3>
					<p class="mb-4 font-general-sans text-sm font-semibold leading-6 text-left underline-offset-[from-font] decoration-skip-ink-none">
						{#if contact.title === 'Phone'}
							<span>Office. </span><span class="underline">+61 234–567 8910</span>
						{:else}
							{contact.detail}
						{/if}
					</p>    
				</div>
			
				<div class="flex gap-2 mt-auto">
					<button 
						class="text-xs bg-[#003EFF] text-white font-semibold w-[93px] h-[32px] rounded-full px-[16px] py-[8px] text-center text-sm transition hover:bg-white hover:text-black hover:ring-1 hover:ring-[#003EFF]"
					>
					
						{contact.buttonLabel}
					</button>
					<p class="mt-2 text-xs text-gray-500">*extra information(optional)</p>
				</div>
			</div>
			
			{/each}
		</div>
	</div>
</section>