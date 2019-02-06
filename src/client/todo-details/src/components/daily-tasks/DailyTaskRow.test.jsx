import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import DailyTaskRow from './DailyTaskRow';

describe('DailyTaskRow', () => {
    let task;
    let doneTask;
    beforeEach(() => {
        task = {
            title: 'Coding is a art',
            dueDate: new Date(),
            done: false
        };

        doneTask = {
            title: 'Coding is a art',
            dueDate: new Date(),
            done: true
        };
    });

    it('renders without crashing', () => {
        const tbody = document.createElement('tbody');
        ReactDOM.render(<DailyTaskRow task={task} />, tbody);
        ReactDOM.unmountComponentAtNode(tbody);
    });

    it('renders to do badges correctly', () => {
        const component = shallow(<DailyTaskRow task={task} />);
        expect(component.find('.badge').hasClass('badge-info')).toBeTruthy();
        expect(component.find('.badge').text()).toContain('to do');
    });

    it('renders done badges correctly', () => {
        const component = shallow(<DailyTaskRow task={doneTask} />);
        expect(component.find('.badge').hasClass('badge-danger')).toBeTruthy();
        expect(component.find('.badge').text()).toContain('done');
    });
});

