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
    secaoId: "conceitos",
    titulo: "HEAD",
    descricao: "Ponteiro especial que indica em qual branch ou commit você está posicionado atualmente no seu repositório local."
  },
  {
    secaoId: "conceitos",
    titulo: "Detached HEAD",
    descricao: "Estado em que o HEAD aponta diretamente para um commit específico em vez de apontar para uma branch. Alterações feitas aqui não salvam em nenhuma branch."
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
    secaoId: "comandos",
    titulo: "git checkout -",
    descricao: "Atalho rápido para voltar instantaneamente para a última branch em que você estava antes da atual."
  },
  {
    secaoId: "comandos",
    titulo: "git diff",
    descricao: "Compara as alterações feitas nos arquivos no seu diretório de trabalho antes de adicioná-los à Staging Area."
  },
  {
    secaoId: "comandos",
    titulo: "git branch -m [novo-nome]",
    descricao: "Renomeia a branch atual (ou a branch especificada) para um novo nome localmente."
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
  },
  {
    secaoId: "flags",
    titulo: "--oneline",
    descricao: "Resume o histórico de commits exibindo apenas o hash curto e a primeira linha da mensagem (usado com git log)."
  },
  {
    secaoId: "flags",
    titulo: "--amend",
    descricao: "Altera o último commit realizado, permitindo atualizar a mensagem ou incluir novos arquivos esquecidos (usado com git commit)."
  },
  {
    secaoId: "flags",
    titulo: "-b",
    descricao: "Cria e faz o checkout para uma nova branch simultaneamente (usado com git checkout ou git switch -c)."
  },
  {
    secaoId: "flags",
    titulo: "-u / --set-upstream",
    descricao: "Vincular a branch local a uma branch remota ao fazer o primeiro push, facilitando os próximos git push/pull."
  },
  {
    secaoId: "flags",
    titulo: "-d / -D",
    descricao: "Deleta uma branch local. Use -d para exclusão segura ou -D para forçar a remoção de alterações não unificadas."
  },
  {
    secaoId: "flags",
    titulo: "--staged / --cached",
    descricao: "Visualiza apenas as alterações que já foram adicionadas à Staging Area (usado com git diff)."
  },
  {
    secaoId: "flags",
    titulo: "-am",
    descricao: "Combina as flags -a e -m para adicionar todas as alterações de arquivos já rastreados e realizar o commit com mensagem em um único comando (ex: git commit -am \"mensagem\")."
  },
  {
    secaoId: "flags",
    titulo: "HEAD~ / HEAD^",
    descricao: "Atalhos de navegação relativa: HEAD~1 (ou HEAD~) refere-se ao commit anterior; HEAD~2 refere-se a dois commits atrás."
  },
  {
    secaoId: "flags",
    titulo: "--graph --oneline",
    descricao: "Exibe o histórico de commits formatado como um gráfico visual de branches no próprio terminal (usado com git log)."
  },
  {
    secaoId: "flags",
    titulo: "--hard",
    descricao: "Restaura o repositório para um estado anterior descartando permanentemente todas as alterações locais não comitadas (usado com git reset)."
  }
];

function atualizarTela(cardsExibidos) {
  const secoes = ["conceitos", "comandos", "fluxo", "flags"];

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