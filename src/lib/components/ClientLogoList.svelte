<script>
    const clients = [
        {
            image: '/images/ClientMZ/1.svg',
            title: 'Perlis State Legislative Assembly',
        },
        {
            image: '/images/ClientMZ/2.svg',
            title: 'Kedah State Legislative Assembly',
        },
        {
            image: '/images/ClientMZ/3.svg',
            title: 'Jabatan Kerja Raya',
        },
        {
            image: '/images/ClientMZ/4.svg',
            title: 'Forest Research Institute Malaysia',
        },
        {
            image: '/images/ClientMZ/5.svg',
            title: 'Maxis Communication',
        },
        {
            image: '/images/ClientMZ/6.svg',
            title: 'UDA Holdings',
        },
        {
            image: '/images/ClientMZ/7.svg',
            title: 'Puspakom',
        },
        {
            image: '/images/ClientMZ/8.svg',
            title: 'The Malaysian Insurance Institute',
        },
        {
            image: '/images/ClientMZ/9.svg',
            title: 'Cypark Resources Berhad',
        },
        {
            image: '/images/ClientMZ/10.svg',
            title: 'Hotel Maluri',
        },
        {
            image: '/images/ClientMZ/11.svg',
            title: 'EDC Hotel Kuala Lumpur',
        },
        {
            image: '/images/ClientMZ/12.svg',
            title: 'Ras Niaga Sdn Bhd',
        }
    ]
  </script>
  
 
  

  <section class="py-20 px-[5%]">
    <div class="max-w-[1300px] mx-auto">
      <h1 class="text-3xl font-bold text-center mb-12">Among Past Clients</h1>
      <div class="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {#each clients as item}
          <div class="flex flex-col items-center gap-4">
            <img
              src="{item.image}"
              alt="{item.title}"
              class=" object-cover w-[300px] h-[300px]"
            />
            <!-- <p class="text-sm font-medium">{item.title}</p> -->
          </div>
        {/each}
      </div>
    </div>
  </section>