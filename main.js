const perguntas = [
    {
      pergunta: "Qual é a função principal do JavaScript?",
      respostas: [
        "Manipular o estilo CSS",
        "Realizar operações matemáticas no servidor",
        "Adicionar interatividade às páginas da web",
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var x = 5;",
        "let x = 5;",
        "ambas as opções anteriores estão corretas",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que representa um único valor",
        "Uma estrutura de controle de fluxo",
        "Uma coleção ordenada de valores",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um novo tipo de dado",
        "Um modelo para estruturar códigos JavaScript",
        "A representação da estrutura da página web para interação via código",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Ambos comparam valores e tipos de dados",
        "'==' compara apenas valores, '===' compara valores e tipos de dados",
        "'===' é um erro de sintaxe em JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o hoisting em JavaScript?",
      respostas: [
        "Uma técnica de otimização de código",
        "A elevação de declarações para o topo do seu contexto de execução",
        "Uma forma de declarar variáveis sem a palavra-chave 'var'",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Comparar o tipo de dois valores",
        "Retornar o tipo de um dado",
        "Converter um valor para o tipo 'object'",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um método para ocultar elementos HTML",
        "Uma função para imprimir mensagens no console",
        "Uma ação desencadeada pelo usuário ao clicar em um elemento da página",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'forEach' em JavaScript?",
      respostas: [
        "Iterar sobre elementos de um array",
        "Inverter a ordem de elementos em um array",
        "Adicionar novos elementos a um array",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma closure em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "Uma função que retorna outra função, capturando variáveis do escopo externo",
        "Um erro de sintaxe comum em programação",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector("template")
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
    //loop para pegar as respostas
    for(let resposta of item.respostas){
      //clona as respostas do const perguntas
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //substitui o padrão pelo const perguntas
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      //cria a resposta
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //remove o a primeira resposta padrão
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  