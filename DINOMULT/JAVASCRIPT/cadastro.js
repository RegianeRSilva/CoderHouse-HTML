// Selecionando elementos
const overlay = document.getElementById('overlay');
const fecharModal = document.getElementById('fecharModal');

// Função para fechar o modal
fecharModal.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Simulando o envio do formulário
const formCadastro = document.getElementById('formCadastro');
formCadastro.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio real do formulário
    alert('Cadastro realizado com sucesso!');
    overlay.style.display = 'none'; // Fecha o modal
});
