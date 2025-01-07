<script>
    const clients = [
        {
            image: '/images/ClientMZ/1.jpeg',
            title: 'Perlis State Legislative Assembly',
        },
        {
            image: '/images/ClientMZ/2.jpeg',
            title: 'Kedah State Legislative Assembly',
        },
        {
            image: '/images/ClientMZ/3.jpeg',
            title: 'Jabatan Kerja Raya',
        },
        {
            image: '/images/ClientMZ/4.jpeg',
            title: 'Forest Research Institute Malaysia',
        },
        {
            image: '/images/ClientMZ/5.jpeg',
            title: 'Maxis Communication',
        },
        {
            image: '/images/ClientMZ/6.jpeg',
            title: 'UDA Holdings',
        },
        {
            image: '/images/ClientMZ/7.jpeg',
            title: 'Puspakom',
        },
        {
            image: '/images/ClientMZ/8.jpeg',
            title: 'The Malaysian Insurance Institute',
        },
        {
            image: '/images/ClientMZ/9.jpeg',
            title: 'Cypark Resources Berhad',
        },
        {
            image: '/images/ClientMZ/10.jpeg',
            title: 'Hotel Maluri',
        },
        {
            image: '/images/ClientMZ/11.jpeg',
            title: 'EDC Hotel Kuala Lumpur',
        },
        {
            image: '/images/ClientMZ/12.jpeg',
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