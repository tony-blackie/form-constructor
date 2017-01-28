import React, { Component } from 'react';

import Info from './Info.jsx';
import Form from './Form.jsx';

export default class Display extends Component {

    render() {
        if(this.props.formElements.length !== 0) {
            console.log(this.props.formElements);
        }

        return (
            <div className="display">
                <Info />
                <Form
                    hidden={true}
                />
            </div>
        );
    }
}