import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import DailyTaskTable from './DailyTaskTable';

describe('DailyTaskTable', () => {
    let dailyTasks = [];
    beforeEach(() => {

        dailyTasks = [
            {
                id: 1,
                title: 'Coding is a art',
                dueDate: new Date(),
                done: false
            }, {
                id: 2,
                title: 'Coding is a art',
                dueDate: new Date(),
                done: true
            }
        ];

    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DailyTaskTable dailyTasks={dailyTasks} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders table with one rows in header', () => {
        const component = shallow(<DailyTaskTable dailyTasks={dailyTasks} />);
        expect(component.find('tr').length).toBe(1);
    });
});

