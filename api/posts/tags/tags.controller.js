const Tag = require("../../../models/tag");

const createTag = async (req,res,next)=> {
    try {
        const newTag = await Tag.create(req.body);
        return res.status(201).json({data: newTag})
    } catch (error) {
        next(error)
    }
}

const getAllTags = async (req,res ,next)=>{
    try {
        const tags = await Tag.find().populate("posts");
        return res.status(200).json({data: tags})
    } catch (error) {
        next(error)
    }
}
module.exports = {createTag, getAllTags}