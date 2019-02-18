import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import WeeklyTaskRow from './WeeklyTaskRow';

describe('WeeklyTaskRow', () => {
    let task;
    let doneTask;
    beforeEach(() => {
        task = {
            title: 'Have a nice trip this week in paris',
            dueDate: new Date(),
            done: false
        };

        doneTask = {
            title: 'learn new ES7 features',
            dueDate: new Date(),
            done: true
        };
    });

    it('renders without crashing', () => {
        const tbody = document.createElement('tbody');
        ReactDOM.render(<WeeklyTaskRow task={task} />, tbody);
        ReactDOM.unmountComponentAtNode(tbody);
    });

    it('renders to do badges correctly', () => {
        const component = shallow(<WeeklyTaskRow task={task} />);
        expect(component.find('.badge').hasClass('badge-info')).toBeTruthy();
        expect(component.find('.badge').text()).toContain('to do');
    });

    it('renders done badges correctly', () => {
        const component = shallow(<WeeklyTaskRow task={doneTask} />);
        expect(component.find('.badge').hasClass('badge-danger')).toBeTruthy();
        expect(component.find('.badge').text()).toContain('done');
    });
});

