<script lang="ts">
    import { isMenuOpen } from "$stores/menu";

</script>

<svelte:head>
    <title>Electronics Drive | Hawkbot1cs</title>
</svelte:head>

<p class="section-title" class:open={$isMenuOpen}>Electronics Drive</p>

<section id="about" class="about" class:open={$isMenuOpen}> 
    <p class="about--text">
        We are hosting a Electronics Drive! We accept unwanted computers, CPUs, GPUs, circuit boards, network cards, cell phones, and Li - ion batteries. If you have something you would like to recycle, Email 478792@bsd48.org the pickup location, a photo of the electronic components, and when you’re available. We will recycle these electronics, and get money for our competition fee, and equitment for next years season.  
    </p>
</section>

<br /><br />

<style lang="scss">
    @import "$styles/variables";

    .about {
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

        &--text {
            color: $pageTextDark;
            font-family: "Open Sans", sans-serif;
            font-size: 11pt;
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
