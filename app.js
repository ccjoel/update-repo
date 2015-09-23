/*
 * Dependencies
 */
var express = require('express'),
	path = require('path'),
	fs = require('fs'),
	http = require('http');

var sys = require('sys');
var exec = require('child_process').exec;

/*
 * Initiate Express
 */
var app = express();

/*
 * App Configurations
 */
app.configure(function() {
	app.set('port', process.env.PORT || 5000);
	app.use(express.logger('dev'));
	app.use(express.methodOverride());
	app.use(app.router);
});


app.post('/hook', function(req, res) {
  try{
  console.log('post received w params:', req.body, req.params);

  console.log('directory:', __dirname);

  exec(__dirname+'/update-avez.sh', function(error, stdout, stderr){
    if(error) {
      console.error('error', error);
      return res.send('error!');
    }
    return res.send('Success!');
  });
} catch(e){
   return res.sendStatus(400);
 }

});


http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});
