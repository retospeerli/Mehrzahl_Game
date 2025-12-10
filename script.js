// ==================== WORTLISTE ====================
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
    { singular: "Freude", plural: "Freuden", wrong1: "Fröiden", wrong2: "Froiden" },
    { singular: "Feuer", plural: "Feuer", wrong1: "Fäuer", wrong2: "Feuers" },
    { singular: "Leute", plural: "Leute", wrong1: "Läute", wrong2: "Leuten" },
    { singular: "Heu", plural: "Heu", wrong1: "Häu", wrong2: "Heue" },
    
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
    { singular: "Wasser", plural: "Wasser", wrong1: "Wässer", wrong2: "Wassers" },
    { singular: "Fenster", plural: "Fenster", wrong1: "Fenster", wrong2: "Fenstern" },
    { singular: "Bett", plural: "Betten", wrong1: "Bätten", wrong2: "Bett" },
    { singular: "Brett", plural: "Bretter", wrong1: "Brätter", wrong2: "Brettär" },
    { singular: "Blatt", plural: "Blätter", wrong1: "Bletter", wrong2: "Blatter" }
];

// ==================== SPIELZUSTAND ====================
const GameState = {
    currentWord: null,
    score: 0,
    streak: 0,
    bestStreak: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    skippedAnswers: 0,
    totalAnswers: 0,
    neededCorrect: 50, // WETTKAMPF: 50 Wörter!
    lives: 3,
    gameActive: false,
    usedWords: new Set(),
    achievements: []
};

