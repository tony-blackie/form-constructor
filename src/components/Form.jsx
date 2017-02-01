import React, { Component } from 'react';

export default class Form extends Component {

    render() {
        const formElements = this.props.formElements.map((element, index) => {
            switch (element.type) {
                case 'label':
                    return (
                        <div className="form__row" key={index}>
                            <label>{element.value}</label>
                        </div>
                    );
                case 'text':
                    return (
                        <div className="form__row" key={index}>
                            <input
                                type={element.type}
                                key={index}
                                placeholder={element.value}
                                className="form__input"
                            />
                        </div>);
                case 'checkbox':
                    return (
                        <div className="form__row" key={index}>
                            <input type={element.type} className="form__input-checkbox" />
                            <span>{element.value}</span>
                        </div>);
                default:
                    return null;
            }
        });
        const hidden = this.props.hidden ? 'hidden' : 'shown';

        return (
            <form className={`form form-${hidden}`}>
                <h2 className="form__header">Form</h2>
                <fieldset className="form__fieldset">
                    {formElements}
                    <br/>
                </fieldset>
                <div className="form__submit-wrapper">
                    <input
                        type="submit"
                        value="Submit"
                        className="form__submit"
                    />
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    hidden: React.PropTypes.bool,
    formElements: React.PropTypes.array
};