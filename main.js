const perguntas = [
  {
    pergunta: "Qual é o nome do restaurante em 'Five Nights at Freddy's'?",
    respostas: [
      "Freddy's Pizza",
      "Fazbear's Fright",
      "Chica's Chicken",
      "Foxy's Diner",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o animatrônico principal da série?",
    respostas: [
      "Bonnie",
      "Freddy",
      "Chica",
      "Foxy",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do jogador nos jogos 'Five Nights at Freddy's'?",
    respostas: [
      "Limpeza do restaurante",
      "Cozinheiro",
      "Guarda de segurança noturno",
      "Técnico de manutenção",
    ],
    correta: 2
  },
  {
    pergunta: "O que acontece se um animatrônico entra na sala do jogador?",
    respostas: [
      "Nada",
      "O jogador é expulso do restaurante",
      "O jogador é demitido",
      "O jogador é transformado em animatrônico",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a relação entre os animatrônicos e o jogador?",
    respostas: [
      "Inimigos mortais",
      "Colegas de trabalho",
      "Clientes",
      "Parentes distantes",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o objetivo principal nos jogos 'Five Nights at Freddy's'?",
    respostas: [
      "Construir um novo restaurante",
      "Sobreviver à noite",
      "Resolver quebra-cabeças",
      "Fazer amizade com os animatrônicos",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é conhecido por sua risada assustadora em 'Five Nights at Freddy's'?",
    respostas: [
      "Bonnie",
      "Freddy",
      "Chica",
      "Mangle",
    ],
    correta: 3
  },
  {
    pergunta: "Qual é o nome do criador da série 'Five Nights at Freddy's'?",
    respostas: [
      "Scott Cawthon",
      "Markiplier",
      "Toby Fox",
      "Hideo Kojima",
    ],
    correta: 0
  },
  {
    pergunta: "Em qual ano o primeiro jogo 'Five Nights at Freddy's' foi lançado?",
    respostas: [
      "2010",
      "2012",
      "2014",
      "2016",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o lema do restaurante Freddy Fazbear's Pizza?",
    respostas: [
      "Comida deliciosa, diversão garantida!",
      "Onde a diversão nunca acaba!",
      "O lugar mais assustador da cidade!",
      "Coma aqui e nunca mais saia!",
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
  