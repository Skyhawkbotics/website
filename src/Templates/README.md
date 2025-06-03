## Templates Folder

### Overview
This folder contains resources to make new pages and sidebar components.

### Files
-  `elements.html`: Contains a list of formatting elements which can be used in other pages. This file was included with the HTML5UP template.
-  `rsidebar.html`: Contains a template page with a sidebar.
-  `sidebarcontent.html`: Contains a template sidebar component, which can be shared across pages with a sidebar.
-  `xsidebar.html`: Contains a template page without a sidebar.

### Usage

#### Create a Page
1. Create a folder in `src` with the desired URL in the title. You can also put the new folder in another folder if you wish.
2. Copy `rsidebar.html` or `xsidebar` and paste it into your new folder
3. Rename the file to `index.html`
4. If you put your new folder in an existing folder, modify the `base href` property. You will need to add `../` for each layer.
5. Make your desired changes. Use `elements.html` to insert preformatted elements in your new page if needed.

#### Use a Sidebar Component
Follow these instructions if you used `rsidebar.html`
1. In the sidebar section, replace `Templates/sidebarcontent.html` with a path to your desired sidebar component.
2. If you wish to add another sidebar component, paste the following underneath the last sidebar component and replace `sidebar3-placeholder` with another number if needed to ensure there are no conflicts between components.
   
  ```
<hr />
  <section>
    <div id="sidebar3-placeholder"></div>

    <script>
      $("#sidebar3-placeholder").load("Templates/sidebarcontent.html", function() {
        $().dropotron({
          alignment: 'center',
          hideDelay: 300
        });
      });
    </script>
  </section>
```

#### Create a Sidebar Component

1. Copy `sidebarcontent.html` into `/src/components`.
2. Rename your file to something else.
3. Edit the title, body text, images, and buttons as needed.

#### Use `elements.html`
Assuming your copy of the website is hosted at `localhost:5500`, navigate to: `localhost:5500/src/Templates/elements.html` in your web browser.
If you see a component you want to use, use the browser's inspect feature to locate the code. Then, go to your IDE, find the code in `elements.html`, and paste it into your page. You can then modify the element to suit your needs.