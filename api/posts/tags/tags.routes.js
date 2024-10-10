const express = require("express");
const { createTag, getAllTags } = require("./tags.controller");
const tagRouter = express.Router();

tagRouter.post("/", createTag)
tagRouter.get("/" , getAllTags)
module.exports = tagRouter;