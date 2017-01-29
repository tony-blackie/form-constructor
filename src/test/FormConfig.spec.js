import React from 'react';
import { mount, shallow } from 'enzyme';
import chai, { expect } from 'chai';

import FormConfig from '../components/FormConfig.jsx';

describe('<FormConfig/> tests', () => {
    let component;

    beforeEach(() => {
        component = shallow(<FormConfig/>);
    });

    it('should hide <ExampleJSON/> by default', () => {
        expect(component.find('ExampleJSON')).to.have.length(0);
    });

    it('should toggle visibility of <ExampleJSON/> on button click', () => {
        component.find('.config__example-button').simulate('click');
        expect(component.find('ExampleJSON')).to.have.length(1);
        component.find('.config__example-button').simulate('click');
        expect(component.find('ExampleJSON')).to.have.length(0);
    });
});