const form = document.getElementById("formPaciente");
const divMensagem = document.getElementById("mensagem");

// 1. EVENTO DE CADASTRO DO PACIENTE
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const pacienteData = {
      id: Date.now(),
      nome: document.getElementById("nome").value,
      cpf: document.getElementById("cpf").value,
      dataNascimento: document.getElementById("dataNascimento").value,
      genero: document.getElementById("genero").value,
      telefone: document.getElementById("telefone") ? document.getElementById("telefone").value : "",
      email: document.getElementById("email") ? document.getElementById("email").value : ""
    };

    // Pegar a lista salva no navegador
    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

    // Validar se o CPF já está cadastrado
    const cpfExistente = pacientes.some(p => p.cpf === pacienteData.cpf);
    if (cpfExistente) {
      exibirMensagem("Erro ao cadastrar! Verifique se o CPF já existe.", "erro");
      return;
    }

    // Salvar novo paciente
    pacientes.push(pacienteData);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));

    exibirMensagem("Paciente cadastrado com sucesso!", "sucesso");
    form.reset();
    carregarPacientes();
  });
}

// 2. FUNÇÃO PARA CARREGAR E LISTAR PACIENTES NA TABELA
function carregarPacientes() {
  const tabela = document.getElementById("tabelaPacientes");
  if (!tabela) return;

  const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
  tabela.innerHTML = "";

  pacientes.forEach(p => {
    const linha = `
      <tr>
        <td>${p.id}</td>
        <td>${p.nome}</td>
        <td>${p.cpf}</td>
        <td>${p.dataNascimento}</td>
        <td>${p.genero}</td>
        <td>${p.telefone || '-'}</td>
      </tr>
    `;
    tabela.innerHTML += linha;
  });
}

// 3. FUNÇÃO DE EXIBIR MENSAGEM
function exibirMensagem(texto, tipo) {
  if (!divMensagem) return;
  divMensagem.textContent = texto;
  divMensagem.className = `mensagem ${tipo}`;
  
  setTimeout(() => {
    divMensagem.className = "mensagem hidden";
  }, 4000);
}

// Carregar a tabela assim que o arquivo for executado
carregarPacientes();
