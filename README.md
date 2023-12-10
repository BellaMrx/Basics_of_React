# Basics_of_React

 Introduction to the basics of React

 To work with React, you should have knowledge of HTML, CSS and JavaScript.

 ### Contents
 1. What is React?
 2. Prepare the use of React
 3. Start a React project
 4. "Hello World" in React
 5. JSX (JavaScript XML)
    - 5.1. Use JSX for the UI
    - 5.2. JSX with HTML attributes
    - 5.3. Case distinction
    - 5.4. Lists with React
 6. Render elements
 7. React components and props
    - 7.1. Functional components
    - 7.2. Class components
    - 7.3. Props
 8. State management in React
    - 8.1. Changing the `state` object
    - 8.2. Children props
 9. Events and their handlers
    - 9.1. Pass arguments to event handler
10. Life cycle of components
    - 10.1. Mounting
    - 10.2. Updating
    - 10.3. Unmounting
    - 10.4. React.Fragment
11. The Raect-Hooks-API
    - 11.1. Local state in function components with useState
    - 11.2. The component lifecycle with useEffect
    - 11.3. Access to the context with useContext
    - 11.4. Custom Hooks
12. CSS and React
    - 12.1. Styling with the `style` attribute
    - 12.2. Use CSS classes in JSX
    - 12.3. CSS modules in React
    - 12.4. CSS in JavaScript - Styled Components
13. Forms in React
    - 13.1. Controlled Components
    - 13.2. Uncontrolled Components
    - 13.3. Accessing the native DOM via a reference
  
 
-------------------------------------------------------

## 1. What is React?
React is a JavaScript library developed by Facebook and contains a basic framework for the output of user interface components for websites. The components have a hierarchical structure and can be displayed as a separate HTML tag. React creates a virtual DOM in memory, where all necessary changes can be made instead of changing the DOM of the web browser directly. React is therefore an ideal basis for single-page applications (SPA).

SPAs are web applications that consist of just one HTML document and an associated JavaScript file, the content of which is loaded dynamically. This means that no additional page call for further files is necessary, but the higher-level JavaScript on the client side is used to render the new view. Classic web applications usually consist of several HTML documents that are linked to each other. When the website is changed, communication with the server must be repeated. If there are many requests from visitors, this places a heavy load on the server.

With SPAs, client-side performance is increased and the server is relieved. The reduced client-server communication reduces the waiting time for users enormously. Depending on the application, it can also be navigated offline once the page has been loaded and the data has been cached in the web browser's web storage. SPAs are well suited for web applications with a high number of visitors in order to reduce the load on the server.

An SPA is actually just JavaScript that is managed in folders and files. React offers the necessary tools for this. React places few requirements on the environment to be executed, which is why the library is very flexible and is also often used for individual interactive parts of websites. The use of React is worthwhile if you have a user interface with a lot of interactions in which the state is constantly changing.


