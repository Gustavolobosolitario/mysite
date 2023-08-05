const direita = document.querySelectorAll(".right");
const qtd_direita = direita.length;
const esquerda = document.querySelectorAll(".left");
const qtd_esquerda = esquerda.length;
let pos = 0;
let chamou = false;

function show_items_timeline() {
  if (pos < qtd_direita) {
    
    direita[pos].style.transform = "translateX(-120%)";
    direita[pos].style.transition = "all 2s";
    direita[pos].style.zIndex = "1";
  }

  if (pos < qtd_esquerda) {
    esquerda[pos].style.transform = "translateX(120%)";
    esquerda[pos].style.transition = "all 2s";
    esquerda[pos].style.zIndex = "1";
  }

  pos += 1;

  if (pos < Math.max(qtd_direita, qtd_esquerda)) {
    requestAnimationFrame(show_items_timeline);
  }
}

function scroll_check() {
  const y = window.scrollY;

  if (y / document.documentElement.scrollHeight > 0.36 && !chamou) {
    show_items_timeline();
    chamou = true;
  }
}

window.addEventListener("scroll", scroll_check);
