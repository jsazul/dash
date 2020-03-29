const request = require('supertest');
const app = require('../../src/app');
require('custom-env').env('test.key');

describe('ROUTE: Session', () => {
    it('POST:: should be able to login', async () => {
        const response = await request(app)
            .post('/session')
            .send({
                email: 'j040@jsazul.blue',
                pass: "novidade"
            });

        expect(response.body.page).toBe('seassion-post');
    });
    it('DELETE:: should be able to log-out', async () => {
        const response = await request(app)
            .delete('/session')
            .set('auth_access', 'ZmRzYXNkc2E=');

        expect(response.body.page).toBe('seassion-delete');
    });
})