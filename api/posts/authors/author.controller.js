const Author = require("../../../models/author");

const getAllAuthors = async(req,res,next)=>{
    try {
        const authors = await Author.find();
        return res.status(200).json({data: authors})
    } catch (error) {
        next(error)
    }


}

const createAuthor = async(req,res,next)=>{
    try {
        const newAuthor = await Author.create(req.body);
        return res.status(201).json({data: newAuthor})
    } catch (error) {
        next(error)
    }
}

const getOneAuthor = async (req, res ,next)=>{
    try {
        const {id} = req.params;
        const author = await Author.findById(id);
        return res.status(200).json({data: author})
    } catch (error) {
        next(error)
    }
}

const deleteAuthor = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const delAuthor = await Author.findByIdAndDelete(id);
        return res.status(200).json({data: delAuthor});
    } catch (error) {
        next(error)
    }
}

const updateAuthor = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const upAuthor = await Author.findByIdAndUpdate(req.body,id);
        return res.status(200).json({data: upAuthor})
    } catch (error) {
        next(error)
    }
}
module.exports = {getAllAuthors, createAuthor, deleteAuthor,updateAuthor}