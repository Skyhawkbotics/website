<script lang="ts">
    import "$styles/global.scss";
    import Sidebar from "$components/Sidebar.svelte";
    import Header from "$components/Header.svelte";
    import { isMenuOpen } from "$stores/menu";
</script>

<div class="wrapper">
    <Sidebar />

    <div class="content" class:open={$isMenuOpen}>
        <Header />

        <slot />
    </div>
</div>

<style lang="scss">
    .wrapper {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;

        .content {
            width: calc(100% - 19.75rem);
            height: 100%;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            transition: width 0.5s ease;

            overflow-y: scroll;

            &:not(.open) {
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 850px) {
        .wrapper {
            .content {
                width: 100%;
            }
        }
    }
</style>
