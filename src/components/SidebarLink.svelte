<script lang="ts">
    export let text: string;
    export let url: string;
    export let icon: string | undefined = undefined;
</script>

<a class="sidebar-link" href={url}>
    {#if icon}
        <i class={icon} />
    {/if}

    <p>{text}</p>
</a>

<style lang="scss">
    @import "$styles/variables";

    .sidebar-link {
        width: calc(100% - 1rem);
        padding: 0.25rem 0.5rem;
        text-decoration: none;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        i {
            color: $sidebarIcon;
            font-size: 16pt;
            margin-right: 5%;
        }

        p {
            color: $sidebarTextDark;
            text-decoration: underline;
            text-decoration-style: dotted;
            text-underline-offset: 4px;
            font-family: "Open Sans", sans-serif;
            font-size: 9pt;
            letter-spacing: 0.075em;
            transition: color 0.5s ease;

            &:hover {
                color: $sidebarTextHover;
            }
        }
    }
</style>
