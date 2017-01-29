import React from 'react';
import { mount, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';

import FormConfig from '../components/FormConfig.jsx';

describe('<FormConfig/> tests', () => {
    let component,
        sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        component = shallow(<FormConfig/>);
    });

    afterEach(() => {
        sandbox.restore();
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

    it('should call handleJSONSubmit on button click', () => {
        const spy = sandbox.spy(FormConfig.prototype, 'handleJSONSubmit');

        component = shallow(<FormConfig />);
        component.find('.config__submit').simulate('click');
        expect(spy.calledOnce).to.equal(true);
    });

    it('should handle textarea change', () => {
        const spy = sandbox.spy(FormConfig.prototype, 'handleTextareaChange');

        component = mount(<FormConfig/>);
        component.find('.config__textarea').simulate('change');
        expect(spy.calledOnce).to.equal(true);
    });
});
