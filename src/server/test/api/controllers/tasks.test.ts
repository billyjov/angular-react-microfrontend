
import supertest = require('supertest');
import { Task } from '../../../api/entities/Task';
import app from '../../../api/server';
import { initConnection, stopConnection } from '../../helper';

describe('/api/tasks', () => {
    let task: Task;
    beforeAll(async () => {
        task = {
            id: 1,
            title: 'Buy a new NodeJS book',
            dueDate: new Date('Januar 29, 2019 00:00:00'),
            done: false,
        } as Task;
        await initConnection();
    });

    it('should return a 200 response for /api/tasks', () => {
        return supertest(app).get('/api/tasks')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200);
    });

    it('should return a 404 response for /api/lorem', () => {
        return supertest(app).get('/api/lorem').then((response) => {
            expect(response.status).toBe(404);
        });
    });

    it('should return a 200 response for POST /api/tasks and delete the entry', (done) => {
        return supertest(app)
            .post('/api/tasks')
            .send(task)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                expect(res.body.message).toBe('Task successfully created');
                done();
            });
    });

    it('should UPDATE /api/tasks/1 correctly', (done) => {
        return supertest(app)
            .put('/api/tasks/1')
            .send({
                dueDate: new Date('Februar 1, 2019 00:00:00'),
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                expect(res.body.message).toBe('Task successfully updated');
                done();
            });
    });

    afterAll(async () => {
        await stopConnection();
    });
});
