var testsContext;

require('./bower_components/angular/angular.js');
require('./bower_components/angular-mocks');

testsContext = require.context('./app', true, /.spec\.js$/);


var x = testsContext.keys().forEach(testsContext);
