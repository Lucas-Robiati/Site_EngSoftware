// Exemplo de interatividade simples com JavaScript
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pega os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe uma mensagem de confirmação
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    // Limpa os campos do formulário
    document.getElementById('formContato').reset();
});

