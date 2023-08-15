const express = require('express');
const bcrypt = require('bcrypt');
const { Company } = require('../db/models');

const router = express.Router();

router.post('/signup', async (req, res) => {
  console.log('data:', req.body);
  const { name, email, password } = req.body;
  if (name && email && password) {
    try {
      const [company, created] = await Company.findOrCreate({
        where: { email },
        defaults: { name, password: await bcrypt.hash(password, 10) },
      });
      if (!created) return res.sendStatus(401);
      const sessionUser = JSON.parse(JSON.stringify(company));
      delete sessionUser.password;
      req.session.company = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      console.log('privet');
      console.log(e);
      return res.sendStatus(500);
    }
  }
  console.log('poka');

  return res.sendStatus(500);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('зашли в ручку 1');
  if (email && password) {
    try {
      console.log('зашли в ручку 2');

      const company = await Company.findOne({
        where: { email },
      });
      // if (!(await bcrypt.compare(password, user.password))) {
      //   return res.sendStatus(401);
      // }
      console.log('зашли в ручку 3');

      const sessionUser = JSON.parse(JSON.stringify(company));
      delete sessionUser.password;
      req.session.company = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.get('/check', (req, res) => {
  if (req.session.company) {
    return res.json(req.session.company);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = router;
