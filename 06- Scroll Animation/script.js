const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);


// checkboxes 함수를 호출하면 스크롤 하기 전에 화면에 바로 나타나게 할 수 있다.
checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    // getBoundingClientRect : 대상 엘리먼트의 위치 정보를 얻을 수 있는 함수.
    // x, y, width, height, top, right, bottom, left 값의 정보를 알 수 있다.
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}