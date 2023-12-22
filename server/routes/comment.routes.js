import { Router } from "express";
import { loginRequired } from "../middlewares/auth.middleware.js";
import { User, Forum} from '../models/index.js';

const commentsRouter = Router()


commentsRouter.get('/all', loginRequired, async (req, res) => {
  const { userId } = req.session;

  const user = await User.findByPk(userId);
  const comments = await user.getcomments({
    include: {
      model: Forum,
      attributes: ['title'],
    },
  });

  res.json(comments);
});

commentsRouter.post('/new', loginRequired, async (req, res) => {
  const { userId } = req.session;
  const { movieId, score } = req.body;

  const user = await User.findByPk(userId);
  const comment = await user.createcomment({ movieId: movieId, score: score });

  res.json(comment);
});

export default commentsRouter;