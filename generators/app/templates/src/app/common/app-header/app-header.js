import angular from 'angular';
import 'angular-ui-router';
import AppHeaderComponent from './app-header.component';

let appHeaderModule = angular.module('app-header', [
	'ui.router'
])
.directive('appHeader', AppHeaderComponent);

export default appHeaderModule;
