var detailModel = kendo.observable({
    selectedPhone:null,
    setSelectedPhone: function(phoneId){
        var that = this;
        var url = "phones/" + phoneId + ".json";
        kendo.ui.progress($(document.body), true);
        $.getJSON(url).then(function(data){
            that.set("selectedPhone", data);
            kendo.ui.progress($(document.body), false);
        })
    },
    phoneImageClick:function(e){
        var listView = $(e.sender.element).data("kendoListView"); 
        var item = listView.select();
        var indx = $(item).index();
        $("#phone-image").attr('src',listView.dataSource.data()[indx]);
        kendo.fx($("#phone-image")).slideIn("up").play();
        
    }
})

var detailView = new kendo.View("detail-template", { model: detailModel });
