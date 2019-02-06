import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {

    let allTasks = [];
    let doneTasks = [];
    let component;
    const task1 = {
        id: 1,
        title: 'Buy a new Angular 8 Book',
        dueDate: new Date(),
        done: false
    };
    const task2 = {
        id: 2,
        title: 'Do 3 new Coding Katas',
        dueDate: new Date(),
        done: true
    };
    const task3 = {
        id: 3,
        title: 'Write a bsc report',
        dueDate: new Date(),
        done: false
    }

    beforeEach(() => {
        allTasks = [task1, task2, task3];
        doneTasks = [task2]
        component = shallow(<Header allTasks={allTasks} totalDoneTasks={doneTasks} />);
    });

    it('should renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header allTasks={allTasks} totalDoneTasks={doneTasks} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render total number of tasks properly', () => {
        expect(component.find('.navbar-icon--badge').first().text()).toBe("3");
    });

    it('should render total number of done tasks properly', () => {
        expect(component.find('.navbar-icon--badge').last().text()).toBe("1");
    });
});

