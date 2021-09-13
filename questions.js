var myQuestions = [
  {
    question: "1) What does HTML stand for?",
    answers: {
      a: 'Hyper Text Preprocessor <br>', 
      b: 'Hyper Text Markup Language <br>',
      c: 'Hyper Text Multiple Language <br>',
      d: 'Hyper Tool Multi Language <br>'
    },
    correctAnswer: 'b'
  },
  {
    question: "2) What does CSS stand for?",
    answers: {
      a: 'Common Style Sheet <br>',
      b: 'Colorful Style Sheet <br>',
      c: 'Computer Style Sheet <br>',
      d: 'Cascading Style Sheet <br>'
    },
    correctAnswer: 'd'
  },
  {
    question: "3) What does PHP stand for?",
    answers: {
      a: 'Hypertext Preprocessor <br>',
      b: 'Hypertext Programming <br>',
      c: 'Hypertext Preprogramming <br>',
      d: 'Hometext Preprocessor <br>'
    },
    correctAnswer: 'a'
  },
  {
    question: "4) What does SQL stand for?",
    answers: {
      a: 'Stylish Question Language <br>',
      b: 'Stylesheet Query Language <br>',
      c: 'Statement Question Language <br>',
      d: 'Structured Query Language <br>'
    },
    correctAnswer: 'd'
  },
  {
    question: "5) What does XML stand for?",
    answers: {
      a: 'eXtensible Markup Language <br>',
      b: 'eXecutable Multiple Language <br>',
      c: 'eXTra Multi-Program Language <br>',
      d: 'eXamine Multiple Language <br>'
    },
    correctAnswer: 'a'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect +' correct '+ ' out of ' + questions.length + ' questions';
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}

