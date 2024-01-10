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

forumRouter.post('/new', async (req, res) => {
  const {title, context} = req.body;
  const newForum = await Forum.create({title, context});
  res.json({success: true})
  
})




export default forumRouter;