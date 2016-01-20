import template from './app-header.html';
import controller from './app-header.controller';
import './app-header.css';

let appHeaderComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default appHeaderComponent;
