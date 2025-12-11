// KOMPLETTE ORIGINAL-WORTLISTE AUS DEM GITHUB-PROJEKT
const WORD_LIST = [
    // Umlaut-Regeln a->ä (phonetische Fehler)
    { singular: "Baum", plural: "Bäume", wrong1: "Beume", wrong2: "Boime" },
    { singular: "Haus", plural: "Häuser", wrong1: "Heuser", wrong2: "Hoiser" },
    { singular: "Maus", plural: "Mäuse", wrong1: "Meuse", wrong2: "Moise" },
    { singular: "Garten", plural: "Gärten", wrong1: "Gerten", wrong2: "Garten" },
    { singular: "Gast", plural: "Gäste", wrong1: "Geste", wrong2: "Gaste" },
    { singular: "Ball", plural: "Bälle", wrong1: "Belle", wrong2: "Balle" },
    { singular: "Bach", plural: "Bäche", wrong1: "Beche", wrong2: "Bache" },
    { singular: "Dach", plural: "Dächer", wrong1: "Decher", wrong2: "Döcher" },
    { singular: "Schrank", plural: "Schränke", wrong1: "Schrenke", wrong2: "Schranke" },
    { singular: "Kran", plural: "Kräne", wrong1: "Krene", wrong2: "Krane" },
    
    // Umlaut-Regeln o->ö
    { singular: "Sohn", plural: "Söhne", wrong1: "Sehne", wrong2: "Sohne" },
    { singular: "Gott", plural: "Götter", wrong1: "Getter", wrong2: "Gotter" },
    { singular: "Hof", plural: "Höfe", wrong1: "Hefe", wrong2: "Hofe" },
    { singular: "Vogel", plural: "Vögel", wrong1: "Vegel", wrong2: "Vogels" },
    { singular: "Wort", plural: "Wörter", wrong1: "Worter", wrong2: "Wörters" },
    { singular: "Brot", plural: "Brote", wrong1: "Bröte", wrong2: "Bröter" },
    { singular: "Stock", plural: "Stöcke", wrong1: "Stecke", wrong2: "Stocke" },
    { singular: "Knopf", plural: "Knöpfe", wrong1: "Kneppe", wrong2: "Knoippe" },
    { singular: "Topf", plural: "Töpfe", wrong1: "Tepfe", wrong2: "Topfe" },
    { singular: "Boden", plural: "Böden", wrong1: "Beden", wrong2: "Boden" },
    
    // Umlaut-Regeln u->ü
    { singular: "Mutter", plural: "Mütter", wrong1: "Mutter", wrong2: "Mutters" },
    { singular: "Vater", plural: "Väter", wrong1: "Vater", wrong2: "Vaters" },
    { singular: "Tochter", plural: "Töchter", wrong1: "Tochter", wrong2: "Tochters" },
    { singular: "Bruder", plural: "Brüder", wrong1: "Bruder", wrong2: "Bruider" },
    { singular: "Hut", plural: "Hüte", wrong1: "Hute", wrong2: "Huts" },
    { singular: "Kuh", plural: "Kühe", wrong1: "Kuhe", wrong2: "Küe" },
    { singular: "Fluss", plural: "Flüsse", wrong1: "Flusse", wrong2: "Flisse" },
    { singular: "Schuh", plural: "Schuhe", wrong1: "Schue", wrong2: "Schuhs" },
    { singular: "Buch", plural: "Bücher", wrong1: "Bucher", wrong2: "Beucher" },
    { singular: "Fuss", plural: "Füsse", wrong1: "Fusse", wrong2: "Fuise" },
    
    // Au/äu-Regeln
    { singular: "Braut", plural: "Bräute", wrong1: "Breute", wrong2: "Broite" },
    { singular: "Traum", plural: "Träume", wrong1: "Treume", wrong2: "Troime" },
    { singular: "Raum", plural: "Räume", wrong1: "Reume", wrong2: "Roime" },
    { singular: "Sau", plural: "Säue", wrong1: "Seue", wrong2: "Soie" },
    { singular: "Frau", plural: "Frauen", wrong1: "Freuen", wrong2: "Fraus" },
    { singular: "Mauer", plural: "Mauern", wrong1: "Meuern", wrong2: "Moiern" },
    
    // Eu-Wörter
    { singular: "Scheune", plural: "Scheunen", wrong1: "Schäunen", wrong2: "Scheune" },
    { singular: "Freude", plural: "Freuden", wrong1: "Fräuden", wrong2: "Froiden" },
    { singular: "Feuer", plural: "Feuer", wrong1: "Fäuer", wrong2: "Foier" },
    { singular: "Freund", plural: "Freunde", wrong1: "Fräunde", wrong2: "Froinde" },
    { singular: "Abenteuer", plural: "Abenteuer", wrong1: "Abentäuer", wrong2: "Abentoier" },
    
    // Sonderfälle
    { singular: "Museum", plural: "Museen", wrong1: "Museümer", wrong2: "Museums" },
    { singular: "Studium", plural: "Studien", wrong1: "Studiümer", wrong2: "Studiumse" },
    { singular: "Zentrum", plural: "Zentren", wrong1: "Zentrumen", wrong2: "Zentrums" },
    { singular: "Datum", plural: "Daten", wrong1: "Datümer", wrong2: "Datums" },
    { singular: "Thema", plural: "Themen", wrong1: "Themas", wrong2: "Thema" },
    
    // Keine Umlaute
    { singular: "Tasche", plural: "Taschen", wrong1: "Täschen", wrong2: "Tasches" },
    { singular: "Lampe", plural: "Lampen", wrong1: "Lämpen", wrong2: "Lampens" },
    { singular: "Flasche", plural: "Flaschen", wrong1: "Fläschen", wrong2: "Flösche" },
    { singular: "Kanne", plural: "Kannen", wrong1: "Kännen", wrong2: "Känne" },
    { singular: "Karte", plural: "Karten", wrong1: "Kärten", wrong2: "Kartens" },
    
    // Wasser-Sonderfall
    { singular: "Fenster", plural: "Fenster", wrong1: "Fenster", wrong2: "Fenstern" },
    { singular: "Bett", plural: "Betten", wrong1: "Bätten", wrong2: "Bett" },
    { singular: "Brett", plural: "Bretter", wrong1: "Brätter", wrong2: "Brettär" },
    { singular: "Blatt", plural: "Blätter", wrong1: "Bletter", wrong2: "Blatter" }
];

