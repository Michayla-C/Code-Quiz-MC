var quizQuestions = [
    {
        prompt: "HTML is a coding language used to make web pages \n (a) True \n (b) False",
        
        answer: "a"
    },

     {
         prompt: "Which of the following HTML tags is used to insert a blank line? \n (a) <h2>\n(b) <p>\n(c) <br>\n(d) <a>",

         answer: "c"
     },

     {
         prompt: "Which link should be added first? \n (a) JavaScript\n(b) CSS",

         answer: "b"
     },

     {
         prompt: "What is not a data type in JavaScript? \n(a) Number\n(b) Boolean\n(c) Array\n(d) String",

         answer: "c"
     },

     {
         prompt: "JavaScript isn't case sensitive \n(a) True\n(b) False",

         answer: "b"
     }
]

var score = 0;

for (var i=0; i < quizQuestions.length; i++) {
    var response = window.prompt(quizQuestions[i].prompt);
    if (response == quizQuestions[i].answer) {
        score++;
        alert("Correct");
    }
    else {
        alert("Incorrect");
    }
}

alert("Your score is " + score + "/" + quizQuestions.length);
