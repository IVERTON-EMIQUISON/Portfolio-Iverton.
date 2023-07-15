
function validarFormulario() {

    // Obtém os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    // Validação dos campos
    if (nome.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }

    if (email.trim() === '') {
        alert('Por favor, preencha o campo Email.');
        return false;
    }

    if (assunto.trim() === '') {
        alert('Por favor, preencha o campo Assunto.');
        return false;
    }

    if (mensagem.trim() === '') {
        alert('Por favor, preencha o campo Mensagem.');
        return false;
    }

    // Se todos os campos estiverem preenchidos, o formulário é válido

    return true;
}
