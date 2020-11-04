// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do it!

// Declaring variable to calculate score
let score = 0;

// Candidate's name
const input = require('readline-sync');
let name = input.question("What is your name? ");
console.log("Candidate Name: " + name + "\n");

// Arrays for questions and correct answers
let quizQuestion = [
  "True or false: 5000 meters = 5 kilometers. ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "Who was the first American woman in space? ",
  "What is the minimum crew size for the International Space Station (ISS)? "
];

let quizAnswer = [
  "True",
  "40",
  "Trajectory",
  "Sally Ride",
  "3"
];

// Variable for array with quiz responses from candidate
let quizResponse = [];
// For loop to prompt questions
for (i = 0; i < quizQuestion.length; i++) {

  // Creating array with candidate's quiz responses
  quizResponse[i] = input.question(quizQuestion[i]);

  console.log("Your Answer: " + quizResponse[i]);
  
  console.log("Correct Answer: " + quizAnswer[i] + "\n");
 
  // if statement to add up score
    if (quizResponse[i].toUpperCase() === quizAnswer[i].toUpperCase()) {
      score++;
    };
  // Array push method to create array of candidate's responses 
  quizResponse.push(quizResponse[i]);
  quizResponse.pop();
};
// Print array of responses
console.log(quizResponse);

// Template literal with grading, score, and pass/fail status
console.log(`Overall Grade: ${(score/5)*100}% (${score} of 5 responses correct) <<<`);

  if (score >= 4) {
  console.log(`>>> Status: PASSED <<<`);
  } else if (score < 4) {
  console.log(`>>> Status: FAILED <<<`);
  }

