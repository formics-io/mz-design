<script lang="ts">
    import { Play } from 'lucide-svelte';
    let videoElement: HTMLVideoElement;
    let isPlaying = false;

    function togglePlay() {
        if (videoElement.paused) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    }

    // Handle clicks directly on the video
    function handleVideoClick() {
        togglePlay();
    }
</script>

<section class=" py-20">
    <div class="mx-auto max-w-6xl px-4">
        <div class="mx-auto mb-12 max-w-3xl text-center">
            <h2 class="mb-6 font-alice text-4xl  lg:text-5xl">Our Work in Action</h2>
            <p class="leading-relaxed font-raleway">
                Experience our design journey through a showcase of projects that blend creativity,
                functionality, and innovation. Watch the video to see how we bring spaces to life.
            </p>
        </div>

        <div class="group relative overflow-hidden rounded-2xl">
            <iframe style="height: 500px; width:100%" src="https://www.youtube.com/embed/_k8u2PE_7jE?si=VSSYtwIVOsA5e95h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <!-- {#if !isPlaying}
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/30">
                <button
                    on:click={togglePlay}
                    class="flex h-16 w-16 transform items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                    aria-label="Play video"
                >
                    <Play class="ml-1 h-8 w-8 " />
                </button>
            </div>
            {/if} -->
        </div>
    </div>
</section>