## 2. Prepare the use of React
To use React, [Node.js](https://nodejs.org/en/download) and npm must first be installed. As a rule, it should already be installed if you have already worked with JavaScript. Node.js is a JavaScript runtime environment that can execute JavaScript outside the web browser. You can also find a short guide here [GitHub - BellaMrx](https://github.com/BellaMrx/WebDevelopment_Basics#11-use-javascript-on-the-server-side---nodejs).

You can check whether Node.js and npm are already installed in the terminal with :

   ```
    $ node --version
    $ npm --version
   ```
When a version is displayed, you can start using React. Alternatively, the online editor [CodeSandbox](https://codesandbox.io) can also be used to learn and test React.


## 3. Start a React project
To create a React application, I use **create-react-app**. This allows a React project to be set up with a command in the terminal (prerequisite: Node.js and npm). 

This allows **create-react-app** to be installed via the terminal:

   ```
    $ npm install -g create-react-app
   ```

As soon as **create-react-app** has been installed, a new project can be created in future with the following command:

   ```
    $ npx create-react-app my-project
   ```

 <img src="images/React_npx.PNG" width="900">

 <img src="images/React_npx2.PNG" width="900">

 <img src="images/React_npx3.PNG" width="900">


Any name can be used for "my-project". When using it for the first time, packages may still be installed. After the new React project has been created, a "my-project" folder is created with the following folder structure:

 <img src="images/React_Folderstructure.PNG" width="300">

| Folder            | Description |
| ----------------- | ----------- |
| node_modules      | The folder contains the necessary Node.js packages. |
| public            | The folder contains the index.html start page. This page is displayed together with the JavaScript in the src/ directory. |
| src               | This folder initially contains everything that is required for React. The most important file for further learning of React is app.js, which implements the React components. |
| .gitignore        | The files and directories that are not to be checked into the Git repository are listed here. |
| package.json      | This contains the configuration of the React application, such as start scripts and the installed dependencies.
| Readme.md         | This contains the description of the various start scripts and a link to the online documentation |
| package-lock.json | Data is important for npm and describes which packages are required with which version.  |

To run the application with **create-react-app**, change to the directory in the terminal with `cd`:

   ```
    $ cd my-project
   ```

Now the React application can be run with :

   ```
    $ npm start
   ```

A new browser window should now open with the generated React application. If not, open the browser and enter **localhost:3000** in the address bar.

In addition to `npm start`, there is also `npm test` for running tests and `npm run build`, which creates the application for operation in a **build** folder.

In VS Code: install **React Native Tools** via the extensions. And then:

   ```
    $ npx create-react-app my-project
   ```
   ```
    $ cd my-project
   ```
   ```
    $ npm start
   ```

 <img src="images/React_cd.PNG" width="900">

 <img src="images/React_npmStart.PNG" width="900">

 <img src="images/React_npmStart2.PNG" width="900">

Now a web page should open automatically even with VS code:

 <img src="images/React_Start.png" width="900">

Before starting with VS code, it is best to change the file format so that the code is not mutilated. Simply click on it and enter a different format:

 <img src="images/React_changeFormat.PNG" width="500">


## 4. "Hello World" in React
If you now change to the *my-project/src/* directory and open the *App.js* file there, you will find the following code:

   ```
   import logo from './logo.svg';
   import './App.css';

   function App() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>
                Edit <code>src/App.js</code> and save to reload.
               </p>
               <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
               >
                Learn React
               </a>
            </header>
         </div>
      );
   }

   export default App;   
   ```

If you change this code as follows:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_1) --> **Examples/Part_1/src/App.js...** 

   ```
   import React from 'react';

   function App() {
      return ( 
         <div>
            <h1> Hello World in React </h1> 
            <p> A simple React application in execution. </p>  
         </div >
      );
   }

   export default App;
   ```

If the React application is now opened in the browser with localhost:3000 (if the browser is still open, it loads automatically), the browser displays this:

 <img src="images/React_HelloWorld.PNG" width="900">

The example is very simple, but it shows that *App.js* is just a JavaScript function without parameters and returns an "HTML" code. The JavaScript function is also called a *function component*, and the "HTML" code is called *JSX (JavaScript XML)*.

If the React application is to be uploaded and run on a web host, it must first be built with `npm run built`. The files created in the *build* folder can then be uploaded to the web host and used.

#### Note
The index.html file created in the *build* folder cannot be opened by double-clicking because the webpacks are set up so that the static files are loaded from the root directory and not from the *build* directory. However, this can be remedied by adding the following to the *package.json* file:

  ```
   "homepage": ".",
  ```
like this:

  ```
   {  
      "name": "my-project",
      "version": "0.1.0",
      "homepage": ".",
      "private": true,
      "dependencies": {
      "@testing-library/jest-dom": "^5.17.0",
      ...
   },
   ...
  ```


## 5. JSX (JavaScript XML)
The syntax of JSX is very similar to that of HTML. With JSX, the HTML is practically written in React, it is actually a mixture of HTML and JavaScript components. JSX also supports CSS. With JSX, HTML elements can be written in JavaScript and attached to the DOM without the usual `createElement()` or `appendChild()` functions. With JSX, the HTML tags are not converted into React elements. JSX does not have to be used, but it makes it easier to write React applications when it comes to what the *user interface* (UI) should look like.


### 5.1. Use JSX for the UI
Here is a simple example of how flexibly JSX can be used:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_2) --> **Examples/Part_2/src/App.js...** 

  ```
   import React from 'react';

   const greetings = 'Hello world';
   const title = 'React';
   const ptext = <p> React application during execution. </p>;
   const expression = <p> 420 * 7 = { 420 * 7 } </p>;
   const mlist = ( < ol >
      <li> Item 1 </li>  
      <li> Item 2 </li>
      <li> Item 3 </li>  
    </ol > );

   function App() {
      return ( 
         <div >
            <h1> { greetings } in { title } </h1> 
            { ptext } { expression }
            Enumeration list: { mlist } 
         </div >
      );
   }
   export default App;
  ```

 <img src="images/React_part_2.png" width="400">

Expressions are written in curly brackets `{}` in JSX. These can be simple variables (`greetings`, `title`), properties, mathematical calculations (`expression`), longer HTML blocks between brackets `()` (`mlist`) and any other valid JavaScript expression. However, no JavaScript statements are allowed between the curly braces. JSX acts like a template language, but the full functionality of JavaScript can be used with it.

JSX is automatically transpiled to JavaScript. Learning JSX is relatively easy if you accept it as HTML within the JavaScript code. An alternative to JSX would be TSX (TypeScript). JSX was developed specifically for React and later integrated into other libraries.

The compiler turns JSX into JavaScript code, e.g. from one line:

  ```
   const paragraph = <p>A simple text.</p>;
  ```

From this, a compiler can create the following JavaScript code:

  ```
   let paragraph = React.createElement (
      "p",
      null,
      "A simple text."
   );
  ```

Instead of `Document.createElement`, `React.createElement` was used here, i.e. a React element or an immutable JavaScript object or virtual DOM object is returned. This virtual DOM object is first converted into an output format, such as a DOM element, when a component is rendered. In React, a distinction is made between a virtual and native DOM. This ensures that only what actually changes in the native DOM is changed and that the entire native DOM is not re-rendered, thus limiting the manipulation of the native DOM to a minimum.

Another example: 

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_3) --> **Examples/Part_3/src/App.js...** 

  ```
   import React from 'react';

   function format_header_1(text, user) {
      return text + ', ' + user.fname + ' ' + user.lname;
   }

   const user = {
      fname: 'Bella',
      lname: 'Mrx'
   };

   function App() {
      return ( 
         <div> 
            <h1> { format_header_1('Welcome', user) } </h1>
         </div>
      );
   }
   export default App;
  ```

 <img src="images/React_part_3.png" width="400">

With the line `<h1> { format_header_1('Welcome', user) } </h1>`, a JavaScript expression was built into JSX with the curly brackets. The function `format_header_1` with two parameters, a string and a JavaScript object `user`, is used here to assemble and return this content.


### 5.2. JSX with HTML attributes
HTML attributes can also be enclosed in curly brackets:

  ```
   const primaryColor = "#008000";
   const parapraph = <p style = {{color: primaryColor}}> Welcome to React </p>
  ```

Here, a JavaScript expression has been integrated into an HTML attribute. In JSX, the camel case notation is used, so instead of *tabindex*, as is usual in HTML, *tabIndex* must be used. The attributes `for` and `class` must not be used because these are also keywords in JavaScript. Instead, `htmlFor` and `className` must be used. 

Stand-alone HTML tags must be closed with `/` (`<.../>`), as JSX follows the XML rules:

  ```
   const userInput = < input type = "text" />;
  ```

If stand-alone HTML tags are not closed correctly or if `for` is used instead of `htmlFor` out of habit, React issues an error message.

#### Comments in JSX
Comments can be noted between the curly brackets in a JavaScript expression:

  ```
   const parapraph = <p> Welcome {/*comment name*/} </p>
  ```

or within a JSX element, the comments can be noted without curly brackets:

  ```
   const parapraph = <p /*comment set color */> Welcome </p>
  ```

or comments can be noted as in JavaScript, but only at the end of the line:

  ```
   const parapraph = <p //comment set color > Welcome </p>
  ```


### 5.3. Case distinction
`if-else` cannot be used within JSX. The tenary operator `?:` (`{i === 1?`true`:`false`}`) can be used for this purpose. A case distinction can be useful if an attribute or element is to be set depending on the condition.

Example: 

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_4) --> **Examples/Part_4/src/App.js...** 

  ```
   import React from 'react';

   const header_1 = true;

   function isHeader() {
      return header_1;
   }
   const msg = "Welcome to React";

   function App() {
      return ( 
         <div > 
         { isHeader() ? <h1> { msg } </h1> : <p>{msg}</p> } 
         </div>
      );
   }
   export default App;
  ```

Whether the text of the variable `msg` is displayed as `h1` heading or as `p` paragraph text depends on whether the function `isHeader()` returns `true` or `false`. This works not only for HTML elements, but also for attributes:

  ```
   const mark = true;

   function isImportant() {
      return mark;
   }

   const msg = <p style = {{ color: isImportant() ? "green" : "black" }} >
      Welcome to React </p>; 
  ```

 <img src="images/React_part_4.png" width="400">


### 5.4. Lists with React
The JavaScript method `map`, which is defined for arrays, is usually used to process lists. 

An example with `map` in pure JavaScript code:

  ```
   const values = [2, 4, 42, 7, 420];

   const total = values.map(function(value) {
      return value * value;
   });

   console.log(total);     //Output: [ 4, 16, 1764, 49, 176400 ]
  ```

Here, the individual values of `values` are run through using `map()`, each placed in `value` and then multiplied.

A complete example with a list and JSX: 

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_5) --> **Examples/Part_5/src/App.js...** 

  ```
   import React from 'react';

   const recommendEbooks = [{
         title: 'JavaScript - DOM - Document-Object-Model',
         url: 'https://github.com/BellaMrx/DOM_Document-Object-Model',
         author: 'Bella Mrx',
         id: 3,
      }
      ...
   ];

   function App() {
      return ( 
         <div>
            <h1> Further literature about JavaScript </h1> 
            <ul> {
               recommendEbooks.map(function(book) {
                  return <li key = { book.id } > <a href = { book.url } >
                  { book.title } < /a> (by {book.author}) </li> ;
               })}
            </ul>
         </div>
      );
   }
   export default App;
  ```

To display all `title` in the `recommendEbooks` list with JSX, proceed as follows:

  ```
   recommendEbooks.map(function(book) {
      return <div > { book.title } < /div>;
   })}
  ```

The other data such as `url` and `author` can also be accessed in the same way. The list element `id` has been added as a key attribute for React. This allows React to identify the individual list elements. This identification is required so that React can establish a connection between two instances in the virtual DOM: 

  ```
   recommendEbooks.map(function(book) {
      return <div key = { book.id } > { book.title } < /div>;
   })}  
  ```

The key attribute `key` is used to assign a value in the list that is unique. This value should not be derived from the index of the element in the array.

 <img src="images/React_part_5.png" width="500">


## 6. Render elements
In the previous examples, you did not have to worry about this, this was due to the command `npx create-react-app my-project` ([Chapter 3](https://github.com/BellaMrx/Basics_of_React#3-start-a-react-project)). The React command for rendering HTML on a web page is `ReactDOM.render()`. 

Here is a shortened version of *my-project/src/index.js*:

  ```
   import React from 'react';
   import ReactDOM from 'react-dom';   // for ReactDOM.render()

   import App from './App';


   ReactDOM.render (
      <App />
      document.getElementById('root')
   ); 
  ```

The function `ReactDOM.render()` expects two arguments. The first element is the JSX element to be rendered, which is the instance of the app `<App />`, which is the `function App()` of *my-project/src/App.js*. However, it is also possible to pass this without an instance:

  ```
   ReactDOM.render (
      <p> A simple text </p>
      document.getElementById('root')
   ); 
  ```

The second argument is used to specify where the JSX element to be rendered is to be inserted. In this example, it is an element with `id = root"`, which is located in the HTML file *my-project/public/index.html*.

  ```
   <!DOCTYPE html>
   <html lang="en">
      <head>
         <title>React App</title>
      </head>
      <body>
         <div id="root"></div>
      </body>
   </html>
  ```

In most cases, `ReactDOM.render()` is only used once when the page is called up; another `render()` call is not necessary, as further rendering is then usually carried out by the components.


## 7. React components and props
The most important concept of React is components. A component is an independent and reusable code. Components have the same purpose as JavaScript functions, except that they can be used anywhere in JSX, similar to HTML elements. There are two types of components in React: function components and class components.

Such components are simple parts of the UI (user interface). When an application is developed in React, several such components are usually developed independently of each other and then combined to form a complex UI. A React application has at least one component, which is called the root component.

So far, only the `App()` component in *App.js* has been used here, which was rendered in *index.js* as follows:

  ```
   ReactDOM.render (
      <React.StrictMode>
         <App />
      </React.StrictMode>,
      document.getElementById('root')
   );
  ```

Everything has been done in this app component here, but a React application usually has higher requirements in practice, which increases the amount of code. To keep things clear, the main component is usually divided into several sub-components. For this purpose, *props* (properties) are often used. Such props are similar to function arguments in JavaScript and are often given to the components as external properties.

Here in the example the `<React.StrictMode>` mode was used, this is very helpful and ensures that errors, warnings of page effects or outdated React constructs (deprecated) are displayed on the console or web browser. It is recommended to always use this mode by wrapping the application with it. If the application is built with `npm run build`, the code is removed to keep the code lightweight.


