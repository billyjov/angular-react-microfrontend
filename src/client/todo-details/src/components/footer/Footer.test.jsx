import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer', () => {

    it('should renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should renders footer icon properly ', () => {
        const component = shallow(<Footer />);
        expect(component.find('i').hasClass('copyright-favorite')).toBeTruthy();
    });
});

