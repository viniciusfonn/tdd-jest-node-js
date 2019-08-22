const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authentication', () => {
  beforeEach( async () => {
    await truncate();
  });

    it('Should receive JWT token when authenticated with valid credentials', async () => {
      const user = await User.create({ name: 'vinicius', email: 'viniciusffon@gmail.com', password_hash: '123456'});

      const response = await request(app)
        .post('/sessions')
        .send({
          email: user.email,
          password: '123456'
        });

        expect(response.status).toBe(200);
    });

})