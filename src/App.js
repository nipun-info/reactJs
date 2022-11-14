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
