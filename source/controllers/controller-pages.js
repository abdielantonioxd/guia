mvc.controller({
    name: "homePages",
    action: "home",
    path: "/",
    view: "home.ejs"
}, "homePages", function (req, homePages) {

    return homePages.returnAll()
});

mvc.controller({
    name: "infoService",
    action: "Imformation-services",
    path: "/informacion-service",
    view: "Imformation-services.ejs"
}, "infoServices", function (req, infoServices) {
    return infoServices.returnAll()
});

mvc.controller({
    name: "advancedSearch",
    action: "advanced-search",
    path: "/busqueda-Avanzada",
    view: "advanced-search.ejs"
}, "searchAdvance", function (req, searchAdvance) {
    return searchAdvance.returnAll()
});

mvc.controller({
    name: "createService",
    action: "create-service",
    path: "/create-service",
    view: "create-service.ejs"
}, "createService", function (req, createService) {
    return createService.returnAll();
});
mvc.controller({
    name: "updateservice",
    action: "update-service",
    path: "/update-service",
    view: "update-service.ejs"
}, "updateService", function (req, updateService) {
    return updateService.returnAll();
});

mvc.controller({
    name: "password",
    action: "Get-Contraceña",
    path: "/Get-password",
    view: "recuperar-password.ejs"
}, "passwordUsers", function (req, passwordUsers) {
    return passwordUsers.returnAll()
});

mvc.controller({
    name: "politic",
    action: "politic",
    path: "/politica-uso",
    view: "./politicas/politicaUso.ejs"
}, "privacityPolitic", function (req, privacityPolitic) {
    return privacityPolitic.returnAll()
});

mvc.controller({
    name: "consideraciones",
    action: "consideraciones",
    path: "/Condiciones",
    view: "./politicas/consideracionesVarias.ejs"
}, "concideration", function (req, concideration) {
    return concideration.returnAll()
});
mvc.controller({
    name: "Contactenos",
    action: "Contactenos",
    path: "/contact-pages",
    view: "./contact-pages.ejs"
}, "contact", function (req, contact) {
    return contact.returnAll()
});
mvc.controller({
    name: "Nosotros",
    action: "Nosotros",
    path: "/Nosotros",
    view: "./nosotros.ejs"
}, "nosotros", function (req, nosotros) {
    return nosotros.returnAll()
});