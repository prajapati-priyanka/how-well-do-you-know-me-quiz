var readlineSync = require('readline-sync');
const chalk = require('chalk');

const welcome = chalk.rgb(179, 0, 89).bold;
const question= chalk.rgb(255, 214, 153);
const answer = chalk.rgb(232, 93, 4);
const rightAnswer = chalk.rgb(255, 204, 0);
const wrongAnswer = chalk.rgb(255, 0, 0);
const userScore = chalk.rgb(255, 117, 26);

var userName= readlineSync.question((chalk.blue.bold("Please enter Your name..\n")));
console.log(chalk.cyan("\nHey, "+ (userName.toUpperCase())  + "\n"));
console.log(welcome("Welcome to HOW WELL DO YOU KNOW Me Quiz..\n"))

var score= 0;
function play(question, answer){
  var userAnswer= readlineSync.question(question);

 if(userAnswer.toUpperCase() === answer.toUpperCase())
 {
    score= score+1;
     console.log(rightAnswer("Right!"));
      console.log(userScore("Score: "), score);
   
  }else{
    console.log(wrongAnswer("Wrong!"));
    console.log(rightAnswer("Right answer: ")+ answer)
    if (score>0){
      score= score-1;
    console.log(userScore("Score: "), score);
    }
  }
   
}


// Highscores
var leaderboard=[
  {
  name: answer("Ankit"),
  score: 5
},
{
  name: answer("Sakshi"),
  score: 3
},
{
  name: answer("Priya"),
  score: 2
}

]






// question bank

var questionOne={
  question : question("\nwho is my favourite male singer? "),
  answer : "arijit singh"
}

var questionTwo={
  question: question("\nwhich is my favourite color? "),
  answer : "yellow"
}

var questionThree={
  question : question("\nWhich is my favorite holiday destination? ") ,
  answer: "maldives"
}
var questionFour={
  question : question("\nWhich is my favorite TV series? ") ,
  answer: "friends"
}
var questionFive={
  question :question("\nWhere do I live? ") ,
  answer: "guwahati"
}
var questionSix={
  question : question("\nwho is my favorite female singer? "),
  answer : "shreya ghosal"
}
var questionSeven={
  question :question("\nDo I like chocolates? "),
  answer :"no"
}

var questionList= [questionOne, questionTwo,questionThree,questionFour, questionFive, questionSix,questionSeven];

//  check wheather user wants to play or not.

if(readlineSync.keyInYN(question("Do You Want To Play The Game?"))){
 console.log(chalk.rgb(0, 153, 153).bold("\n*** Rules Of A Game ***"));
 console.log(chalk.rgb(0, 153, 153)("\n1. There are seven questions about me."));
 console.log(chalk.rgb(0, 153, 153)("2. For every correct answer, you will be rewarded one point."));
 console.log(chalk.rgb(0, 153, 153)("3. For every wrong answer, you will get a penalty of one point."));
 console.log(welcome("\nLet's see How Well Do You KNow Me.."));
 console.log(chalk.green.bold("\n--- START ---"));


for(var i=0; i<questionList.length; i++){
  var currentQuestion= questionList[i];
  play(currentQuestion.question, currentQuestion.answer);
}
 console.log(rightAnswer("\nYour Overall Score: "), score)

 
// Loop to check has the user beaten highScore
   
for(var j=0; j<leaderboard.length ; j++){
  if((score > leaderboard[j].score) ){
     console.log(userScore.bold.inverse("\nCongratulations!! You have broke the records.Please send a screenshot to me, so that I can update your score in the leaderboard."));
   break;
 }else{
   console.log(userScore.bold.inverse("\nIf you broke any of the records, send me the screenshot, I will update it in the leaderboard."))
   break;
 }
    
}
  console.log(question("*****************************************"));
 console.log(rightAnswer.bold("\nCheckout the HighScores: "));
//  Loop to print all the scores
 for (var j = 0; j < leaderboard.length; j++) {
  console.log(leaderboard[j].name + " : " + leaderboard[j].score)
  }

  console.log(question("\n*****************************************"));
   console.log(welcome.bold("\nThanks For Playing."))




}
else{
  console.log(chalk.blue.bold("\nNo Problem, we can catch up some time later. Have a nice day !"))
}



 
  


