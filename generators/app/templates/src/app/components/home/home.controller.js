import buildWith from './build-with.json';

class HomeController {
	constructor(){
		this.name = 'home';
		this.buildWith = buildWith;
	}
}

export default HomeController;
