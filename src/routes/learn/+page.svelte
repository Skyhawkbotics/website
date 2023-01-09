<script lang="ts">
    import { isMenuOpen } from "$stores/menu";

    import robot from "$assets/robot.jpeg";
</script>

<svelte:head>
    <title>About Us | Hawkbot1cs</title>
</svelte:head>

<p class="section-title" class:open={$isMenuOpen}>About Us</p>

<section id="about" class="about" class:open={$isMenuOpen}>
    <img src={robot} alt="robot" />

    <p class="about--text">
        We are located at Southridge High School, in Beaverton, Oregon. At Southridge Robotics Club,
        we are a team of friends who are just getting started together in the field of robotics and
        programming, trying to learn from each other. At Southridge Robotics Club, we are piecing
        together our minds, to build robots and simply put time and effort into something that we
        all enjoy.
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
