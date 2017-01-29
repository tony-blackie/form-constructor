import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Form from '../components/Form.jsx';

describe('<Form/> tests', () => {
    let formElements = [
        {
            type: 'label',
            value: '1337'
        },
        {
            type: 'text',
            value: '1337'
        }
    ];

    it('should render 2 form elements', () => {
        const component = shallow(<Form formElements={formElements} />);
        expect(component.find('.form__row')).to.have.length(2);
    });

    it('should render label', () => {
        const formElements = [{type: 'label', value: '1337'}];
        const component = shallow(<Form formElements={formElements} />);
        expect(component.find('label').html()).to.equal('<label>1337</label>');
    });

    it('should render text input', () => {
        const formElements = [{type: 'text', value: '1337'}];
        const component = shallow(<Form formElements={formElements} />);
        expect(component.find('input[type="text"]').html()).to.equal('<input type="text" placeholder="1337"/>');
    });

    it('should render checkbox', () => {
        const formElements = [{type: 'checkbox', value: '1337'}];
        const component = shallow(<Form formElements={formElements} />);
        expect(component.find('input[type="checkbox"]').html()).to.equal('<input type="checkbox"/>');
        expect(component.find('span').html()).to.equal('<span>1337</span>');
    });

    it('should always render submit button', () => {
        const component = shallow(<Form formElements={[]} />);
        expect(component.find('input').html()).to.equal('<input type="submit" value="Submit"/>');
    })
});