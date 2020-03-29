const request = require('supertest');
const app = require('../../src/app');
require('custom-env').env('test.key');

describe('ROUTE: Movie', () => {
    it('GET:: should be able retorn all movies list', async () => {
        const response = await request(app)
            .get('/movie')
            .set('auth_access', 'ZmRzYXNkc2E=')
            .set('auth_token', 'ZmRzYXNkc2E=');

        expect(response.body.page).toBe('movie-get');
    });
    it('POST:: should be able create a new movie', async () => {
        const response = await request(app)
            .post('/movie')
            .set('auth_access', 'ZmRzYXNkc2E=')
            .set('auth_token', 'ZmRzYXNkc2E=');

        expect(response.body.page).toBe('movie-post');
    });
    it('GET:: should be able to get all data for a movie', async () => {
        const response = await request(app)
            .get('/movie/:idThemovie')
            .set('auth_access', 'ZmRzYXNkc2E=')
            .set('auth_token', 'ZmRzYXNkc2E=');

        expect(response.body.page).toBe('movie-get');
    });
    it('DELETE:: should be able to delete a movie', async () => {
        const response = await request(app)
            .delete('/movie/:idThemovie')
            .set('auth_access', 'ZmRzYXNkc2E=')
            .set('auth_token', 'ZmRzYXNkc2E=');

        expect(response.body.page).toBe('movie-delete');
    });
    it('PUT:: should be able to update a movie', async () => {
        const response = await request(app)
            .put('/movie/:idThemovie')
            .set('auth_access', 'ZmRzYXNkc2E=')
            .set('auth_token', 'ZmRzYXNkc2E=');

        expect(response.body.page).toBe('movie-put');
    });




    it('GET:: should be able to get list of links for a movie', async () => {
        const response = await request(app)
            .get('/movie/:idThemovie/link')
            .set('auth_access', 'ZmRzYXNkc2E=')
            .set('auth_token', 'ZmRzYXNkc2E=');

        expect(response.body.page).toBe('movie-get');
    });
    it('POST:: should be able a add a link', async () => {
        const response = await request(app)
            .post('/movie/:idThemovie/link')
            .set('auth_access', 'ZmRzYXNkc2E=')
            .set('auth_token', 'ZmRzYXNkc2E=');

        expect(response.body.page).toBe('movie-post');
    });
    it('DELETE:: should be able to delete a link', async () => {
        const response = await request(app)
            .delete('/movie/:idThemovie/link/:codeLink')
            .set('auth_access', 'ZmRzYXNkc2E=')
            .set('auth_token', 'ZmRzYXNkc2E=');

        expect(response.body.page).toBe('movie-delete');
    });
    it('PUT:: should be able to update a link', async () => {
        const response = await request(app)
            .put('/movie/:idThemovie/link/:codeLink')
            .set('auth_access', 'ZmRzYXNkc2E=')
            .set('auth_token', 'ZmRzYXNkc2E=');

        expect(response.body.page).toBe('movie-put');
    });
})