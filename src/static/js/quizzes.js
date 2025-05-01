// /home/ubuntu/investidor_academia/src/static/js/quizzes.js

document.addEventListener("DOMContentLoaded", () => {
    const quizSelectionDiv = document.querySelector(".quiz-selection");
    const quizAreaDiv = document.getElementById("quiz-area");
    const quizTitle = document.getElementById("quiz-title");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextQuestionBtn = document.getElementById("next-question-btn");
    const quizResultDiv = document.getElementById("quiz-result");
    const resultText = document.getElementById("result-text");
    const restartQuizBtn = document.getElementById("restart-quiz-btn");
    const backToSelectionBtn = document.getElementById("back-to-selection-btn");

    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let score = 0;

    // --- Placeholder Quiz Data --- 
    // (In a real application, this would likely come from a backend/API)
    const quizzes = {
        fundamentos_geral: {
            title: "Quiz Geral - Fundamentos",
            questions: [
                {
                    question: "O que é a Taxa Selic?",
                    options: [
                        "A taxa de inflação oficial do Brasil",
                        "A taxa básica de juros da economia brasileira",
                        "A rentabilidade da poupança",
                        "O índice da bolsa de valores"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Qual o principal objetivo da diversificação?",
                    options: [
                        "Garantir o maior retorno possível",
                        "Eliminar completamente os riscos",
                        "Reduzir o risco da carteira",
                        "Investir apenas em ações"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "O que significa liquidez em um investimento?",
                    options: [
                        "A rentabilidade garantida do ativo",
                        "O risco de perder dinheiro",
                        "A facilidade de converter o investimento em dinheiro",
                        "O imposto cobrado sobre o lucro"
                    ],
                    correctAnswer: 2
                }
            ]
        },
        intermediario_renda_fixa: {
            title: "Quiz - Renda Fixa",
            questions: [
                {
                    question: "Qual destes investimentos de Renda Fixa é isento de Imposto de Renda para pessoa física?",
                    options: ["Tesouro Selic", "CDB", "LCI/LCA", "Tesouro Prefixado"],
                    correctAnswer: 2
                },
                {
                    question: "Qual o indexador mais comum para CDBs pós-fixados?",
                    options: ["IPCA", "Taxa Selic", "CDI", "Dólar"],
                    correctAnswer: 2
                }
            ]
        },
        intermediario_renda_variavel: {
            title: "Quiz - Renda Variável",
            questions: [
                {
                    question: "Qual análise foca nos gráficos de preços e volume para prever movimentos futuros?",
                    options: ["Análise Fundamentalista", "Análise Macroeconômica", "Análise Técnica", "Análise de Crédito"],
                    correctAnswer: 2
                },
                {
                    question: "O que são dividendos?",
                    options: [
                        "A valorização do preço da ação", 
                        "Parte do lucro da empresa distribuída aos acionistas", 
                        "Um tipo de título de renda fixa", 
                        "Um imposto sobre investimentos"
                    ],
                    correctAnswer: 1
                }
            ]
        }
    };
    // --- End Placeholder Quiz Data ---

    const loadQuestion = () => {
        quizResultDiv.style.display = "none";
        nextQuestionBtn.style.display = "none";
        const questionData = currentQuiz.questions[currentQuestionIndex];
        questionText.textContent = `${currentQuestionIndex + 1}. ${questionData.question}`;
        optionsContainer.innerHTML = "";

        questionData.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            button.addEventListener("click", () => selectAnswer(index, questionData.correctAnswer));
            optionsContainer.appendChild(button);
        });
    };

    const selectAnswer = (selectedIndex, correctIndex) => {
        const optionButtons = optionsContainer.querySelectorAll(".option-btn");
        optionButtons.forEach((button, index) => {
            button.disabled = true; // Disable all options after selection
            if (index === correctIndex) {
                button.classList.add("correct");
            } else if (index === selectedIndex) {
                button.classList.add("incorrect");
            }
        });

        if (selectedIndex === correctIndex) {
            score++;
        }

        nextQuestionBtn.style.display = "block";
    };

    const showResults = () => {
        questionContainer.style.display = "none";
        nextQuestionBtn.style.display = "none";
        quizResultDiv.style.display = "block";
        const totalQuestions = currentQuiz.questions.length;
        resultText.textContent = `Você acertou ${score} de ${totalQuestions} perguntas. (${((score / totalQuestions) * 100).toFixed(0)}%)`;
    };

    nextQuestionBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    });

    restartQuizBtn.addEventListener("click", () => {
        startQuiz(currentQuiz.id); // Restart the same quiz
    });

    backToSelectionBtn.addEventListener("click", () => {
        quizAreaDiv.style.display = "none";
        quizSelectionDiv.style.display = "block";
        currentQuiz = null;
    });

    const startQuiz = (quizId) => {
        currentQuiz = { ...quizzes[quizId], id: quizId }; // Add id back for restart
        if (!currentQuiz || !currentQuiz.questions || currentQuiz.questions.length === 0) {
            alert("Quiz não encontrado ou sem perguntas.");
            return;
        }
        currentQuestionIndex = 0;
        score = 0;
        quizTitle.textContent = currentQuiz.title;
        quizSelectionDiv.style.display = "none";
        quizAreaDiv.style.display = "block";
        questionContainer.style.display = "block";
        quizResultDiv.style.display = "none";
        loadQuestion();
    };

    // Add event listeners to quiz start buttons
    document.querySelectorAll(".btn-start-quiz").forEach(button => {
        button.addEventListener("click", (event) => {
            const quizId = event.target.getAttribute("data-quiz-id");
            startQuiz(quizId);
        });
    });
});
