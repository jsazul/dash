const request = require('supertest');
const app = require('../../src/app');
require('custom-env').env('test.key');

describe('ROUTE: Search', () => {
    it('GET:: should be able retorn your response for your search', async () => {
        const response = await request(app)
            .get('/search');

        expect(response.body.page).toBe('search-get');
    });
})