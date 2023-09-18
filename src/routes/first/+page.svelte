<script lang="ts">
    import { isMenuOpen } from "$stores/menu";

    <!-- import donate from "$assets/donate.png"; -->
</script>

<svelte:head>
    <title>What is FIRST? | Hawkbot1cs</title>
</svelte:head>

<p class="section-title" class:open={$isMenuOpen}>What is FIRST?</p>

<section id="FIRST" class="FIRST" class:open={$isMenuOpen}>
    <p class="FIRST--text">
        The For Inspiration and Recognition of Science and Technology (FIRST) organization is dedicated to inspiring young people to become leaders in science and technology through fun and engaging challenges. Each year, the FIRST team designs a game for each level of their programs in which teams must learn and apply a large variety of engineering, science, and technology skills, while also becoming skilled communicators, team-members, and leaders. The FIRST program was founded as a 501(c)(3) nonprofit by Dean Kramer, a lifelong inventor, entrepreneur, and advocate for science, in 1989 and has grown to be the most recognized STEM (science, technology, engineering, and math) program for kids in the world! 
    </p>

   <!-- <img src={donate} alt="Fill in <--these values, and choose the amount you would like to donate." />
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
    } -->

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
