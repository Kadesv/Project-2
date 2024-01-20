import { Router } from 'express';
import { Forum, Comment, SubComment, User } from '../models/index.js';
const forumRouter = Router();

forumRouter.get('/browse', async (req, res) => {
  res.json(await Forum.findAll({
    include:{
      model: User
    }
  }));
});


forumRouter.get('/:forumId', async (req, res) => {
  const { forumId } = req.params;
  const forum = await Forum.findByPk(forumId);
 
  const comments = await Comment.findAll({
    where:{
    forumId: forumId },
    include:[{
      model: User
      }, {
        model: SubComment
      }]
 });

 console.log(comments[0])
  res.json({forum, comments});
});


forumRouter.post('/new', async (req, res) => {
  const {title, context} = req.body;
  if(title && context){
  await Forum.create({title, context});
  res.json({success: true})}
 else{
  res.json({success: false})};

 }
)


export default forumRouter;