// Audio-Elemente
const correctSound = document.getElementById('correct-sound');
const errorSound = document.getElementById('error-sound');
const gameWonSound = document.getElementById('gamewon-sound');
const gameLostSound = document.getElementById('gamelost-sound');
const roundWonSound = document.getElementById('roundwon-sound');
const roundLostSound = document.getElementById('roundlost-sound');

// Artikelbestimmung basierend auf dem Substantiv
function getArticle(word) {
    const wordLower = word.toLowerCase();
    
    // Substantive die typisch "die" sind (feminin)
    if (wordLower.endsWith('e') && !wordLower.endsWith('leute') && 
        !wordLower.endsWith('feuer') && !wordLower.endsWith('heu')) {
        // Ausnahmen
        if (['der', 'das'].includes(getMasculineOrNeuterException(wordLower))) {
            return getMasculineOrNeuterException(wordLower);
        }
        return "die";
    }
    
    // Substantive die typisch "der" sind (maskulin)
    if (wordLower.endsWith('er') || wordLower.endsWith('el') || 
        wordLower.endsWith('en') || wordLower.endsWith('ig')) {
        // Ausnahmen
        if (['die', 'das'].includes(getFeminineOrNeuterException(wordLower))) {
            return getFeminineOrNeuterException(wordLower);
        }
        return "der";
    }
    
    // Substantive die typisch "das" sind (neutral)
    if (wordLower.endsWith('chen') || wordLower.endsWith('lein') || 
        wordLower.endsWith('um') || wordLower.endsWith('ment') ||
        wordLower.endsWith('tel') || wordLower.endsWith('nis')) {
        return "das";
    }
    
    // Fallback: Verteile zufällig aber konsistent für jedes Wort
    const articles = ["der", "die", "das"];
    let hash = 0;
    for (let i = 0; i < word.length; i++) {
        hash = word.charCodeAt(i) + ((hash << 5) - hash);
    }
    return articles[Math.abs(hash) % 3];
}

