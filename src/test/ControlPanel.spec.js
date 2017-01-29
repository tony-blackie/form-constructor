import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import ControlPanel from '../components/ControlPanel.jsx';

describe('<ControlPanel/> tests', () => {
    let component;

    beforeEach(() => {
        component = shallow(<ControlPanel/>);
    });

    it('should check if FormConfig component has rendered', () => {
        expect(component.find('FormConfig')).to.have.length(1);
    });

    it('should check if FormConstructor component has rendered', () => {
        expect(component.find('FormConstructor')).to.have.length(1);
    });

    it('should check if FormTemplate component has rendered', () => {
        expect(component.find('FormTemplate')).to.have.length(1);
    });
});