import template from './<%= name %>.html!text';
import controller from './<%= name %>.controller';
import './<%= name %>.css!';

let <%= camelCase %>Component = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default <%= camelCase %>Component;