### 7.1. Functional components
A simple functional component:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_6) --> **Examples/Part_6/src/App.js...** 

  ```
   import React from 'react';

   function App() {
     return ( 
      <div>
         <h1> Login </h1> 
         <InputT name = "Firstname" / >
         <InputT name = "Lastname" / >
         <InputT name = "E-Mail" / >
      </div>
     );
   }

   function InputT(props) {
     return ( 
      <div> 
         <label> { props.name } </label> : 
         <input type = "text" placeholder = { props.name } />
      </div>
     );
   }
   export default App;
  ```

 <img src="images/React_part_6.png" width="400">

A simple function component `InputT(props)` was created here, which can be used like an HTML element with `<InputT name="Firstname">`. When React recognizes a custom component, all JSX attributes are passed as a single object, here "props", the name for which can be chosen by the user (called "props" for demonstration purposes only).
When the React application is executed, the `InputT` component is rendered three times within the app component, which shows how components refer to other components in the output and can therefore be reused at any time.
Custom components such as `<InputT />` or `<Comment />` must start with a capital letter, in React components with lower case letters such as `<div>` are HTML elements of the DOM.

In the app component, everything was packed between `<div>` and `</div>`, if this is not the case, React throws an error message. There is a rule that the HTML code for JSX fragments must be packed into a top-level element:

  ```
   function InputT(props) {
     return ( 
      <div> 
         <label> { props.name } </label> : 
         <input type = "text" placeholder = { props.name } />
      </div>
     );
   }
  ```

The list example from [Part_5](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_5) could then look like this as a function component:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_7) --> **Examples/Part_7/src/App.js...** 

  ```
   import React from 'react';

   const recommendEbooks = [{
      title: 'JavaScript - DOM - Document-Object-Model',
      url: 'https://github.com/BellaMrx/DOM_Document-Object-Model',
      author: 'Bella Mrx',
      id: 3,
    },
     ...
    ];

   function App() {
     return (
      <div>
         <h1> My guides </h1>
         <ul>
            <Recommendation / >
         </ul>
      </div>
     );
   }

   const Recommendation = () =>
     recommendEbooks.map(book => (
      <li key = { book.id } > < MakeLink link = { book } / >
            by { book.author }) </li > 
   ));

   const MakeLink = props => 
     <a href = { props.link.url } > { props.link.title } </a>

   export default App;
  ```

 <img src="images/React_part_7.png" width="500">

In practice, it is advisable to split a component into further components, e.g. to outsource the setting of the hyperlink `<a>` as a further component. The advantage of this is that a universal component is created that can also be used in other components:

  ```
   ...

   function Recommendation() {
      return recommendEbooks.map(function (book) {
         return ( <li key = { book.id } > < MakeLink link = { book } / >
                  by { book.author }) </li > );
      });
   }


   function MakeLink(props) {
      return (<a href = { props.link.url } > { props.link.title } </a>);
   }

   ...
  ```

This example is the same as in [Part_7](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_7) only as a function declaration instead of an arrow function declaration. Function components can also be declared with arrow functions, as in JavaScript:

  ```
   function () {...}    // function declaration
   const () => {...}    // arrow function declaration
  ```


### 7.2. Class components
In the early days of React, class components were preferably used to create larger projects. Since the introduction of hooks in React, however, function components have also been used more and more frequently. 

The first example shows the function component `InputT` (from [Part_6/src/App.js](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_6)) as a class component that is outsourced to a separate file:

To convert a function component into a class component, the following is necessary:
1. the components are extended by the React-`Compoment` class with `extends Component`.
2. an empty `render()` method is created in the component.
3. the content of the component is written inside the `render()` method.
4. if `props` is used, `this.props` is used

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_8) --> **Examples/Part_8/src/InputT.js...** 

  ```
   import React, { Component } from 'react';

   class InputT extends Component {
      render() {
         return ( 
           <div>
             <label> { this.props.name } </label> :  
             <input type = "text" placeholder = { this.props.name }/> 
           </div>
         );
      }
   }
   export default InputT;
  ```

The `React` and `Component` classes were imported first. `Component` is a base class that is required to create the class component. The `Component` base class is practically extended with the `InputT` class. The class name should begin with a capital letter, it is also advisable to name the file (*InputT.js*) with the class name (`InputT`), as this makes it easier to search for errors during debugging.
Various methods can also be added to the class, but the most important and only method in this example is `render()`. This method renders the JSX code in the browser. With `export default` the class is exported, which extends the base class `Component`. The *InputT.js* file is saved in the *src* directory.

Only the class components of the *InputT.js* file now need to be imported into *App.js*:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_8) --> **Examples/Part_8/Src/App.js...**

  ```
   import React from 'react';
   import InputT from './InputT';

   function App() {
      return (
         <div>
            <h1> Login </h1>
            <InputT name = "First name" />
            <InputT name = "Last name" />
            <InputT name = "E-Mail" />
         </div>
      );
   }
   export default App;
  ```

 <img src="images/React_part_8.png" width="500">


In React, it has become established to create only one component per file, as this allows you to maintain an overview. When naming the components, the Pascal case notation has become established, i.e. the first letter is always capitalized and if further words are added, this also begins with a capital letter (`InputText`). For the file extension, *.jsx* is often used instead of *.js* to make the use of JSX within the component clear.


### 7.3. Props
Props are arguments that are passed to React components. They are always passed to a component in the same way as an HTML attribute. Props are almost like function arguments in JavaScript and attributes in HTML. 
 
In [Part_7](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_7) a global variable `recommendEbooks` was used, in practice the possibilities are limited. The more optimal solution would be to use *props*:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_9) --> **Examples/Part_9/src/App.js...** 

  ```
   import React from 'react';

   const App = () => {
     const recommendEbooks = [{
      title: 'JavaScript - DOM - Document-Object-Model',
      url: 'https://github.com/BellaMrx/DOM_Document-Object-Model',
      author: 'Bella Mrx',
      id: 3,
      },
      ...
      ];
 
      return ( 
         <div>
            <h1> My guides </h1>
            <ul>
               <Recommendation list = { recommendEbooks } / > 
            </ul>
         </div>
      );
   }

   const Recommendation = props =>
     props.list.map(book => ( 
      <li key = { book.id } > < MakeLink link = { book } / >
        by { book.author }) </li> ));

   const MakeLink = props => 
     <a href = { props.link.url } > { props.link.title } </a>

   export default App;
  ```

 <img src="images/React_part_9.png" width="500">

Here *Props* were used to pass the `recommendEbooks` array and the `Recommendation` function component, but the global scope is no longer used. *Props* cannot be changed, they are read-only. If an attempt is made to change the value, an error is thrown.

On the other hand, if a class component is to be created and used with a constructor (constructor()), the props should always be passed as an argument to the constructor and to the React component method `super()`:

  ```
   class Article extends React.Component {
     constructor(props) {
       super(props);
     }
     render() {
       return (
         <div>
           <label>{this.props.name}</label>
           <button>+</button>
           <button>-</button>
             {this.props.instock === "false"
               ? " (Not in stock)"
               : " (Available)"}
         </div>
       );
     }
   }
   ...
  ```

The `constructor()` method is called as the first method when the component is initiated to set up the initial state of the component with the initial values. This is the reason why the `constructor()` method should be called with the props as an argument. `super(props)` initiates the parent's constructor method, thus allowing the component to inherit from the parent ("React.Component`).


## 8. State management in React
React components have a built-in state object that can store properties unique to the component, often referred to as a local state. When the state object changes, the React component is re-rendered. The `state` objects allow interaction, whereas the props are used for the information flow within the component tree. The state is similar to the props, except that the state is private and is controlled exclusively by the (class) component.

This example demonstrates a counter that can be incremented and decremented within a simple class component with the identifier `Article`. Because the local state can only be used with the class component, it is necessary to create a class.

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_10) --> **Examples/Part_10/src/Article.jsx...** 

  ```
   import React from "react";
  
   class Article extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         counter: 0,
       };
     }
     render() {
       return (
         <div>
           <label>{this.props.name}</label>
           <span> : {this.state.counter} </span>
           <button>+</button>
           <button>-</button>
           <span>
             {this.props.instock === "false"
               ? " (Not in stock)"
               : " (Available)"}
           </span>
         </div>
       );
     }
   }
   export default Article;
  ```

The `state` object (here: `state.this`) is initialized in the constructor. The `state` object only has one property with `counter`, but any number of properties can be used. The *Article.jsx* file is saved in the */src* folder together with the *App.js*, which then looks like this:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_10) --> **Examples/Part_10/src/App.js...** 

  ```
   import React from "react";
   import Article from "./Article";

   const App = () => {
       return (
         <div >
           <Article name = "Article 1" instock = "true" / >
           <Article name = "Article 2" instock = "false" / >
           <Article name = "Article 3" instock = "true" / >
         </div>
       );
   };
   export default App;
  ```

 <img src="images/React_part_10.png" width="500">


#### React Hooks as an alternative
The feature with the local state no longer has to be used only with class components. With React Hooks (since version 16.8.), there is an alternative in which state and other React functions can also be used as function components. The trend is moving more towards hooks, but you should still familiarize yourself with the concept of class components so that you can better understand what is behind the hooks later on.

