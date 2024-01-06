import { Router } from "express";
import { User } from "../models/index.js";
import { db } from '../config/db.js';


import { loginRequired } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

authRoutes.post('/api/auth', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (user && user.password === password) {
    req.session.userId = user.userId;
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

authRoutes.post('/api/register', async (req, res) => {
  const { email, password, username } = req.body;
  const checkEmail = await User.findOne({ where: { email: email } });
  const checkUsername = await User.findOne({ where: { username: username } });

  if (checkEmail || checkUsername) {
    res.json({ success: false });
  }
  else {
   const newUser = await User.create({ username, email, password })
    req.session.userId = newUser.Id;
    res.json({ success: true })
  }
});


authRoutes.post('/api/logout', loginRequired, (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

export default authRoutes;