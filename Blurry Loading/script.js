const number = document.querySelector(".loading");
const backgroundImage = document.querySelector(".bg-image");


let load = 0;

let int = setInterval(count, 30);

function count() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  number.innerText = `${load}%`;
  number.style.opacity = scale(load, 0, 100, 1, 0); // NOTE: Opacity was in lactures before, for transparency, 1 is full and 0 is completly faded
  // NOTE: using the scale(), 1 is for min and 0 for max because we want to from full visible to invisibale!

  backgroundImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // NOTE: how I called blur function? , I went to css related to backgroundImage by backgroundImage.staly; And then by
  //using backgroundImage.style.filter = I called for filter property and then I could recall the blur function inside back-ticks ``, I could add variables also because of back-ticks and using ${}.
}


// NOTE: I took this from stackOverFlow, and also its new version function!
function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