#### Use the `state` object in the class component
In the *Article.jsx* example, a `state` object was used in the component with `this.state.propertyname`:

  ```
   ...
   <label>{this.props.name}</label>
   <span> : {this.state.counter} </span>
   <button>+</button>
   ...
  ```

As with the props, access is via `this` and then the `state` object, followed by the identifier of the `counter` property. For all new `Article` class components, the initial addition of `counter` has been set to 0.


### 8.1. Changing the `state` object
The only place where the individual properties of `this.state` can be set is in the constructor. To subsequently change the value of the `state` object, the `this.setState()` method must be used. If the value in a `state` object changes, the component is rendered according to the new value:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_11) --> **Examples/Part_11/src/Article.jsx...** 

  ```
   ...

   class Article extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         counter: 0,
         stock: this.props.instock,
       };
     }

     incrementCounter = () => {
       if (this.state.stock === "true" && this.state.counter < 9)
         this.setState({ counter: this.state.counter + 1 });
       if (this.state.counter >= 9)
         this.setState({ stock: (this.state.stock = "false") });
     };

     decrementCounter = () => {
       if (this.state.counter && this.state.counter <= 9) {
         this.setState({ counter: this.state.counter - 1 });
         this.setState({ stock: (this.state.stock = "true") });
       }
     };

     render() {
       return (
         <div>
           {this.props.children}
           <label>{this.props.name}</label>
           <span> : {this.state.counter} </span>
           <button onClick={this.incrementCounter}>+</button>
           <button onClick={this.decrementCounter}>-</button>
           <span>
             {this.state.stock === "false" 
                ? " (Not in stock)" : " (Available)"}
           </span>
         </div>
       );
     }
   }
   ...
  ```

Here, a handler for `onClick` has been set up within `<button>`, which is triggered when the button is clicked. For the plus button, `this.incrementCounter()` is called and for the minus button, `this.decrementCounter` is called. According to the callback method, the value for `counter` is then increased or decreased by 1 via `this.setState()`.
The value of the `instock` prop was passed to the `state` object `stock`, as the props are read-only and cannot be changed. The status of `this.state.stock` is used to output whether items are still in stock or not.

  ```
   ...
     incrementCounter = () => {
       if (this.state.stock === "true" && this.state.counter < 9)
         this.setState({ counter: this.state.counter + 1 });
       if (this.state.counter >= 9)
         this.setState({ stock: (this.state.stock = "false") });
     };
   ...
  ```

Here, an `if` query as to whether `this.state.stock` is `true` is combined with the logical AND operator `&&` to determine whether the value of `this.state.counter` increases by 1. If this is no longer the case, the status of `this.state.stock` is set to `false` with `this.setState` and the state of the component is re-rendered.

  ```
   ...
      <span>
         {this.state.stock === "false" 
         ? " (Not in stock)" : " (Available)"}
      </span>
   ...
  ```

Here the output `"(Available)"` becomes `"(Not in stock)"`. For each component, a maximum of 9 elements of an item are in stock. If the value of `counter` equals 9, the value of `this.state.stock` is set to `false`, which means that no further incrementation is possible. The example can also be extended by simply adding another property to the `state` object from the static value of 9 items in order to allow a maximum number of items individually for each item.

With `this.decrementCounter()` something similar happens, where it is checked whether the value of `counter` is not equal to 0 and less than or equal to 9. Only if the operation is true, `counter` is reduced by 1 with `this.setState()` and the property of `this.state.stock` becomes `true`:

  ```
   ...
     decrementCounter = () => {
       if (this.state.counter && this.state.counter <= 9) {
         this.setState({ counter: this.state.counter - 1 });
         this.setState({ stock: (this.state.stock = "true") });
       }
     };
   ...
  ```

If the property of a `state` object is to be changed by a component, the `setState()` method should always be used to ensure that the component is refreshed and rendered.


### 8.2. Children props
This example shows how child or sub-props can be transferred to the components and used:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_11) --> **Examples/Part_11/src/App.js...** 

  ```
   ...
      <Article name = "Article 1" instock = "true" >
        <h2> Article 1 </h2>
      </Article>
      <Article name = "Article 2" instock = "false" >
        <h2> Article 2 </h2>
      </Article>
      <Article name = "Article 3" instock = "true" >
        <h2> Article 3 </h2>
      </Article>
   ...
  ```

To access the `h2` elements in the class components here, you can use the prop provided for this with `this.props.children`:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_11) --> **Examples/Part_11/src/Article.jsx...** 

  ```
   ...
   class Article extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         ...
       };
     }

   ...

     render() {
       return (
         <div>
           {this.props.children}
           <label>{this.props.name}</label>
           ...
         </div>
       );
     }
   }
   ...
  ```

 <img src="images/React_part_11.png" width="500">


## 9. Events and their handlers
React has the same events such as `click`, `change`, `mouseover` etc. that we already know from HTML. To be able to use these events, the camel case notation must be used. In React, `onclick` becomes `onClick` and the event handler must be placed in curly brackets `{}`:

usual notation:
  ```
   onclick = "handleEvent()"
  ```

in React with JSX:
  ```
   onClick = {handleEvent}
  ```

A simple example, with a message box that is displayed as soon as the button is clicked:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_12) --> **Examples/Part_12/src/App.js...** 

  ```
   import React, { Component } from "react";

   class App extends Component {
       eventButton = () => {
           alert("Button has been pressed! -> " + this);
       };
       render() {
           return ( 
             <div>
               <h1> Trigger events in React </h1> 
               <button onClick = { this.eventButton } >
               Trigger event
               </button>
             </div>
           );
       }
   }
   export default App;
  ```

 <img src="images/React_part_12.PNG" width="900">

The special feature of `this` must be pointed out here. It is not typical for React, but for JavaScript, but this can be confusing for beginners: When passing in JSX, the event method must be bound to the class with `this` (here: `this.eventButton`). In JavaSript, class methods are not bound by default. This binding can be done with the `bind()` method within the constructor or, as in the example, using the arrow function. If `eventButton = () =>` is changed to `eventButton()`, the output of `this` in the message box will be `undefined`.


### 9.1. Pass arguments to event handler
If parameters are to be passed to the event handler, the `bind()` method or an (anonymous) arrow function can also be used:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_13) --> **Examples/Part_13/src/App.js...** 

  ```
   import React, { Component } from "react";

   class App extends Component {
     eventButton = (args) => {
       alert(args + " : " + this);
     };
     render() {
       return ( 
         <div>
           <h1> Trigger events in React </h1>
           <button onClick = {
               () => this.eventButton("One argument") 
             } > Trigger event </button>
         </div>
       );
     }
   }

   export default App;
  ```

 <img src="images/React_part_13.PNG" width="900">

When the button is pressed, a simple string is passed to the event handler and output in a message box.


## 10. Life cycle of components
This topic is very helpful and important to better understand React. There are three sections to a component:

 - Mounting: This is where the component is created and integrated into the application, making it visible, i.e. the element is practically inserted into the DOM.
 - Updating: This cycle describes the time during which the component is visible and can be interacted with by the user. An update is carried out when the component is adapted, from the outside to the props and from the inside to the state.
 - Unmounting: The last cycle is triggered when the component is removed from the DOM.

In each of these lifecycles, different built-in methods are available that can be implemented and executed as soon as the component is in the corresponding cycle. These methods are also referred to as *lifecycle hooks*.

The next example shows a music playlist from which individual elements can be removed. For this example, a music database was created/simulated here *songList.js*, which contains an array of the individual song titles with ID, the title, the interpreter and the genre. The only function included here is `getPlaylist()`, which returns the complete array with the playlist:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_14) --> **Examples/Part_14/src/songList.js** 

  ```
   const songs = [{
       _id: 1234,
       song: "Stairway To Heaven",
       interpreter: "Led Zeppelin",
       genre: "Rock",
   },
   {
       _id: 1235,
       song: "Blinding Lights",
       interpreter: "The Weeknd",
       genre: "Pop",
   },
    ...
   ];

   export function getPlaylist() {
   return songs;
   }
  ```

The following examples in this chapter refer to this music playlist.

#### ! Note - constructor and other lifecycle methods are executed twice
During execution, the index.js file should be adapted later if necessary and the `<React.StrictMode>` removed to ensure that the constructors are "pure". This double execution only affects the development version. In production mode (`npm run build`) the methods are not implemented twice.


### 10.1. Mounting
React contains four built-in methods that are called in the following order when a component is mounted:
 1. `constructor()` 
 2. `getDerivedStateFromProps()`
 3. `render()`
 4. `componentDidMount()`

The `render()` method is always called. The other three methods are optional and are called when they are defined.

#### `constructor()`
This method is the first to be called when the component is initiated. Therefore, it is the ideal place to initialize the local `state` object with values. The `constructor()` method is called with the props as argument. Only within the constructor, the local `state` properties can be set directly without using the `setState` method. The `super()` method is also written with the props as an argument in the constructor, which also initiates the base classes.

