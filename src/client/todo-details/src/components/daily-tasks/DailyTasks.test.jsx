import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import DailyTasks from './DailyTasks';

describe('DailyTasks', () => {

    let allDailyTasks = [];
    let component;
    beforeEach(() => {
        component = shallow(<DailyTasks allDailyTasks={allDailyTasks} />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DailyTasks allDailyTasks={allDailyTasks} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders message for empty daily tasks properly ', () => {
        expect(component.find('span').text()).toContain('Nothing to do today');
    });
});

