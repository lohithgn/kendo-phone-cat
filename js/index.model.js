var indexModel = kendo.observable({
    sort:"age",
    query:"",
    phones:new kendo.data.DataSource({
            transport:{
                read:{
                    url:"phones/phones.json"
                }
            },
            serverFiltering:false,
            serverSorting:false,
    }),
    sortData:function(){
        var ds = this.get("phones");
        ds.sort({field:this.get("sort"),dir:"asc"});
    },
    filter:function(){
        var query = this.get("query");
        var filter = {};
        if(query.length > 0)
        {
            filter = {field:"name",operator:"contains",value:query};
        }
        this.get("phones").filter(filter);
    }

});

var indexView = new kendo.View("index-template", { model: indexModel });