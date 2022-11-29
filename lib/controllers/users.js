const { Router } = require('express');

const UserService = require('../services/UserService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const user = await UserService.create(req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
  })
  .post('/sessions', async (req, res, next) => {
    try {
      const token = await UserService.signIn(req.body);

      res
        .cookie(process.env.COOKIE_NAME, token, {
          httpOnly: true,
        })
        .json({ message: 'Successful Login' });
    } catch (err) {
      next(err);
    }
  });
