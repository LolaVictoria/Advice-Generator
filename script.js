const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('#quoteid');
const button = document.querySelector('#btn');



function getAdvice() {


  fetch("https://api.adviceslip.com/advice").then(response => {
    return response.json();
    //console.log(response.json());
  }).then(adviceData => {
    const adviceNum = adviceData.slip.id;
    const advice = adviceData.slip.advice;

    adviceId.textContent = adviceNum;
    adviceText.innerHTML = `<p>
    ${advice}
    </p>
   `

    }).catch(error => {
    console.error(error)
    })
    }

    button.addEventListener('click', function() {
    getAdvice();
    })

    window.onload = () => {
    getAdvice();
    }