const request = require('supertest');
const app = require('../../src/app');
const database = require('../../src/database');
require('custom-env').env('test.key');

beforeAll(async () => {
    await database.connectionTest();
});
afterAll(async () => {
    database.close();
});
describe('ROUTE: User', () => {
    it('POST:: should be able to register a new user', async () => {
        const response = await request(app)
            .post('/user/resgister');

        expect(response.body).toBe({});
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