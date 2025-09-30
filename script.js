const usuarios = [
  { nome: "Bruno Gomes Da Silva", cpf: "5885" },
  { nome: "Tiago Felipe Dos Santos Coelho", cpf: "2875" },
  { nome: "Valdemir Gomes Junior", cpf: "3855" },
  // Adicione todos os outros...
];

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "geral" && pass === "usuario") {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
    carregarNomes();
    gerarHoras();
  } else {
    document.getElementById("login-error").innerText = "Usuário ou senha inválidos!";
  }
}

function carregarNomes() {
  const select = document.getElementById("nome");
  usuarios.forEach(u => {
    const opt = document.createElement("option");
    opt.value = u.nome;
    opt.textContent = u.nome;
    select.appendChild(opt);
  });
}

function ativarCpf() {
  document.getElementById("cpf-div").style.display = "block";
  document.getElementById("cpf-msg").innerText = "";
  document.getElementById("form-extra").style.display = "none";
}

function validarCpf() {
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value.trim();
  const pessoa = usuarios.find(p => p.nome === nome && p.cpf === cpf);
  if (pessoa) {
    document.getElementById("form-extra").style.display = "block";
    document.getElementById("cpf-msg").innerText = "";
  } else {
    document.getElementById("cpf-msg").innerText = "CPF incorreto.";
  }
}

function gerarHoras() {
  const inicio = document.getElementById("inicio");
  const fim = document.getElementById("fim");
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      const hora = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      const opt1 = document.createElement("option");
      opt1.value = hora;
      opt1.textContent = hora;
      const opt2 = opt1.cloneNode(true);
      inicio.appendChild(opt1);
      fim.appendChild(opt2);
    }
  }
}

function enviar() {
  const dados = {
    nome: document.getElementById("nome").value,
    area: document.getElementById("area").value,
    projeto: document.getElementById("projeto").value,
    numeroProjeto: document.getElementById("numeroProjeto").value,
    inicio: document.getElementById("inicio").value,
    fim: document.getElementById("fim").value,
    data: new Date().toLocaleString("pt-BR")
  };

  console.log("Dados enviados:", dados);

  document.getElementById("submit-msg").innerText = "Ponto enviado com sucesso!";
}
