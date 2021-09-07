const buttonPrev = document.getElementById('prev');
const buttonNext = document.getElementById('next');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

// NOTE: using this as pointer to active circle and find position
let curentActive = 1;



buttonNext.addEventListener('click', () => {
  curentActive++;

  if (curentActive > circles.length) {
    curentActive = circles.length;
  }
  console.log(curentActive);
  update();
})



buttonPrev.addEventListener('click', () => {
  curentActive--;

  if (curentActive < 1) {
    curentActive = 1;
  }
  console.log(curentActive);
  update();
})




function update() {
  // NOTE: Good algorithm to add and remove class from Elements who
  // share same classes.
  circles.forEach((circle, idx) => {
    if (idx < curentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  // NOTE: BLUE line
  progress.style.width = ((curentActive-1) /(circles.length-1)) * 100+'%';

  // NOTE: Enable and disable buttons
  if(curentActive === 1){
    prev.disabled = true;
  }
  else if(curentActive === circles.length){
    next.disabled = true;
  }
  else{
    prev.disabled = false;
    next.disabled = false;
  }
}
