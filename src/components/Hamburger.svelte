<script lang="ts">
    export let value = false;
    export let desktop = false;
    export let mobile = false;

    $: desktopOnly = desktop && !mobile;
    $: mobileOnly = mobile && !desktop;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="hamburger"
    class:open={value}
    class:desktop={desktopOnly}
    class:mobile={mobileOnly}
    on:click={() => (value = !value)}
>
    <div class="hamburger--burger" />
</div>

<style lang="scss">
    $burgerWidth: 24px;
    $burgerHeight: 4px;
    $burgerMargin: 4px;
    $burgerColor: #f56a6a;

    .hamburger {
        height: 100%;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        border: none;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &--burger {
            width: $burgerWidth;
            height: $burgerHeight;
            background-color: $burgerColor;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
            transition: all 0.5s ease-in-out;

            &::before,
            &::after {
                content: "";
                position: absolute;
                width: $burgerWidth;
                height: $burgerHeight;
                background: $burgerColor;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
                transition: all 0.5s ease-in-out;
            }

            &::before {
                transform: translateY(-$burgerHeight - $burgerMargin);
            }
            &::after {
                transform: translateY($burgerHeight + $burgerMargin);
            }
        }

        &.open &--burger {
            background: transparent;
            box-shadow: none;

            &::before {
                transform: rotate(45deg);
            }

            &::after {
                transform: rotate(-45deg);
            }
        }
    }

    @media screen and (min-width: 849px) {
        .hamburger {
            &.desktop {
                opacity: 1;
            }

            &.mobile {
                opacity: 0;
            }
        }
    }

    @media screen and (max-width: 850px) {
        .hamburger {
            margin-left: 2rem;

            &.desktop {
                opacity: 0;
            }

            &.mobile {
                opacity: 1;
            }
        }
    }
</style>
