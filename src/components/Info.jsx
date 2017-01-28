import React, { Component } from 'react';

export default class Info extends Component {
    constructor(props) {
        super(props);

        this.createForm = this.createForm.bind(this);
    }

    createForm() {
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
            </div>
        );
    }
}