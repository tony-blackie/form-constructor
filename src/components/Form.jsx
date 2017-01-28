import React, { Component } from 'react';

export default class Form extends Component {

    render() {
        const hidden = this.props.hidden ? 'hidden' : 'shown';

        return (
            <form className={`form form-${hidden}`}>Form</form>
        );
    }
}