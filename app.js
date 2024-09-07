// app.js

function pesquisar() {
    // Essa função é acionada quando o botão de pesquisa é clicado.
    console.log("clicou"); // Loga no console para confirmar que a função foi chamada.
  
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento HTML selecionado no console.

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa); 

    campoPesquisa = campoPesquisa.toLowerCase();
    
    if (campoPesquisa == ""){
        section.innerHTML = "Nada foi encontrado"
        return
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada elemento (dado) no array 'dados'.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói uma string HTML para cada resultado, formatando os dados do objeto 'dado'.
            resultados += `
                    <div class="item-resultado">
                        <h2>${dado.titulo}</h2>
                        <p class="descricao-meta">
                            ${dado.descricao}
                        </p>
                        <br>
                        <a href=${dado.link} target="_blank">Mais informações</a>
                    </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui a string com os resultados HTML à propriedade innerHTML da seção.
    // Isso substitui o conteúdo anterior da seção pelos novos resultados.
    section.innerHTML = resultados;
  }