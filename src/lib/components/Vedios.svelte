<script lang="ts">
    import { Play } from 'lucide-svelte';
    
    interface Video {
        id: number;
        title: string;
        src: string;
        thumbnail: string;
    }

    const videos: Video[] = [
        { id: 1, title: 'Video 1', src: '/videos/classical (1).mp4', thumbnail: '/images/video.png' },
        { id: 2, title: 'Video 2', src: '/videos/classical (1).mp4', thumbnail: '/images/video.png' },
        { id: 3, title: 'Video 3', src: '/videos/classical (1).mp4', thumbnail: '/images/video.png' },
        { id: 4, title: 'Video 4', src: '/videos/classical (1).mp4', thumbnail: '/images/video.png' }
    ];

    let videoElements: { [key: number]: HTMLVideoElement } = {};
    let isPlaying: { [key: number]: boolean } = {};

    function togglePlay(id: number): void {
        if (videoElements[id].paused) {
            videoElements[id].play();
            isPlaying[id] = true;
        } else {
            videoElements[id].pause();
            isPlaying[id] = false;
        }
    }
</script>

<section class="bg-[#f8f4e7] py-12">
    <div class="mx-auto max-w-6xl px-4 text-center">
        <h2 class="mb-8 text-2xl md:text-3xl font-bold text-[#6b4c35]">
            Videos Featuring Principal IDr Monie Mohariff
        </h2>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {#each videos as video}
                <div class="group relative overflow-hidden rounded-2xl" on:click={() => togglePlay(video.id)}>
                    <video 
                        bind:this={videoElements[video.id]}
                        src={video.src}
                        poster={video.thumbnail}
                        class="h-auto w-full rounded-2xl object-cover cursor-pointer"
                        preload="auto"
                        on:play={() => isPlaying[video.id] = true}
                        on:pause={() => isPlaying[video.id] = false}
                    >
                        <source src={video.src} type="video/mp4">
                    </video>

                    {#if !isPlaying[video.id]}
                    <div class="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/30">
                        <button
                            class="flex h-16 w-16 transform items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                            aria-label="Play video"
                        >
                            <Play class="ml-1 h-8 w-8 text-[#5C4937]" />
                        </button>
                    </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>
