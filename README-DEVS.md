## Dev Readme

This will provide you with a definition of the folder structure, best development practices, and dev-related changes in version 2.

*This guide is not complete yet.*

### V2 Information

-   This is Version 2 of the Hawkbot1cs website
-   V2 is easier to edit and change using basic `html`, as this version has removed `.svelte`.
-   New pages can now be created and ready to push in minutes by duplicating and modifying an `.html` file in `src/routes/Templates`.
-   The navbar and footer can now be modified site-wide from a single file.

### Development Best Practices

If you'd like to add a feature to the website, please check if there is an existing branch or pull request already for the feature you are looking to add. Doing so helps prevent merge conflicts and redundant work.

### /src/assets

-   This is the assets folder.

### /src/routes

-   This is the folder where the pages are stored.
-   All webpages should be called  `index.html `


### /src/components

-   This is the components folder.
-   These are referenced in the pages to reduce code duplication.
