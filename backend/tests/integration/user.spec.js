const request = require('supertest');
const app = require('../../src/app');
require('custom-env').env('test.key');

describe('ROUTE: User', () => {
    it('POST:: should be able to register a new user', async () => {
        const response = await request(app)
            .post('/user');

        expect(response.status).toBe(400);
    });
    it('GET:: should be able to list all user', async () => {
        const response = await request(app)
            .get('/user');

        expect(response.body.page).toBe('user-get');
    });
    it('GET:: should be able to find a user', async () => {
        const response = await request(app)
            .get('/user/search');

        expect(response.body.page).toBe('user-search');
    });
})