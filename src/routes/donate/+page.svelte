<script lang="ts">
    import { isMenuOpen } from "$stores/menu";

    import pic11 from "$assets/pic11.jpg";
</script>

<svelte:head>
    <title>Donate | Hawkbot1cs</title>
</svelte:head>

<p class="section-title" class:open={$isMenuOpen}>Donate</p>

<section id="donate" class="donate" class:open={$isMenuOpen}>
    <p class="donate--text">
        We are always in need of donations! If you would like to support our club, please visit <a
            href="https://bit.ly/RoboticsDonate"
            target="_blank"
            rel="noreferrer">our InTouch page, click "CLICK HERE TO MAKE A DONATION" at the bottom of the page, select "Southridge High School", "Donation for Robotics" and select the amount you would like to donate. </a
        >.
    </p>

    <img src=/src/assets/donate.png alt="Fill in these values, and choose the amount you would like to donate." />
</section>

<br /><br />

<style lang="scss">
    @import "$styles/variables";

    .donate {
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

            a {
                color: $pageTextHighlight;
                text-decoration-style: dotted;
                text-underline-offset: 3px;
            }
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
