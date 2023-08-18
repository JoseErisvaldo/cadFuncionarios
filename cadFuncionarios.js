function naoAtualizarPag(event) {
    event.preventDefault();
}
document.getElementById('submitButton').addEventListener('click', naoAtualizarPag);



function addDados() {
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const setor = document.getElementById('setor').value;
    const salario = document.getElementById('salario').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const cep = document.getElementById('cep').value;
    const cidade = document.getElementById('cidade').value;
    const endereco = document.getElementById('endereco').value;
    const completamento = document.getElementById('completamento').value;
    const rg = document.getElementById('rg').value;
    const emissaoRG = document.getElementById('emissaoRG').value;
    const cpf = document.getElementById('cpf').value;
    const cnh = document.getElementById('cnh').value;
    const categoriaCNH = document.getElementById('categoriaCNH').value;



}

const dadosExcluir = document.querySelectorAll('.dadosExcluir')

dadosExcluir.forEach(elemento => {
    elemento.addEventListener('click', function(event) {
        const linhaTabela = event.target.parentElement;
        linhaTabela.remove()
    });
});

const dadosEditar = document.querySelectorAll('.dadosEditar');
const dadosSalvar = document.querySelectorAll('.dadosSalvar');

dadosEditar.forEach(botaoEditar => {
    botaoEditar.addEventListener('click', function() {
        const tr = this.parentNode;
 
        const tdList = tr.querySelectorAll('td.dadosName, td.dadosCargo, td.dadosSetor, td.dadosTelefone, td.dadosNascimento, td.dadosCEP, td.dadosCidade, td.dadosEndereco, td.dadosCompletamento, td.dadosRG, td.dadosEmissaoRG, td.dadosCPF, td.dadosCNH, td.dadosCategoriaCNH, td.dadosFilial, td.dadosSalario');
        console.log(tdList)
        tdList.forEach(td => {
            const originalValue = td.textContent.trim();
            td.innerHTML = `<input type="text" value="${originalValue}">`;
        });
    });
});

dadosSalvar.forEach(elemento =>  {
    elemento.addEventListener('click', function() {
        let tr = this.parentElement
        let tdList = tr.querySelectorAll('td.dadosName, td.dadosCargo, td.dadosSetor, td.dadosTelefone, td.dadosNascimento, td.dadosCEP, td.dadosCidade, td.dadosEndereco, td.dadosCompletamento, td.dadosRG, td.dadosEmissaoRG, td.dadosCPF, td.dadosCNH, td.dadosCategoriaCNH, td.dadosFilial, td.dadosSalario')
        
        tdList.forEach(elemento => {
            let input = elemento.querySelector('input').value
            elemento.innerHTML = input
            
        })
    })
})