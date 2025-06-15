const sobre = document.querySelector("#about");

const formulario =  document.querySelector("#formulario")

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

async function getApiGithub() {
    try {
        
        //Enviar uma Requisição HTTP para Api do GitHub
        const dadosPerfil = await fetch(`https://api.github.com/users/scaglia-aylla1`)

        // Converte a Resposta HTTP para o formato Json
        const perfil = await dadosPerfil.json()

        //Criando o conteúdo da sessão about
        let conteudo = ` 
                <!-- Imagem da seção Sobre -->

                <!-- Texto da seção Sobre -->
                <article id="about_texto">
                    <h1>Sobre mim</h1>
                    <p>
                        Sou uma desenvolvedora em transição de carreira, apaixonada por tecnologia e movida por desafios. Após anos de experiência como líder de equipe no setor de costura, decidi seguir meu coração e mergulhar no universo da programação.  
                        <br><br>
                        Atualmente, estou focada em desenvolvimento web, com ênfase em Java, Spring Boot, HTML, CSS e Bootstrap. Tenho explorado tecnologias de back-end e front-end, buscando me tornar uma desenvolvedora full stack.
                        <br><br>
                        Estudar, codar e criar soluções que impactem positivamente a vida das pessoas é o que me motiva todos os dias. Estou sempre em busca de aprendizado contínuo, evolução e novas oportunidades para crescer na área de tecnologia.
                    </p>

                    <div id="about_github" class="flex sobre_github">
                        <a href="h${perfil.html_url}" target="_blank" class="botao">Github</a>
                        <p>${perfil.followers} seguidores</p>
                        <p>${perfil.public_repos} repositórios</p>
                    </div>
                </article>
                
        `
        //Adicionar o conteúdo da página index.html na sessão about
        sobre.innerHTML += conteudo
    } catch (error) {
        console.error(error)
    }
}

formulario.addEventListener("submit", function(event){

    event.preventDefault()

    const campoNome = document.querySelector("#nome")
    const txtNome = document.querySelector("#txtNome")

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres"
        campoNome.focus()
        return
    }else{
        txtNome.innerHTML = ""
    }

     const campoEmail = document.querySelector("#email")
    const txtEmail = document.querySelector("#txtEmail")

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail válido"
        campoEmail.focus()
        return
    }else{
        txtEmail.innerHTML = ""
    }

    const campoAssunto = document.querySelector("#assunto")
    const txtAssunto = document.querySelector("#txtAssunto")

    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = "O Assunto deve ter no mínimo 5 caracteres"
        campoAssunto.focus()
        return
    }else{
        txtAssunto.innerHTML = ""
    }

    // Enviar o e-mail
    formulario.submit()
})


getApiGithub()

