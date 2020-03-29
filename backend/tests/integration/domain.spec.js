const request = require('supertest');
const app = require('../../src/app');
require('custom-env').env('test.key');

describe('ROUTE: Domain', () => {
    it('GET:: should be able to list domains for a user.', async () => {
        const response = await request(app)
            .get('/domain');

        expect(response.body.page).toBe('domain-get');
    });
    it('POST:: should be able to add a new domain.', async () => {
        const response = await request(app)
            .post('/domain');

        expect(response.body.page).toBe('domain-post');
    });
    it('PATCH:: should be able to check a domain.', async () => {
        const response = await request(app)
            .patch('/domain/:code_domain/');

        expect(response.body.page).toBe('domain-patch');
    });
    it('PUT:: should be able to select a domain for default.', async () => {
        const response = await request(app)
            .put('/domain/:code_domain/');

        expect(response.body.page).toBe('domain-put');
    });
    it('DELETE:: should be able to delete a domain.', async () => {
        const response = await request(app)
            .delete('/domain/:code_domain/');

        expect(response.body.page).toBe('domain-delete');
    });
})