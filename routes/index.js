module.exports = function (app) {
	app.route('/')
		.get(function (request, response) {
			response.render("index", {specialisations: ['Windows Azure', 'Ajax', 'JavaScript', 'jQuery', 'NodeJS', 'C#', 'IOS', 'Android', 'SQL Server']});
		});
};