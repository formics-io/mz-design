<script>
	import { CircleX } from "lucide-svelte";

    let isOpen = false;
    const toggleMenu = () => {
        isOpen = !isOpen;
    };

    const handleMobileNavClick = () => {
        isOpen = false;
    };
</script>

<nav  class="bg-[#F5EFE6] px-2 md:px-6 py-4 fixed w-full z-10 overflow-hidden h-[88px]">
    <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center">
            <img src="/logo.png" alt="Logo" class="h-8 md:h-11" />
        </a>

        <!-- Menu -->
        <ul class="hidden md:flex space-x-6 text-[#5A4635] font-medium items-center">
            <li>
                <a
                    href="/"
                    class="hover:text-blue-600 text-[16px] font-raleway text-base leading-6 text-center"
                    style="animation-duration: 0ms; text-underline-position: from-font;"
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    href="/service"
                    class="hover:text-blue-600 text-[16px] font-raleway text-base leading-6 text-center"
                    style="animation-duration: 0ms; text-underline-position: from-font;"
                >
                    Service
                </a>
            </li>
            <li>
                <a
                    href="/portfolio"
                    class="hover:text-blue-600 text-[16px] font-raleway text-base leading-6 text-center"
                    style="animation-duration: 0ms; text-underline-position: from-font;"
                >
                    Portfolio
                </a>
            </li>
            <li>
                <a
                    href="/about"
                    class="hover:text-blue-600 text-[16px] font-raleway text-base leading-6 text-center"
                    style="animation-duration: 0ms; text-underline-position: from-font;"
                >
                    About Us
                </a>
            </li>
            <li>
                <a
                    href="/contactus"
                    class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 text-[16px] font-raleway font-medium leading-6 text-center"
                    style="animation-duration: 0ms;"
                >
                    Contact Us
                </a>
            </li>
        </ul>

        <!-- Hamburger/Close Icon -->
        <button
            class="block md:hidden text-blue-600 focus:outline-none"
            on:click={toggleMenu}
        >
            {#if isOpen}
            <CircleX color="#5A4635" size="24" />
            {:else}
                <img src="/icons/menu.png" alt="menu">
            {/if}
        </button>
    </div>

    <!-- Mobile Menu -->
    {#if isOpen}
        <ul class="bg-[#F5EFE6] px-10 font-alice text-[#5A4635] font-semibold text-left space-y-4 p-4 md:hidden">
            <li>
                <a
                    href="/"
                    on:click={handleMobileNavClick}
                    class="block hover:text-blue-600 text-[16px] font-raleway font-medium leading-6 text-left"
                    style="animation-duration: 0ms; text-underline-position: from-font;"
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    href="/service"
                    on:click={handleMobileNavClick}
                    class="block hover:text-blue-600 text-[16px] font-raleway font-medium leading-6 text-left"
                    style="animation-duration: 0ms; text-underline-position: from-font;"
                >
                    Service
                </a>
            </li>
            <li>
                <a
                    href="/portfolio"
                    on:click={handleMobileNavClick}
                    class="block hover:text-blue-600 text-[16px] font-raleway font-medium leading-6 text-left"
                    style="animation-duration: 0ms; text-underline-position: from-font;"
                >
                    Portfolio
                </a>
            </li>
            <li>
                <a
                    href="/about"
                    on:click={handleMobileNavClick}
                    class="block hover:text-blue-600 text-[16px] font-raleway font-medium leading-6 text-left"
                    style="animation-duration: 0ms; text-underline-position: from-font;"
                >
                    About Us
                </a>
            </li>
            <li>
                <a
                    href="/contactus"
                    on:click={handleMobileNavClick}
                    class="block hover:text-blue-600 text-[16px] font-raleway font-medium leading-6 text-left"
                    style="animation-duration: 0ms; text-underline-position: from-font;"
                >
                    Contact Us
                </a>
            </li>
        </ul>
    {/if}
</nav>
