import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Form from '../components/Form.jsx';

describe('<Form/> tests', () => {
    it('should render form element', () => {
        const component = mount(<Form formElements={[]} />);
        expect(component.find('form')).to.have.length(1);
    });
});