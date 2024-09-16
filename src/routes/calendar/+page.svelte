<script lang="ts">
    import { isMenuOpen } from "$stores/menu";

    import robot from "$assets/robot.jpeg";
</script>
<p class="about--text">Part of achieving our mission is reaching as many people in our community as we can. The best way for us to do this is through community events and inviting the community to watch us and participate in our robotics tournaments. Below you will find an updated calendar of our events. Be sure to keep a close eye on it as the details may change. We hope to see you around!
</p>
<iframe src="https://calendar.google.com/calendar/embed?src=b0fb96e1294f994fa5f7c72877c1ca5e7976e0a7bd38df8d91902371f1756aba%40group.calendar.google.com&ctz=UTC" style="border: 0" width="1000" height="750" frameborder="0" scrolling="no"></iframe>

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