#### `getDerivedStateFromProps()`
This method is called shortly before the element is rendered in the domain; it is also possible here to initialize the local `state` object with the props. The props and the local state can be passed as arguments. The return value is the `state` object with the changes or `null` if the state is returned unchanged. This method is rarely used in practice.

#### `render()`
The purpose of the function is to display the specified HTML code within the specified HTML element; without this method, the component cannot be displayed. The return value is a JSX element that is to be rendered.

#### `componentDidMount()`
This example now refers to the music playlist [Complete Code: Part_14/src/songList.js](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_14), which logs and demonstrates the complete mounting process via `console.log`. First, the code of the parent component `App` of the *App.jsx* file:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_14) --> **Examples/Part_14/src/App.js** 

  ```
   import React, { Component } from "react";
   import Songs from "./Songs";

   class App extends Component {
       state = {};
       constructor(props) {
           super(props);
           console.log("App - constructor() is called");
       }
       componentDidMount() {
           console.log("App - componentDidMount() is called");
       }
       render() {
           console.log("App - render()");
           return (
             <div> { " " } 
               <Songs playlist = "Bella" />
             </div>
           );
       }
   }
   export default App;

  ```

And the code for the child component of `App`, the `Songs` component:

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_14) --> **Examples/Part_14/src/Songs.jsx** 

  ```
   import React, { Component } from "react";
   import { getPlaylist } from "./songList";

   class Songs extends Component {
     constructor(props) {
       console.log("Songs - constructor() is called");
       super(props);
       this.state = {
         songs: getPlaylist(),
         playlist: "",
       };
     }

     componentDidMount() {
       console.log("Songs - componentDidMount() is called");
     }

     static getDerivedStateFromProps(props, state) {
       console.log("Songs - getDerivedStateFromProps() is called");
       if (props.playlist !== state.playlist) return { playlist: props.playlist };
       else return null;
       // or directly in state: playlist: this.props.playlist,
     }

     handleRemoveSong = (song) => {
       const songs = this.state.songs.filter((s) => s._id !== song._id);
       this.setState({ songs });
     };

     render() {
       console.log("Songs - render() is called");
       return (
         <div>
           <h2>{this.state.playlist}'s Playlist</h2>
           <table>
             <thead>
               <tr>
                 <th>Song</th>
                 <th>Interpret</th>
                 <th>Genre</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               {this.state.songs.map((song) => (
                 <tr key={song._id}>
                   <td>{song.song}</td>
                   <td>{song.interpreter}</td>
                   <td>{song.genre}</td>
                   <td>
                     <button onClick={() => this.handleRemoveSong(song)}>
                     Remove
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       );
     }
   }
   export default Songs;   
  ```

 <img src="images/React_part_14.PNG" width="900">

In the connector, the complete array is passed to the local state variable `songs` using the imported function `getPlaylist()` from *songList.js*. In the built-in method `getDerivedStateFromProps()`, the passed prop `playlist` was passed to the state variable `playlist` of the same name for demonstration purposes. However, it is first checked whether the value has changed. This transfer of the prop to the local state could also have been done directly in the constructor.
With `render()` the playlist is output in the local state of `this.state.song` in a table. Here the method `map()` is used to split the individual elements of the list according to their ID (for the key attribute `key`), the title, the artist and the genre. With the handler `handleRemoveSong()` a button `Remove` was added to each song to remove individual songs from the playlist. The song is passed to the `handleRemoveSong()` handler and removed with the `filter` method, with which all songs are passed to `const songs` as soon as the button is pressed. The new complete list of `songs` is then updated with `this.setState` and rendered without the removed song.


### 10.2. Updating
A component is always updated when the props or the local state change. React offers five build-in methods for this, which are called in the following order when a component is renewed:

 1. `getDerivedStateFromProps()`
 2. `shouldComponentUpdate()`
 3. `render()`
 4. `getSnapshotBeforeUpdate()`
 5. `componentDidUpdate()`

Here too, as with mounting, the `render()` method is always required and called. The other methods are optional and are called as soon as they are defined.

#### `getDerivedStateFromProps()`
This is the first method that is called when a component has been updated. The meaning of this cycle is the same as for mounting.

#### `shouldComponentUpdate()`
This method can be used to specify whether the component should be redrawn after a `setState` call. The default value `true` ensures that the component is always redrawn after a `setState` call. If this should not be the case, `shouldComponentUpdate()` can be implemented and `false` returned. This function receives the current props and the new local state as arguments. 

Example: 

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_15) --> **Examples/Part_15/src/Songs.jsx** 

  ```
   ...
    shouldComponentUpdate(newProps, newState) {
      console.log("Songs - shouldComponentUpdate() is called");
      if (newState.songs.length === 0) {
        alert(
          newProps.playlist +
            "'s playlist: The last element is deleted from the list!"
        );
      }
      return true;
    }   
   ...  
  ```

 <img src="images/React_part_15.PNG" width="900">

The `shouldComponentUpdate()` method has been implemented in the `Songs` class. With `newState.songs.length` it is checked whether the list of songs is empty. If this is the case, a message is output. `shouldComponentUpdate()` does not yet update the display, although the list is already empty.

### `render()`
The `render()` method is called when the component has been updated in order to incorporate the change into the DOM.

### `getSnapshotBeforeUpdate()` and `componentDidUpdate()`
This method can be used to add a hook that is executed after the `render` method has been called, but before the change is displayed. Here you have access to the props and the local state before the update, so it is possible to check the old values again before the new values are displayed. The methods must return a value or `null`. The return value is then available in the `componentDidUpdate()` method. The `getSnapshotBeforeUpdate()` method is not executed if the `shouldComponentUpdate()` method is `false`. 
The `componentDidUpdate()` method can be used to add a page effect, for example to make a server request for data. The values of the previous prop and the previous local state are available as arguments. The `getSnapshotBeforeUpdate()` method should always be called together with `componentDidUpdate()`, otherwise an error message will be displayed.

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_15) --> **Examples/Part_15/src/Songs.jsx** 

  ```
   ...
    getSnapshotBeforeUpdate(oldProps, oldState) {
      console.log("Songs - getSnapShotBeforeUpdate() is called");
      return Date.now();
    }

    componentDidUpdate(oldProps, oldState, snapshot) {
      console.log("Songs - componentDidUpdate() is called");
      console.log("of getSnapShotBeforeUpdate: " + snapshot);
      // here you could make a server request for data
    }   
   ...  
  ```

 <img src="images/React_part_15-2.PNG" width="900">


### 10.3. Unmounting
In this cycle, the component is removed from the DOM. If a component is to be removed, the build-in method `componentWillUnmount()` is called.

Example: 

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_16) --> **Examples/Part_16/src/App.js** & **Examples/Part_16/src/Songs.jsx** 

  ```
   ...
   class App extends Component {
     constructor(props) {
       super(props);
       this.state = { show: true };
       console.log("App - constructor() is called");
   }
   ...
     delSongs = () => {
       this.setState({ show: false });
     };
     render() {
       let mysongs;
       if (this.state.show) {
           mysongs = <Songs playlist = { "Bella" } />;
       }
       console.log("App - render()");
       return ( 
         <div> { mysongs }
           <button onClick = { this.delSongs } > 
             Remove songs component
           </button>
           <button onClick = { this.addSongs } > 
             Adding songs component
           </button>
         </div>
       );
     }

   }  
   ... 
  ```

Songs.jsx:
  ```
   ...
    componentWillUnmount() {
      console.log("Songs - componentWillUnmount() is called");
    } 
   ... 
  ```

 <img src="images/React_part_16.PNG" width="900">

Here, an additional button and the property `show` were added to the class component `App` in the local state. If the value of `show` is set to `false`, the child component `Songs` can be hidden and thus removed from the DOM, which is where `componentWillUnmount()` in the class component `Songs` comes into play. To show the playlist again, another button can be set up which sets `show` with `setState` back to `true` and is thus mounted in the DOM again.

##### Overview of the life cycle of React components

 <img src="images/React-Lifecycle.png" width="700">


### 10.4. React.Fragment
With React, it must always be noted that a component only contains one root element. In the examples above, everything was written between a `div` element for several root elements, which is still manageable for small projects. For larger projects, however, many nested containers are built inside each other in order to observe the one root element rule. React has offered *fragments* since version 16.2. These are containers that are not rendered into the DOM by React. With fragments it is possible to group elements without having to insert an explicit container element. The fragments can be used in two ways:

Long notation:
  ```
   <React.Fragment >...</React.Fragment>
  ```

Short notation:
  ```
   < >...</>
  ```

Example:
  ```
  ...
   render() {
    ...
     return (
      <React.Fragment >   // or <>
        { mysongs }
        <button onClick = { this.delSongs } > 
          Remove songs component
        </button>
        <h2>...</h2>
        <p>...</p>
      </React.Fragment>   // or </>
      );
   }
  ...
  ```

