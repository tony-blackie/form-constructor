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
                            <input type={element.type} key={index} placeholder={element.value} />
                        </div>);
                case 'checkbox':
                    return (
                        <div className="form__row" key={index}>
                            <input type={element.type}/>
                            {element.value}
                        </div>);
                default:
                    return null;
            }
        });
        const hidden = this.props.hidden ? 'hidden' : 'shown';

        return (
            <form className={`form form-${hidden}`}>
                <h2>Form</h2>
                <fieldset className="form__fieldset">
                    {formElements}
                    <br/>
                    <input type="submit" value="Submit"/>
                </fieldset>
            </form>
        );
    }
}