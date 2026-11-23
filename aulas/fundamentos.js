window.COMANDAI_MODULOS = window.COMANDAI_MODULOS || [];
window.COMANDAI_MODULOS.push({
  "id": "fundamentos",
  "numero": "01",
  "titulo": "Fundamentos dos comandos",
  "descricao": "Aprenda a estrutura dos comandos e comece pelo /give.",
  "aulas": [
    {
      "id": "give",
      "numero": "01",
      "titulo": "Seu primeiro comando: /give",
      "descricao": "Entenda a estrutura básica de um comando e entregue itens ao jogador.",
      "duracao": "8 min",
      "disponivel": true,
      "conteudo": {
        "notaMinima": 0.8,
        "etapas": [
          {
            "titulo": "Antes de começar",
            "dialogo": "Comandos são instruções que você escreve para pedir uma ação ao Minecraft. Nesta aula, você vai conhecer o /give, entender como escolher um alvo e um item e testar um exemplo. O comando funciona em mundos com comandos ativados; no modo multijogador, você também precisa ter permissão para usá-lo.",
            "dica": "Os exemplos desta aula usam a edição Java do Minecraft.",
            "tempoLeitura": 5
          },
          {
            "titulo": "Entenda a estrutura",
            "dialogo": "O /give segue esta estrutura: /give <alvo> <item> [quantidade]. O alvo diz quem vai receber o item; @s representa você. O item é escrito com seu identificador, como minecraft:torch. A quantidade é opcional e, quando não informada, o jogo entrega uma unidade.",
            "dica": "Não digite os sinais < e > do exemplo: eles só indicam onde entra cada valor.",
            "tempoLeitura": 5
          },
          {
            "titulo": "Teste o /give",
            "dialogo": "No chat, execute /give @s minecraft:torch 16 para receber 16 tochas. Troque minecraft:torch por minecraft:diamond para receber diamantes, ou altere o número para escolher outra quantidade. Se aparecer uma mensagem de erro, confira se os comandos estão ativados e se o identificador do item foi escrito corretamente.",
            "dica": "No modo individual, comandos podem ser ativados ao criar o mundo ou pela opção de abrir para LAN.",
            "tempoLeitura": 5
          }
        ],
        "questionario": [
          {
            "pergunta": "Para que serve o comando /give?",
            "respostaCorreta": "Entregar itens a um alvo",
            "respostasIncorretas": [
              "Alterar o clima",
              "Mudar o modo de jogo",
              "Criar uma entidade"
            ]
          },
          {
            "pergunta": "O que @s representa no campo de alvo?",
            "respostaCorreta": "Quem executa o comando",
            "respostasIncorretas": [
              "Todos os jogadores",
              "O jogador mais próximo",
              "Uma entidade aleatória"
            ]
          },
          {
            "pergunta": "Qual identificador representa uma tocha no exemplo desta aula?",
            "respostaCorreta": "minecraft:torch",
            "respostasIncorretas": [
              "minecraft:light",
              "minecraft:fire",
              "minecraft:stick"
            ]
          },
          {
            "pergunta": "O que indica o último número em /give @s minecraft:torch 16?",
            "respostaCorreta": "A quantidade de itens",
            "respostasIncorretas": [
              "O nível do jogador",
              "O número do slot",
              "O alcance do comando"
            ]
          },
          {
            "tipo": "comando",
            "pergunta": "Como conseguir uma tocha para si mesmo por comando?",
            "respostaCorreta": "/give @s minecraft:torch",
            "respostasAceitas": [
              "/give @s minecraft:torch",
              "give @s minecraft:torch",
              "/give @s torch",
              "give @s torch"
            ]
          }
        ]
      }
    },
    {
      "id": "seletores",
      "numero": "02",
      "titulo": "Alvos e seletores",
      "descricao": "Escolha quem recebe os itens e os efeitos dos seus comandos.",
      "duracao": "6 min",
      "disponivel": true,
      "conteudo": {
        "notaMinima": 0.8,
        "etapas": [
          {
            "titulo": "Escolha quem recebe o comando",
            "dialogo": "Muitos comandos precisam de um alvo: o jogador ou a entidade que será afetada. Em vez de escrever um nome, você pode usar um seletor. Nesta aula, vamos praticar os seletores de jogadores mais comuns e aplicar um deles no comando /give.",
            "dica": "Os exemplos desta aula usam a edição Java do Minecraft.",
            "tempoLeitura": 5
          },
          {
            "titulo": "Conheça os seletores",
            "dialogo": "Use @s para quem executa o comando, @p para o jogador mais próximo, @a para todos os jogadores e @r para um jogador aleatório. Já @e seleciona entidades em geral, como jogadores, animais e monstros; nem todo comando aceita qualquer tipo de alvo.",
            "dica": "No chat, @p normalmente seleciona o jogador mais próximo de você.",
            "tempoLeitura": 5
          },
          {
            "titulo": "Direcione um comando",
            "dialogo": "Experimente /give @p minecraft:bread 3 para entregar três pães ao jogador mais próximo. Troque @p por @s para escolher você ou por @a para escolher todos os jogadores. O seletor ocupa o lugar do alvo, sem mudar o restante da estrutura do comando.",
            "dica": "Use @a com cuidado: em um servidor, o comando pode afetar todos os jogadores conectados.",
            "tempoLeitura": 5
          }
        ],
        "questionario": [
          {
            "pergunta": "O que @s representa?",
            "respostaCorreta": "Quem executa o comando",
            "respostasIncorretas": [
              "Todos os jogadores",
              "O jogador aleatório",
              "Todas as entidades"
            ]
          },
          {
            "pergunta": "Qual seletor escolhe todos os jogadores?",
            "respostaCorreta": "@a",
            "respostasIncorretas": [
              "@s",
              "@p",
              "@r"
            ]
          },
          {
            "pergunta": "Qual seletor escolhe o jogador mais próximo?",
            "respostaCorreta": "@p",
            "respostasIncorretas": [
              "@a",
              "@e",
              "@r"
            ]
          },
          {
            "pergunta": "O que @e pode selecionar?",
            "respostaCorreta": "Entidades em geral",
            "respostasIncorretas": [
              "Somente o jogador que executa",
              "Somente jogadores",
              "Somente o jogador mais próximo"
            ]
          },
          {
            "tipo": "comando",
            "pergunta": "Escreva um comando para dar 3 pães ao jogador mais próximo.",
            "respostaCorreta": "/give @p minecraft:bread 3",
            "respostasAceitas": [
              "/give @p minecraft:bread 3",
              "give @p minecraft:bread 3",
              "/give @p bread 3",
              "give @p bread 3"
            ]
          }
        ]
      }
    }
  ]
});
