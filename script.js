let num1 = document.querySelector("#number1");
let num2 = document.querySelector("#number2");
let inputbox = document.querySelector("#inputbox");
let scoreoutput = document.querySelector("#score")
let score =0
let answer;
function randomnumber() {
  inputbox.value=null
  rand1 = Math.floor(Math.random() * 100);
  rand2 = Math.floor(Math.random() * 100);
  answer = rand1+rand2;
  num1.textContent = rand1;
  num2.textContent = rand2;
}

function checkanswer() {
    
    if(inputbox.value == answer){
      score++;
      showscore()
      randomnumber();
  }
  else{  
    score--
    if(score<0){
        score=0
    }
    showscore()
    randomnumber()

  }
}
function showscore(){
    scoreoutput.textContent = score
}

randomnumber();