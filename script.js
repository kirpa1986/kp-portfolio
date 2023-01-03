const hamburger = document.querySelector(".hamburger");
const sceneCurtain = document.querySelector(".scene-curtain");
const mainCurtain = document.querySelector('.main-curtain');
const welcome = document.querySelector('.main-curtain h1');
// mainCurtain.classList.add('up');

setTimeout(() => {
  delay = 50;
  welcome.innerHTML = welcome.textContent.split('').map((letter, ind) => {
    return `<span style="animation-delay: ${delay * ind}ms">${letter}</span>`
  }).join('');
},1000)

hamburger.addEventListener("click", (e) => {
  if (
    !sceneCurtain.classList.contains("open") &&
    !sceneCurtain.classList.contains("close")
  ) {
    sceneCurtain.classList.add("open");
  } else {
    sceneCurtain.classList.toggle("open");
    sceneCurtain.classList.toggle("close");
  }
});


