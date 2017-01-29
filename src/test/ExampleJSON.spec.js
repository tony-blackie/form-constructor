import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import ExampleJSON from '../components/ExampleJSON.jsx';

describe('<ExampleJSON/> tests', () => {
    it('should render pre element', () => {
        const component = shallow(<ExampleJSON />);
        expect(component.find('pre')).to.have.length(1);
    });
});