function getMasculineOrNeuterException(word) {
    const masculineE = ['baum', 'raum', 'traum', 'saum', 'kaum', 'schaum'];
    const neuterE = ['ende', 'erbe', 'auge', 'interesse'];
    
    if (masculineE.includes(word)) return "der";
    if (neuterE.includes(word)) return "das";
    return null;
}

function getFeminineOrNeuterException(word) {
    const feminineER = ['mutter', 'tochter', 'butter', 'leiter'];
    const neuterER = ['fenster', 'fieber', 'wasser', 'wunder'];
    
    if (feminineER.includes(word)) return "die";
    if (neuterER.includes(word)) return "das";
    return null;
}

// Generiere eine vierte falsche Antwort
function generateWrong3(noun) {
    const word = noun.singular.toLowerCase();
    
    const patterns = [
        (w) => w.replace(/[äöü]/g, (match) => {
            if (match === 'ä') return 'e';
            if (match === 'ö') return 'o';
            if (match === 'ü') return 'u';
            return match;
        }),
        (w) => w.replace(/a/g, 'ä').replace(/o/g, 'ö').replace(/u/g, 'ü'),
        (w) => w + (w.endsWith('e') ? 'n' : 'en'),
        (w) => w + (w.endsWith('er') ? 'n' : 'er'),
        (w) => w + 's'
    ];
    
    let attempts = 0;
    while (attempts < 10) {
        const pattern = patterns[Math.floor(Math.random() * patterns.length)];
        const candidate = pattern(word);
        const capitalized = candidate.charAt(0).toUpperCase() + candidate.slice(1);
        
        if (capitalized !== noun.plural && 
            capitalized !== noun.wrong1 && 
            capitalized !== noun.wrong2 &&
            !capitalized.includes('undefined')) {
            return capitalized;
        }
        attempts++;
    }
    
    return word.charAt(0).toUpperCase() + word.slice(1) + "er";
}

// Spielzustand
let gameState = {
    score: 0,
    streak: 0,
    round: 0,
    maxRound: 10,
    maxStreak: 0,
    correctAnswers: 0,
    currentNoun: null,
    gameActive: false,
    usedNouns: []
};

// DOM-Elemente
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const roundElement = document.getElementById('round');
const currentNounElement = document.getElementById('current-noun');
const articleElement = document.getElementById('article');
const feedbackElement = document.getElementById('feedback');
const choiceButtons = [
    document.getElementById('choice1'),
    document.getElementById('choice2'),
    document.getElementById('choice3'),
    document.getElementById('choice4')
];
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const hintButton = document.getElementById('hint-btn');
const gameOverElement = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');
const correctAnswersElement = document.getElementById('correct-answers');
const maxStreakElement = document.getElementById('max-streak');
const totalScoreElement = document.getElementById('total-score');
const gameResultElement = document.getElementById('game-result');
const gameMessageElement = document.getElementById('game-message');
const restartButton = document.getElementById('restart-btn');

// Spiel initialisieren
function initGame() {
    gameState = {
        score: 0,
        streak: 0,
        round: 0,
        maxRound: 10,
        maxStreak: 0,
        correctAnswers: 0,
        currentNoun: null,
        gameActive: false,
        usedNouns: []
    };
    
    updateUI();
    resetChoices();
    feedbackElement.textContent = "Klicke auf 'Spiel starten' um zu beginnen!";
    feedbackElement.className = "feedback";
    
    // Buttons aktivieren/deaktivieren
    startButton.disabled = false;
    resetButton.disabled = true;
    hintButton.disabled = true;
    
    // Choice-Buttons deaktivieren
    choiceButtons.forEach(btn => {
        btn.disabled = true;
        btn.className = "choice-btn";
    });
    
    // Erstes Beispiel anzeigen
    displayExample();
}

