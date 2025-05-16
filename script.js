// BURGER MENU
document.addEventListener('DOMContentLoaded', () => {
  let isNavOpen = false;
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('#headerNav');
  const main = document.querySelector('main');
  const overlay = document.querySelector('.overlay');
  let mainHeight = document.querySelector("main").offsetHeight
  // const push = document.querySelector(".pushdown")

  // function for å åpne nav
  function openNav() {
    navMenu.style.height = '193px';
    overlay.style.height = `${mainHeight + 193}px`;
    burger.classList.toggle('change');
    // push.style.height = "271px"
    if (navMenu) navMenu.style.height === '193px';
    isNavOpen = true;
  }

  //  function for å lukke nav
  function closeNav() {
    navMenu.style.height = '0';
    overlay.style.height = '0';
    burger.classList.toggle('change');
    // push.style.height = "78px"
    if (navMenu) navMenu.style.height === '0';
    isNavOpen = false;
  }

  // Åpne nav når du trykke på burgermenyen
  burger.addEventListener('click', () => {
    if (isNavOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  // lukker nav når du trykker på main (utenfor menyen)
  main.addEventListener('click', () => {
    if (isNavOpen) {
      closeNav();
    } else {
      // do nothing
    }
  });

  //  åpner og lukker nav når du trykker på "m" og lukker nav når du trykker på "ESC"
  let keypress = {};
  document.addEventListener('keydown', handler);
  function handler(x) {
    keypress[x.key] = true;
    if ((x.key === 'm' || x.key === 'Escape') && isNavOpen) {
      closeNav();
    } else if (x.key === 'm') {
      openNav();
    } else {
      // do nothing
    }
  }

  // hide/show header on scroll men berre hvis nav menyen ikkje e åpen
  let prevScrollpos = window.scrollY;
  window.onscroll = function hideHeader() {
    let currentScrollPos = window.scrollY;
    if (!isNavOpen) {
      if (prevScrollpos > currentScrollPos) {
        document.querySelector('header').style.top = '0';
      } else {
        document.querySelector('header').style.top = '-78px';
      }
    } else {
      document.querySelector('header').style.top = '0';
    }
    prevScrollpos = currentScrollPos;
  };
});

//

document.addEventListener('DOMContentLoaded', function(event) {
  let dataText = ["Svett", "Svær", "Sexy", "Grand Marshal"];
  let prefix = ["<span class='prefix-style'>Bjørn E:</span>"]
  let heroP = document.querySelector(".heroP");

  function typeWriter(text, i, Callback) {
      if (i < text.length) {
          heroP.innerHTML = prefix + text.substring(0, i + 1) + '<span class="caret" aria-hidden="true"></span>';
          setTimeout(function() {
              typeWriter(text, i + 1, Callback);
          }, 100);
      } else if (typeof Callback == 'function') {
          setTimeout(Callback, 2000);
      }
  }

  function deleteText(text, i, Callback) {
      if (i >= !text.length) {
          heroP.innerHTML = prefix + text.substring(0, i) + '<span class="caret" aria-hidden="true"></span>';
          setTimeout(function() {
              deleteText(text, i - 1, Callback);
          }, 30);
      } else if (typeof Callback == 'function') {
          setTimeout(Callback, 1000);
      }
  }

  function startTextAnimation(i) {
      if (i < dataText.length) {
          typeWriter(dataText[i], 0, function() {
              deleteText(dataText[i], dataText[i].length, function() {
                  startTextAnimation(i + 1);
              });
          });
      } else {
          setTimeout(function() {
              startTextAnimation(0);
          }, 1);
      }
  }

  startTextAnimation(0);
});

/*
document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement('button')
  const section = document.querySelector('.about')
  
  button.textContent = "Klikk meg!"
  button.classList.add("btn-style")
  section.appendChild(button)
  
  button.style.backgroundColor = "cyan"
  button.style.fontSize = "26px"
  button.style.color = "red"
  button.style.padding = "30px"
  button.style.boxShadow = "0 0 15px 1px white"
  button.style.borderRadius = "15px"
  button.style.border = "5px solid black"
  button.style.transition = "0.5s"

    button.addEventListener("mouseover", () => {
      button.style.scale = "2"
    })

    button.addEventListener("mouseout", () => {
      button.style.scale = "1"
    })
})
*/