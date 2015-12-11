module.exports = function (app) {
        app.route('/remark/add')
                .get(function (request, response) {
                        response.render("remark/add");
                });
        app.route('/remark/delete')
                .get(function (request, response) {
                        response.render("remark/delete");
                });
        app.route('/remark/edit')
                .get(function (request, response) {
                        response.render("remark/edit");
                });
};