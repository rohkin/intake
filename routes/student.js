module.exports = function (app) {
        app.route('/student/add')
                .get(function (request, response) {
                        response.render("student/add");
                });
        app.route('/student/delete')
                .get(function (request, response) {
                        response.render("student/delete");
                });
        app.route('/student/edit')
                .get(function (request, response) {
                        response.render("student/edit");
                });
        app.route('/student/list')
                .get(function (request, response) {
                        response.render("student/list");
                });
        app.route('/student/show')
                .get(function (request, response) {
                        response.render("student/show");
                });
};