#### Context API
The Context API should also be mentioned in connection with class components. Simply put, React's Context API provides global variables independently of the component tree. This reduces the passing of values in the component tree via props, for example, which can significantly increase the complexity of the app. The context API with global variables only makes sense if the information is used in many places in the app. The Context API provides a range of methods and components for this purpose. More on this in the next chapter *React-Hooks-API*.


## 11. The Raect-Hooks-API
With version 16.8. the *React-Hooks-API* was introduced in React. With this API, it is possible to use a local state and other React (life cycle) functions in function components that could previously only be used in class components. By introducing the Hooks API, the function components are favored over the class components when developing React applications. The React Hooks API is simpler, making functional components easier to understand overall and not having the complexity of 'this' within class components. It is also possible to develop applications without class components and lifecycle hooks using the React Hooks API.

Hook functions all begin with the prefix `use`, followed by the actual identifier of the hook. These hook functions cannot be used in class components. The hooks can only be used at the top level in the function component, i.e. not within loops, `if` queries or functions that are not hooks. The Hooks API offers various `use` functions, these are the three most important ones: 

- `useState`: The state hook is used to implement the local state within a function component. 
- `useEffect`: The effect hook can be used to emulate the lifecycle methods. This can be used to react to the lifecycle such as attaching, changing or detaching a component in the DOM.
- `useContext`: The context hook provides a way of storing objects in a central location and accessing them from another location.

There are other functions of the Hooks API such as `useReducer`, `useCallback`, `useMemo`, `useRef`, `useImperativeHandle`, `useLayoutEffect` and `useDebugValue`. It is also possible to implement your own hooks.


### 11.1. Local state in function components with useState
The most important function is probably the `useState` function. This means that a local state can now also be created and managed for function components. The following example shows the simple use of `useState`, for demonstration purposes everything is in one file, but in practice each function component should be used in its own file:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_17) --> **Examples/Part_17/src/App.js** 

  ```
  ...
   function App() {
     return ( 
       <React.Fragment >
         <h1> Demonstration </h1>
        <Simple titel={"The use of useState"} />
       </React.Fragment>
     );
   }

   function Simple(props) {
     const [counter, setCounter] = React.useState(0);

     return ( 
       <React.Fragment >
         <h2> { props.titel } </h2>
         <p> The button was clicked {counter}x! </p>
         <button onClick = {
             () => setCounter(counter + 1) } > Push me </button>
       </React.Fragment>
     );
   }
  ...
  ```

Here you can see how the props and the local state can be used in the `Simple` function component. The `useState` function returns an array that is split into two constants using the destructuring assignment. The first entry `counter` is the current value of the local state, which is set to the initial value during the first rendering and which is passed as a parameter within the `useState` hook (here `0`). The second entry (here `setCounter`) is a function, also called a setter function, with which this local state can be changed. Each change to the local state with this function ensures that the component is resent with the changes. Any data type such as string, Boolean, array or objects can be used as an argument for `useState`.

 <img src="images/React_part_17.png" width="500">

A callback function can also be used as a setter function (here `setCounter`), which then returns the current state of the local state. This can be useful when working with asynchronous code:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_18) --> **Examples/Part_18/src/App.js** 

  ```
  ...
   function Simple(props) {
     const [counter, setCounter] = React.useState(0);

     function handleClick() {
       setCounter(counter + 1);
     }

     return ( 
       <React.Fragment >
         <h2> { props.titel } </h2>
         <p> The button was clicked {counter}x! </p >
         <button onClick = { handleClick } > Push me </button>
       </React.Fragment>
     );
   }
  ...
  ```

It is also possible to use several hooks in one function component:

  ```
  ...
   function Simple(props) {
     const [counter, setCounter] = React.useState(0);
     const [name, setName] = React.useState('Bella Mrx'); 
   }
  ...
  ```

### 11.2. The component lifecycle with useEffect
This function is an alternative to the lifecycle methods of class components `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`. The `componentDidMount` method can be used to load data from a server or simply set timers, for example. However, the possibilities with the effect hook are limited, as such a side effect must not occur when rendering a component, the effect hook is always executed after rendering. The syntax of the `useEffect` hook is as follows:

  ```
   useEffect(callback, dependencyArray)
  ```

The page effect to be executed is `callback`. The `dependencyArray` can have the following values:
 - No value: Always execute.
 - `[]` : Execute once at component start.
 - `[x]` : Execute only if `x` has changed.

Example:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_19) --> **Examples/Part_19/src/App.js** 

  ```
  ...
   import React, { useEffect } from "react";
   ...
   function Simple(props) {
       const [counter, setCounter] = React.useState(0);

       useEffect(() => {
           const interval = setInterval(() => {
               setCounter(counter + 1);
           }, 1000);
           return () => clearInterval(interval);
       }, [counter]);

       return ( 
         <React.Fragment >
           <h2 > { props.titel } </h2>
           <p> The side effect was { counter }x executed! </p>
         </React.Fragment>
       );
   }
  ...
  ```

 <img src="images/React_part_19.png" width="500">

Here, the function component `Simple` is created with the effect hook. Instead of pressing a button every time, a `setInterval` has been set, which is called every second and changes the local state (here `counter`) with the setter (here `setCounter`), thereby causing the component to be re-rendered. 
In relation to the life cycle of a component, this `useEffect` hook corresponds to a mount with `componentDidMount` and an update `componentDidUpdate`. As an additional function can optionally be returned here with `return`, this corresponds to the remount cycle with `componentWillUnmount`.


### 11.3. Access to the context with useContext
This allows the values to be made available to the React application independently of the component tree (in simple terms: global variables) and thus reduce the props. The Context API is a simple way to provide data to the component tree. However, a context should only be used if certain information is required in many places in the application.
With `useContext` you now also have access to the `Context` object, which can be created with the `createContext` function. The return value is a reference to the value of the context, which can then be read out within the component. 

Example:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_20) --> **Examples/Part_20/src/App.js** 

  ```
  ...
   const appContext = React.createContext();

   const App = () => {
       var user = {
           nickname: "BellaMrx",
           name: "Bella Mrx",
           email: "contact@book-of-coding.com",
           private: true,
       };
       return (
         <appContext.Provider value = { user } >
           <React.Fragment >
             <h1> Demonstration of useContext </h1>
             <Copyright />
             <Status />
           </React.Fragment>{" "} 
         </appContext.Provider>
       );
   }

   const Copyright = () => {
       const user = React.useContext(appContext);
       return ( 
         <React.Fragment >
           <footer> © <a href = { "mailto:" + user.email } >
             { user.name } </a>
           </footer> 
         </React.Fragment>
       );
   }

   const Status = () => {
     const user = React.useContext(appContext);
     return ( 
       <React.Fragment >
         <p> { user.nickname + " " } is online { " " }
               { user.private === true 
                  ? ( <small> { "Name:Hidden" } </small> )
                  : ( <small> { user.name } </small> ) } 
         </p>
       </React.Fragment>
     );
   }
  ...
  ```

 <img src="images/React_part_20.png" width="500">

Before a context can be used, such an object must first be created with `createContext()`. In practice, this is usually done in a separate file, which must then also be exported via `export default`.

  ```
   const appContext = React.createContext(); 
  ```

The context is integrated via the `provider component`, in which the context for the elements in the component tree is made available. For the data in the context, some values were placed in `user` and these were transferred to the provider as a `value` prop.

  ```
  ...
      <appContext.Provider value = { user } >
       ...
      </appContext.Provider>
  ...
  ```

All subsequent child and sub-child elements now have access to `user` in the same way as to a prop value. In the function component, the `useContext` hook must now be ejected and can access the values of the context as with the props.

  ```
  ...
   const Copyright = () => {
       const user = React.useContext(appContext);
       return ( 
         <React.Fragment >
           <footer> © <a href = { "mailto:" + user.email } >
             { user.name } </a>
           </footer> 
         </React.Fragment>
       );
   }
  ...
  ```

If the value of the context in the nearest provider is changed, the `useContext` hook triggers a rendering of the component with the current data.


### 11.4. Custom Hooks
This makes it possible to create your own custom hook using the hooks provided by React. In practice, these should be saved in a separate file and then exported. The `use` naming convention should also be used when naming your own hooks. Such hooks are useful if similar logic is always to be used in several components.

In the next example, a counter component with a timer is created, where the alphabet from a to z is to be output:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_21) --> **Examples/Part_21/src/useAlphaCounter.js** 

  ```
   import React, { useState, useEffect } from "react";

   function useAlphaCounter(speed = 1000) {
       const [counter, setCounter] = useState(0);
       useEffect(() => {
           const interval = setInterval(() => {
               if (counter >= 25) setCounter(counter - 25);
               else setCounter(counter + 1);
           }, speed);
           return () => clearInterval(interval);
       }, [counter]);
       return String.fromCharCode(97 + counter);
   }
   export default useAlphaCounter;
  ```

