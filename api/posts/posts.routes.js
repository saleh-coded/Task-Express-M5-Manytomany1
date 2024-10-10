const express = require('express');
const postsRouter = express.Router();
const {
  fetchPost,
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
} = require('./posts.controllers');

postsRouter.param('postId', async (req, res, next, postId) => {
  const post = await fetchPost(postId, next);
  if (post) {
    req.post = post;
    next();
  } else {
    const err = new Error('Post Not Found');
    err.status = 404;
    next(err);
  }
});

postsRouter.get('/', postsGet);
postsRouter.post('/:authorId', postsCreate);

postsRouter.delete('/:postId', postsDelete);

postsRouter.put('/:postId', postsUpdate);

module.exports = postsRouter;
