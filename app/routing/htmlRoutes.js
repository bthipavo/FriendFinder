var path = require('path')

module.exports = function(app) {
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '.../survey.html'))
	})
	//default to home if no matching route is found
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '.../index.html'))
	})

}