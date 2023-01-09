<script lang="ts">
    import { onMount } from "svelte";
    import { isMenuOpen } from "$stores/menu";
    import pic11 from "$assets/pic11.jpg";
    import YTPlayer from "youtube-player/";

    let img: HTMLImageElement;

    const doRickRoll = async () => {
        if (!img) return;

        const div = document.createElement("div");
        img.replaceWith(div);

        const player = YTPlayer(div, {
            height: 480,
            width: 900,

            playerVars: {
                playsinline: 1,
                autoplay: 1,
            },
        });

        document.body.click();

        await player.loadVideoById("dQw4w9WgXcQ");
    };

    onMount(() => {
        setTimeout(doRickRoll, 5000);
    });
</script>

<svelte:head>
    <title>404 | Hawkbot1cs</title>
</svelte:head>

<p class="section-title" class:open={$isMenuOpen}>Error 404: Page Not Found</p>

<section id="error" class="error" class:open={$isMenuOpen}>
    <img src={pic11} alt="pic11" bind:this={img} />
</section>

<br /><br />

<style lang="scss">
    @import "$styles/variables";

    .error {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        margin: 0 5rem;
        width: calc(100% - 10rem);

        transition: width 0.5s ease, margin-left 0.5s ease;

        &:not(.open) {
            width: calc(100% - 8rem);
            margin-left: 3rem;
        }

        img {
            width: 100%;
            border-radius: 8px;
        }
    }

    .section-title {
        font-family: "Roboto Slab", serif;
        font-size: 40pt;
        font-weight: bold;
        color: $pageText;
        margin-left: 5rem;

        &:not(.open) {
            margin-left: 3rem;
        }
    }
</style>
