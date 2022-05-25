## Dev Readme

This will provide you with a definition of the folder structure.

### Notes

-   When I refer to `/` in a normal context, it means this folder. The one with `public` and `views` and all that stuff.
-   When I refer to `/` in a code snippet, I mean the folder called `public`.
-   If you see an error in the console, don't worry about it, if it happened after visiting a page. If you really are worried, contact me at **jacob1coder@gmail.com**.
-   What I mean by the console is the console that appears after starting the application.
-   To start the application, run `yarn start` with your command line. Head to **http://localhost:3030** to see it.
-   If the application is running on github pages (which it is all the time unless we turned it off for some reason), you'll see it at **https://skyhawkbotics.github.io/website/**.

### /node_modules

-   You can pretty much ignore this folder. All it does is house the components that power the app.
-   If it isn't there, run `yarn install` with your command line. Before running, make sure you have [Node.js](https://www.nodejs.org/) installed, and you've installed yarn with `npm install --global yarn`.

### /public

-   This is the assets folder. In the code, refer to it as "/". It is the root of the directory.
-   /public/assets/css/main.css becomes /assets/css/main.css on the web.
-   You can put anything in this folder that you want to be served on the web.

### /views

-   This is the folder where the pages are stored.
-   These are written in a coding language called **EJS**.
-   EJS's syntax is like HTML, but you can use some JavaScript expressions directly in it, using this formula:

```ejs
<%- console.log("Hello world!") %>
```

-   You can even use:

```ejs
<%- "Hello" %>
```

and it will render as the word, "Hello".

### /views/partials

-   This is the partial page folder.
-   To include a partial in a page in the "/views" directory, simply use:

```ejs
<%- include("partials/partial_name") %>
```

-   Make sure to not use the file extension, ".ejs".
-   These partials are also coded in **EJS**.
