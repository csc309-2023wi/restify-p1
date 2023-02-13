# Restify

An online marketplace where users can search, book, comment and rate short term lodging experiences. University of Toronto CSC309 project.

## Demo Pages

**Main Restify webpage:** https://restify-p1.pages.dev

**Login and signup page:** https://restify-p1.pages.dev/auth.html

**Property creation modal (Host):** https://restify-p1.pages.dev/modal-host-create.html

**Existing property modal (Host):** https://restify-p1.pages.dev/modal-host-existing.html

**Unbooked property modal (User):** https://restify-p1.pages.dev/modal-user-unbooked.html

**Booked property modal (User):** https://restify-p1.pages.dev/modal-user-booked.html

## Local Development

To start a simple HTTP server in the repository for development purposes, run the following Python script:

```bash
python3 dev.py
```

This will start an HTTP server at port `8000`, and open a new tab in your default web browser at http://localhost:8000.

> You must view the website through an HTTP server, because browsers' CORS policy does not allow loading arbitrary files from disk.

## Templating Through Mustache.js

This project uses [Mustache.js](https://github.com/janl/mustache.js) for templating in Phase 1. It allows different components of the frontend to be developed independently, and composed together when needed. Read the [documentation](https://github.com/janl/mustache.js#mustachejs---logic-less-mustache-templates-with-javascript) to learn more.

To add further child templates in this project, create the template file under the [`templates/`](templates/) directory, and add an association inside the `templateChildrenUrls` object within [`js/templates.js`](js/templates.js).

After that association has been added, you can include the child template in any page that loads `templates.js`, has a body tag with `id="body" onload="renderTemplates();"`, and a `<script>` tag with `id="mustache"`. The four main webpages have already been set up that way.

To include the child template, use its identifier that you have chosen in creating the association above, enclosed in triple curly braces, like so:

```html
{{{ childIdentifier }}}
```

When the page loads, it will replace the triple curly braces syntax with the contents of the child template file.
