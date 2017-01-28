import React, { Component } from 'react';

export default class Form extends Component {

    render() {
        const formElements = this.props.formElements.map((element) => {
            switch (element.type) {
                case 'label':
                    return (<label>{element.value}</label>);
                case 'text':
                    return (<input type={element.type} placeholder={element.value} />);
                case 'checkbox':
                    return (<div>Checkbox</div>);
            }
        });
        const hidden = this.props.hidden ? 'hidden' : 'shown';

        return (
            <form className={`form form-${hidden}`}>
                {formElements}
            </form>
        );
    }
}