
let <%= camelCase %>Factory = function(){
	const <%= name %> = {};

	let get<%= pascalCase %> = ()=>{
		return <%= name %>.<%= pascalCase %>;
	};

	let set<%= pascalCase %> = (val)=>{
		<%= name %>.<%= pascalCase %> = val;
	};

	return { get<%= pascalCase %>, set<%= pascalCase %> };
};

export default <%= camelCase %>Factory;
