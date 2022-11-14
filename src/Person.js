import React, { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        console.log(this.props);

        return (
            <div>
                <h1>Name: {this.props.name} and Age: {this.props.age}</h1>
            </div>
        );
    }
}

export default Person;