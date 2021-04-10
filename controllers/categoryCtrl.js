const Category = require('../models/categoryModel')

const categoryCtrl = {
    getCategories: async(req, res) => {
       try {
        const categories = await Category.find()
        res.json(categories)
       } catch (err) {
           return res.status(500).json({msg: err.message})
       }
    },
    createCategory: async(req, res) => {
        try {
            //only admin can create, delete and update

        } catch(err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = categoryCtrl