<script>
	import { CircleX } from 'lucide-svelte';

	let isOpen = false;
	const toggleMenu = () => {
		isOpen = !isOpen;
	};

	const handleMobileNavClick = () => {
		isOpen = false;
	};
</script>

<nav class=" z-10 h-[88px] w-full overflow-visible px-2 py-4 md:px-6">
	<div class="container mx-auto flex items-center justify-between">
		<!-- Logo -->
		<a href="/" class="flex items-center" aria-label="Home">
			<svg
				width="51"
				height="49"
				viewBox="0 0 51 49"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M25.5366 46.2683C37.9832 46.2683 48.0732 36.1783 48.0732 23.7317C48.0732 11.2851 37.9832 1.19507 25.5366 1.19507C13.09 1.19507 3 11.2851 3 23.7317C3 36.1783 13.09 46.2683 25.5366 46.2683Z"
					fill="#003EFF"
				/>
				<path d="M33.2493 26.0354L35.5969 26.9161L30.4998 29.7935" fill="white" />
				<path
					d="M25.8961 23.7748L28.8961 22.4648L22.0989 32.1956V34.9656L24.5912 36.6368L25.2948 36.2211L35.6423 30.4954L24.6491 36.4136V33.3591L33.1227 20.0542L29.3919 21.9077L29.38 21.9128L29.2556 21.969L29.2232 21.9844"
					fill="white"
				/>
				<path
					d="M36.5215 17.3059C36.4908 16.5478 36.116 15.972 35.5453 15.6534H35.5487L35.5283 15.6432C35.4499 15.6006 35.0871 15.4558 35.0019 15.4234L24.6237 10.8271L14.484 16.144L14.7225 30.1185L17.0717 31.6568L16.8281 17.3757L24.4073 13.2173L25.7719 13.8817L18.1927 18.0622L18.4687 32.575L20.9576 34.2258L20.7038 19.3229L28.283 15.1457L29.668 15.8357L22.0888 20.0214L22.1007 23.3893L24.651 24.5835V20.9719L32.1757 16.989L32.5402 16.8067L34.254 16.0503C34.7191 15.8902 35.1348 15.9515 35.392 16.0231C35.869 16.2496 36.2216 16.7147 36.237 17.3229C36.2574 18.1116 36.2796 18.6551 36.2915 19.0946C36.2915 19.0946 36.2915 19.098 36.2915 19.0997C36.329 20.3416 35.9814 21.5665 35.2915 22.6006L34.0002 24.6329L35.3647 22.7334C36.2148 21.604 36.6458 20.2139 36.5862 18.8016C36.5641 18.2599 36.5385 17.7334 36.5215 17.3093V17.3059Z"
					fill="white"
				/>
			</svg>
		</a>

		<!-- Menu -->
		<ul class="hidden items-center space-x-6 font-medium md:flex">
			<li>
				
				<a
					href="/"
					class="group relative text-center font-raleway text-[16px] text-base leading-6 text-black hover:text-[#003EFF]"
				>
					Home
					<span
						class="absolute bottom-0 left-0 h-[2px] w-0 bg-[#003EFF] transition-all duration-300 group-hover:w-full"
					></span>
				</a>
			</li>
			<li>
				<a
					href="/service"
					class="group relative text-center font-raleway text-[16px] text-base leading-6 text-black hover:text-[#003EFF]"
				>
					Service
					<span
					class="absolute bottom-0 left-0 h-[2px] w-0 bg-[#003EFF] transition-all duration-300 group-hover:w-full"
				></span>
				</a>
			</li>
			<li>
				<a
					href="/portfolio"
					class="group relative text-center font-raleway text-[16px] text-base leading-6 text-black hover:text-[#003EFF]"
				>
					Portfolio
					<span
					class="absolute bottom-0 left-0 h-[2px] w-0 bg-[#003EFF] transition-all duration-300 group-hover:w-full"
				></span>
				</a>
			</li>
			<li>
				<a
					href="/about"
					class="group relative text-center font-raleway text-[16px] text-base leading-6 text-black hover:text-[#003EFF]"
				>
					About Us
					<span
					class="absolute bottom-0 left-0 h-[2px] w-0 bg-[#003EFF] transition-all duration-300 group-hover:w-full"
				></span>
				</a>
			</li>
			<li>
				<a href="/contactus" class="no-underline">
					<button
						class=" group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#003EFF] px-6 py-2 font-medium text-white ring-offset-0 hover:ring-1 hover:ring-[#003EFF]"
					>
						<span class="relative z-10 transition-colors duration-300 group-hover:text-[black]"
							>Contact Us</span
						>
						<div
							class="absolute inset-x-0 top-0 h-0 border-none bg-white outline-none transition-all duration-300 ease-out group-hover:h-full"
						></div>
					</button>
				</a>
			</li>
		</ul>

		<!-- Hamburger/Close Icon -->
		<button class="block text-blue-600 focus:outline-none md:hidden" on:click={toggleMenu}>
			{#if isOpen}
				<CircleX color="black" size="24" />
			{:else}
				<img src="/icons/menu.png" alt="menu" />
			{/if}
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isOpen}
		<ul
			class=" space-y-4 rounded-lg bg-white px-10 py-6 text-left font-alice font-semibold shadow-2xl duration-500 md:hidden"
		>
			<li>
				<a
					href="/"
					on:click={handleMobileNavClick}
					class="block text-left font-raleway text-[16px] font-medium leading-6 hover:text-blue-600"
					style="animation-duration: 0ms; text-underline-position: from-font;"
				>
					Home
				</a>
			</li>

			<li>
				<a
					href="/service"
					on:click={handleMobileNavClick}
					class="block text-left font-raleway text-[16px] font-medium leading-6 hover:text-blue-600"
					style="animation-duration: 0ms; text-underline-position: from-font;"
				>
					Service
				</a>
			</li>
			<li>
				<a
					href="/portfolio"
					on:click={handleMobileNavClick}
					class="block text-left font-raleway text-[16px] font-medium leading-6 hover:text-blue-600"
					style="animation-duration: 0ms; text-underline-position: from-font;"
				>
					Portfolio
				</a>
			</li>
			<li>
				<a
					href="/about"
					on:click={handleMobileNavClick}
					class="block text-left font-raleway text-[16px] font-medium leading-6 hover:text-blue-600"
					style="animation-duration: 0ms; text-underline-position: from-font;"
				>
					About Us
				</a>
			</li>
			<li>
				<a
					href="/contactus"
					on:click={handleMobileNavClick}
					class="block text-left font-raleway text-[16px] font-medium leading-6 hover:text-blue-600"
					style="animation-duration: 0ms; text-underline-position: from-font;"
				>
					Contact Us
				</a>
			</li>
		</ul>
	{/if}
</nav>
