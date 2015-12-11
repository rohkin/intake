module.exports = function (app) {
        app.route('/user/add')
                .get(function (request, response) {
                        response.render("user/add");
                });
        app.route('/user/dashboard')
                .get(function (request, response) {
                        response.render("user/dashboard");
                });
        app.route('/user/delete')
                .get(function (request, response) {
                        response.render("user/delete");
                });
        app.route('/user/edit')
                .get(function (request, response) {
                        response.render("user/edit");
                });
        app.route('/user/list')
                .get(function (request, response) {
                        response.render("user/list");
                });
        app.route('/user/login')
                .get(function (request, response) {
                        response.render("user/login");
                });
        app.route('/user/show')
                .get(function (request, response) {
                        response.render("user/show");
                });
};
