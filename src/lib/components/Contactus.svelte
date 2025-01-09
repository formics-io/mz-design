<script>
    	const contacts = [
		{
			id: 1,
			icon: '/icons/contactMZ/location.svg', 
			title: 'Email',
			detail: 'support@gulaly.com',
			buttonLabel: 'CONTACT'
		},
		{
			id: 2,
			icon: '/icons/contactMZ/Phone.svg', 
			title: 'Phone',
			detail: 'Office. +61 234–567 8910',
			buttonLabel: 'CALL'
		},
		{
			id: 3,
			icon: '/icons/contactMZ/location.svg', 
			title: 'Office',
			detail: '6391 Elgin St. Celina, Delaware 10299',
			buttonLabel: 'LOCATION'
		}
	];
</script>

<section class=" py-[70px] px-[5%] mx-auto">
	<div class="mx-auto max-w-[1260px] justify-items-center items-center text-center flex flex-col">
        <div class="flex flex-col items-center justify-center">
            <h2 class="mb-4 text-[50px] font-normal font-alice leading-[57.15px] text-center  underline-offset-[from-font] decoration-skip-ink-none">Contact Us</h2>
            <p class="mb-10 max-w-[700px] ">
                Get in touch with us for your design needs. Whether it’s a question, a project inquiry, or
                feedback, we’re here to help.
            </p>
        </div>
		<div class="flex flex-wrap flex-row gap-4 mx-auto ">
			{#each contacts as contact}
				<div class=" md:w-[400px]  w-full  rounded-xl border  p-6 text-left shadow-md">
					<div class="">
						<img class="flex-shrink-0 text-2xl " 
							src={contact.icon}
                            alt={contact.title}
						/>
						<h3 class="text-lg mt-4 font-semibold m ">{contact.title}</h3>
					</div>
					<p class="mb-4 font-general-sans text-sm font-semibold leading-6 text-left  underline-offset-[from-font] decoration-skip-ink-none">
						{#if contact.title === 'Phone'}
							<span>Office. </span><span class="underline">+61 234–567 8910</span>
						{:else}
							{contact.detail}
						{/if}
					</p>									 
					<div class="flex gap-2 ">
                        <button 
						class="text-xs bg-[#003EFF]  text-white	font-semibold  w-[93px] h-[32px] rounded-full  px-[16px] py-[8px] text-center text-sm  transition hover:bg-white hover:text-black hover:ring-1 hover:ring-[#003EFF]"
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