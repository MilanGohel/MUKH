const express = require('express')
const router = express.Router()
const Quiz = require('../../schemas/Quiz')
const Admin = require('../../schemas/Admin')
const {body,validationResult} = require('express-validator')
const fetchadmin = require('./fetchadmin')
router.get('/createquiz', (req,res) =>{
    return res.json({message: "Hellow"})
})
router.post('/createquiz',fetchadmin,[body('questionText', 'Enter valid question').exists(),
body('options', 'Enter valid options').isLength({min:3})], async (req,res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ error: "Please provide valid questions!"})
        }
        const quiz = Quiz.create({
            adminId: req.admin.id,
            quizes: {
                questionCount: req.body.quizes.questionCount,
                questions:{
                    questionId: req.body.questionId,
                    questionText: req.body.questionText,
                    options: req.body.options,
                    marks: req.body.marks,
                    correctOptions: req.body.correctOptions,
                }
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Server Error!");
    }
})

module.exports = router;