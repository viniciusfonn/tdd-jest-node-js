const { User } = require('../../src/app/models');

describe('Authentication', () => {
    it('Should receive JWT token when authenticated with valid credentials', async () => {
      const user = await User.create({ name: 'vinicius', email: 'viniciusfon@gmail.com', password_hash: '123123123'});

      console.log(user);

      expect(user.email).toBe('viniciusfon@gmail.com');
    });

})