Here, the counting interval is set to 0 to 25 with `useEffect` and then repeated from the beginning. The speed of the interval can also be optionally specified via the user-defined hook `useAlphaCounter()`. If no interval is used, this is 1000ms by default. The value is then added to 97 as the return value and returned as a letter with `String.formCharCode`. More complex hooks often work with several state values, in which case an array or object can also be used as the return value.

The use of the custom hook, here again in the `App` component of *App.js*, is quite similar to the basic hook:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_21) --> **Examples/Part_21/src/App.js** 

  ```
   import React from "react";
   import useAlphaCounter from "./useAlphaCounter";

   function App() {
       const counter_1 = useAlphaCounter();
       const counter_2 = useAlphaCounter(500);
       return ( 
         <React.Fragment >
           <h1 > Demonstration </h1>
           <p> { counter_1 } { counter_2 } </p>
         </React.Fragment>
       );
   }
   export default App;
  ```

 <img src="images/React_part_21.png" width="400">


## 12. CSS and React
React does not make any special specifications, but there are various options in React. 

In the example, a playlist is styled, which is the same playlist from the previous examples, but this time using the Hook API and the function component instead of the class component:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_22) --> **Examples/Part_22/src/Songs.jsx** 

  ```
  import React, { Component } from "react";
  import { getPlaylist } from "./songList";

  const Songs = (props) => {
    const [songs, setSongs] = React.useState(getPlaylist());

    const handleRemoveSong = (song) => {
      const newsongs = songs.filter((s) => s._id !== song._id);
      setSongs(newsongs);
    };

    return (
      <React.Fragment >
        <h2>{props.playlist}s Playlist</h2>
        <table
          style={{
            width: "80%",
            backgroundColor: "greenyellow",
            textAlign: "left",
            padding: "3px",
          }}
        >
          <thead>
            <tr>
              <th>Song</th>
              <th>Interpreter</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song._id} style={{ backgroundColor: "white" }}>
                <td>{song.song}</td>
                <td>{song.interpreter}</td>
                <td>{song.genre}</td>
                <td>
                  <button onClick={() => handleRemoveSong(song)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  };
  export default Songs;
  ```
The app component in the *App.js* is kept simple:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_22) --> **Examples/Part_22/src/App.js** 

  ```
  import React, { Component } from "react";
  import Songs from "./Songs";


  const App = () => {
    return (
      <React.Fragment >
        <Songs playlist = "Bella" />
      </React.Fragment>
    );
  };

  export default App;
  ```

 <img src="images/React_part_22.png" width="900">


### 12.1. Styling with the `style` attribute
The easiest way to style a React component is to use the `style` attribute. This works slightly differently in React than in HTML, as it is a JavaScript object that is converted by React into a corresponding `style` specification. In JSX, instructions are set in curly brackets `{}`, and JavaScript objects are set in curly brackets as well, so in the following example the content of the `style` attribute is set between two curly brackets `{{}}`. The spelling of the CSS property must be noted in camel case notation (e.g. `text-align` becomes `textAlign`):

  ```
   ...
      <React.Fragment >
        <h2>{props.playlist}s Playlist</h2>
        <table
          style={{
            width: "80%",
            backgroundColor: "greenyellow",
            textAlign: "left",
            padding: "3px",
          }}
        >
          <thead>
            <tr>
              <th>Song</th>
              <th>Interpreter</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song._id} style={{ backgroundColor: "white" }}>
                <td>{song.song}</td>
                <td>{song.interpreter}</td>
                <td>{song.genre}</td>
                <td>
                  <button onClick={() => handleRemoveSong(song)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
   ...
  ```

The use of inline style should be used sparingly, as the code is unnecessarily bloated and restricts reusability. This can be improved somewhat by turning the inline style into a JavaScript object:

  ```
  ...
  const mystyle = {
    width: "80%",
    backgroundColor: "greenyellow",
    textAlign: "left",
    padding: "3px",
  };
  
  return (
    <React.Fragment >
      <h2>{props.playlist}'s Playlist</h2>
      <table style={mystyle}>
        <thead>
          <tr>
          ...
    </React.Fragment>
  ...
  ```


### 12.2. Use CSS classes in JSX
Using the `class` attribute is a much better and cleaner thing to do in Raect. However, `class` cannot be used via JSX because it is a JavaScript keyword. Therefore, `className` must be used instead. To separate CSS cleanly from other code, a separate file should also be created here. When a new project is created with `create-react-app`, React creates the `App.css`. The following CSS code is now added to this *App.css*:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_23) --> **Examples/Part_23/src/App.css** 

  ```
  .playlist_table {
      width: 80%;
  }

  .playlist_table th {
      padding: 0.2em;
      text-transform: uppercase;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      text-align: left;
  }

  .playlist_table tr:nth-child(even) {
      background: lightgray;
  }

  .playlist_table td:nth-child(1) {
      font-weight: bold;
  }

  .playlist_table td {
      padding: 0.25em;
  }

  .playlist_table tr:hover {
      background: rgb(212, 89, 85);
      color: white;
  }

  .playlist_button {
      background-color: darkgrey;
      border: none;
      color: white;
      padding: 12px 35px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      -webkit-transition-duration: 0.4s;
      /* Safari */
      transition-duration: 0.4s;
  }

  .playlist_button_hover:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  ```

To include this file in *App.js*, it must be imported as follows:

  ```
   import "./App.css";
  ```

Now CSS can be used as usual to style the component. Now comes the code snippet of the *Songs.jsx* file in which the table and button are styled with the *App.css* file:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_23) --> **Examples/Part_23/src/Songs.jsx** 

  ```
  ...
    <React.Fragment >
      <h2>{props.playlist}'s Playlist</h2>
      <table className="playlist_table">
        <thead>
          <tr>
            <th>Song</th>
            <th>Interpreter</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song._id}>
              <td>{song.song}</td>
              <td>{song.interpreter}</td>
              <td>{song.genre}</td>
              <td>
                <button onClick={() => handleRemoveSong(song)} className="playlist_button playlist_button_hover">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  ...
  ```
 <img src="images/React_part_23.jpg" width="900">


### 12.3. CSS modules in React
Standard-compliant CSS can also be used here, but the CSS modules are only valid for the current component. In order for Css modules to be imported into a component, the module must end with *module.css*. In relation to the previous example, the *App.css* only needs to be renamed to *App.module.css*, so the CSS modules have been activated.

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_24) --> **Examples/Part_24/src** 

In the component file *Songs.jsx*, the file *App.module.css* must now be imported as a JavaScript object as follows:
  ```
   import styles from "./App.module.css";
  ```

The name `styles` can be chosen freely. Instead of noting the `className`, the CSS class can be accessed directly via the `styles` object:
  ```
   <table className={styles.playlist_table}>
  ```

The advantage of CSS modules is that these modules are only available within the component into which they were imported.


### 12.4. CSS in JavaScript - Styled Components
With Styled Components, there is another way to use CSS in React. This is a real CSS JavaScript approach without an intermediate CSS file. However, a tool must be installed first. This can be done in the command line as follows:
  ```
   $ npm install styled-components
  ```

Once it has been installed, it is imported into the React application as follows:
  ```
   import styled from "styled-components";
  ```

 [Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_25) --> **Examples/Part_25/src** 

**Songs.jsx**
  ```
  ...
  const Button = styled.button`
    background-color: darkgrey;
    border: none;
    color: white;
    padding: 12px 35px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    :hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  `;

  const StyledTable = styled.table`
    width: ${(props) => (props.width ? props.width : "80%")};
    th {
      padding: 0.5em;
      text-transform: uppercase;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      text-align: left;
    }
    tr:nth-child(even) {
      background: lightgray;
    }
    td:nth-child(1) {
      font-weight: bold;
    }
    td {
      padding: 0.5em;
    }
    tr:hover {
      background: rgb(212, 89, 85);
      color: white;
    }
  `;
  ...
  ```

Template strings and functions are used here. Everything between the backticks is considered an argument, and the `styled` object is used to access the necessary elements (`styled.button`, `styled-table`). By using `const StyledTable = styled.table`, the Styled Components creates a new table component and assigns it the CSS property defined in the template literal.

**Songs.jsx**
  ```
  ...
  <React.Fragment>
        <h2>{props.playlist}'s Playlist</h2>
        <StyledTable width="95%">
          <thead>
            <tr>
              <th>Song</th>
              <th>Interpreter</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song._id}>
                <td>{song.song}</td>
                <td>{song.interpreter}</td>
                <td>{song.genre}</td>
                <td style={{ textAlign: "center" }}>
                  <Button onClick={() => handleRemoveSong(song)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </React.Fragment>
  ...
  ```

Access via the props is also possible in a styled component. To do this, a function must be called in the template string, which receives the props as the first parameter:
  ```
  ...
    <StyledTable width="95%">
     ...
    </StyledTable> 
  ...
  ```

