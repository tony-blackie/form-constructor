import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import ControlPanel from '../components/ControlPanel.jsx';

describe('<ControlPanel/>', function () {
    it('should check if FormConfig component rendered', () => {
        const component = mount(<ControlPanel/>);
        expect(component.find('FormConfig')).to.have.length(1);
    });

    it('should check if FormConstructor component rendered', () => {
        const component = mount(<ControlPanel/>);
        expect(component.find('FormConstructor')).to.have.length(1);
    })
});