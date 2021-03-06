//major info to be kept in MongoDB
//mongoose to define schema
var mongoose = require("mongoose");

//course schema
var majorSchema = mongoose.Schema({
  /*

  //for the sake of simplicity, I would try to just get the required major courses here for now
  //I will try to connect the rest of the project with this model first.
  year: {type: Number, required: true},
  creditCounts: [Number],
  majorReq: [String],       // (1) 
  majorElect: [String],     // (2)          //4  credits max counted for individual studies for CS for ex.
  basicElectReq: [String],  // (3)         //for example MAS109 for CS
  researchReq: [String],	// (4)			//need to consider substitute courses too
  totalCredits: {type: Number, required: true}



  */

  //just 2 fields for now

  year: {type: Number, required: true},
  title: {type: String, required: true},
  majorReq: [String]

});

//a method to get the major id
majorSchema.methods.getid = function() {
  return this._id;
};

var Major = mongoose.model("Major", majorSchema);

//export the model to make it available for use
module.exports = Major;


/*

for CS we could make the following template

year: 2015,   //suppose we talk about guys from 2015


//two numbers for each type of courses we have 2 numbers for 1 : 0,1    2: 2, 3    3: 4, 5   4: 6, 7
//the first number tells how many credits to be taken from the group. If 0, it means all. Else it 
//the number of credits to be taken from that specific grouping

creditCounts : [ 0, 22, 0, 27, 3, 9, 3, 3 ],
 
majorReq: ["CS204", "CS206", "CS300", "CS311", "CS320", "CS330", "CS408"],

majorElect: [],

basicElectReq: [MAS109],

researchReq: [CS408]





APPLIES TO ALL OF THE MAJORS

General Courses :

Required:
HSS022 - Presentation discussion
.
.
.
Elective: 

humanities (distinction between literature and society and something)


Basic Courses:

32 credits of typical courses








*/































