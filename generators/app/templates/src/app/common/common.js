import angular from 'angular';
import AppHeader from './app-header/app-header';
import Navbar from './navbar/navbar';

let commonModule = angular.module('app.common', [
	Navbar.name,
	AppHeader.name
]);

export default commonModule;
