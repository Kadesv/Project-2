import { Router } from 'express';
import { Forum } from '../models/index.js';
const forumRouter = Router();

forumRouter.get('/browse', async (req, res) => {
  const allforums = await Forum.findAll();
  res.json(allforums);
});

forumRouter.get('/:forumId', async (req, res) => {
  const { forumId } = req.params;
  const forum = await Forum.findByPk(forumId);
  res.json(forum);
});

export default forumRouter;