// ==================== DOM-ELEMENTE ====================
const elements = {
    // Statistik
    wordSingular: document.getElementById('word-singular'),
    score: document.getElementById('score'),
    streakCounter: document.getElementById('streak-counter'),
    correctCounter: document.getElementById('correct-counter'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    
    // Feedback
    feedbackMessage: document.getElementById('feedback-message'),
    feedbackDetails: document.getElementById('feedback-details'),
    
    // Buttons
    answerButtons: document.getElementById('answer-buttons'),
    startBtn: document.getElementById('start-btn'),
    hintBtn: document.getElementById('hint-btn'),
    skipBtn: document.getElementById('skip-btn'),
    
    // Log
    gameLog: document.getElementById('game-log-content'),
    
    // Modal
    endModal: document.getElementById('end-modal'),
    modalIcon: document.getElementById('modal-icon'),
    modalTitle: document.getElementById('modal-title'),
    finalScore: document.getElementById('final-score'),
    finalCorrect: document.getElementById('final-correct'),
    finalWrong: document.getElementById('final-wrong'),
    finalSkipped: document.getElementById('final-skipped'),
    finalStreak: document.getElementById('final-streak'),
    finalLives: document.getElementById('final-lives'),
    finalAccuracy: document.getElementById('final-accuracy'),
    badgesList: document.getElementById('badges-list'),
    
    // Control
    restartBtn: document.getElementById('restart-btn'),
    shareBtn: document.getElementById('share-btn'),
    closeBtn: document.getElementById('close-btn'),
    
    // Lives
    hearts: document.getElementById('hearts')
};

// ==================== AUDIO-MANAGER ====================
class AudioManager {
    constructor() {
        this.sounds = {
            correct: document.getElementById('correct-sound'),
            error: document.getElementById('error-sound'),
            roundlost: document.getElementById('roundlost-sound'),
            roundwon: document.getElementById('roundwon-sound'),
            gamelost: document.getElementById('gamelost-sound'),
            gamewon: document.getElementById('gamewon-sound'),
            life: document.getElementById('life-gained-sound'),
            streak: document.getElementById('streak-bonus-sound'),
            
            // Fallbacks
            fallbackCorrect: document.getElementById('fallback-correct'),
            fallbackError: document.getElementById('fallback-error'),
            fallbackWin: document.getElementById('fallback-win'),
            fallbackLose: document.getElementById('fallback-lose')
        };
        
        // Volume einstellen
        Object.values(this.sounds).forEach(sound => {
            if (sound) sound.volume = 0.6;
        });
    }
    
    play(soundName) {
        return new Promise((resolve) => {
            let sound = this.sounds[soundName];
            
            if (!sound) {
                console.warn(`Sound ${soundName} nicht gefunden`);
                resolve();
                return;
            }
            
            sound.currentTime = 0;
            sound.play().then(resolve).catch(error => {
                console.warn(`Sound-Fehler ${soundName}:`, error.message);
                
                // Fallback versuchen
                const fallbackMap = {
                    'correct': 'fallbackCorrect',
                    'error': 'fallbackError',
                    'gamewon': 'fallbackWin',
                    'gamelost': 'fallbackLose'
                };
                
                if (fallbackMap[soundName]) {
                    this.play(fallbackMap[soundName]).then(resolve);
                } else {
                    resolve();
                }
            });
        });
    }
}

const audio = new AudioManager();

// ==================== HILFSFUNKTIONEN ====================
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function logToGame(message) {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${message}\n`;
    elements.gameLog.textContent = logEntry + elements.gameLog.textContent;
    
    // Log begrenzen
    const logs = elements.gameLog.textContent.split('\n');
    if (logs.length > 8) {
        elements.gameLog.textContent = logs.slice(0, 8).join('\n');
    }
}

function updateDisplays() {
    elements.score.textContent = GameState.score;
    elements.streakCounter.textContent = GameState.streak;
    elements.correctCounter.textContent = `${GameState.correctAnswers}/${GameState.neededCorrect}`;
    
    // Progress bar
    const progressPercent = (GameState.correctAnswers / GameState.neededCorrect) * 100;
    elements.progressFill.style.width = `${progressPercent}%`;
    elements.progressText.textContent = 
        `${GameState.correctAnswers}/${GameState.neededCorrect} Wörter - ` +
        `${GameState.lives} Leben verbleibend`;
}

function updateHearts() {
    const heartIcons = elements.hearts.querySelectorAll('i');
    heartIcons.forEach((heart, index) => {
        if (index < GameState.lives) {
            heart.className = 'fas fa-heart live';
        } else {
            heart.className = 'fas fa-heart lost';
        }
    });
}

function getRandomWord() {
    const availableWords = WORD_LIST.filter(word => !GameState.usedWords.has(word.singular));
    
    if (availableWords.length === 0) {
        GameState.usedWords.clear();
        return WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
    }
    
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const word = availableWords[randomIndex];
    GameState.usedWords.add(word.singular);
    return word;
}

function createAnswerButtons() {
    elements.answerButtons.innerHTML = '';
    
    const answers = [
        GameState.currentWord.plural,
        GameState.currentWord.wrong1,
        GameState.currentWord.wrong2
    ];
    
    const shuffledAnswers = shuffleArray(answers);
    
    shuffledAnswers.forEach((answer) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.dataset.answer = answer;
        
        button.addEventListener('click', () => {
            if (!GameState.gameActive) return;
            GameState.totalAnswers++;
            checkAnswer(answer);
        });
        
        elements.answerButtons.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    if (!GameState.gameActive) return;
    
    const isCorrect = selectedAnswer === GameState.currentWord.plural;
    
    // Alle Buttons deaktivieren und markieren
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === GameState.currentWord.plural) {
            btn.classList.add('correct');
        } else if (btn.dataset.answer === selectedAnswer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    if (isCorrect) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer();
    }
    
    updateDisplays();
}

function handleCorrectAnswer() {
    GameState.score += 15; // Mehr Punkte für Wettkampf
    GameState.streak++;
    GameState.correctAnswers++;
    
    if (GameState.streak > GameState.bestStreak) {
        GameState.bestStreak = GameState.streak;
    }
    
    // Audio
    audio.play('correct');
    
    // Feedback
    elements.feedbackMessage.innerHTML = 
        '<span style="color: #70e000; font-weight: bold;">✓ WETTKAMPF-PUNKT!</span>';
    elements.feedbackDetails.textContent = 
        `${GameState.currentWord.singular} → ${GameState.currentWord.plural} (+15P)`;
    
    // Bonus-Leben bei 5er-Serie
    if (GameState.streak % 5 === 0 && GameState.lives < 5) {
        GameState.lives++;
        updateHearts();
        audio.play('life');
        
        // Bonus-Punkte für Serie
        GameState.score += 25;
        
        logToGame(`⚡ ${GameState.streak}er SERIE! +25 Bonus +1 Leben!`);
        elements.feedbackDetails.textContent += ` ⚡ ${GameState.streak}er Serie!`;
    }
    
    // Spezielle Errungenschaften
    if (GameState.streak === 10) {
        GameState.achievements.push('10er Meister-Serie');
        audio.play('streak');
    }
    if (GameState.correctAnswers === 25) {
        GameState.achievements.push('Halbzeit-Champion');
    }
    
    logToGame(`✓ ${GameState.currentWord.singular} → ${GameState.currentWord.plural}`);
    
    // Nächstes Wort
    setTimeout(getNextWord, 1800);
}

function handleWrongAnswer() {
    GameState.wrongAnswers++;
    GameState.streak = 0;
    GameState.lives--;
    
    // Audio
    audio.play('error');
    if (GameState.lives === 0) {
        audio.play('roundlost');
    }
    
    // Feedback
    elements.feedbackMessage.innerHTML = 
        '<span style="color: #ff5400; font-weight: bold;">✗ FEHLER! Leben verloren!</span>';
    elements.feedbackDetails.textContent = 
        `Richtig: ${GameState.currentWord.singular} → ${GameState.currentWord.plural}`;
    
    updateHearts();
    
    logToGame(`✗ ${GameState.currentWord.singular} → ${GameState.currentWord.plural} (-1 Leben)`);
    
    if (GameState.lives <= 0) {
        setTimeout(() => endGame(false), 2000);
    } else {
        setTimeout(getNextWord, 2000);
    }
}

function showHint() {
    if (!GameState.gameActive) return;
    
    elements.hintBtn.disabled = true;
    GameState.score = Math.max(0, GameState.score - 5);
    
    const hint = GameState.currentWord.plural.charAt(0);
    elements.feedbackMessage.innerHTML = 
        '<span style="color: #ffd166; font-weight: bold;">💡 WETTKAMPF-TIPP:</span>';
    elements.feedbackDetails.textContent = 
        `Beginnt mit "${hint}"... (5 Punkte Strafe)`;
    
    updateDisplays();
    
    setTimeout(() => {
        elements.hintBtn.disabled = false;
    }, 3000);
}

function skipWord() {
    if (!GameState.gameActive) return;
    
    GameState.skippedAnswers++;
    GameState.score = Math.max(0, GameState.score - 10);
    GameState.streak = 0;
    
    audio.play('roundlost');
    
    elements.feedbackMessage.innerHTML = 
        '<span style="color: #a0aec0; font-weight: bold;">⏭️ WORT ÜBERSPRUNGEN</span>';
    elements.feedbackDetails.textContent = 
        `${GameState.currentWord.singular} → ${GameState.currentWord.plural} (-10P)`;
    
    updateDisplays();
    
    logToGame(`⏭️ ${GameState.currentWord.singular} übersprungen (-10P)`);
    
    setTimeout(getNextWord, 1500);
}

function getNextWord() {
    // Prüfen ob Spiel vorbei
    if (GameState.correctAnswers >= GameState.neededCorrect) {
        endGame(true);
        return;
    }
    
    if (GameState.lives <= 0) {
        endGame(false);
        return;
    }
    
    // Neues Wort holen
    GameState.currentWord = getRandomWord();
    elements.wordSingular.textContent = GameState.currentWord.singular;
    
    // Buttons erstellen
    createAnswerButtons();
    
    // Animation
    elements.wordSingular.style.transform = 'scale(1.15)';
    setTimeout(() => {
        elements.wordSingular.style.transform = 'scale(1)';
    }, 300);
}

function endGame(isWin) {
    GameState.gameActive = false;
    
    // Buttons deaktivieren
    elements.hintBtn.disabled = true;
    elements.skipBtn.disabled = true;
    document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
    
    // Audio
    if (isWin) {
        audio.play('gamewon');
        logToGame('🏆🏆🏆 WETTKAMPF GEWONNEN! 50/50! 🏆🏆🏆');
    } else {
        audio.play('gamelost');
        logToGame('💀 WETTKAMPF VERLOREN! Keine Leben mehr!');
    }
    
    // Endscreen zeigen
    showEndScreen(isWin);
}

function showEndScreen(isWin) {
    // Statistik berechnen
    const totalAttempted = GameState.totalAnswers;
    const accuracy = totalAttempted > 0 ? 
        Math.round((GameState.correctAnswers / totalAttempted) * 100) : 0;
    
    // Werte setzen
    elements.finalScore.textContent = GameState.score;
    elements.finalCorrect.textContent = `${GameState.correctAnswers}/${GameState.neededCorrect}`;
    elements.finalWrong.textContent = GameState.wrongAnswers;
    elements.finalSkipped.textContent = GameState.skippedAnswers;
    elements.finalStreak.textContent = GameState.bestStreak;
    elements.finalLives.textContent = GameState.lives;
    elements.finalAccuracy.textContent = `${accuracy}%`;
    
    // Errungenschaften
    let badgesHTML = '';
    if (isWin) {
        GameState.achievements.push('WETTKAMPF-SIEGER');
        badgesHTML += '<span class="badge">🏆 WETTKAMPF-SIEGER</span> ';
    }
    if (GameState.bestStreak >= 10) {
        badgesHTML += '<span class="badge">⚡ 10er Serie</span> ';
    }
    if (accuracy >= 90) {
        badgesHTML += '<span class="badge">🎯 Genauigkeit 90%+</span> ';
    }
    if (GameState.lives === 3 && GameState.correctAnswers > 0) {
        badgesHTML += '<span class="badge">💪 Perfektes Spiel</span> ';
    }
    
    elements.badgesList.innerHTML = badgesHTML || '<span class="badge">🏅 Teilnehmer</span>';
    
    // Modal anpassen
    if (isWin) {
        elements.modalIcon.className = 'fas fa-trophy';
        elements.modalTitle.textContent = '🏆 WETTKAMPF GEWONNEN! 🏆';
    } else {
        elements.modalIcon.className = 'fas fa-heart-broken';
        elements.modalTitle.textContent = '💀 WETTKAMPF VERLOREN';
    }
    
    elements.endModal.style.display = 'flex';
}

function restartGame() {
    // Spiel zurücksetzen
    GameState.currentWord = null;
    GameState.score = 0;
    GameState.streak = 0;
    GameState.bestStreak = 0;
    GameState.correctAnswers = 0;
    GameState.wrongAnswers = 0;
    GameState.skippedAnswers = 0;
    GameState.totalAnswers = 0;
    GameState.lives = 3;
    GameState.gameActive = false;
    GameState.usedWords.clear();
    GameState.achievements = [];
    
    // UI zurücksetzen
    elements.endModal.style.display = 'none';
    elements.startBtn.disabled = false;
    elements.hintBtn.disabled = true;
    elements.skipBtn.disabled = true;
    elements.feedbackMessage.textContent = 'Klicke auf "Wettkampf starten"!';
    elements.feedbackDetails.textContent = 'Ziel: 50 richtige Mehrzahlformen - Jeder Fehler kostet ein Leben!';
    elements.wordSingular.textContent = 'WETTKAMPF';
    elements.answerButtons.innerHTML = '';
    
    // Statistiken aktualisieren
    updateDisplays();
    updateHearts();
    
    // Log zurücksetzen
    elements.gameLog.textContent = 'Neuer Wettkampf bereit! Ziel: 50 von 50!';
    
    logToGame('🏁 NEUER WETTKAMPF BEREIT!');
}

function shareResults() {
    const text = 
        `Ich habe beim Umlaut-Meister Wettkampf ${GameState.score} Punkte erreicht! ` +
        `${GameState.correctAnswers}/50 richtige Mehrzahlformen, ` +
        `Genauigkeit: ${Math.round((GameState.correctAnswers / GameState.totalAnswers) * 100)}%. ` +
        `Kannst du mich schlagen?`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Mein Umlaut-Meister Ergebnis',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text);
        alert('Ergebnis in Zwischenablage kopiert! Teil es mit deinen Freunden!');
    }
}

// ==================== EVENT LISTENER ====================
function setupEventListeners() {
    // Haupt-Buttons
    elements.startBtn.addEventListener('click', startGame);
    elements.hintBtn.addEventListener('click', showHint);
    elements.skipBtn.addEventListener('click', skipWord);
    
    // Modal-Buttons
    elements.restartBtn.addEventListener('click', restartGame);
    elements.shareBtn.addEventListener('click', shareResults);
    elements.closeBtn.addEventListener('click', () => {
        elements.endModal.style.display = 'none';
    });
    
    // Tastatur-Steuerung
    document.addEventListener('keydown', (e) => {
        if (!GameState.gameActive) return;
        
        // Zahlen 1-3 für Antworten
        if (e.key >= '1' && e.key <= '3') {
            const buttons = document.querySelectorAll('.answer-btn');
            const index = parseInt(e.key) - 1;
            if (buttons[index]) {
                buttons[index].click();
            }
        }
        
        // Leertaste für Tipp
        if (e.key === ' ' && !elements.hintBtn.disabled) {
            showHint();
        }
        
        // Enter für Überspringen
        if (e.key === 'Enter' && !elements.skipBtn.disabled) {
            skipWord();
        }
    });
}

function startGame() {
    console.log('🚀 WETTKAMPF STARTET! 50 Wörter Challenge!');
    
    GameState.gameActive = true;
    GameState.score = 0;
    GameState.streak = 0;
    GameState.bestStreak = 0;
    GameState.correctAnswers = 0;
    GameState.wrongAnswers = 0;
    GameState.skippedAnswers = 0;
    GameState.totalAnswers = 0;
    GameState.lives = 3;
    GameState.usedWords.clear();
    GameState.achievements = [];
    
    // UI aktualisieren
    updateDisplays();
    updateHearts();
    
    elements.startBtn.disabled = true;
    elements.hintBtn.disabled = false;
    elements.skipBtn.disabled = false;
    
    elements.feedbackMessage.innerHTML = 
        '<span style="color: #ffd166; font-weight: bold;">🚀 WETTKAMPF GESTARTET!</span>';
    elements.feedbackDetails.textContent = 
        '50 Wörter Challenge - Jeder Fehler kostet ein Leben!';
    
    // Erstes Wort laden
    getNextWord();
    
    // Log
    logToGame('🔥🔥🔥 WETTKAMPF GESTARTET! 50 WÖRTER CHALLENGE! 🔥🔥🔥');
    logToGame('Ziel: 50 richtige Mehrzahlformen');
    logToGame('Regel: 3 Leben - bei 0 Leben = GAME OVER');
}

// ==================== INITIALISIERUNG ====================
function initializeGame() {
    console.log('🎮 Umlaut-Meister Wettkampf initialisiert');
    console.log(`📚 Wörter: ${WORD_LIST.length}`);
    console.log('🎯 Ziel: 50 von 50 richtigen Mehrzahlformen');
    
    setupEventListeners();
    
    // Initiale Nachricht
    logToGame('🎮 UMLAUT-MEISTER WETTKAMPF GELADEN!');
    logToGame('🎯 ZIEL: 50 RICHTIGE MEHRZAHLFORMEN');
    logToGame('❤️ DU HAST 3 LEBEN - PASS AUF!');
    logToGame('⚡ BONUS: +1 LEBEN BEI 5er SERIE!');
    
    // Wettkampf-Stimmung
    elements.wordSingular.textContent = 'WETTKAMPF';
    elements.correctCounter.textContent = '0/50';
    elements.progressText.textContent = '0/50 Wörter - Wettkampf läuft!';
}

// Spiel starten
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGame);
} else {
    initializeGame();
}
