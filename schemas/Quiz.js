const mongoose = require("mongoose")
const { Schema } = mongoose;

const questionsData = new Schema({
    questionId: {
        type: Number,
        required: true
    },
    questionText: {
        type: String, 
        required: true,
        unique: true,
    },
    options: {
        type: Array,
        require: true,
    },
    marks: {
        type: Number,
        required: true
    },
    correctOptions: {
        type: Array,
        required: true
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
})
const quizData = new Schema({
    questionCount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    questions: [
        questionsData
    ]
})
const quizSchema = new Schema({
    adminId: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'admin-data' }],
    },
    quizes: [
        quizData
    ]
});
const Quiz = mongoose.model('quiz_questions', quizSchema);
module.exports = Quiz