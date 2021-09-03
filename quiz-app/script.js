const quizData=[
    {
        question:'how old is mukesh?',
        a:'18',
        b:'17',
        c:'24',
        d:'25',
        correct:'d'
    },
    {
        question:'who is the chief Minister of uttar Pradesh in 2021?',
        a:'yogi',
        b:'mayavati',
        c:'rekha',
        d:'akhilesh yadav',
        correct:'c'

    },
    {
        question:'what year was rekha birth?',
        a:'1993',
        b:'2001',
        c:'1956',
        d:'1990',
        correct:'a'
    },
    {
      question:'who is the devloper of the c?',
      a:'subash',
      b:'will gates',
      c:'dennis richi',
      d:'vivek',
      correct:'c'
    },
    {
      question:'who is the devloper of the c?',
      a:'subash',
      b:'will gates',
      c:'dennis richi',
      d:'vivek',
      correct:'c'
    },
];
const quiz=document.getElementById("quiz");
const answerE1=document.querySelectorAll(".answer");
const questionT1=document.getElementById("question");



const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');

const submitBtn=document.getElementById('submit');

let currentQuiz=0;
let score=0;


  loadQuiz();
  //Which is call every time to submit
  function loadQuiz(){
      deselectAnswer();
      const currentQuizData =quizData[currentQuiz];
      questionT1.innerHTML=currentQuizData.question;
      a_text.innerHTML=currentQuizData.a;
      b_text.innerHTML=currentQuizData.b;
      c_text.innerHTML=currentQuizData.c;
      d_text.innerHTML=currentQuizData.d;
  }
  //selected on option to print correct answer logic
  function getSelected(){
     let answer =undefined;
    answerE1.forEach((answerE)=>{
        if(answerE.checked){
        answer=answerE.id;
        }
    });
         return answer;
  }
//when you select answer it not show to the browser terminal
  function deselectAnswer(){
       answerE1.forEach((answerE)=>{
        answerE.checked= false;
        
    });
  }


  submitBtn.addEventListener("click",()=>{
      const answer= getSelected();
       console.log(answer);
    
    if(answer){
      
      if(answer===quizData[currentQuiz].correct){
        score++;
      }

        currentQuiz++;
        if(currentQuiz<quizData.length){
        loadQuiz();
        }
        else{
              // todo show results 
        //   alert("you finished get yourself an orange lemorande");
            quiz.innerHTML=`
            <h2> 
            you answered correctely at
             ${score}/${quizData.length} 
             questions</h2>

             //refresh to quiz
             <button onclick="location.reload()">Reload</button>
            `;

            }    
    }
     
  });