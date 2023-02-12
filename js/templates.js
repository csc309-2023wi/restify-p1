/* Template Identifier to File URL Mapping */
const templateChildrenUrls = {
    navContent: "templates/navbar.html",
    footerContent: "templates/footer.html",
    propertyCardGeneric: "templates/card_property_listing_generic.html",
    modalReference: "templates/modal_ref.html",
    modalHostCreate: "templates/modal_host_create.html",
    modalHostExisting: "templates/modal_host_existing.html"
};

/* Use Mustache.js to render common templates */
function renderTemplates() {
    // grab the template container
    const bodyTemplate = document.getElementById("mustache").innerHTML;

    const templateChildren = {};
    Object.keys(templateChildrenUrls).forEach((templateId) => {
        fetch(templateChildrenUrls[templateId])
            .then((response) => response.text())
            .then((child) => {
                templateChildren[templateId] = child;
            })
            .then(() => {
                // render the body template by filling in all children
                const rendered = Mustache.render(bodyTemplate, templateChildren);

                // insert the rendered template into the body tag
                document.getElementById("body").innerHTML = rendered;
            });
    });
}
