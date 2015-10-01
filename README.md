# generator-ng6 [![Build Status](https://secure.travis-ci.org/dimpu/generator-ng6.png?branch=master)](https://travis-ci.org/dimpu/generator-ng6)

> The simple starter [Yeoman](http://yeoman.io) generator for angualr 1.x with ES6.


## Getting Started
### What is ng6?
A simple starter for angular 1.x with es6. This is a simple yomen generator for those who are looking for using ES6 with angular 1.x

If you are new to ES6 i would suggest you to go throught http://ccoenraets.github.io/es6-tutorial/ or https://www.youtube.com/watch?v=CozSF5abcTA

**Features:**
* Web Component approach.
* Frictionless package management and module loader with [JSPM](http://jspm.io)
* The best practice in directory/file organization for Angular
* For both small and large scale applications.
* ES6 to ES5 conversion using JSPM.
* A ready-to-go build system for working with [ES6](https://git.io/es6features)
* Tasks for generating additional boilerplate Angular components
* A full testing system in place


### why JSPM?
JSPM is build on top of  [SystemJS](https://github.com/systemjs/systemjs) which uses polyfill for the ES6 modules. So that means sooner or later browsers will support this natively.

This means no intermediate transplie before your files served. The modules will load only  the files which needed at runtime.

You can even bundle your app using jspm for production.

### File Structure
Besides using ES6 with angular 1.x we want to a way to ensure easy transition to Angular2. So everything in ng6 will look like.
```
client
--app/
----app.js * entry file for app
----app.html * template for app
----components/ * where most of components live
------components.js * entry file for components
------home/ * home component
--------home.js * home entry file
--------home.component.js * directive for home
--------home.controller.js * controller for home
--------home.styl * styles for home
--------home.html * template for home
--------home.spec.js * specs for home
----common/ * where common things in our app live
```

## Testing Setup
All test are written in ES6 too because why not! We use JSPM to take care of all the logistics of getting those files run in browsers just like our client files. Our setup is:

* Karma
* JSPM + Babel
* Mocha
* Chai

To run test just `npm test` or `karma start`. Read more about testing [below](#testing)

## Installing
What do you need to run this:
* `node` or 'iojs' and `npm`
Once you have those, you should install these globals:
* `npm i -g jspm`
* `npm i -g yo`
* `npm i -g gulp`
* `npm i -g karma`
* `npm i -g karma-cli`

To install generator-ng6 from npm, run:

```bash
npm install -g generator-ng6
```
## How to use it?
To initiate the generator go to the folder we you want your project and run the following command.

```bash
yo ng6
```

## Npm tasks

Most of the heavy lifting is done by jspm so we don't think we need to use Gulp or Grunt instead we are using npm tasks.

We will have only three tasks.

```bash
  npm Start
  ```
 starts a dev server with `browser-sync`
 ```bash
 npm run build
 ```
build your code for production it will generate only two file app.js and index.html

```bash
npm test
```
It will start your karma tests.

### Testing

The only difference from a regular `Karma` setup is the use of [`karma-jspm`](https://github.com/Workiva/karma-jspm) plugin to let JSPM handle spec files as modules. `Karma` will run all files that match `.spec.js` inside the `app` folder. This is awesome because we can write tests for our components in the same folder with the rest of the component. Be sure to include your `spec` files in the appropriate component directory. You must name the spec file like so, `[name].spec.js`. If you don't want to use the `.spec.js` extension, you must change the `jspm.loadFiles` glob in `karma.conf.js` to look for whatever file(s) you want.

`Mocha` is the testing suite being used and `chai` is the assertion library. If you would like to change this, do so in `karma.conf.js`.


## Generating components
Following a good practice allows us to guarantee certain things. We can take advantage of these guarantees and use a task to automate things. Because the components we make will almost always have the same structure, we can generate this boilerplate for you. Boilerplate includes:
* Component folder
* Component entry file which will `import` all of its dependencies
* Component component file, or directive file will will also `import` its dependencies
* Component template
* Component controller
* Component css
* Component spec with passing tests already written

You can create all this by hand, but it gets old fast!
To generate a component, we must use the

```bash
yo ng6:component componentName
```
componentName is the name of the component you want to create. Be sure to be unique, or it will override an existing component.
The component will be created by default on the root of `client/app/components`.

We can change this by passing in the `--parent` flag.

You can pass in a path relative to `client/app/components/` and your component will be made there.

So running `yo ng6:component signup --parent auth` will create a `signup` component at `client/app/components/auth/signup`.

Running `yo ng6:component footer --parent ../common` will create a `footer` component at `client/app/common/footer`.

Because `--name` is used to create folder name too, use camel or snakeCase and stay consistent.



#### FAQ

1. **Failing `npm install`**

<p>If this is your first time running JSPM, you'll probably run into a `warn Error - GitHub rate limit reached`
</p>
<p>
  Fix this by adding your GitHub credentials to JSPM with: `jspm registry config github`.
</p>



### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-ng6 from npm, run:

```bash
npm install -g generator-ng6
```

Finally, initiate the generator:

```bash
yo ng6
```


## License

MIT
