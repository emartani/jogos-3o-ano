import React, { useState } from 'react';
import './HomePage.css'; // O CSS para as cores e layout

// ----------------------------------------------------------------------
// 1. DADOS DOS JOGOS E ESTRUTURA DE NÍVEIS
// ----------------------------------------------------------------------

// Variáveis para as URLs dos seus jogos. Mantenha estas linhas!
const JOGO_PRINCIPAL_URL = "https://SEU-DOMINIO.netlify.app/caca-palavras-real/"; 
const APRENDER_CORES_URL = "https://SEU-DOMINIO.netlify.app/cores/";


const gameData = {
  // NÍVEL 1: Série (2o ano)
  "3o ano": {
    // NÍVEL 2: 1º Bimestre
    "1º Bimestre": {
      // NÍVEL 3: Provas
      "Prova 1": {
        "Inglês": [ 
          { id: 100, name: "Desafio - Days of the week", description: "Vamos aprender o nome dos dias da semana ?", url: "https://etl-days-of-the-week.netlify.app/" },
          { id: 101, name: "Quebra-cabeça - numbers", description: "Vamos aprender sobre os números de 11 a 20?", url: "https://3-ingles-numbers-11-20.netlify.app//" },
          { id: 102, name: "Arraste e solte - School objects", description: "Quais objetos você usa na escola? Arraste o nome até o objeto e descubra se acertou!", url: "https://drag-school-objects.netlify.app/" },
          { id: 103, name: "Jogo da memória - My things in the classroom", description: "Quais itens você tem na sala de aula? ", url: "https://3-ingles-my-things.netlify.app/" },
          { id: 104, name: "Caça-palavras - Mascots", description: "Vamos conhecer alguns mascotes? ", url: "https://3-ingles-mascots.netlify.app/" }
        ],
        "Matemática": [
//          { id: 103, name: "Os numerais", description: "Monte o quebra cabeças ligando os numerais e descubra a imagem surpresa!", url: "https://quebra-cabeca-numerais.netlify.app/" },
//          { id: 104, name: "Comparando quantidades", description: "Desafio dos símbolos, escolha o correto. Qual número é maior? Qual é menor? E qual é igual?", url: "https://comparando-quantidades.netlify.app/" },
//          { id: 105, name: "Ordem crescente e decrescente", description: "Arraste os números na ordem que o jogo pede, você consegue?", url: "https://ordenar-sequencias.netlify.app/" },
//          { id: 106, name: "Sequências numéricas", description: "Descubra qual número está faltando na sequência.", url: "https://sequencias-numericas-em.netlify.app/" },
//          { id: 107, name: "Adição", description: "Matemática divertida! Vamos aprender a somar? Escolha o resultado correto.", url: "https://quiz-adicao.netlify.app/" }
        ],
        "Português, Ciências, História e Geografia": [
          { id: 108, name: "Jogos das outras matérias", description: "Acesse aqui os jogos de Português, Ciências, História e Geografia.", url: "https://3-geral-1b-p1.netlify.app/" }
        ]
      },
      "Prova 2": {
        "Inglês": [
//          { id: 200, name: "Shapes - Formas", description: "Você consegue descobrir qual é cada forma?", url: "https://em-shapes.netlify.app/" },
//          { id: 201, name: "Days of the week - Dias da semana", description: "Vamos aprender o nome dos dias da semana?", url: "https://etl-days-of-the-week.netlify.app/" },
//          { id: 202, name: "School subjects - Matérias da escola", description: "Vejamos quais matérias temos na escola.", url: "https://mem-school-subj.netlify.app/" },
//          { id: 203, name: "Family Tree - Árvore genealógica", description: "Vamos aprender como se escreve papai, mamãe e outros familiares.", url: "https://caca-family-tree.netlify.app/" },
        ],
        "Matemática": [
//          { id: 204, name: "Subtração", description: "Matemática divertida! Vamos aprender a subtrair? Escolha o resultado correto.", url: "https://quiz-subtracao.netlify.app/" },
//          { id: 205, name: "Adição e Subtração - Operações inversas", description: "Matemática divertida! Qual será a continha que vamos fazer para chegar ao resultado correto, somar ou subtrair?", url: "https://quiz-oper-inversas.netlify.app/" },
//          { id: 206, name: "Gráficos", description: "Aprendendo a analisar gráficos.", url: "https://jogo-dos-graficos.netlify.app/" },
//          { id: 207, name: "Centena, Dezena e Unidade", description: "Vamos praticar a composição e decomposição?", url: "https://centenas-dezenas.netlify.app/" }
        ]        
      }
    },
    // NÍVEL 2: 2º Bimestre
    "2º Bimestre": {
      "Prova 1": {
        "Inglês": [
//          { id: 300, name: "O Alfabeto - The Alphabet", description: "Aprenda o alfabeto e descubra o som correto da letra, você consegue?", url: "https://alphabet-em.netlify.app/" },
//          { id: 301, name: "Selecione a resposta certa - estações do ano", description: "Você sabe o nome das estações? Qual é a mais quente? E a mais fria?", url: "https://em-seasons.netlify.app/" },
//          { id: 302, name: "Desafio - meses do ano", description: "Voce sabe os nomes dos meses?", url: "https://em-quiz-months.netlify.app/" },
//          { id: 303, name: "Arraste e solte - meses + estações", description: "Será que você consegue saber a diferença dos nomes dos meses e estações do ano?", url: "https://em-months-seasons-drag.netlify.app/" },
//          { id: 304, name: "Desafio - numeros", description: "Vamos aprender como se escreve os números?", url: "https://em-quiz-numbers.netlify.app/" }
        ],
        "Matemática": [
//          { id: 305, name: "Caça-palavras - meses", description: "Encontre os meses do ano.", url: "https://em-caca-months.netlify.app/" },
//          { id: 306, name: "Selecione a resposta certa - estações do ano", description: "Você sabe o nome das estações? Qual é a mais quente? E a mais fria?", url: "https://em-seasons.netlify.app/" },
//          { id: 307, name: "Desafio - meses do ano", description: "Voce sabe os nomes dos meses?", url: "https://em-quiz-months.netlify.app/" },
//          { id: 308, name: "Arraste e solte - meses + estações", description: "Será que você consegue saber a diferença dos nomes dos meses e estações do ano?", url: "https://em-months-seasons-drag.netlify.app/" },
//          { id: 309, name: "Desafio - numeros", description: "Vamos aprender como se escreve os números?", url: "https://em-quiz-numbers.netlify.app/" }
        ]
      },
      "Prova 2": {
        "Inglês": [
//          { id: 400, name: "Caça-palavras - roupas", description: "Consegue encontrar o nome das roupas?.", url: "https://em-caca-roupas.netlify.app/" },
//          { id: 401, name: "Arraste e solte - roupas", description: "Arraste o nome de cada roupa para sua foto.", url: "https://em-drag-clothes.netlify.app/" },
//          { id: 402, name: "Arraste e solte - zoologico", description: "Vamos aprender os nomes de alguns animais?", url: "https://em-drag-animals.netlify.app/" },
//          { id: 403, name: "Selecione - vertebrado ou invertebrado", description: "Você conhece alguns animais vertebrados e invertebrados?", url: "https://em-select-in-vertebrates.netlify.app/" },
//          { id: 404, name: "Caça-palavras - animais marinhos", description: "Quais animais vivem no mar?", url: "https://em-caca-sea-animals.netlify.app/" },
//          { id: 405, name: "Caça-palavras - plantas", description: "Você sabe como plantar e do que as plantas precisam para crescer?", url: "https://em-caca-plants.netlify.app/" },
//          { id: 406, name: "Desafio geral - animais, roupas e plantas", description: "Agora vamos ver se você aprendeu tudo sobre os animais, as plantas e as roupas.", url: "https://em-quiz-2bim.netlify.app/" }

        ]
      }
    },
    // NOVO: 3º Bimestre
    "3º Bimestre": {
      "Prova 1": {
        "Inglês": [
//          { id: 500, name: "Caça-palavras - Plants", description: "Palavras relacionadas as plantas.", url: "https://caca-plant-parts.netlify.app/" },
//          { id: 501, name: "Quiz - Plants", description: "Palavras relacionadas as plantas.", url: "https://parts-of-plants.netlify.app/" },
//          { id: 502, name: "Arraste e solte - Sequence words - Plants", description: "Entendendo o uso das palavras de sequência (first, finally, next, then).", url: "https://sequence-words-2.netlify.app/" },
//          { id: 503, name: "Arraste e solte - Sequence words", description: "Palavras relacionadas as plantas.", url: "https://sequence-words-1.netlify.app/" }
        
        ],
        //"Matemática": [
        //  { id: 8, name: "Multiplicação", description: "Pratique tabuada.", url: "#" }
        //]
      },
      "Prova 2": {
        "Inglês": [
 //         { id: 600, name: "Quiz - Materials", description: "De que material (metal, wood, paper, etc.) são feitos alguns itens.", url: "https://quiz-material-shoes.netlify.app/" },
 //         { id: 601, name: "Selecionar - Rights and Responsibilities", description: "Selecionar - Quais são os direitos e responsabilidades das cirianças.", url: "https://select-rights.netlify.app/" },
 //         { id: 602, name: "Caça-palavras - Materials", description: "De que material (metal, wood, paper, etc.) são feitos alguns itens.", url: "https://caca-materials.netlify.app/" },
 //         { id: 603, name: "Arraste e solte - WH questions", description: "Entendendo o uso de Who / What / Where.", url: "https://drag-wh.netlify.app/" },
 //         { id: 604, name: "Arraste e solte - Shoes", description: "Tipos e nomes de calçados.", url: "https://drag-shoes.netlify.app/" },
 //         { id: 605, name: "Caça-palavras - Shoes", description: "Tipos e nomes de calçados.", url: "https://caca-shoes.netlify.app/" },

        ],
        "Matemática": [
 //         { id: 606, name: "Clicar - Colheita das frutas", description: "Treinar tabuada atraves da colheita das frutas multiplo do numero da tabuada que está estudando.", url: "https://colheita-tabuada.netlify.app/" },
 //         { id: 607, name: "Massa - operações", description: "Quiz com solução/problema relacionado a massas e operações de Adição, Subtração e Multiplicação.", url: "https://quiz-adi-mult-massa.netlify.app/" },
 //         { id: 608, name: "Massa - sequências e outros", description: "Quiz com solução/problema relacionado a massas e sequência, par, ímpar, dobro, triplo, dúzia.", url: "https://quiz-massa-seq.netlify.app/" }
        ]
      }
    },
    // NOVO: 4º Bimestre
    "4º Bimestre": {
      "Prova 1": {
        "Inglês": [
 //         { id: 700, name: "Jogo da memória - aways and never", description: "Vamos aprender sobre coisas que sempre (aways) ou nunca (never) devemos fazer.", url: "https://memoria-aways-never.netlify.app/" },
 //         { id: 701, name: "Arraste e solte - Giving a hand at home.", description: "Vamos aprender sobre em quais atividades da casa as crianças podem ajudar o papai e a mamãe.", url: "https://drag-give-a-hand.netlify.app/" },
 //         { id: 702, name: "Selecione - How much?", description: "Quanto custa (how much) cada item da lanchonete do cinema?.", url: "https://select-how-much.netlify.app/" }
          ],
        "Matemática": [
 //         { id: 703, name: "Desafio - Medidas - adição e subtração", description: "Vamos aprender sobre adição e subtração com as unidades de medida de comprimento (metro e centímetro).", url: "https://quiz-medidas.netlify.app/" },
 //         { id: 704, name: "Desafio - Medidas - multiplicação e divisão", description: "Vamos aprender sobre a multiplicação, metade e terça parte com as unidades de medida de comprimento (metro e centímetro).", url: "https://quiz-medidas-mult-div.netlify.app/" },
 //         { id: 705, name: "Tabuada invertida do 2 e do 3", description: "Vamos aprender que a multiplicação e divisão são operações inversas.", url: "https://tabuada-invertida.netlify.app/" }
        ]
      },
      "Prova 2": {
        "Inglês": [
 //         { id: 800, name: "Caça-palavras - TV Programs", description: "Será que você consegue encontrar os tipos de programa de televisão?", url: "https://caca-tv-programs.netlify.app/" },
 //         { id: 801, name: "Jogo da memória - Too much TV", description: "O que pode acontecer se você passar muito tempo nas telas?", url: "https://memoria-too-mech-tv.netlify.app/" },
 //         { id: 802, name: "Desafio - TV Programs", description: "Vamos descobrir alguns tipos de programas da TV?", url: "https://quiz-tv-programs.netlify.app/" },
 //         { id: 803, name: "Arraste e solte - Alternatives to TV", description: "Vamos trocar as telas por coisas legais? Veja algumas opções!", url: "https://drag-alternatives-to-tv.netlify.app/" }
        ],
        "Matemática": [
 //         { id: 804, name: "Matemática Divertida - Litro e Mililitro", description: "Vamos resolver juntos algumas situações problema com Adição e Subtração com medidas de capacidade Litro e Mililitro.", url: "https://quiz-litro-adi-sub.netlify.app/" },
 //         { id: 805, name: "Jogo da colheita de frutas", description: "Você consegue colher todas as frutas com números multiplos de 5? Não esqueça de usar sua tabuada.", url: "https://colheita-tabuada.netlify.app/" },
 //         { id: 806, name: "Mestre da divisão", description: "Vamos praticar as continhas de algoritmo da divisão?", url: "https://mestre-da-divisao.netlify.app/" },
 //         { id: 807, name: "Enchendo o copo", description: "Será que você consegue encher o copo com a quantidade correta de líquido?", url: "https://encher-o-copo.netlify.app/" },
 //         { id: 808, name: "Quebra cabeça da tabuada", description: "Qual será a figura que vamos encontrar se acertarmos as continhas?", url: "https://quebra-cabeca-tabuada.netlify.app/" }
        ]
      }
    }
  }
};

