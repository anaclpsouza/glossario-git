function renderizarCards(secaoId, lista) {
  const container = document.querySelector(`#${secaoId} h2+div`);
  const secao = document.getElementById(secaoId);

  if (!container || !secao) return;

  container.innerHTML = "";

  if (lista.length === 0) {
    secao.style.display = "none";
    return;
  }

  secao.style.display = "block";

  lista.forEach(function (item) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML =
      "<h3>" + item.titulo + "</h3><p>" + item.descricao + "</p>";
    container.appendChild(card);
  });
}

const listaCards = [
  {
    secaoId: "conceitos",
    titulo: "Repository (Repositório)",
    descricao: "Espaço de armazenamento onde o Git guarda todo o histórico de alterações do seu projeto (pasta .git)."
  },
  {
    secaoId: "conceitos",
    titulo: "Commit",
    descricao: "Um \"instantâneo\" (snapshot) do seu código em um determinado momento. Cada commit possui um ID único (hash)."
  },
  {
    secaoId: "conceitos",
    titulo: "Branch (Ramificação)",
    descricao: "Uma linha de desenvolvimento independente. Permite criar funcionalidades sem afetar o código principal (main)."
  },
  {
    secaoId: "conceitos",
    titulo: "Working Tree / Staging Area / Local Repo",
    descricao: "Os 3 estados locais do Git: o diretório de trabalho atual, a área de preparação (index) e o repositório local salvo."
  },

  {
    secaoId: "comandos",
    titulo: "git init",
    descricao: "Inicializa um novo repositório Git na pasta atual do projeto."
  },
  {
    secaoId: "comandos",
    titulo: "git status",
    descricao: "Exibe o estado dos arquivos: modificados, não rastreados (untracked) ou prontos para o commit."
  },
  {
    secaoId: "comandos",
    titulo: "git add",
    descricao: "Adiciona arquivos modificados à área de preparação (Staging Area). Use git add . para adicionar tudo."
  },
  {
    secaoId: "comandos",
    titulo: "git commit -m \"mensagem\"",
    descricao: "Grava as alterações registradas no staging area com uma mensagem explicativa do que foi feito."
  },
  {
    secaoId: "comandos",
    titulo: "git branch",
    descricao: "Lista as branches existentes. Use git branch nome para criar uma nova ou git branch -d nome para deletar."
  },
  {
    secaoId: "comandos",
    titulo: "git checkout / git switch",
    descricao: "Alterna entre branches. Use git checkout -b nome para criar e mudar para a branch nova ao mesmo tempo."
  },
  {
    secaoId: "comandos",
    titulo: "git merge",
    descricao: "Junta as alterações de outra branch na branch onde você está posicionado atualmente."
  },
  {
    secaoId: "comandos",
    titulo: "git clone [url]",
    descricao: "Baixa a cópia de um repositório remoto existente no GitHub para a sua máquina local."
  },
  {
    secaoId: "comandos",
    titulo: "git push",
    descricao: "Envia os commits realizados localmente para o repositório remoto (ex: GitHub)."
  },
  {
    secaoId: "comandos",
    titulo: "git pull",
    descricao: "Baixa e integra automaticamente as alterações do repositório remoto na sua branch atual (Fetch + Merge)."
  },
  {
    secaoId: "comandos",
    titulo: "git log --oneline",
    descricao: "Exibe o histórico de commits do projeto de forma simplificada e resumida em uma linha por commit."
  },
  {
    secaoId: "comandos",
    titulo: "git stash",
    descricao: "Guarda temporariamente as alterações não salvas (rascunho) em uma \"gaveta\" para limpar o ambiente de trabalho."
  },
  {
    secaoId: "comandos",
    titulo: "git tag -a [nome] -m \"\"",
    descricao: "Cria uma etiqueta anotada em um commit específico para marcar versões oficiais de lançamento (ex: v1.0)."
  },
  {
    secaoId: "comandos",
    titulo: "git reset",
    descricao: "Desfaz commits ou remove arquivos do Staging Area, podendo alterar o histórico de desenvolvimento."
  },
  {
    secaoId: "fluxo",
    titulo: "O que fazer em caso de Merge Conflict?",
    descricao: "Abra os arquivos com conflito, edite o código mantendo a versão final, remova as marcações do Git, adicione ao staging (git add) e finalize com git commit."
  },
  {
    secaoId: "fluxo",
    titulo: "Prevenção de Conflitos",
    descricao: "Mantenha sua branch atualizada frequentemente fazendo git pull ou git merge develop antes de abrir um Pull Request."
  }
];

function atualizarTela(cardsExibidos) {
  const secoes = ["conceitos", "comandos", "fluxo"];

  secoes.forEach(function (secaoId) {
    const cardsDaSecao = cardsExibidos.filter(card => card.secaoId === secaoId);
    renderizarCards(secaoId, cardsDaSecao);
  });
}


atualizarTela(listaCards);


const inputBusca = document.getElementById("busca");
const mensagemSemResultados = document.getElementById("sem-resultados");

if (inputBusca) {
  inputBusca.addEventListener("input", function (event) {
    const termo = event.target.value.toLowerCase().trim();

    const cardsFiltrados = listaCards.filter(function (card) {
      const tituloValido = card.titulo.toLowerCase().includes(termo);
      const descricaoValida = card.descricao.toLowerCase().includes(termo);
      return tituloValido || descricaoValida;
    });

    atualizarTela(cardsFiltrados);

    if (mensagemSemResultados) {
      if (cardsFiltrados.length === 0) {
        mensagemSemResultados.style.display = "block";
      } else {
        mensagemSemResultados.style.display = "none";
      }
    }
  });
}