const questions = [
  
  {
    question: "What is the plural of 'mouse'?",
    answers: ["mouses", "mices", "mouse", "mice"],
    correct: 3
  },
  {
    question: "I ___ never been to London.",
    answers: ["have", "has", "am", "was"],
    correct: 0
  },

  {
    question: "What does 'friendly' mean?",
    answers: ["unfreundlich", "freundlich", "traurig", "ruhig"],
    correct: 1
  },
  {
    question: "Choose the correct sentence:",
    answers: [
      "There is many people",
      "There are many people",
      "There be many people",
      "There have many people"
    ],
    correct: 1
  },
  {
    question: "What is the past of 'make'?",
    answers: ["maked", "make", "made", "making"],
    correct: 2
  },
  {
    question: "Which one is correct?",
    answers: [
      "I did my homework yesterday",
      "I do my homework yesterday",
      "I done my homework yesterday",
      "I was do my homework yesterday"
    ],
    correct: 0
  },
  {
    question: "What does 'travel' mean?",
    answers: ["arbeiten", "reisen", "essen", "lernen"],
    correct: 1
  },
  {
    question: "He speaks ___ than me.",
    answers: ["good", "better", "best", "well"],
    correct: 1
  },
  {
    question: "What is the opposite of 'fast'?",
    answers: ["quick", "short", "slow", "hard"],
    correct: 2
  },
  {
    question: "She asked me ___ I was okay.",
    answers: ["what", "if", "that", "where"],
    correct: 1
  },
  {
    question: "What does 'explain' mean?",
    answers: ["verstecken", "erklären", "vergessen", "schreiben"],
    correct: 1
  },
  {
    question: "What does 'important' mean?",
    answers: ["unwichtig", "wichtig", "interessant", "schwer"],
    correct: 1
  },
  {
    question: "Which sentence is correct?",
    answers: [
      "I am agree with you",
      "I agree with you",
      "I agreeing with you",
      "I agrees with you"
    ],
    correct: 1
  },
  {
    question: "What is the past of 'take'?",
    answers: ["taked", "took", "taken", "taking"],
    correct: 1
  },
  {
    question: "What does 'quiet' mean?",
    answers: ["laut", "schnell", "leise", "stark"],
    correct: 2
  },
  {
    question: "He ___ never seen this movie.",
    answers: ["has", "have", "is", "was"],
    correct: 0
  },
  {
    question: "What is the opposite of 'happy'?",
    answers: ["excited", "angry", "sad", "tired"],
    correct: 2
  },
  {
    question: "Which word is a noun?",
    answers: ["run", "beautiful", "quickly", "happiness"],
    correct: 3
  },
  {
    question: "She ___ to music right now.",
    answers: ["listen", "listens", "is listening", "listened"],
    correct: 2
  },
  {
    question: "What does 'helpful' mean?",
    answers: ["hilfreich", "gefährlich", "lustig", "müde"],
    correct: 0
  },
  {
    question: "What is the plural of 'foot'?",
    answers: ["foots", "feets", "feet", "foot"],
    correct: 2
  },
  {
    question: "Choose the correct sentence:",
    answers: [
      "He can to swim",
      "He cans swim",
      "He can swim",
      "He can swimming"
    ],
    correct: 2
  },
  {
    question: "What does 'during' mean?",
    answers: ["vor", "nach", "während", "zwischen"],
    correct: 2
  },
  {
    question: "What is the past of 'buy'?",
    answers: ["buyed", "bought", "buy", "buying"],
    correct: 1
  },
  {
    question: "I am good ___ English.",
    answers: ["in", "on", "at", "with"],
    correct: 2
  },
  {
    question: "What does 'different' mean?",
    answers: ["gleich", "anders", "langsam", "spät"],
    correct: 1
  },
  {
    question: "Which sentence is correct?",
    answers: [
      "She has been there before",
      "She have been there before",
      "She is been there before",
      "She was been there before"
    ],
    correct: 0
  },
  {
    question: "What does 'explain' mean?",
    answers: ["erklären", "vergessen", "verstecken", "verbessern"],
    correct: 0
  },
  {
    question: "We ___ finished our homework already.",
    answers: ["have", "has", "are", "is"],
    correct: 0
  },
  {
    question: "What is the opposite of 'early'?",
    answers: ["fast", "late", "soon", "quick"],
    correct: 1
  },
  {
    question: "Which word is an adjective?",
    answers: ["teacher", "teach", "teaching", "useful"],
    correct: 3
  },
  {
    question: "What does 'enjoy' mean?",
    answers: ["hassen", "genießen", "vergessen", "versuchen"],
    correct: 1
  },
  {
    question: "He ___ speak English very well.",
    answers: ["can", "must", "should", "need"],
    correct: 0
  },
  {
    question: "What is the past of 'write'?",
    answers: ["writed", "written", "wrote", "writes"],
    correct: 2
  },
  {
    question: "What does 'foreign' mean?",
    answers: ["frei", "fremd", "freundlich", "fern"],
    correct: 1
  },
  {
    question: "Which sentence is correct?",
    answers: [
      "I am looking forward to see you",
      "I am looking forward seeing you",
      "I am looking forward to seeing you",
      "I am looking forward see you"
    ],
    correct: 2
  },
  {
    question: "What does 'careful' mean?",
    answers: ["vorsichtig", "laut", "müde", "lustig"],
    correct: 0
  },
  {
    question: "They ___ already eaten.",
    answers: ["has", "have", "are", "is"],
    correct: 1
  },
  {
    question: "What is the opposite of 'easy'?",
    answers: ["simple", "hard", "quick", "light"],
    correct: 1
  },
  {
    question: "What does 'improve' mean?",
    answers: ["verschlechtern", "ignorieren", "verbessern", "beenden"],
    correct: 2
  },
  {
    question: "Which word is a verb?",
    answers: ["decision", "movement", "decide", "careful"],
    correct: 2
  }

];
questions.sort(() => Math.random() - 0.5);


let current = 0;
let score = 0;

function showQuestion() {
  document.getElementById("question").innerText = questions[current].question;
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn, index) => {
    btn.innerText = questions[current].answers[index];
  });
}

function answer(index) {
  if (index === questions[current].correct) {
    score++;
  }

  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("scoreText").innerText =
    `Du hast ${score} von ${questions.length} Punkten erreicht.`;

let percentage = (score / questions.length) * 100;
let level = "";

if (percentage < 30) {
  level = "Du musst ein bisschen mehr lernen.Nicht schlimm du wirst es Schaffen!";
} else if (percentage < 60) {
  level = "Elementary – Du kannst dich verständigen und einfache Texte verstehen.";
} else if (percentage < 80) {
  level = "Intermediate – gut für Reisen ins Ausland.";
} else if (percentage < 95) {
  level = "Advanced – Du kannst Dinge gut erklären und anderen helfen.";
} else {
  level = "Fluent – Du wärst ein sehr guter Übersetzer oder Lehrer.";
}

document.getElementById("levelText").innerText = level;

}

showQuestion();
