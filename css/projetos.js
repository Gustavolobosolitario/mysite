function gira_sombra(elemento) {
    const sombra = elemento.querySelector('.card-project-shadow');
    sombra.style.transform = "rotate(-30deg)";
  }

  function desgira_sombra(elemento) {
    const sombra = elemento.querySelector('.card-project-shadow');
    sombra.style.transform = "rotate(0deg)";
  }