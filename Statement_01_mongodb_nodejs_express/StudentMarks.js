const mongoose = require("mongoose")

const StudentMarksSchema = new mongoose.Schema({
    Name: String,
    Roll_No: Number,
    WAD_Marks: Number,
    CC_Marks: Number,
    DSBDA_Marks: Number,
    CNS_Marks: Number,
    AI_Marks: Number
})

// creating Model of defined schema `StudentMarksSchema` and then exporting
const StudentMarks = mongoose.model("student_marks", StudentMarksSchema);
module.exports = StudentMarks;