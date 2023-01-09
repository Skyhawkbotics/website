<script lang="ts">
    import { base } from "$app/paths";
    import { isMenuOpen } from "$stores/menu";
    import Hamburger from "./Hamburger.svelte";
</script>

<div class="header-wrapper" class:open={$isMenuOpen}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <Hamburger bind:value={$isMenuOpen} />

    <div class="header">
        <a href="{base}/" class="header--logo"><strong>Hawkbotics</strong> 20790</a>

        <div class="header--icons">
            <a href="https://www.twitter.com/SkyHawk03350366" target="_blank" rel="noreferrer"
                ><i class="fa-brands fa-twitter" /></a
            >

            <a
                href="https://www.facebook.com/profile.php?id=100075278091954"
                target="_blank"
                rel="noreferrer"><i class="fa-brands fa-facebook-f" /></a
            >

            <a href="https://www.instagram.com/hawk.botics/" target="_blank" rel="noreferrer"
                ><i class="fa-brands fa-instagram" /></a
            >
        </div>
    </div>
</div>

<style lang="scss">
    @import "$styles/variables";

    .header-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        height: 6rem;
        width: calc(100% - 4rem);

        margin-top: 1rem;
        padding: 0.25rem 2rem;

        transition: padding-left 0.5s ease, padding-right 0.5s ease, width 0.5s ease;

        &:not(.open) {
            padding-left: 0;
            padding-right: 0;

            width: calc(100% - 2rem);
        }
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: calc(100% - 6rem);
        margin: 0 3rem;
        height: 6rem;

        border-bottom: 5px solid $headerBorder;

        &--icons {
            a {
                color: $headerIcon;
                font-size: 14pt;
                margin: 0 0.5rem;
                transition: color 0.5s ease;

                &:last-of-type {
                    margin-right: 0;
                }

                &:hover {
                    color: $headerIconHover;
                }
            }
        }

        &--logo {
            font-family: "Roboto Slab", serif;
            color: $headerLogoText;
            text-decoration: none;
            font-size: 13pt;

            strong {
                color: $headerLogoTextStrong;
            }
        }
    }
</style>