// Beispiel anzeigen (vor Spielstart)
function displayExample() {
    const exampleNoun = WORD_LIST[0];
    currentNounElement.textContent = exampleNoun.singular;
    articleElement.textContent = getArticle(exampleNoun.singular);
    
    // Beispiel-Antworten anzeigen
    choiceButtons[0].textContent = exampleNoun.plural;
    choiceButtons[1].textContent = exampleNoun.wrong1;
    choiceButtons[2].textContent = exampleNoun.wrong2;
    choiceButtons[3].textContent = generateWrong3(exampleNoun);
}

// Spiel starten
function startGame() {
    gameState.gameActive = true;
    gameState.round = 1;
    gameState.usedNouns = [];
    
    // Buttons aktivieren/deaktivieren
    startButton.disabled = true;
    resetButton.disabled = false;
    hintButton.disabled = false;
    
    // Choice-Buttons aktivieren
    choiceButtons.forEach(btn => {
        btn.disabled = false;
    });
    
    feedbackElement.textContent = "Wähle die richtige Pluralform!";
    loadNextRound();
}

// Nächste Runde laden
function loadNextRound() {
    if (gameState.round > gameState.maxRound) {
        endGame();
        return;
    }
    
    // Zufälliges Substantiv auswählen
    let availableNouns = WORD_LIST.filter(noun => !gameState.usedNouns.includes(noun.singular));
    
    if (availableNouns.length === 0) {
        gameState.usedNouns = [];
        availableNouns = WORD_LIST;
    }
    
    const randomIndex = Math.floor(Math.random() * availableNouns.length);
    gameState.currentNoun = availableNouns[randomIndex];
    gameState.usedNouns.push(gameState.currentNoun.singular);
    
    // UI aktualisieren
    currentNounElement.textContent = gameState.currentNoun.singular;
    articleElement.textContent = getArticle(gameState.currentNoun.singular);
    roundElement.textContent = `${gameState.round}/${gameState.maxRound}`;
    
    // Antwortoptionen generieren
    generateChoices();
    
    // Feedback zurücksetzen
    feedbackElement.textContent = "";
    feedbackElement.className = "feedback";
    
    // Choice-Buttons zurücksetzen
    resetChoices();
}

// Antwortoptionen generieren
function generateChoices() {
    // Korrekte und falsche Antworten
    const correctAnswer = gameState.currentNoun.plural;
    const wrong1 = gameState.currentNoun.wrong1;
    const wrong2 = gameState.currentNoun.wrong2;
    const wrong3 = generateWrong3(gameState.currentNoun);
    
    // Alle Optionen mischen
    const allAnswers = [correctAnswer, wrong1, wrong2, wrong3];
    shuffleArray(allAnswers);
    
    // Buttons mit Antworten befüllen
    choiceButtons.forEach((btn, index) => {
        btn.textContent = allAnswers[index];
        btn.dataset.answer = allAnswers[index];
    });
}

// Array mischen
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Antwort überprüfen
function checkAnswer(selectedAnswer) {
    if (!gameState.gameActive) return;
    
    const correctAnswer = gameState.currentNoun.plural;
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Choice-Buttons deaktivieren
    choiceButtons.forEach(btn => {
        btn.disabled = true;
        
        // Richtige und falsche Antworten markieren
        if (btn.dataset.answer === correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.dataset.answer === selectedAnswer && !isCorrect) {
            btn.classList.add('error');
        }
    });
    
    // Spielzustand aktualisieren
    if (isCorrect) {
        // Richtige Antwort
        gameState.score += 10;
        gameState.streak += 1;
        gameState.correctAnswers += 1;
        
        // Bonuspunkte für Serien
        if (gameState.streak >= 3) {
            gameState.score += 5;
        }
        
        // Maximalstreak aktualisieren
        if (gameState.streak > gameState.maxStreak) {
            gameState.maxStreak = gameState.streak;
        }
        
        // Feedback anzeigen
        feedbackElement.textContent = `✓ Richtig! ${gameState.currentNoun.singular} → ${correctAnswer}`;
        feedbackElement.className = "feedback correct";
        
        // Sound abspielen
        correctSound.currentTime = 0;
        correctSound.play();
        
        // Nach kurzer Verzögerung nächste Runde laden
        setTimeout(() => {
            gameState.round += 1;
            updateUI();
            loadNextRound();
        }, 1500);
    } else {
        // Falsche Antwort
        gameState.streak = 0;
        
        // Feedback anzeigen
        feedbackElement.textContent = `✗ Falsch! ${gameState.currentNoun.singular} → ${correctAnswer}`;
        feedbackElement.className = "feedback error";
        
        // Sound abspielen
        errorSound.currentTime = 0;
        errorSound.play();
        
        // Nach kurzer Verzögerung nächste Runde laden
        setTimeout(() => {
            gameState.round += 1;
            updateUI();
            loadNextRound();
        }, 2000);
    }
    
    updateUI();
}

