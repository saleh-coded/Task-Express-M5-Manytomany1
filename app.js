const express = require('express');
const app = express();
const postsRouter = require('./api/posts/posts.routes')
const connectDb = require('./database');
const authorRouter = require('./api/posts/authors/author.routes');
const tagRouter = require('./api/posts/tags/tags.routes');

connectDb();
app.use(express.json());
app.use('/posts', postsRouter);
app.use("/author",authorRouter)
app.use("/tags", tagRouter);
app.use((req, res, next) => {
  res.status(404).json({ message: 'Path not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || 'Internal Server Error',
  });
});

app.listen(8000, () => {
  console.log('The application is running on localhost:8000');
});