Here, the width of the table is determined with the 'width' prop instead of specifying a fixed width in the styled components. This can be used with an inline function as follows:
  ```
  ...
  const StyledTable = styled.table`
    width: ${(props) => (props.width ? props.width : "80%")};
  ...
  `;
  ...
  ```

Styled components are not the only implementation of CSS-in-JS concepts. More information on this can be found here [styled components](https://styled-components.com/docs/basics). 



## 13. Forms in React
Form elements can also be used in React to interact with users. In React, the component itself is responsible for responding to it. In React, form handling is done via the so-called *Controlled Components* and *Uncontrolled Components*.


### 13.1. Controlled Components
When a character entry is made in a single-line text input field, the component reacts to an event. The new value is determined using an event handler and the value is set to the state of the component using a function. Calling the function also re-renders the component in React. This applies not only to the `input` element, but also to `<option>` and `<textarea>`.
In order to make the component a controlled component, a `value` attribute must be set. Once the `value` attribute is set, the component is called a controlled component in React. Here you now have to take care of synchronizing the React state of the form field:

  ```
   <input type='text' value={username} />
  ```

This `value` attribute makes the difference between a controlled and uncontrolled component. The same applies to `<textarea>` and `<select>`. In addition, for `<select>` the `value` attribute is an array. The value of the `value` attribute must be a string.

| HTML element                | Attribute |
| --------------------------- | --------- |
| `<input>`                   | `value`   |
| `<input>` (radio, checkbox) | `checked` |
| `<textarea>`                | `value`   |
| `<select>`                  | `value`   |
| `<option>`                  | `value`   |

Once the attribute has been set for a controlled component, the corresponding code must also be implemented in the component. If no further precautions are taken for the line `<input type='text' value={username} />` with the `value` attribute, React will report with a warning that a `value` value does exist but an EventHandler for `onChange` is missing.
For the change, the `onChange` event must be handled in order to then transfer it to the React state. The `onChange` event is always thrown when one of the `value`, `checked` or `selected` attributes has changed. In React, `<input type="text"/>` is thrown for single-line text and `<textarea>` is thrown after each new character input for multi-line text. The new value can then be queried in the event handler with `target.value` or `target.selected`.

An example with a controlled component, with a single-line input field:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_26) --> **Examples/Part_26/src/Login.jsx** 

  ```
  ...
   const Login = () => {
       const [username, setUsername] = React.useState("");

       const submitForm = (e) => {
           e.preventDefault();
           console.log(username);
       };

       return ( 
         <form method = "post" onSubmit = { submitForm } >
           <p> The username is: { username } </p>
           <p> < input type = "text"
                 value = { username }
                 onChange = {
                    (e) => setUsername(e.target.value) }
               />
               <input type = "submit" />
             </p>
         </form>
       );
   };
  ...
  ```
 <img src="images/React_part_26.png" width="400">

By using the attribute `value`, `checked` or `selected` it is possible to convert the component into a controlled component. This prevents changing the `value` attribute in the native DOM element and control is taken over by React or the programmer with the `onChange` event. Only by rendering the `value` attribute will the native DOM element be updated.


### 13.2. Uncontrolled Components
Reasons for using uncontrolled components are, for example, if you simply want to create static form elements that can then be processed on the server and do not require any interaction with React. The same example as with controlled components, but now with uncontrolled components:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_27) --> **Examples/Part_27/src/Login.jsx** 

  ```
  ...
   const Login = () => {
     const [username, setUsername] = React.useState("");

     const submitForm = (e) => {
         e.preventDefault();
         setUsername("Uncontrolled!");
     };

     return ( 
       <form method = "post" onSubmit = { submitForm } >
         <p> The username is: { username } </p>
         <p>< input type = "text"
              onChange = {
                (e) => setUsername(e.target.value) }
            />
           <input type = "submit" />
         </p>
       </form>
     );
   };
  ...
  ```
 <img src="images/React_part_27.png" width="400">

The `value` attribute is missing here, but the example initially does exactly the same as the controlled component before. But there is a difference: While the data in a controlled component is handled by a React component, in an uncontrolled component the data is handled by the DOM. However, since a one-way data binding takes place here, the state `username` is updated in the example as soon as the `onChange` event is triggered on the text field. However, if the text field is changed somewhere else, as here with `setUsername("Uncontrolled!")`, after pressing the button it is demonstrated that the change no longer applies to the text field itself.

If you want to pass an initial value to an uncontrolled component without immediately turning it into a controlled component with the `value` attribute, React offers the `defaultValue` attribute. For checkboxes and radioboxes there is the `defaultChecked` attribute:

  ```
   <input type="text" defaultValue = "Your name"
     onChange = {
      (e) => setUsername(e.target.value) }
   />
  ```


### 13.3. Accessing the native DOM via a reference
As a rule, React does not work directly with the native DOM elements; the information is first entered via a virtual DOM, and native elements are only created in the DOM when the components are rendered. But sometimes you want to access the native DOM directly, for example to call functions like `focus()` that are not supported by React. For such purposes, the `ref` attribute can be specified with a reference function. To do this, a hook must first be created with `useRef`. The returned object from `useRef` remains identical after all render cycles. However, a change to the object, in contrast to a state, does not lead to an update of the UI. The returned object has a `current` entry, which can be used to access all functions defined via the DOM API.

The example shows access with the `ref` attribute to the uncontrolled component from the previous example:

[Complete Code](https://github.com/BellaMrx/Basics_of_React/tree/main/Examples/Part_28) --> **Examples/Part_28/src/Login.jsx** 

  ```
  ...
   const Login = () => {
     const inputValue = React.useRef();

     const submitForm = (e) => {
         e.preventDefault();
         console.log(inputValue.current.value);
     };
     const setFocus = () => {
         inputValue.current.focus();
     };

     return (
       <form method = "post" onSubmit = { submitForm }>
         <p> The username is: </p>{" "} 
         <p><input type = "text" ref = { inputValue } />
            <input type="submit" / > { " " }
            <button onClick = { setFocus } > Set focus </button>
         </p>{" "}
       </form>
     );
   };
  ...
  ```
 <img src="images/React_part_28.jpg" width="400">

The `useRef` hook first creates a reference object that is always valid throughout the render cycle of the component. This hook is then passed in the `ref` attribute of the single-line text field. After rendering, you have a reference to the native HTML elements in the DOM via `current` and can then work with them. In the example, `inputValue.current.value` is used to determine the current value of the text field when the `Submit` button is pressed. By clicking the `Set focus` button, the callback function `setFocus` is called, and the focus is set on the input field with `inputValue.current.focus()`.

Instead of a reference function, an ordinary callback function can also be passed to the `ref` attribute. However, this callback function is only called when the DOM element is created and destroyed again. This can be useful if you want to react accordingly when an element is created or destroyed.


# The end
This is just an introduction to **React**, there is much more to know about them. But these are already one of the most important topics that everyone should know.

If you don't know HTML, CSS or JavaScript yet, have a look here:
  - [WebDevelopment Basics](https://github.com/BellaMrx/WebDevelopment_Basics) - Basics Guide for web developers
  - [HTML Guide](https://github.com/BellaMrx/HTML_Guide) - Detailed guide about HTML5 (all basics for HTML)
  - [HTML Cheat Sheets](https://github.com/BellaMrx/HTML_Cheat_Sheets) - All HTML5 elements and their attributes
  - [CSS Guide](https://github.com/BellaMrx/CSS_Guide) - Detailed guide about CSS (Introduction to CSS, CSS Selectors, Inheritance and the cascade, CSS Box Model, CSS Positioning, Flexbox, Responsive Web Design, CSS Grid Layout, Styling with CSS, Testing and Organizing) 
  - [Sass and SCSS Basic Guide](https://github.com/BellaMrx/Sass_and_SCSS) - An introduction to the CSS preprocessor Sass

  **JavaScript Basics:**

  1. [JS Introduction](https://github.com/BellaMrx/JS_introduction) - An introduction to JavaScript
  2. [Arrays, functions, objects in JS](https://github.com/BellaMrx/Arrays_functions_objects_in_JS) - Introduction: Arrays, functions and objects in JavaScript
  3. [DOM - Document Object Model](https://github.com/BellaMrx/DOM_Document-Object-Model) -  Introduction to the **DOM** and the **DOM** manipulation - Change web pages dynamically  
  4. [Introduction to Web APIs](https://github.com/BellaMrx/JavaScript_Introduction-To-Web-APIs)
  5. [Introduction to Ajax and jQuery](https://github.com/BellaMrx/JavaScript_Introduction_to_Ajax_and_jQuery)
  6. You are here --> [Basics_of_React](https://github.com/BellaMrx/Basics_of_React)

Or just visit my GitHub profile, you can find all guides/tutorials there [BellaMrx](https://github.com/BellaMrx)

Thanks for the attention.

#### This is the end, beautiful friend... ;)