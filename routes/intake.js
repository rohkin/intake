module.exports = function (app) {
        app.route('/intake/add')
                .get(function (request, response) {
                        var options = [{id:0,value:"test0",selected:false},{id:1,value:"test1",selected:true}];
                        var buttons = [{href:"intake/list",class:"btn-default",value:"Annuleren"},
                                        {class:"btn-success",value:"Toevoegen"}];
                        response.render("intake/add", {options:options,buttons:buttons});
                });
        app.route('/intake/delete')
                .get(function (request, response) {
                        response.render("intake/delete");
                });
        app.route('/intake/edit')
                .get(function (request, response) {
                        response.render("intake/edit");
                });
        app.route('/intake/list')
                .get(function (request, response) {
                        var list_items = [{id:0,value:"test1"},{id:1,value:"test2"},{id:2,value:"test3"}];
                        response.render("intake/list",{list_items:list_items});
                });
        app.route('/intake/show')
                .get(function (request, response) {
                        response.render("intake/show");
                });
};