var readLineSync = require("readline-sync");
const chalk = require("chalk");

var highScore = [
  {
    name: "Dheeraj",
    score: 5
  },
  {
    name: "Priya",
    score: 4
  },
  {
    name: "John Doe 4",
    score: 2
  }
];

var currentTopper = highScore[0].score;

for (var i = 0; i < highScore.length; i++) {
  if (currentTopper > highScore[i].score) {
    currentTopper = highScore[i].score;
  }
}

console.log("Hello!\n\nWelcome to the",chalk.bold.cyanBright("NARUTO"),"Quiz \n\nHere are the rules:\n\n 1. Every correct answer adds one point to the score \n 2. There is no penalty for wrong answers \n 3. You have to score", currentTopper, "or above to take a spot in Leaderboard\n\n");

var ch = readLineSync.question(chalk.bold.cyanBright("press any key to start the quiz(q to exit) \n\n"));
var score = 0;

var questionnaire = [
  {
    question: "Which Hokage sealed the nine-tailed fox inside Naruto?\n\na. second Hokage  \nb. fourth Hokage\nc. third Hokage\nd. First Hokage\n",
    answer: "b"
  },
  {
    question: "Which character can only use taijutsu?\n\na. Gaara  \nb. Naaruto Uzumaki\nc. Rock Lee\nd. Sasuke Uchiha\n",
    answer: "c"
  },
  {
    question: "Which of the legendary sannin becomes the fifth Hokage?\n\na. Tsunade  \nb. Orochimaru\nc. Jiraya\nd. Naruto \n",
    answer: "a"
  },
  {
    question: "The Sharingan is what type of jutsu?\n\na. Taijutsu  \nb. Ninjutsu\nc. Dojutsu\nd. Genjutsu\n",
    answer: "c"
  },
  {
    question: "Sasuke's goal is gain enough power to kill whom?\n\na. Itachi Uchiha  \nb. Neji Hyuuga\nc. Naruto Uzumaki\nd. The Third Hokage\n",
    answer: "a"
  }
];

function play(question, answer, i) {
  var userAns = readLineSync.question(question);

  var correctOrNot = userAns.toLowerCase() === answer.toLowerCase();

  if (correctOrNot) {
    console.log(chalk.green("you are right"));
    score++;
  } else {
    console.log(chalk.red('No! It\'s wrong.\n' + ' Correct option is ' + chalk.underline.bold(answer)));
  }
  console.log("Your current score is:", score);
}

if (ch.toLowerCase() != 'q') {
  for (var i = 0; i < questionnaire.length; i++) {
    var quiz = questionnaire[i];
    console.log("--------------", i + 1, "----------------");
    play(quiz.question, quiz.answer, i);
  }
}

console.log("------------------------------");
console.log("\n\nYou scored:", score, "");

console.log("Current Leaderboard");
console.log("Name \t\t Score");

var newTopper = false;

for (var i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name, "\t\t", highScore[i].score);
  if (score > highScore[i].score) {
    newTopper = true;
  }
}
if (newTopper) {
  console.log(chalk.blue.bgGreenBright.bold("send your score, I'll add it to the Leaderboard"));
}