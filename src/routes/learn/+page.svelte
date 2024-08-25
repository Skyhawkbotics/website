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
Founded as a school club in 2021, Hawkbot1cs has become more than your average robotics team. Originally intended to be a place where students of Southridge High School could hang out, build robots, and compete in the First Tech Challenge, we are now a 501(c)(3) nonprofit and our purpose has now expanded to providing STEM (science, technology, engineering, and mathematics) opportunities for youth across our amazing Beaverton community! You can find us at Southridge High School, Mountainside High School, at science fairs across south Beaverton, at events in our local community, at robotics competitions, and online here and on our social media (@hawk.botics on Instagram)! It’s harder to miss us than find us! However, we could not do this without your generous support. Please consider donating now so that we can continue to inspire the next generation of thinkers and dreamers. Thank you in advance!
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
