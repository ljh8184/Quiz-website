let question = {
    title: 'gato',
    alternative: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

function showQuestion(q) {

let titleDiv = document.getElementById('title');

titleDiv.textContent = q.title;

let alts = document.querySelectorAll('.alternative');

alts.forEach(function(element, index){
    element.textContent = q.alternative[index];

    element.addEventListener('click', function(){
        if(q.correctAnswer == index) {
            console.log('Corret Answer!');
        }
        else {
            console.log('Wrong Answer!');
        }
    });
});
}

showQuestion(question);

let btn = document.getElementById('btn');

btn.addEventListener('clcik', function(){
    console.log('clicked!');
});