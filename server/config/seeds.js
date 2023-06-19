const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    firstName: 'Jake',
    lastName: 'Peralta',
    email: 'coolcoolcool@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Raymond',
    lastName: 'Holt',
    email: 'curd-mudgeon@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
