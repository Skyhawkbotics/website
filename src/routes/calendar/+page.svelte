<script lang="ts">
    import { isMenuOpen } from "$stores/menu";

    import robot from "$assets/robot.jpeg";
</script>

<svelte:head>
    <title>Calendar | Hawkbot1cs</title>
</svelte:head>

<p class="about--text">Part of achieving our mission is reaching as many people in our community as we can. The best way for us to do this is through community events and inviting the community to watch us and participate in our robotics tournaments. Below you will find an updated calendar of our events. Be sure to keep a close eye on it as the details may change. We hope to see you around!
</p>
<iframe src="https://embed.styledcalendar.com/#26Y3g6u0smOUcKuhVfpm" title="Styled Calendar" class="styled-calendar-container" style="width: 95%; height: 100%; border: none;" data-cy="calendar-embed-iframe"></iframe>


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
            margin-left: 5rem;
            margin-right: 5rem;
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
    .section-heading {
        font-family: "Open Sans", sans-serif;
        font-size: 20pt;
        font-weight: bold;
        color: $pageText;
        margin-left: 5rem;

        &:not(.open) {
            margin-left: 3rem;
        }
    }
</style>
