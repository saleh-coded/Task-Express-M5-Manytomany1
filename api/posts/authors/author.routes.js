const express = require("express");
const authorRouter = express.Router();
const {getAllAuthors, createAuthor, updateAuthor, deleteAuthor} = require("./author.controller");

authorRouter.get("/", getAllAuthors);
authorRouter.post("/", createAuthor);
authorRouter.put("/:id", updateAuthor);
authorRouter.delete("/:id", deleteAuthor);

module.exports = authorRouter;