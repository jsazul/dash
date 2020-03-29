const request = require('supertest');
const app = require('../../src/app');
require('custom-env').env('test.key');

describe('ROUTE: Session', () => {
    it('POST:: should be able to login', async () => {
        const response = await request(app)
            .post('/session');

        expect(response.body.page).toBe('seassion-post');
    });
    it('DELETE:: should be able to log-out', async () => {
        const response = await request(app)
            .delete('/session');

        expect(response.body.page).toBe('seassion-delete');
    });
})