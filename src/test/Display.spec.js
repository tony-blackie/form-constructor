import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Display from '../components/Display.jsx';

describe('<Display/> tests', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Display formElements={[]} />);
    });

    it('should render Info component', () => {
        expect(component.find('Info')).to.have.length(1);
    });

    it('should render Form component', () => {
        expect(component.find('Form')).to.have.length(1);
    });
});