## Templates Folder

### Overview
This folder contains resources to make new pages and sidebar components.

### Files
-  `elements.html`: Contains a list of formatting elements which can be used in other pages. This file was included with the HTML5UP template.
-  `rsidebar.html`: Contains a template page with a sidebar.
-  `sidebarcontent.html`: Contains a template sidebar component, which can be shared across pages with a sidebar.
-  `xsidebar.html`: Contains a template page without a sidebar.

### Usage

#### Create a Page with Sidebar
1. Create a folder in `src` with the desired URL in the title. You can also put the new folder in another folder if you wish.
2. Copy `rsidebar.html` and paste it into your new folder
3. Rename `rsidebar.html` to `index.html`
4. If you put your new folder in an existing folder, modify the `base href` property. You will need to add `../` for each layer.
5. In the sidebar section, replace `Templates/sidebarcontent.html` with a path to your desired sidebar component.
6. If you wish to add another sidebar component, paste the following underneath the last sidebar component and replace `sidebar3-placeholder` with another number if needed to ensure there are no conflicts between components:
   
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
