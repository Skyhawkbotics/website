## Dev Readme

This will provide you with a definition of the folder structure.

### Notes

-   This app is build with SvelteKit.
-   Please make sure that the app is either using the static or cloudflare adapter.
-   Please use PNPM to install dependencies.

### /node_modules

-   You can pretty much ignore this folder. All it does is house the components that power the app.
-   If it isn't there, run `pnpm install` with your command line. Before running, make sure you have [Node.js](https://www.nodejs.org/) (version 16) installed, and you've installed yarn with `npm install --global pnpm`.

### /src/assets

-   This is the assets folder.
-   In import statements, refer to this as "$assets".
-   To use stuff in this folder, you need to import it like so:

```svelte
<script lang="ts">
    import somePicture from "$assets/somePicture.png";
</script>

<img src={somePicture} />
```

### /src/routes

-   This is the folder where the pages are stored.
-   These are written in a coding language called `Svelte`.
-   Svelte's syntax is like HTML, however it is actually a superset of JavaScript called `JSX`.
-   Learn more here: https://svelte.dev/
-   We use Svelte with TypeScript, so we can have type checking in the app.

```svelte
<script lang="ts">
    const message = "Hello,";
</script>

<p>{message} world!</p>

<!--
    Outputs:

    <p>Hello, world!</p>
-->
```

### /src/components

-   This is the components folder.
-   These are referenced in the pages to reduce code duplication.

```svelte
<!-- /src/components/Hi.svelte -->

<script lang="ts">
    export let message: string;
</script>

<p>{message}</p>

<style lang="scss">
    p {
        color: red;
        font-size: 14pt;
        font-family: Helvetica;
    }
</style>

<!-- /src/routes/+page.svelte -->

<script lang="ts">
    import Hi from "$components/Hi.svelte";
</script>

<Hi message="Hello, world!" />
```
