<script lang="ts">
    import { isMenuOpen } from "$stores/menu";

    import robot from "$assets/robot.jpeg";
</script>

<svelte:head>
    <title>Nonprofit Documents and Financial Information</title>
</svelte:head>

    <p class="about--text">
        As a IRS-recognized, 501(c)(3)-classified nonprofit, we are committed to a high level of transparency and accuracy when it comes to our documents and records. Below, you will find copies of our founding documents (Articles of Incorporation, bylaws, and Form 1023-EZ), a history of our Meeting Minutes, and our most recently filed Form 990. If you would like to request any other documents, please contact <a href={emailLink}>skyhawkbotics@gmail.com</a> and we’ll try to get back to you as soon as possible.
    </p>

  <p class="section-title" class:open={$isMenuOpen}>Documents</p>
    

  <p class="section-title" class:open={$isMenuOpen}>Financial Records</p>

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
