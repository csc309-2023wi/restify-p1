/* Template Identifier to File URL Mapping */
const templateChildrenUrls = {
    navContent: "templates/navbar.html",
    navSearchContent: "templates/navbar_search.html",
    navAuthContent: "templates/navbar_auth.html",
    footerContent: "templates/footer.html",
    propertyCardGeneric: "templates/card_property_listing_generic.html",
    propertyCardPending: "templates/card_property_listing_pending.html",
    propertyCardApproved: "templates/card_property_listing_approved.html",
    propertyCardDenied: "templates/card_property_listing_denied.html",
    propertyCardExpired: "templates/card_property_listing_expired.html",
    modalUserUnbooked: "templates/modal_user_unbooked.html",
    modalUserBooked: "templates/modal_user_booked.html",
    modalHostCreate: "templates/modal_host_create.html",
    modalHostExisting: "templates/modal_host_existing.html",
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
