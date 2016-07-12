var date = new Date().toString();

var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('private route it!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;