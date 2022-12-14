/* 
๐พ๐พ๐พ Setup Node and NPM ๐พ๐พ๐พ
๐พ ๐พ
๐พ Node.js Site Link: https://nodejs.org/
๐พ Check Node Version: node -v Or node --version
๐พ Check NPM version: npm -v
๐พ NPM Repository: https://npmjs.com/

๐พ Setup Node Modules:๐พ 
๐พ Check all the available commands : npm help
๐พ Initialize with package.json file: npm init
๐พ Install date-format Package: npm install date-format --save
๐พ Install bootstrap Package: npm install bootstrap --save
๐พ Unistall bootstrap Package: npm uninstall bootstrap --save
๐พ Install Packages from package.json: npm install
๐พ Install bootstrap 3.3.7 version: npm install bootstrap@3.3.7 --save
๐พ Update bootstrap package: npm update bootstrap
๐พ Install live-server as Dev Dependency: npm install live-server --save-dev
๐พ uninstall live-server from Dev Dependency: npm uninstall live-server --save-dev
๐พ Install typescript as Global Dependency: npm install typescript -g
๐พ Uninstall typescript From Global Dependency: npm uninstall typescript -g
๐พ Check Local Root: npm root
๐พ Check Global Root: npm root-g

*/
/* 
๐พ๐พ๐พ Version Control with Git ๐พ๐พ๐พ

๐พ





๐พ๐พ๐พ React Start ๐พ๐พ๐พ
๐พ๐พBasic Feature and Syntax๐พ๐พ
๐พ๏ธ1๏ธโฃ. Writing First React Code๐พ๏ธ
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


๐พ๏ธ2๏ธโฃ. Install create-react-app๐พ๏ธ
1st step: install:  npm install create-react-app -g
2nd step: Go to cmd & create-react-app (appName)

๐พ๏ธ3๏ธโฃ//JSX๐พ๏ธ
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


๐พ๏ธ Writing Class Component ๐พ๏ธ

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

๐พ๏ธ Dynamic Functional Component ๐พ๏ธ 

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


๐พ๏ธ Dynamic Class component ๐พ๏ธ
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


๐พ๏ธ 10. Writing a new Component๐พ๏ธ 

๐พ๏ธ 11. State of a component๐พ๏ธ 
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



๐พ๏ธ12. Changing state with JS event ๐พ๏ธ 
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

๐พ๏ธ 13. Pass Method in props ๐พ๏ธ 
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


๐พ๏ธ 14. Change state with input elements ๐พ๏ธ 
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


๐พ๏ธ 15. Styling Components๐พ๏ธ
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


๐พ๐พ04. Component List๐พ๐พ











๐พ๏ธ ๐พ๏ธ 
*/ 