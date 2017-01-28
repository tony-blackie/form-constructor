import React, { Component } from 'react';

export default class FormConstructor extends Component {
    render() {
        return (
            <div className="constructor">
                <div className="constructor__component">
                    <label>Please, input the text you want to be inside the element</label>
                    <div>
                        <input type="radio" name="selectInputType" value="label" />
                        <label>Label</label>
                    </div>
                    <div>
                        <input type="radio" name="selectInputType" value="checkbox" />
                        <label>Checkbox</label>
                    </div>

                    <div>
                        <input type="radio" name="selectInputType" value="text" />
                        <label>Text</label>
                    </div>

                    <button>Add text input</button>
                </div>
            </div>
        );
    }
}