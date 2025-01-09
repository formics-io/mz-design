<script>
	import PortfolioCard from "$lib/components/PortfolioCard.svelte";

  
    const portfolioItems = [
      {
        title: "Event Space",
        subtitle: "Kota Bharu",
        image: "/images/Projects/1-EventSpace/1.png",
      },
      {
        title: "Twelve, Taman Ira",
        subtitle: "perlis",
        image: "/images/Projects/2-Taman/1.png",
      },
      {
        title: "Istana Bukit Malut",
        subtitle: "Langkawi",
        image: "/images/Projects/3-Istana/1.png",
      },
      {
        title: "Corporate Office at Phileo Damansara",
        subtitle: "Petaling jaya",
        image: "/images/Projects/4-Corporate/1.png",
      },
      {
        title: "The MET Corporate Towers",
        subtitle: "KL",
        image: "/images/Projects/5-TheMet/1.png",
      },
      {
        title: "Istana DYTM Raja Muda Perlis",
        subtitle: "arau",
        image: "/images/Projects/6-IstanaArau/1.png",
      },
      
    ];
  </script>
  
  <section class=" px-[5%]">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h2 class="text-5xl font-normal font-alice  mb-12">Portfolio</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each portfolioItems as item}
          <PortfolioCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        {/each}
      </div>
    </div>
  </section>
  