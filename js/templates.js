/* Template Identifier to File URL Mapping */
const templateChildrenUrls = {
    navContent: "templates/navbar.html",
    footerContent: "templates/footer.html",
    propertyCardGeneric: "templates/card_property_listing_generic.html",
    modalReference: "templates/modal_ref.html",
    modalUserUnbooked: "templates/modal_user_unbooked.html",
    modalHostCreate: "templates/modal_host_create.html",
};

/* Use Mustache.js to render common templates */
function renderTemplates() {
    // grab the template container
    const bodyTemplate = document.getElementById("mustache").innerHTML;
    const templateChildren = {};

    // dispatch tasks to render templates
    const renderTasks = Object.keys(templateChildrenUrls).map((templateId) => {
        return fetch(templateChildrenUrls[templateId])
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

    // load the image carousel after templates have been rendered
    Promise.all(renderTasks).then(() => {
        var splide = new Splide(".splide");
        splide.mount();
    });
}
