<script lang="ts">
    import { isMenuOpen } from "$stores/menu";

    import robot from "$assets/robot.jpeg";
</script>

<svelte:head>
    <title>Get Involved! | Hawkbot1cs</title>
</svelte:head>

<p class="section-title" class:open={$isMenuOpen}>How to Join Us</p>

<section id="about" class="about" class:open={$isMenuOpen}>
    <img src={robot} alt="robot" />

    <p class="about--text">
        Are you a student (in 7 through 12th grade) interested in STEM, robotics, team management, or in learning how to work well as a part of an awesome team of leaders, visionaries, and friends? Then you would be perfect to join our robotics team! We are always looking for new members and would love to have you. Please contact skyhawkbotics@gmail.com for more information about our program, and we look forward to seeing you soon!
    </p>
    <p class="about--text">
        If you are interested in mentoring our robotics team or volunteering to help promote and expand the vision and outreach of our nonprofit, we would love to have you on the team. We are always looking for technically skilled mentors who have experience in the STEM world, as well as mentors to help with the organization and management of the team. Please reach out to us at skyhawkbotics@gmail.com and we can’t wait to meet you!
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
