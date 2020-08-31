// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do it!

// Declaring variable to calculate score
let score = 0

// Candidate's name
const input = require('readline-sync');
let name = input.question("What is your name? ");
console.log("\n");

// Response for first quiz question
  let quizResponse1 = input.question("True or false: 5000 meters = 5 kilometers. ");
  let quizAnswer1 = "True";
  console.log("Your Answer: " + quizResponse1);
  console.log("Correct Answer: " + quizAnswer1);
  // if statement to add up correct response score
    if (quizResponse1.toUpperCase() === quizAnswer1.toUpperCase()) {
      score++;
    }
console.log(score);

console.log("\n")

//Response for second quiz question
  let quizResponse2 = input.question("(5 + 3)/2 * 10 = ? ");
  let quizAnswer2 = "40";
  console.log("Your Answer: " + quizResponse2);
  console.log("Correct Answer: " + quizAnswer2);
    if (quizResponse2 === quizAnswer2) {
      score++;
    }
console.log(score);
console.log("\n")

//Response for third quiz question
  let quizResponse3 = input.question("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
  let quizAnswer3 = "Trajectory";
  console.log("Your Answer: " + quizResponse3);
  console.log("Correct Answer: " + quizAnswer3);
    if (quizResponse3.toUpperCase() === quizAnswer3.toUpperCase()) {
      score++;
    }
console.log(score);

console.log("\n")
// // Response for fourth quiz question
  let quizResponse4 = input.question("Who was the first American woman in space? ");
  let quizAnswer4 = "Sally Ride";
  console.log("Your Answer: " + quizResponse4);
  console.log("Correct Answer: " + quizAnswer4);
    if (quizResponse3.toUpperCase() === quizAnswer3.toUpperCase()) {
      score++;
    }
console.log(score);

console.log("\n")
// // Response for fifth quiz question
  let quizResponse5 = input.question("What is the minimum crew size for the International Space Station (ISS)? ");
  let quizAnswer5 = "3";
  console.log("Your Answer: " + quizResponse5);
  console.log("Correct Answer: " + quizAnswer5);
    if (quizResponse5 === quizAnswer5) {
      score++;
    }
console.log(score);

console.log("\n")

console.log(`Overall Grade: ${(score/5)*100}% (${score} of 5 responses correct) <<<`)

if (score >= 4) {
  console.log(`>>> Status: PASSED <<<`)
} else if (score < 4) {
  console.log(`>>> Status: FAILED <<<`)
}