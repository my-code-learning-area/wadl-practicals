const mongoose = require("mongoose")

const StudentsMarkSchema = new mongoose.Schema({
    Name: String,
    Roll_No: Number,
    WAD_Marks: Number,
    CC_Marks: Number,
    DSBDA_Marks: Number,
    CNS_Marks: Number,
    AI_Marks: Number
})

// creating Model of defined schema `StudentsMarkSchema` and then exporting
const StudentsMark = mongoose.model("students_marks", StudentsMarkSchema);
module.exports = StudentsMark;