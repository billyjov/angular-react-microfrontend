import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import WeeklyTaskTable from './WeeklyTaskTable';

describe('WeeklyTaskTable', () => {
    let weeklyTasks = [];
    beforeEach(() => {

        weeklyTasks = [
            {
                id: 1,
                title: 'Coding is a art on this week',
                dueDate: new Date(),
                done: false
            }, {
                id: 2,
                title: 'Coding will a art next week',
                dueDate: new Date(),
                done: true
            }
        ];

    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WeeklyTaskTable weeklyTasks={weeklyTasks} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders table with one rows in header', () => {
        const component = shallow(<WeeklyTaskTable weeklyTasks={weeklyTasks} />);
        expect(component.find('tr').length).toBe(1);
    });
});

