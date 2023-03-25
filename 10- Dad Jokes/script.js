const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();


// * .then, async await 외에도 axios 라이브러리가 사용하기 편리해서 선호도가 높다!
// fetch api는 web api라서 지원되는 브라우저에서 별도의 설치 과정없이 바로 사용이 가능하다.


// async / await 사용법
async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  const res = await fetch('https://icanhazdadjoke.com/', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
  
}


// .then 사용법
// 앞에 일일히 .then()을 붙여서 지저분해보일 수 있다.
// function generateJoke() {
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }
//   fetch('https://icanhazdadjoke.com/', config)
//   .then(res => res.json())
//   .then(data => {
//     jokeEl.innerHTML = data.joke;
//   })
// }