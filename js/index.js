/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'What is the name of the serial killer from the movie Terrifier?',
      o: ['Beppi the Clown', 'Art the Clown', 'Chuckles the Clown', 'Pennywise the Clown'],
      a: 1, 
    },
    {
      q: 'How many seasons does Buffy the Vampire Slayer have?',
      o: ['3', '5', '7', '9'],
      a: 2,
    },
    {
      q: "What's happened with the boy at the beginning of the first episode of Buffy the Vampire Slayer?",
      o: ['He became a vampire', 'Nothing happened', 'No one saw him again', 'He died'],
      a: 3,
    },
    {
      q: 'How did Dave and Mitch end up switching their bodies in The Change-up movie?',
      o: ['A witch put a curse on them', 'Peeing on a wishing fountain', 'A genie from a lamp granted their wishes', 'They have superpower that can swap bodies whenever they want'],
      a: 1,
    },
    {
    q: 'Who is the Watcher in the Watcher tv series (2022)?',
    o: ['No one know', 'Dean', 'Theodora', 'Roger'],
    a: 0,
    },
    {
      q: 'What item causing the demon curse from the movie The Conjuring 3?',
      o: ['A Horcrux', 'A Skull', 'A Doll', 'A Totem'],
      a: 3,
      }
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };
  let score = 0;
  // Calculate the score
  const calculateScore = () => {
    
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          document.querySelector('#' + li).style.backgroundColor = 'silver';
        }

        
        if (radioElement.checked) {
          // code for task 1 goes here
          if (quizItem.a == i) {
          score++;
          }
          currentScore.innerHTML = score;    
      }
      radioElement.disabled = true;
      }
    });
  };

  let submitBtn = document.getElementById('btnSubmit');
  submitBtn.onclick = function(){
    
    clearInterval(interval);
    calculateScore();   
    document.getElementById('timeText').innerHTML=`Well done! You completed the quiz on time! Your score is ${score}.`
  }

let resetBtn = document.getElementById('btnReset');
resetBtn.onclick = function() {
  location.reload();
  currentScore.innerHTML = 0;
}


const totalMinute = 3;
let count = totalMinute * 60;
let interval = setInterval(timeRemain, 1000);
function timeRemain() {
  const minute = Math.floor(count / 60);
  let second = count % 60;
  document.getElementById('time').innerHTML=`0${minute} : ${second}`;
  count--;
  if (count === 0){
    clearInterval(interval);
    calculateScore();   
    document.getElementById('timeText').innerHTML=`Too bad, time's up! Your score is ${score}.`;
  };
}

  // call the displayQuiz function
  displayQuiz();
});
