module.exports = function (app) {
        app.route('/intake/add')
                .get(function (request, response) {
                        response.render("intake/add", {options:[{id:0,value:"test0",selected:false},{id:1,value:"test1",selected:true}]});
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
                        response.render("intake/list");
                });
        app.route('/intake/show')
                .get(function (request, response) {
                        response.render("intake/show");
                });
};