// ----------------------------------------------------------------------
// 2. COMPONENTE PRINCIPAL E LÓGICA DE NAVEGAÇÃO
// ----------------------------------------------------------------------

function HomePage({ userName }) {
  const series = "3o ano"; 
  
  // ESTADOS DE NAVEGAÇÃO
  const [selectedBimester, setSelectedBimester] = useState(null); // Nível 2
  const [selectedTest, setSelectedTest] = useState(null);       // Nível 3
  const [selectedSubject, setSelectedSubject] = useState(null);  // Nível 4

  // --- Funções de Renderização Condicional ---

  // Nível 5: Renderiza a lista de jogos (Último Nível)
  const renderGameList = () => {
    // Só renderiza se o caminho completo foi selecionado
    if (!selectedBimester || !selectedTest || !selectedSubject) {
      return null;
    }
    
    // Caminho dos dados: [Série] -> [Bimestre] -> [Prova] -> [Matéria]
    const games = gameData[series][selectedBimester][selectedTest][selectedSubject] || [];
    
    if (games.length === 0) {
      return <p className="level-title" style={{ color: '#ff6f91' }}>Nenhum jogo encontrado para esta matéria.</p>;
    }

    return (
      <div className="game-list-container">
        {games.map((game) => (
          <a 
            key={game.id} 
            href={game.url} 
            className="game-card"
            target="_blank" 
            rel="noopener noreferrer" // Para abrir em nova aba com segurança
          >
            <div className="game-image-box">
              <div className="game-placeholder">{game.name.charAt(0)}</div>
            </div>
            <div className="game-info">
              <h3 className="game-name">{game.name}</h3>
              <p className="game-description">{game.description}</p>
            </div>
          </a>
        ))}
      </div>
    );
  };
  
  // Nível 4: Renderiza os botões das Matérias
  const renderSubjects = () => {
      // Só renderiza se o Bimestre e a Prova foram selecionados
      if (!selectedBimester || !selectedTest) {
          return null;
      }
      
      const subjects = gameData[series][selectedBimester][selectedTest] || {};
      
      return (
        <>
          <h3 className="level-title">Selecione a Matéria:</h3>
          <div className="subject-tabs">
            {Object.keys(subjects).map((subject) => (
              <button
                key={subject}
                className={`subject-tab ${selectedSubject === subject ? 'active' : ''}`}
                onClick={() => setSelectedSubject(subject)}
              >
                {subject}
              </button>
            ))}
          </div>
          {renderGameList()} 
        </>
      );
  };
  
  // Nível 3: Renderiza os botões das Provas
  const renderTests = () => {
      if (!selectedBimester) {
          return null;
      }
      
      const tests = gameData[series][selectedBimester] || {};
      
      return (
          <>
            <h3 className="level-title">Selecione a Avaliação:</h3>
            <div className="subject-tabs">
              {Object.keys(tests).map((test) => (
                <button
                  key={test}
                  className={`subject-tab ${selectedTest === test ? 'active' : ''}`}
                  onClick={() => { setSelectedTest(test); setSelectedSubject(null); }}
                >
                  {test}
                </button>
              ))}
            </div>
            {renderSubjects()}
          </>
      );
  };
  
  // Nível 2: Renderiza os botões dos Bimestres
  const renderBimesters = () => {
    // Pega a lista de bimestres (chaves do objeto)
    const bimesters = gameData[series] ? Object.keys(gameData[series]) : [];
    
    return (
      <>
        <h3 className="level-title">Selecione o Bimestre:</h3>
        <div className="subject-tabs">
          {bimesters.map((bimester) => (
            <button
              key={bimester}
              className={`subject-tab ${selectedBimester === bimester ? 'active' : ''}`}
              onClick={() => { 
                setSelectedBimester(bimester); 
                setSelectedTest(null); // Reseta a Prova
                setSelectedSubject(null); // Reseta a Matéria
              }}
            >
              {bimester}
            </button>
          ))}
        </div>
        {renderTests()}
      </>
    );
  };
  
  // ----------------------------------------------------------------------
  // 3. RETORNO PRINCIPAL
  // ----------------------------------------------------------------------
  return (
    <div className="homepage-container">
      {/* Nível 0: Mensagem de Boas-Vindas */}
      {userName && <h1 className="welcome-title">🌟 Olá, {userName}! Hora de Jogar! 🌟</h1>}
      
      {/* Nível 1: Série (Fixo) */}
      <h2 className="series-title">Série: {series}</h2>

      {/* CHAMA O PRIMEIRO NÍVEL DE NAVEGAÇÃO E DEIXA QUE ELE RENDERIZE OS OUTROS */}
      {renderBimesters()}
    </div>
  );
}

export default HomePage;