!function(){
  var specialTags = document.querySelectorAll('[data-x]');
  for(let i=0;i<specialTags.length;i++){
    specialTags[i].classList.add('offset');
  }
  findclosedAndRemoveOffset();
  window.addEventListener('scroll',function(x){
    findclosedAndRemoveOffset();
  })

  function findclosedAndRemoveOffset() {
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
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active');
    }
    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active');
    }
  }
}.call()