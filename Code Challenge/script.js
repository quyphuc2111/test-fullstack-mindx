var data = {"response_code":0,"results":[{"category":"Sports","type":"multiple","difficulty":"easy","question":"In what sport is a &quot;shuttlecock&quot; used?","correct_answer":"Badminton","incorrect_answers":["Table Tennis","Rugby","Cricket"]},{"category":"Sports","type":"multiple","difficulty":"easy","question":"This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.","correct_answer":"Don Cherry","incorrect_answers":["Don McKellar","Don Taylor ","Donald Sutherland"]},{"category":"Sports","type":"multiple","difficulty":"easy","question":"When was the first official international game played?","correct_answer":"1872","incorrect_answers":["1880","1863","1865"]},{"category":"Sports","type":"multiple","difficulty":"easy","question":"Which boxer was banned for taking a bite out of Evander Holyfield&#039;s ear in 1997?","correct_answer":"Mike Tyson","incorrect_answers":["Roy Jones Jr.","Evander Holyfield","Lennox Lewis"]},{"category":"Sports","type":"multiple","difficulty":"easy","question":"Who won the UEFA Champions League in 2017?","correct_answer":"Real Madrid C.F.","incorrect_answers":["Atletico Madrid","AS Monaco FC","Juventus F.C."]}]}
console.log(data.results)
const quiz =[];
let correctAnswer = ""



for(let e in data.results) {
    quiz.push( {
        question: data.results[e].question,
        answers: data.results[e].incorrect_answers.concat(data.results[e].correct_answer)
    })
    correctAnswer += data.results[e].correct_answer;
}
console.log(quiz)

const randomQuiz = Math.floor(Math.random() * quiz.length)
console.log(randomQuiz)
const question = document.querySelector('.question')
const answer = document.querySelector('.answer')

// for(let i =0; i<quiz.length;i++) {
    question.innerHTML = 'Question: '+'<br>' +quiz[randomQuiz].question + "<br>"
    answer.innerHTML = 'Answer: '+'<br>' +quiz[randomQuiz].answers.join(' - ')
// }

// const input = document.querySelector('.inputt')
// input.addEventListener('click',() => {
//     if(input.value == correctAnswer) {
//         alert('Bạn đã trả lời đúng')
//     } else {
//         alert('Bạn đã trả lời sai')
//     }
// })
// const form = document.getElementById('game-form')
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if(form.asw.value == correctAnswer) {
//         alert('Bạn trả lời đúng')
//     }
// })


//em chua lam duoc gi :DD





// const question = document.querySelector('.question')
// question.innerHTML = "Question: " +"<br><br>"+quiz[randomQuiz]
