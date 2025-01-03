<script>
  export let title = "";
  export let subtitle = "";
  export let image = "";
</script>

<a href="/portfolio-details" class="block">
  <div class="rounded-lg overflow-hidden">
      <!-- Image Section -->
      <div class="overflow-hidden">
          <img 
              src={image} 
              alt={title} 
              class="w-full object-cover transform transition-transform duration-300 hover:scale-[1.03]" 
          />
      </div>

      <!-- Content Section -->
      <div class="p-4 text-center">
          <h3 class="text-lg font-normal font-raleway text-[#5A4635]">{title}</h3>
          <p class="font-normal text-sm font-raleway text-[#6A6866]">{subtitle}</p>
      </div>
  </div>
</a>
