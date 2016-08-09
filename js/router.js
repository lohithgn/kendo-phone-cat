var appRouter = new kendo.Router({
    init: function() {
        layout.render("#application");
    }
});

appRouter.route("/", function() {
    kendo.fx("#content").fadeOut().duration(200).play().then(function(){
        layout.showIn("#content", indexView);
        kendo.fx("#content").fadeIn().duration(200).play();
    });
});

appRouter.route("/details/:id", function(phoneId) {
    kendo.fx("#content").fadeOut().duration(200).play().then(function(){
        layout.showIn("#content", detailView);
        detailModel.setSelectedPhone(phoneId);
        kendo.fx("#content").fadeIn().duration(200).play();
    });
});

