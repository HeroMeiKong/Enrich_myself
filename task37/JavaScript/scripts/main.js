setTimeout(function () {
  WelcomeAnimation.classList.remove('active');
}, 1000);
let specialTags = document.querySelectorAll('[data-x]');
for (let i = 0; i < specialTags.length; i++) {
  specialTags[i].classList.add('offset');
}
setTimeout(function () {
  findclosed();
}, 1000)
window.onscroll = function () {
  if (window.scrollY > 0) {
    TopNavBar.classList.add('sticky');
  } else {
    TopNavBar.classList.remove('sticky');
  }
  findclosed();
}

function findclosed() {
  let specialTags = document.querySelectorAll('[data-x]');
  let minIndex = 0;
  for (let i = 1; i < specialTags.length; i++) {
    if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
      minIndex = i;
    }
  }
  specialTags[minIndex].classList.remove('offset');
  let id = specialTags[minIndex].id;
  let a = document.querySelector('a[href="#' + id + '"]');
  let li = a.parentNode;
  let brother = li.parentNode.children;
  for (let i = 0; i < brother.length; i++) {
    brother[i].classList.remove('highlight');
  }
  li.classList.add('highlight');
}
let liTags = document.querySelectorAll('nav.menu > ul > li');

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function (x) {
    x.currentTarget.classList.add('active');
  }
  liTags[i].onmouseleave = function (x) {
    x.currentTarget.classList.remove('active');
  }
}
let aTags = document.querySelectorAll('nav.menu > ul > li > a');
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (x) {
    x.preventDefault();
    let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop;
    let currengTop = window.scrollY;
    let targetTop = top - 80;
    let s = targetTop - currengTop;
    var coords = {
      y: currengTop
    };
    var t = Math.abs((s / 100) * 300);
    if (t > 500) {
      t = 500
    }
    var tween = new TWEEN.Tween(coords)
      .to({
        y: targetTop
      }, 1000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function () {
        window.scrollTo(0, coords.y);
      })
      .start();
  }
}