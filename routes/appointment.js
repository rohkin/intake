module.exports = function (app) {
        app.route('/appointment/add')
                .get(function (request, response) {
                        response.render("appointment/add");
                });
};