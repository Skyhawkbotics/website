<script lang="ts">
    import { base } from "$app/paths";

    export let name: string;
    export let path: string;
    export let icon: string | undefined = undefined;

    $: url = path.startsWith("http") ? path : `${base}${path}`;
</script>

<a class="sidebar-item" href={url}>
    {#if icon}
        <i class={icon} />
    {/if}

    {name}
</a>

<style lang="scss">
    @import "$styles/variables";

    .sidebar-item {
        width: 100%;
        padding: 0.5rem 0;
        color: $sidebarText;
        text-decoration: none;
        text-transform: uppercase;
        font-family: "Roboto Slab", serif;
        font-size: 9pt;
        font-weight: 400;
        letter-spacing: 0.075em;
        transition: color 0.5s ease;

        &:hover {
            color: $sidebarTextHover;
        }
    }
</style>
