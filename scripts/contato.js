let nome = document.getElementById('nome')
let email = document.getElementById('email');
let msg = document.getElementById('msg');
let btn = document.getElementById('btn');
//Uma variavel para cada input do formulário, para que consiga criar um evento para o botão e uma condição para cada input que precisa ser preenchido.

btn.addEventListener('click', validacao)//Dizendo que quando clicar no botão(btn), quero que 'escute' o que está dentro do bloco.


function validacao(){
    if(nome.value === '' || email.value === '' || msg.value === ''){ //Se qualquer um dos input tiver com o valor vazio, mostrar um alerta pedindo para preencher os campos.
        alert('Preencha todos os campos');
    }
    else{ //Senão, mostrar um alerta confirmando o envio do formulário e direcionando para a página inicial.
        alert("Sua mensagem foi enviada! Agradecemos o contato.")
        window.location.href="index.html"
    }
}
