import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import WeeklyTasks from './WeeklyTasks';

describe('WeeklyTasks', () => {

    let allWeeklyTasks = [];
    let component;
    beforeEach(() => {
        component = shallow(<WeeklyTasks allWeeklyTasks={allWeeklyTasks} />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WeeklyTasks allWeeklyTasks={allWeeklyTasks} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders message for empty weekly tasks properly ', () => {
        expect(component.find('span').text()).toContain('There are no tasks this week');
    });
});

