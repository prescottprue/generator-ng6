import angular from 'angular';
import 'angular-ui-router';
import <%= pascalCase %>Component from './<%= name %>.component';

let <%= camelCase %>Module = angular.module('<%= name %>', [
	'ui.router'
])
/* // uncomment this foor rute
.config(($stateProvider, $urlRouterProvider)=>{
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('<%= name %>', {
			url: '/',
			template: '<<%= name %>></<%= name %>>'
		});
})
*/
.directive('<%= camelCase %>', <%= pascalCase %>Component);

export default <%= camelCase %>Module;
