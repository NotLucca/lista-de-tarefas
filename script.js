const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    
    if(valor != " " ){
       
        const tarefa = document.createElement('li')
        tarefa.classList.add('task')
        
        const conteudo = `<p class="content"><strong>${valor}</strong></p>`
        tarefa.innerHTML = conteudo
        tarefa.appendChild(BotaoConclui())
        lista.appendChild(tarefa)
        input.value = " "
    }
   

}

const novaTarefa = document.querySelector('[data-form-button]')




novaTarefa.addEventListener('click', criarTarefa)

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.addEventListener('click', ()=>{
        console.log("fui clicado");
    })
    return botaoConclui
}