// Spiel beenden
function endGame() {
    gameState.gameActive = false;
    
    // Buttons deaktivieren
    choiceButtons.forEach(btn => {
        btn.disabled = true;
    });
    
    resetButton.disabled = true;
    hintButton.disabled = true;
    
    // Ergebnis ermitteln
    const percentage = (gameState.correctAnswers / gameState.maxRound) * 100;
    
    // Spiel-Overlay anzeigen
    finalScoreElement.textContent = `${gameState.score} Punkte`;
    correctAnswersElement.textContent = gameState.correctAnswers;
    maxStreakElement.textContent = gameState.maxStreak;
    totalScoreElement.textContent = gameState.score;
    
    if (percentage >= 80) {
        gameResultElement.textContent = "Herzlichen Glückwunsch!";
        gameMessageElement.textContent = "Ausgezeichnet! Du kennst die Pluralformen perfekt!";
        gameWonSound.currentTime = 0;
        gameWonSound.play();
    } else if (percentage >= 60) {
        gameResultElement.textContent = "Gut gemacht!";
        gameMessageElement.textContent = "Du hast ein gutes Verständnis der Pluralformen.";
        roundWonSound.currentTime = 0;
        roundWonSound.play();
    } else if (percentage >= 40) {
        gameResultElement.textContent = "Spiel beendet!";
        gameMessageElement.textContent = "Übe weiter, dann wirst du noch besser!";
    } else {
        gameResultElement.textContent = "Spiel beendet";
        gameMessageElement.textContent = "Die Pluralformen sind knifflig. Übe weiter!";
        gameLostSound.currentTime = 0;
        gameLostSound.play();
    }
    
    gameOverElement.classList.add('active');
}

// UI aktualisieren
function updateUI() {
    scoreElement.textContent = gameState.score;
    streakElement.textContent = gameState.streak;
    roundElement.textContent = `${gameState.round}/${gameState.maxRound}`;
}

// Choice-Buttons zurücksetzen
function resetChoices() {
    choiceButtons.forEach(btn => {
        btn.className = "choice-btn";
        btn.disabled = !gameState.gameActive;
    });
}

// Tipp anzeigen
function showHint() {
    if (!gameState.gameActive || !gameState.currentNoun) return;
    
    const hints = [
        `Achte auf Umlaute: ${gameState.currentNoun.singular}`,
        `Typische Endungen: -e, -en, -er, -s`,
        `"${gameState.currentNoun.singular}" ist ${getArticle(gameState.currentNoun.singular)}`,
        `Denke an ähnliche Wörter`
    ];
    
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    feedbackElement.textContent = `Tipp: ${randomHint}`;
    feedbackElement.className = "feedback";
    
    // Tipp-Button für einige Sekunden deaktivieren
    hintButton.disabled = true;
    setTimeout(() => {
        if (gameState.gameActive) {
            hintButton.disabled = false;
        }
    }, 3000);
}

// Event Listener
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', initGame);
hintButton.addEventListener('click', showHint);
restartButton.addEventListener('click', () => {
    gameOverElement.classList.remove('active');
    initGame();
    startGame();
});

choiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        checkAnswer(btn.dataset.answer);
    });
});

// Spiel initialisieren
initGame();
