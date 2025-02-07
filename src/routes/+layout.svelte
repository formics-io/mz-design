<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex min-h-screen flex-col mx-auto overflow-hidden">
	<Navbar />
	
	<slot />
	
	<Footer />
</div>
