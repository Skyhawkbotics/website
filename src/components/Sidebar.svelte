<script lang="ts">
    import { isMenuOpen } from "$stores/menu";
    import { email, emailLink, phone, phoneLink } from "$util/constants";
    import Hamburger from "./Hamburger.svelte";
    import SidebarItem from "./SidebarItem.svelte";
    import SidebarLink from "./SidebarLink.svelte";

    const items = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About Us",
            path: "/learn",
        },
        {
            name: "Donate",
            path: "/donate",
        },
    ];
</script>

<div class="sidebar" class:open={$isMenuOpen}>
    <div class="sidebar--title">
        <p class="sidebar--title--text">Menu</p>

        <Hamburger bind:value={$isMenuOpen} mobile={$isMenuOpen} />
    </div>

    <br /><br />

    <div class="sidebar--section">
        {#each items as item, index}
            <SidebarItem {...item} />

            {#if index + 1 != items.length}
                <hr class="sidebar--section--divider" />
            {/if}
        {/each}
    </div>

    <br /><br />

    <hr class="sidebar--section--divider" />

    <br /><br />

    <p class="sidebar--title--text">Get in Touch</p>

    <br />

    <SidebarLink text={email} url={emailLink} icon="fa-solid fa-envelope" />

    <hr class="sidebar--section--divider" />

    <SidebarLink text="{phone} (Text Only)" url={phoneLink} icon="fa-solid fa-phone-flip" />

    <br /><br />

    <hr class="sidebar--section--divider" />

    <br /><br />

    <p class="sidebar--copyright">
        &copy; Hawkbot1cs. All rights reserved. Original design by
        <a href="https://html5up.net" target="_blank" rel="noreferrer">HTML5 UP</a>.
    </p>
</div>

<style lang="scss">
    @import "$styles/variables";

    .sidebar {
        // Is actually: 19.75rem (with padding)

        width: 17.25rem;
        height: calc(100% - 2.5rem);
        padding: 1.25rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        background-color: $sidebarBackground;

        transition: transform 0.5s ease, width 0.5s ease, opacity 0.5s ease;

        &:not(.open) {
            transform: translateX(-19.75rem);
            width: 0;
            opacity: 0;
        }

        &--title {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            width: 100%;

            &--text {
                color: $sidebarText;
                font-family: "Roboto Slab", serif;
                font-size: 14pt;
                margin: 0;
                font-weight: bold;
                border-bottom: 3px solid $sidebarBorder;
                padding: 0 1rem 0.25rem 0;
            }
        }

        &--section {
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            &--divider {
                width: 100%;
                height: 1px;
                border: none;
                background-color: $sidebarDivider;
            }
        }

        &--copyright {
            color: $sidebarTextDark;
            font-size: 9pt;
            font-family: "Open Sans", sans-serif;

            a {
                color: inherit;
                text-decoration: underline;
                text-decoration-style: dotted;
                text-underline-offset: 3px;
            }
        }
    }

    @media screen and (max-width: 850px) {
        .sidebar {
            position: absolute;
            z-index: 1;
        }
    }
</style>
