import angular from 'angular';
import 'angular-ui-router';
import <%= pascalCase %>Component from './<%= name %>.component';

let <%= camelCase %>Module = angular.module('<%= name %>', [
	'ui.router'
])
.directive('<%= camelCase %>', <%= pascalCase %>Component);

export default <%= camelCase %>Module;
