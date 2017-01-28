import React, { Component } from 'react';

export default class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isErrorShown: false
        };

        this.createForm = this.createForm.bind(this);
    }

    createForm() {
        if (this.props.formElements.length === 0) {
            this.setState({isErrorShown: true});
            return;
        } else {
            this.setState({isErrorShown: false});
        }

        this.props.createForm();
    }

    render() {

        const FORM_ELEMENT_TYPES = {
            LABEL: 'label',
            CHECKBOX: 'checkbox',
            TEXT: 'text'
        };

        const countElementsOfType = (elementType, array) => {
            var counter = 0;

            array.forEach((element) => {
                if (element.type === elementType) {
                    counter += 1;
                }
            });

            return counter;
        };

        const checkboxCounter = countElementsOfType(FORM_ELEMENT_TYPES.CHECKBOX, this.props.formElements) || 0;
        const labelCounter = countElementsOfType(FORM_ELEMENT_TYPES.LABEL, this.props.formElements) || 0;
        const textCounter = countElementsOfType(FORM_ELEMENT_TYPES.TEXT, this.props.formElements) || 0;

        return (
            <div>
                <p>Current form consists of:</p>
                <p>{checkboxCounter} Checkboxes</p>
                <p>{textCounter} Text Inputs</p>
                <p>{labelCounter} Labels</p>

                <button onClick={this.createForm}>Create Form</button>
                {
                    this.state.isErrorShown ?
                    <div>Form can't have 0 elements. Please use Form Constructor to add some</div>
                    : null
                }

            </div>
        );
    }
}