import React, { Component } from 'react';

export default class Info extends Component {
    render() {
        return (
            <div>
                <p>Current form consists of:</p>
                <p>x Checkboxes</p>
                <p>x Inputs</p>
                <p>x Labels</p>
                <button>Create Form</button>
            </div>
        );
    }
}