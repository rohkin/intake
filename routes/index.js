module.exports = function (app) {
	app.route('/')
		.all(function (request, response){
			if(request.method == "POST") {
				var username = request.body.username;
				var password = request.body.password;

				if(username == 'test' && password == 'test2') {
					console.log('logged in!');
				} else {
					console.log('failed!');
				}
			}

			var buttons = [{type:"submit",class:"btn-primary",value:"Inloggen"}];
			response.render("index",{buttons:buttons});
		});
};