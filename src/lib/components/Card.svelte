<script lang="ts">
  export let title: string = "";
  export let description: string = "";
  export let image: string = "";
  export let features: string[] = [];
  export let reverse: boolean = false; 
</script>

<div class="flex flex-col lg:flex-row items-center gap-8 p-6" class:lg:flex-row-reverse={reverse}>
  <img 
    src={image} 
    alt={title} 
    class="w-full lg:w-1/2 rounded-lg object-cover"
  />
  <div class="flex-1 py-[70px]">
    <h2 class="text-4xl  font-alice mb-4">{title}</h2>
    <p class=" font-raleway mb-6 text-[20px] font-medium	">{description}</p>
    <div class="space-y-3">
      {#each features as feature}
        <div class="flex items-center gap-2">
         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20.1386C7.78101 20.1386 4.36108 16.7187 4.36108 12.4997C4.36108 8.28077 7.78101 4.86084 12 4.86084C16.2189 4.86084 19.6389 8.28077 19.6389 12.4997C19.6389 16.7187 16.2189 20.1386 12 20.1386ZM11.2384 15.5553L16.6391 10.1538L15.5589 9.07369L11.2384 13.395L9.07733 11.234L7.9972 12.3141L11.2384 15.5553Z" fill="#564E48"/>
</svg>

          <span class="text-[18px] font-raleway  font-medium">{feature}</span>
        </div>
      {/each}
    </div>
  </div>
</div>
