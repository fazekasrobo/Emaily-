if(process.env.NODE_ENV === 'production'){
	console.log('Adding ./prod keys');
	module.exports = require('./prod');
}else{
	console.log('Adding ./dev keys');
	module.exports = require('./dev');
}