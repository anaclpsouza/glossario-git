function renderizarCards(secaoId, lista) {
  const container = document.querySelector(`#${secaoId} h2+div`);
  if (!container) return;

  container.innerHTML = "";

  lista.forEach(function (item) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML =
      "<h3>" + item.titulo + "</h3><p>" + item.descricao + "</p>";
    container.appendChild(card);
  });
}

let exemploCard = {
  titulo: "git init",
  descricao: "Inicializa um novo repositório Git na pasta atual do projeto.",
};
