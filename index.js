const perguntas = [
    {
      pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para imprimir mensagens no console em JavaScript?",
      respostas: [
        "print()",
        "console.log()",
        "logMessage()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Data Object Model",
        "Document Object Model",
        "Dynamic Object Model",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a estrutura de controle de fluxo que permite executar código repetidamente em JavaScript?",
      respostas: [
        "if-else",
        "switch",
        "for loop",
      ],
      correta: 2
    },
    {
      pergunta: "Qual operador é utilizado para comparar igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      respostas: [
        "Um tipo de erro",
        "Uma função passada como argumento para outra função",
        "Um objeto nativo do JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "O que é closure em JavaScript?",
      respostas: [
        "Uma função que não retorna valor",
        "Uma variável que não pode ser modificada",
        "Uma função que captura variáveis do seu ambiente",
      ],
      correta: 3
    },
    {
      pergunta: "Qual é a forma correta de declarar uma função em JavaScript?",
      respostas: [
        "function minhaFuncao() {}",
        "const minhaFuncao = function() {}",
        "both a and b",
      ],
      correta: 3
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "JavaScript Object Notation",
        "Java Standard Object Notation",
        "JavaScript Open Notation",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Comparar tipos de dados",
        "Verificar se uma variável é indefinida",
        "Obter o tipo de dado de uma expressão",
      ],
      correta: 3
    },
  ];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  //loop ou laço de repetição
  for(const item of perguntas){
    //copia o template do HTML
    const quizItem = template.content.cloneNode(true)
    //troca cada um por um h3 diferente
    quizItem.querySelector('h3') .textContent = item.pergunta

    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //aqui ele fala sobre puxar o span do HTML 
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

      }
      
      quizItem.querySelector('dl').appendChild(dt)
      
    }
    //remove o Resposta A
    quizItem.querySelector('dl dt').remove()




    //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }