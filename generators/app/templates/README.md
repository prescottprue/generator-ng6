# generator-ng6 [![Build Status](https://secure.travis-ci.org/dimpu/generator-ng6.png?branch=master)](https://travis-ci.org/dimpu/generator-ng6)

> The simple starter [Yeoman](http://yeoman.io) generator for angualr 1.x with ES6.


## Getting Started
### What is ng6?
A simple starter for angular 1.x with es6. This is a simple yomen generator for those who are looking for using ES6 with angular 1.x

If you are new to ES6 I would suggest you to go through http://ccoenraets.github.io/es6-tutorial/ or https://www.youtube.com/watch?v=CozSF5abcTA

**Features:**
* Web Component approach.
* Package management with npm [NPM](http://npmjs.org)
* The best practice in directory/file organization for Angular
* For both small and large scale applications.
* ES6 to ES5 conversion using browserify with babel.
* A ready-to-go build system for working with [ES6](https://git.io/es6features)
* Tasks for generating additional boilerplate Angular components
* A full testing system in place


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
--------home.css * styles for home
--------home.html * template for home
--------home.spec.js * specs for home
----common/ * where common things in our app live
```

## Testing Setup
All test are written in ES6 too because why not! We use JSPM to take care of all the logistics of getting those files run in browsers just like our client files. Our setup is:

* Karma
* Mocha
* Chai

To run test just `npm test` or `karma start`. Read more about testing [below](#testing)

## Installing
What do you need to run this:
* `node` or 'iojs' and `npm`
Once you have those, you should install these global npm packages:
* `npm i -g browserify`
* `npm i -g budo`
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

We will have following commands.

```bash
  npm Start
  ```
  this will start code compilation while you make changes to your files. Use this command if you already have a server running. For example if you want to use Xampp or vangrant as your main server this is for you.

  ```bash
    npm run serve
    ```

 This will starts a dev server with `budo` (a browserify dev server).

 ```bash
 npm run build
 ```
build your code for production it will generate only two file app.min.js and index.html

```bash
npm test
```
It will start your karma tests.


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
yo ng6:component component-name
```
component-name is the name of the component you want to create. Be sure to be unique, or it will override an existing component.
The component will be created by default on the root of `app/components`.

You can pass in a path relative to `app/components/` and your component will be made there.

So running `yo ng6:component signup` will create a `signup` component at `client/app/components/signup`.

Running `yo ng6:component footer` and if you give path as`  ../common` will create a `footer` component at `app/common/footer`.



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
=======
