/* 
🌾🌾🌾 Setup Node and NPM 🌾🌾🌾
🌾 🌾
🌾 Node.js Site Link: https://nodejs.org/
🌾 Check Node Version: node -v Or node --version
🌾 Check NPM version: npm -v
🌾 NPM Repository: https://npmjs.com/

🌾 Setup Node Modules:🌾 
🌾 Check all the available commands : npm help
🌾 Initialize with package.json file: npm init
🌾 Install date-format Package: npm install date-format --save
🌾 Install bootstrap Package: npm install bootstrap --save
🌾 Unistall bootstrap Package: npm uninstall bootstrap --save
🌾 Install Packages from package.json: npm install
🌾 Install bootstrap 3.3.7 version: npm install bootstrap@3.3.7 --save
🌾 Update bootstrap package: npm update bootstrap
🌾 Install live-server as Dev Dependency: npm install live-server --save-dev
🌾 uninstall live-server from Dev Dependency: npm uninstall live-server --save-dev
🌾 Install typescript as Global Dependency: npm install typescript -g
🌾 Uninstall typescript From Global Dependency: npm uninstall typescript -g
🌾 Check Local Root: npm root
🌾 Check Global Root: npm root-g

*/
/* 
🌾🌾🌾 Version Control with Git 🌾🌾🌾

🌾





🌾🌾🌾 React Start 🌾🌾🌾
🌾🌾Basic Feature and Syntax🌾🌾
🅾️1️⃣. Writing First React Code🅾️
Create codepen.io account:
js setting: JS Preprocessor: Babel
Add External Scripts: react and reactDOM

===HTML:
<div id="app"> </div>
===CSS:
.person {
    border: 1px solid red;
    padding: 20px;
    margin: 20px;
    display: inline-block;
}
===JS:
function Person (props){
  return(
    <div className="person">
      <h4>Name: {props.name}</h4>
      <p>Age: {props.age}</p>
    </div>
  );
}

let persons = (
  <div>
    <Person name="Nipun" age="38"/>
    <Person name="Rahat" age="35"/>
    <Person name="Sujon" age="28"/>
  </div>
)

ReactDOM.render(persons, document.getElementById("app"));


🅾️2️⃣. Install create-react-app🅾️
1st step: install:  npm install create-react-app -g
2nd step: Go to cmd & create-react-app (appName)

🅾️3️⃣//JSX🅾️
import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className='App'>
  //     <h1>Welcome to react Course</h1>
  //     <Person />
  //   </div>
  // );

  return React.createElement('div', { className: "App" }, React.createElement('h1', null, "React course"), <Person />);

}

function Person() {
  return (
    <div >
      <h1>JavaScript XML</h1>
    </div>
  );
}

export default App;


🅾️ Writing Class Component 🅾️

import React from 'react';
import './App.css';
import Person from './Person';
import { Component } from 'react';

// Functional Component
// function App() {
//   return (
//     <div className='App'>
//       <h1>Welcome to react Course</h1>
//       <Person />
//     </div>
//   );
// }

// Class component
class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Welcome to react Course</h1>
        <Person />
      </div>
    );
  }
}

export default App;

🅾️ Dynamic Functional Component 🅾️ 

App.js:
import React from 'react';
import './App.css';
import Person from './Person';
import { Component } from 'react';


class App extends Component {
  render() {

    return (
      <div className='App'>
        <h1>Welcome to react Course</h1>
        <Person name="Rahim" age="28" />
        <Person name="kamal" age="48" />
        <Person name="joy" age="18" />
        <Person name="rahat" age="38" />
      </div>
    );
  }
}

export default App;

Person.js:
import React from "react";

let Person = (props) => {
    return (
        <div >
            <h3>Name: {props.name} and Age: {props.age} years</h3>
        </div>
    );
}

export default Person;


🅾️ Dynamic Class component 🅾️
import React, { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Name: {this.props.name} and Age: {this.props.age}</h2>
                <h3>Ex Info: {this.props.children}</h3>
            </div>
        )
    }
}


export default Person;


🅾️ 10. Writing a new Component🅾️ 

🅾️ 11. State of a component🅾️ 
App.js:
import React from 'react';
import './App.css';
import Book from './components/Book';
import { Component } from 'react';


class App extends Component {

  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "Mind set", writer: "Dan Brown" },
      { bookName: "High per", writer: "George Orwell" }
    ],
    otherProp: "Other Properties"
  }
  render() {

    return (
      <div className='App'>
        <h1>Book List</h1>
        <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
        <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} />
      </div>
    );
  }
}

export default App;

Book.js:
import React from "react";

const Book = (props) => {
    return (
        <div>
            <h3>Book: {props.bookName}</h3>
            <h4>Writer: {props.writer}</h4>
        </div>
    )
}

export default Book;



🅾️12. Changing state with JS event 🅾️ 
App.js:
import React from 'react';
import './App.css';
import Book from './components/Book';
import { Component } from 'react';


class App extends Component {

    state = {
        books: [
            { bookName: "1984", writer: "George Orwell" },
            { bookName: "Mind set", writer: "Dan Brown" },
            { bookName: "High per", writer: "George Orwell" }
        ],
        otherProp: "Other Properties",
    }

    changeBookState = () => {
        this.setState({
            books: [
                { bookName: "Ninteen eight", writer: "George Orwell" },
                { bookName: "Mind set", writer: "Dan Brown" },
                { bookName: "Metmorphosis", writer: "Franz Kafka" }
            ],
        })
    }

    render() {

        return (
            <div className='App'>
                <h1>Book List</h1>
                <button onClick={this.changeBookState}>Change State</button>
                <Book
                    bookName={this.state.books[0].bookName}
                    writer={this.state.books[0].writer} />
                <Book
                    bookName={this.state.books[1].bookName}
                    writer={this.state.books[1].writer} />
                <Book
                    bookName={this.state.books[2].bookName}
                    writer={this.state.books[2].writer} />
            </div>
        );
    }
}

export default App;

Book.js: .....

🅾️ 13. Pass Method in props 🅾️ 
import React from 'react';
import './App.css';
import Book from './components/Book';
import { Component } from 'react';


class App extends Component {

    state = {
        books: [
            { bookName: "1984", writer: "George Orwell" },
            { bookName: "Mind set", writer: "Dan Brown" },
            { bookName: "High per", writer: "George Orwell" }
        ],
        otherProp: "Other Properties",
    }

    changeBookState = newBookName => {
        this.setState({
            books: [
                { bookName: newBookName, writer: "George Orwell" },
                { bookName: "Mind set", writer: "Dan Brown" },
                { bookName: "Metmorphosis", writer: "Franz Kafka" }
            ],
        })
    }

    render() {

        return (
            <div className='App'>
                <h1>Book List</h1>
                <button onClick={() => this.changeBookState(1971)}>
                    Change State
                </button>
                <Book
                    bookName={this.state.books[0].bookName}
                    writer={this.state.books[0].writer} />
                <Book
                    bookName={this.state.books[1].bookName}
                    writer={this.state.books[1].writer} />
                <Book
                    bookName={this.state.books[2].bookName}
                    writer={this.state.books[2].writer}
                    change={this.changeBookState.bind(this, 2004)} />
            </div>
        );
    }
}

export default App;

Book.js:
import React from "react";

const Book = (props) => {
    return (
        <div>
            <h3 onClick={props.change} >Book: {props.bookName}</h3>
            <h4>Writer: {props.writer}</h4>
        </div>
    )
}

export default Book;


🅾️ 14. Change state with input elements 🅾️ 
App.js:
import React from 'react';
import './App.css';
import Book from './components/Book';
import { Component } from 'react';


class App extends Component {

    state = {
        books: [
            { bookName: "1984", writer: "George Orwell" },
            { bookName: "Mind set", writer: "Dan Brown" },
            { bookName: "High per", writer: "George Orwell" }
        ],
        otherProp: "Other Properties",
    }

    changeBookState = newBookName => {
        this.setState({
            books: [
                { bookName: newBookName, writer: "George Orwell" },
                { bookName: "Mind set", writer: "Dan Brown" },
                { bookName: "Metmorphosis", writer: "Franz Kafka" }
            ],
        })
    }

    changeWithInputState = (event) => {
        this.setState({
            books: [
                { bookName: event.target.value, writer: "George Orwell" },
                { bookName: "Mind set", writer: "Dan Brown" },
                { bookName: "Metmorphosis", writer: "Franz Kafka" }
            ],
        })
    }

    render() {

        return (
            <div className='App'>
                <h1>Book List</h1>
                <button onClick={() => this.changeBookState(1971)}>
                    Change State
                </button>
                <input type="text" onChange={this.changeWithInputState} />
                <Book
                    bookName={this.state.books[0].bookName}
                    writer={this.state.books[0].writer}
                    inputName={this.changeWithInputState} />
                <Book
                    bookName={this.state.books[1].bookName}
                    writer={this.state.books[1].writer} />
                <Book
                    bookName={this.state.books[2].bookName}
                    writer={this.state.books[2].writer}
                    change={this.changeBookState.bind(this, 2004)} />
            </div>
        );
    }
}

export default App;

Book.js:
import React from "react";

const Book = (props) => {
    return (
        <div>
            <h3 onClick={props.change} >Book: {props.bookName}</h3>
            <h4>Writer: {props.writer}</h4>
            <input type="text" onChange={props.inputName} value={props.bookName} />
        </div>
    )
}

export default Book;


🅾️ 15. Styling Components🅾️
App.js:
import React from 'react';
import './App.css';
import Book from './components/Book';
import { Component } from 'react';


class App extends Component {

    state = {
        books: [
            { bookName: "1984", writer: "George Orwell" },
            { bookName: "Mind set", writer: "Dan Brown" },
            { bookName: "High per", writer: "George Orwell" }
        ],
        otherProp: "Other Properties",
    }

    changeBookState = newBookName => {
        this.setState({
            books: [
                { bookName: newBookName, writer: "George Orwell" },
                { bookName: "Mind set", writer: "Dan Brown" },
                { bookName: "Metmorphosis", writer: "Franz Kafka" }
            ],
        })
    }

    changeWithInputState = (event) => {
        this.setState({
            books: [
                { bookName: event.target.value, writer: "George Orwell" },
                { bookName: "Mind set", writer: "Dan Brown" },
                { bookName: "Metmorphosis", writer: "Franz Kafka" }
            ],
        })
    }

    render() {

        const style = {
            border: "1px solid red",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white"
        }

        return (
            <div className='App'>
                <h1 style={style}>Book List</h1>
                <button onClick={() => this.changeBookState(1971)}>
                    Change State
                </button>
                <input type="text" onChange={this.changeWithInputState} />
                <Book
                    bookName={this.state.books[0].bookName}
                    writer={this.state.books[0].writer}
                    inputName={this.changeWithInputState} />
                <Book
                    bookName={this.state.books[1].bookName}
                    writer={this.state.books[1].writer} />
                <Book
                    bookName={this.state.books[2].bookName}
                    writer={this.state.books[2].writer}
                    change={this.changeBookState.bind(this, 2004)} />
            </div>
        );
    }
}

export default App;

Book.js:
import React from "react";
import '../stylesheets/Book.css'

const Book = (props) => {
    return (
        <div className="Book">
            <h3 onClick={props.change} >Book: {props.bookName}</h3>
            <h4>Writer: {props.writer}</h4>
            <input type="text" onChange={props.inputName} value={props.bookName} />
        </div>
    )
}

export default Book;
Book.css:

.Book {
    width: 300px;
    margin: 10px auto;
    padding: 10px;
    border: 1px solid;
    border-radius: 5px;
}


🌾🌾04. Component List🌾🌾











🅾️ 🅾️ 
*/ 