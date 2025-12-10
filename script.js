// Wortliste mit Singular, korrekter Mehrzahl und phonetisch ähnlichen Falschschreibungen
const WORD_LIST = [
    // Umlaut-Regeln a->ä (häufige Fehler: ä→e oder ä→ai phonetisch)
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
    { singular: "Bauch", plural: "Bäuche", wrong1: "Boiche", wrong2: "Beuche" },
    
    // Umlaut-Regeln o->ö (häufige Fehler: ö→e oder ö→oi phonetisch)
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
    
    // Umlaut-Regeln u->ü (häufige Fehler: ü→u oder ü→ui phonetisch)
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
    
    // Au/äu-Regeln (häufige Fehler: äu→eu oder äu→oi phonetisch)
    { singular: "Maus", plural: "Mäuse", wrong1: "Meuse", wrong2: "Moise" },
    { singular: "Haus", plural: "Häuser", wrong1: "Heuser", wrong2: "Hoiser" },
    { singular: "Laus", plural: "Läuse", wrong1: "Leuse", wrong2: "Loisse" },
    { singular: "Braut", plural: "Bräute", wrong1: "Breute", wrong2: "Broite" },
    { singular: "Traum", plural: "Träume", wrong1: "Treume", wrong2: "Troime" },
    { singular: "Baum", plural: "Bäume", wrong1: "Beume", wrong2: "Boime" },
    { singular: "Raum", plural: "Räume", wrong1: "Reume", wrong2: "Roime" },
    { singular: "Sau", plural: "Säue", wrong1: "Seue", wrong2: "Soie" },
    { singular: "Frau", plural: "Frauen", wrong1: "Freuen", wrong2: "Fraus" },
    { singular: "Mauer", plural: "Mauern", wrong1: "Meuern", wrong2: "Moiern" },
    
    // Eu-Wörter (kein Umlaut, häufiger Fehler: eu→äu fälschlich)
    { singular: "Scheune", plural: "Scheunen", wrong1: "Schäunen", wrong2: "Scheune" },
    { singular: "Freude", plural: "Freuden", wrong1: "Fröiden", wrong2: "Froiden" },
    { singular: "Feuer", plural: "Feuer", wrong1: "Fäuer", wrong2: "Feuers" },
    { singular: "Leute", plural: "Leute", wrong1: "Läute", wrong2: "Leuten" },
    { singular: "Heu", plural: "Heu", wrong1: "Häu", wrong2: "Heue" },
    { singular: "Teufel", plural: "Teufel", wrong1: "Täufel", wrong2: "Toifel" },
    { singular: "Eule", plural: "Eulen", wrong1: "Äulen", wrong2: "Oilen" },
    { singular: "Freund", plural: "Freunde", wrong1: "Frönde", wrong2: "Fründe" },
    { singular: "Heute", plural: "Heute", wrong1: "Häute", wrong2: "Hoite" },
    { singular: "Neun", plural: "Neunen", wrong1: "Näunen", wrong2: "Noinen" },
    
    // Oi-Wörter (selten, aber existent - häufiger Fehler: oi→öi)
    { singular: "Loipe", plural: "Loipen", wrong1: "Löipen", wrong2: "Läupe" },
    { singular: "Boiler", plural: "Boiler", wrong1: "Böiler", wrong2: "Boilern" },
    { singular: "Toilette", plural: "Toiletten", wrong1: "Töiletten", wrong2: "Teuletten" },
    
    // Lateinische Fremdwörter auf -um (häufige Fehler: falsche Endung)
    { singular: "Museum", plural: "Museen", wrong1: "Museümer", wrong2: "Museums" },
    { singular: "Studium", plural: "Studien", wrong1: "Studiümer", wrong2: "Studiumse" },
    { singular: "Zentrum", plural: "Zentren", wrong1: "Zentrumen", wrong2: "Zentrums" },
    { singular: "Datum", plural: "Daten", wrong1: "Datümer", wrong2: "Datums" },
    { singular: "Thema", plural: "Themen", wrong1: "Themas", wrong2: "Thema" },
    { singular: "Klima", plural: "Klimate", wrong1: "Klimas", wrong2: "Klimata" },
    { singular: "Auto", plural: "Autos", wrong1: "Autos", wrong2: "Auto" },
    { singular: "Album", plural: "Alben", wrong1: "Albümer", wrong2: "Alpen" },
    
    // Endung -er (häufige Fehler: falscher Umlaut oder falsche Endung)
    { singular: "Kind", plural: "Kinder", wrong1: "Kindren", wrong2: "Kindser" },
    { singular: "Ei", plural: "Eier", wrong1: "Oier", wrong2: "Eien" },
    { singular: "Buch", plural: "Bücher", wrong1: "Bucher", wrong2: "Buchen" },
    { singular: "Dorf", plural: "Dörfer", wrong1: "Dorfer", wrong2: "Dörfen" },
    { singular: "Licht", plural: "Lichter", wrong1: "Lichtse", wrong2: "Leuchte" },
    { singular: "Hemd", plural: "Hemden", wrong1: "Hemder", wrong2: "Hämper" },
    { singular: "Feld", plural: "Felder", wrong1: "Feldens", wrong2: "Felde" },
    { singular: "Bild", plural: "Bilder", wrong1: "Bilden", wrong2: "Böld" },
    { singular: "Glas", plural: "Gläser", wrong1: "Glaser", wrong2: "Glasse" },
    { singular: "Rad", plural: "Räder", wrong1: "Rader", wrong2: "Raden" },
    
    // Keine Umlaute (häufige Fehler: fälschlicher Umlaut)
    { singular: "Tasche", plural: "Taschen", wrong1: "Täschen", wrong2: "Tasches" },
    { singular: "Lampe", plural: "Lampen", wrong1: "Lämpen", wrong2: "Lampens" },
    { singular: "Flasche", plural: "Flaschen", wrong1: "Fläschen", wrong2: "Flösche" },
    { singular: "Kanne", plural: "Kannen", wrong1: "Kännen", wrong2: "Känne" },
    { singular: "Karte", plural: "Karten", wrong1: "Kärten", wrong2: "Kartens" },
    { singular: "Hand", plural: "Hände", wrong1: "Hende", wrong2: "Handen" },
    { singular: "Land", plural: "Länder", wrong1: "Lender", wrong2: "Landen" },
    { singular: "Wand", plural: "Wände", wrong1: "Wende", wrong2: "Wanden" },
    { singular: "Bank", plural: "Bänke", wrong1: "Benke", wrong2: "Bankän" },
    { singular: "Pflanze", plural: "Pflanzen", wrong1: "Pflänzen", wrong2: "Pflanzän" },
    
    // Endung -en (häufige Fehler: falscher Umlaut oder Endung -e)
    { singular: "Frau", plural: "Frauen", wrong1: "Fröen", wrong2: "Fraün" },
    { singular: "Blume", plural: "Blumen", wrong1: "Blümen", wrong2: "Blumän" },
    { singular: "Stunde", plural: "Stunden", wrong1: "Stünden", wrong2: "Stundän" },
    { singular: "Woche", plural: "Wochen", wrong1: "Wöchen", wrong2: "Wochän" },
    { singular: "Nase", plural: "Nasen", wrong1: "Näsen", wrong2: "Nasän" },
    { singular: "Rose", plural: "Rosen", wrong1: "Rösen", wrong2: "Rosän" },
    { singular: "Schule", plural: "Schulen", wrong1: "Schülen", wrong2: "Schuele" },
    { singular: "Tasse", plural: "Tassen", wrong1: "Tässen", wrong2: "Tassän" },
    { singular: "Wolke", plural: "Wolken", wrong1: "Wölken", wrong2: "Wolkän" },
    { singular: "Kerze", plural: "Kerzen", wrong1: "Kärzen", wrong2: "Kerzän" },
    
    // Endung -e (häufige Fehler: falscher Umlaut oder Endung -en)
    { singular: "Tag", plural: "Tage", wrong1: "Täge", wrong2: "Tagen" },
    { singular: "Hund", plural: "Hunde", wrong1: "Hünde", wrong2: "Hunden" },
    { singular: "Berg", plural: "Berge", wrong1: "Bärge", wrong2: "Bergän" },
    { singular: "Stern", plural: "Sterne", wrong1: "Stärne", wrong2: "Sternän" },
    { singular: "Arm", plural: "Arme", wrong1: "Ärme", wrong2: "Ärmen" },
    { singular: "Bein", plural: "Beine", wrong1: "Bäine", wrong2: "Beinän" },
    { singular: "Kopf", plural: "Köpfe", wrong1: "Keppe", wrong2: "Kopfen" },
    { singular: "Ring", plural: "Ringe", wrong1: "Ränge", wrong2: "Ringän" },
    { singular: "Satz", plural: "Sätze", wrong1: "Setze", wrong2: "Satzen" },
    { singular: "Sack", plural: "Säcke", wrong1: "Secke", wrong2: "Sackän" },
    
    // Mit s/ß (häufige Fehler: falsche ss/ß oder Umlaut)
    { singular: "Bus", plural: "Busse", wrong1: "Büsse", wrong2: "Buse" },
    { singular: "Glas", plural: "Gläser", wrong1: "Glaser", wrong2: "Glasen" },
    { singular: "Kreis", plural: "Kreise", wrong1: "Kreise", wrong2: "Kreisen" },
    { singular: "Fuss", plural: "Füsse", wrong1: "Fusse", wrong2: "Füess" },
    { singular: "Strauss", plural: "Sträusse", wrong1: "Strausse", wrong2: "Straussen" },
    { singular: "Gruss", plural: "Grüsse", wrong1: "Grüsse", wrong2: "Gruss" },
    { singular: "Schloss", plural: "Schlösser", wrong1: "Schlosser", wrong2: "Schloss" },
    { singular: "Kuss", plural: "Küsse", wrong1: "Kusse", wrong2: "Kusses" },
    { singular: "Fluss", plural: "Flüsse", wrong1: "Flusse", wrong2: "Flüss" },
    { singular: "Guss", plural: "Güsse", wrong1: "Gusse", wrong2: "Gussän" },
    
    // Wasser-Sonderfall (häufige Fehler: Wässer oder Wassers)
    { singular: "Wasser", plural: "Wasser", wrong1: "Wässer", wrong2: "Wassers" },
    { singular: "Fenster", plural: "Fenster", wrong1: "Fenster", wrong2: "Fenstern" },
    { singular: "Bett", plural: "Betten", wrong1: "Bätten", wrong2: "Bett" },
    { singular: "Brett", plural: "Bretter", wrong1: "Brätter", wrong2: "Brettär" },
    { singular: "Blatt", plural: "Blätter", wrong1: "Bletter", wrong2: "Blatter" },
    { singular: "Netz", plural: "Netze", wrong1: "Nätze", wrong2: "Netzän" },
    { singular: "Herz", plural: "Herzen", wrong1: "Härzen", wrong2: "Herzän" },
    { singular: "Holz", plural: "Hölzer", wrong1: "Holzer", wrong2: "Hölzen" },
    { singular: "Geld", plural: "Gelder", wrong1: "Gelder", wrong2: "Gälder" },
    { singular: "Bild", plural: "Bilder", wrong1: "Bildär", wrong2: "Bilden" },
    
    // Weitere Grundschulwörter mit typischen Fehlern
    { singular: "Auto", plural: "Autos", wrong1: "Autös", wrong2: "Oito" },
    { singular: "Bild", plural: "Bilder", wrong1: "Bilden", wrong2: "Bilds" },
    { singular: "Brief", plural: "Briefe", wrong1: "Briefer", wrong2: "Briefä" },
    { singular: "Fisch", plural: "Fische", wrong1: "Fischä", wrong2: "Fischs" },
    { singular: "Freund", plural: "Freunde", wrong1: "Froinde", wrong2: "Fräunde" },
    { singular: "Gabel", plural: "Gabeln", wrong1: "Gäbeln", wrong2: "Gabels" },
    { singular: "Geburtstag", plural: "Geburtstage", wrong1: "Geburtstager", wrong2: "Geburtstäg" },
    { singular: "Geschenk", plural: "Geschenke", wrong1: "Geschänke", wrong2: "Geschenker" },
    { singular: "Gitarre", plural: "Gitarren", wrong1: "Gitärren", wrong2: "Gitarrän" },
    { singular: "Hose", plural: "Hosen", wrong1: "Hösen", wrong2: "Hoses" },
    { singular: "Katze", plural: "Katzen", wrong1: "Kätzen", wrong2: "Ketzen" },
    { singular: "Keller", plural: "Keller", wrong1: "Kellär", wrong2: "Kellern" },
    { singular: "Kino", plural: "Kinos", wrong1: "Kinoer", wrong2: "Kinös" },
    { singular: "Kirsche", plural: "Kirschen", wrong1: "Kirchen", wrong2: "Kirschän" },
    { singular: "Klasse", plural: "Klassen", wrong1: "Klässen", wrong2: "Klasses" },
    { singular: "Koffer", plural: "Koffer", wrong1: "Kofferen", wrong2: "Kofferes" },
    { singular: "Kuchen", plural: "Kuchen", wrong1: "Küchen", wrong2: "Küechen" },
    { singular: "Lied", plural: "Lieder", wrong1: "Liedär", wrong2: "Lied" },
    { singular: "Löffel", plural: "Löffel", wrong1: "Loffel", wrong2: "Loffelns" },
    { singular: "Messer", plural: "Messer", wrong1: "Mässer", wrong2: "Messern" },
    { singular: "Name", plural: "Namen", wrong1: "Names", wrong2: "Namer" },
    { singular: "Ohr", plural: "Ohren", wrong1: "Öhren", wrong2: "Ohrä" },
    { singular: "Park", plural: "Pärke", wrong1: "Perke", wrong2: "Parken" },
    { singular: "Regen", plural: "Regen", wrong1: "Rägen", wrong2: "Regän" },
    { singular: "Rucksack", plural: "Rucksäcke", wrong1: "Rucksacke", wrong2: "Rucksecke" },
    { singular: "Schaf", plural: "Schafe", wrong1: "Schäfe", wrong2: "Schafens" },
    { singular: "Schiff", plural: "Schiffe", wrong1: "Schiffs", wrong2: "Schiffän" },
    { singular: "Schlüssel", plural: "Schlüssel", wrong1: "Schlüssels", wrong2: "Schlüsselän" },
    { singular: "Schule", plural: "Schulen", wrong1: "Schülen", wrong2: "Schule" },
    { singular: "Schwein", plural: "Schweine", wrong1: "Schwaine", wrong2: "Schwoin" },
    { singular: "See", plural: "Seen", wrong1: "Seän", wrong2: "Seehe" },
    { singular: "Sessel", plural: "Sessel", wrong1: "Sässel", wrong2: "Sessäln" },
    { singular: "Sonne", plural: "Sonnen", wrong1: "Sönnen", wrong2: "Sonnä" },
    { singular: "Spiel", plural: "Spiele", wrong1: "Spielens", wrong2: "Spile" },
    { singular: "Stadt", plural: "Städte", wrong1: "Stedten", wrong2: "Stadte" },
    { singular: "Stift", plural: "Stifte", wrong1: "Stifter", wrong2: "Stiften" },
    { singular: "Strasse", plural: "Strassen", wrong1: "Strässen", wrong2: "Strässe" },
    { singular: "Stuhl", plural: "Stühle", wrong1: "Stuhle", wrong2: "Stuhlen" },
    { singular: "Tante", plural: "Tanten", wrong1: "Tänten", wrong2: "Tantän" },
    { singular: "Teller", plural: "Teller", wrong1: "Tellers", wrong2: "Tellärn" },
    { singular: "Theater", plural: "Theater", wrong1: "Theatär", wrong2: "Theäter" },
    { singular: "Tier", plural: "Tiere", wrong1: "Tiäre", wrong2: "Tierä" },
    { singular: "Tisch", plural: "Tische", wrong1: "Tischä", wrong2: "Tisches" },
    { singular: "Tür", plural: "Türen", wrong1: "Turän", wrong2: "Türä" },
    { singular: "Uhr", plural: "Uhren", wrong1: "Ühren", wrong2: "Uhrä" },
    { singular: "Wald", plural: "Wälder", wrong1: "Welder", wrong2: "Waldär" },
    { singular: "Weg", plural: "Wege", wrong1: "Wäge", wrong2: "Wegä" },
    { singular: "Wiese", plural: "Wiesen", wrong1: "Wiesän", wrong2: "Wiäse" },
    { singular: "Wind", plural: "Winde", wrong1: "Windä", wrong2: "Winder" },
    { singular: "Wort", plural: "Wörter", wrong1: "Wörtär", wrong2: "Worter" },
    { singular: "Zahn", plural: "Zähne", wrong1: "Zahner", wrong2: "Zahnä" },
    { singular: "Zeitung", plural: "Zeitungen", wrong1: "Zeitunger", wrong2: "Zeitungser" },
    { singular: "Zelt", plural: "Zelte", wrong1: "Zälte", wrong2: "Zält" },
    { singular: "Zimmer", plural: "Zimmer", wrong1: "Zimmär", wrong2: "Zimmärn" },
    { singular: "Zoo", plural: "Zoos", wrong1: "Zooser", wrong2: "Zooen" },
    { singular: "Zucker", plural: "Zucker", wrong1: "Zücker", wrong2: "Zuckern" },
    
    // Zusätzliche Beispiele für häufig verwechselte Wörter
    { singular: "Apfel", plural: "Äpfel", wrong1: "Epfel", wrong2: "Öpfel" },
    { singular: "Nagel", plural: "Nägel", wrong1: "Negel", wrong2: "Nägäl" },
    { singular: "Nadel", plural: "Nadeln", wrong1: "Nädeln", wrong2: "Nodel" },
    { singular: "Sattel", plural: "Sättel", wrong1: "Settel", wrong2: "Saitel" },
    { singular: "Sack", plural: "Säcke", wrong1: "Secke", wrong2: "Saicke" },
    { singular: "Backe", plural: "Backen", wrong1: "Bäcken", wrong2: "Backä" },
    { singular: "Jacke", plural: "Jacken", wrong1: "Jäcken", wrong2: "Jackes" },
    { singular: "Mappe", plural: "Mappen", wrong1: "Mäppen", wrong2: "Mappes" },
    { singular: "Kappe", plural: "Kappen", wrong1: "Käppen", wrong2: "Kappär" },
    { singular: "Suppe", plural: "Suppen", wrong1: "Süppen", wrong2: "Suppä" }
];

// Grammatikregeln für Tipps (jetzt mit Fokus auf phonetische Fehler)
const GRAMMAR_RULES = [
    "a → ä: Baum → Bäume (nicht Beume oder Baime)",
    "o → ö: Sohn → Söhne (nicht Sehne oder Soihne)",
    "u → ü: Mutter → Mütter (nicht Mutter oder Muiter)",
    "au → äu: Haus → Häuser (nicht Heuser oder Hoiser)",
    "Vorsicht: eu bleibt eu: Feuer → Feuer (nicht Fäuer)",
    "Vorsicht: oi bleibt oi: Loipe → Loipen (nicht Löipen)",
    "Endung -er: Kind → Kinder (nicht Kind)",
    "Endung -en: Frau → Frauen (nicht Fraue)",
    "Endung -e: Tag → Tage (nicht Tagen)",
    "Endung -s: Auto → Autos (nicht Auto)",
    "Kein Umlaut: Tasche → Taschen (nicht Täschen)",
    "Sonderfall: Museum → Museen (nicht Museum)",
    "Achtung: Wasser → Wasser (nicht Wässer oder Wassers)",
    "ß-Regel: Fuß → Füße (nicht Fusse oder Fuise)"
];

// Spielzustand
const GameState = {
    currentWord: null,
    score: 0,
    streak: 0,
    bestStreak: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    skippedAnswers: 0,
    totalAnswers: 0,
    neededCorrect: 20,
    gameActive: false,
    usedWords: new Set(),
    learnedRules: new Set()
};

// DOM-Elemente
const elements = {
    wordSingular: document.getElementById('word-singular'),
    score: document.getElementById('score'),
    streakCounter: document.getElementById('streak-counter'),
    correctCounter: document.getElementById('correct-counter'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    feedbackMessage: document.getElementById('feedback-message'),
    feedbackDetails: document.getElementById('feedback-details'),
    answerButtons: document.getElementById('answer-buttons'),
    startBtn: document.getElementById('start-btn'),
    hintBtn: document.getElementById('hint-btn'),
    skipBtn: document.getElementById('skip-btn'),
    gameLog: document.getElementById('game-log-content'),
    endModal: document.getElementById('end-modal'),
    modalIcon: document.getElementById('modal-icon'),
    modalTitle: document.getElementById('modal-title'),
    finalScore: document.getElementById('final-score'),
    finalCorrect: document.getElementById('final-correct'),
    finalWrong: document.getElementById('final-wrong'),
    finalSkipped: document.getElementById('final-skipped'),
    finalStreak: document.getElementById('final-streak'),
    finalAccuracy: document.getElementById('final-accuracy'),
    learnedRules: document.getElementById('learned-rules'),
    restartBtn: document.getElementById('restart-btn'),
    closeBtn: document.getElementById('close-btn')
};

// Audio-Elemente
const audioElements = {
    correct: document.getElementById('correct-sound'),
    error: document.getElementById('error-sound'),
    levelup: document.getElementById('levelup-sound'),
    fallbackCorrect: document.getElementById('fallback-correct'),
    fallbackError: document.getElementById('fallback-error'),
    fallbackWin: document.getElementById('fallback-win')
};

// ==================== HILFSFUNKTIONEN ====================

// Prüfen ob Wort Umlaute hat
function hasUmlaut(word) {
    return /[äöü]/i.test(word);
}

// Array mischen
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Grammatikregel finden
function findGrammarRule(word) {
    const singular = word.singular.toLowerCase();
    const plural = word.plural.toLowerCase();
    
    // Phonetische Fehlermuster erkennen
    if (word.wrong1 && word.wrong2) {
        if (word.wrong1.includes('eu') && plural.includes('äu')) {
            return "Vorsicht: äu (wie in Häuser) wird oft fälschlich als eu (Heuser) geschrieben";
        }
        if (word.wrong1.includes('ei') && plural.includes('ä')) {
            return "Vorsicht: ä (wie in Bäume) wird oft fälschlich als ai (Baime) geschrieben";
        }
        if (word.wrong1.includes('e') && plural.includes('ä') && singular.includes('a')) {
            return "Regel: a wird in der Mehrzahl zu ä (Baum → Bäume, nicht Beume)";
        }
        if (word.wrong1.includes('e') && plural.includes('ö') && singular.includes('o')) {
            return "Regel: o wird in der Mehrzahl zu ö (Sohn → Söhne, nicht Sehne)";
        }
        if (word.wrong1.includes('u') && plural.includes('ü') && singular.includes('u')) {
            return "Regel: u wird in der Mehrzahl zu ü (Mutter → Mütter, nicht Mutter)";
        }
    }
    
    // Standardregeln
    if (plural.includes('ä') && singular.includes('a')) return GRAMMAR_RULES[0];
    if (plural.includes('ö') && singular.includes('o')) return GRAMMAR_RULES[1];
    if (plural.includes('ü') && singular.includes('u')) return GRAMMAR_RULES[2];
    if (plural.includes('äu') && singular.includes('au')) return GRAMMAR_RULES[3];
    if (plural.includes('eu') && !singular.includes('äu')) return GRAMMAR_RULES[4];
    if (plural.includes('oi') || singular.includes('oi')) return GRAMMAR_RULES[5];
    if (plural.endsWith('er') && !singular.endsWith('er')) return GRAMMAR_RULES[6];
    if (plural.endsWith('en') && !singular.endsWith('en')) return GRAMMAR_RULES[7];
    if (plural.endsWith('e') && !singular.endsWith('e')) return GRAMMAR_RULES[8];
    if (plural.endsWith('s') && !singular.endsWith('s')) return GRAMMAR_RULES[9];
    if (!hasUmlaut(plural) && hasUmlaut(word.wrong1)) return GRAMMAR_RULES[10];
    if (plural.endsWith('ien') || singular.endsWith('um')) return GRAMMAR_RULES[11];
    if (singular === "wasser") return GRAMMAR_RULES[12];
    if (plural.includes('ß')) return GRAMMAR_RULES[13];
    
    return null;
}

// Audio abspielen
function playSound(audioName, useFallback = false) {
    return new Promise((resolve) => {
        let audio;
        
        if (useFallback) {
            switch(audioName) {
                case 'correct': audio = audioElements.fallbackCorrect; break;
                case 'error': audio = audioElements.fallbackError; break;
                case 'win': audio = audioElements.fallbackWin; break;
                default: audio = audioElements.fallbackCorrect;
            }
        } else {
            audio = audioElements[audioName];
        }
        
        if (!audio) {
            console.warn(`Audio ${audioName} nicht gefunden`);
            resolve();
            return;
        }
        
        audio.currentTime = 0;
        audio.play().then(resolve).catch(error => {
            console.warn(`Audio-Fehler für ${audioName}:`, error.message);
            if (!useFallback) {
                playSound(audioName, true).then(resolve);
            } else {
                resolve();
            }
        });
    });
}

// In Game-Log schreiben
function logToGame(message) {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${message}\n`;
    elements.gameLog.textContent = logEntry + elements.gameLog.textContent;
    
    // Alte Logs begrenzen
    const logs = elements.gameLog.textContent.split('\n');
    if (logs.length > 10) {
        elements.gameLog.textContent = logs.slice(0, 10).join('\n');
    }
}

// ==================== SPIEL-LOGIK ====================

// Event Listener einrichten
function setupEventListeners() {
    elements.startBtn.addEventListener('click', startGame);
    elements.hintBtn.addEventListener('click', showHint);
    elements.skipBtn.addEventListener('click', skipWord);
    elements.restartBtn.addEventListener('click', restartGame);
    elements.closeBtn.addEventListener('click', closeModal);
    
    console.log('Event-Listener eingerichtet');
}

// Spiel starten
function startGame() {
    console.log('Starte Umlaut-Meister...');
    
    GameState.gameActive = true;
    GameState.score = 0;
    GameState.streak = 0;
    GameState.bestStreak = 0;
    GameState.correctAnswers = 0;
    GameState.wrongAnswers = 0;
    GameState.skippedAnswers = 0;
    GameState.totalAnswers = 0;
    GameState.usedWords.clear();
    GameState.learnedRules.clear();
    
    updateDisplays();
    
    elements.startBtn.disabled = true;
    elements.hintBtn.disabled = false;
    elements.skipBtn.disabled = false;
    
    elements.feedbackMessage.textContent = 'Wähle die richtige Mehrzahlform!';
    elements.feedbackDetails.textContent = 'Achte auf Umlaute und Endungen!';
    
    getNextWord();
    logToGame('Spiel gestartet - Mehrzahlbildung trainieren');
}

// Zufälliges Wort auswählen
function getRandomWord() {
    // Filtere bereits verwendete Wörter
    const availableWords = WORD_LIST.filter(word => !GameState.usedWords.has(word.singular));
    
    if (availableWords.length === 0) {
        // Wenn alle Wörter verwendet wurden, zurücksetzen
        GameState.usedWords.clear();
        return WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
    }
    
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const word = availableWords[randomIndex];
    GameState.usedWords.add(word.singular);
    
    return word;
}

// Nächstes Wort anzeigen
function getNextWord() {
    if (GameState.correctAnswers >= GameState.neededCorrect) {
        endGame(true);
        return;
    }
    
    GameState.currentWord = getRandomWord();
    elements.wordSingular.textContent = GameState.currentWord.singular;
    
    // Antwort-Buttons erstellen
    createAnswerButtons();
    
    // Animation
    elements.wordSingular.style.transform = 'scale(1.1)';
    setTimeout(() => {
        elements.wordSingular.style.transform = 'scale(1)';
    }, 200);
}

// Antwort-Buttons erstellen
function createAnswerButtons() {
    elements.answerButtons.innerHTML = '';
    
    // Alle möglichen Antworten sammeln
    const answers = [
        GameState.currentWord.plural,
        GameState.currentWord.wrong1,
        GameState.currentWord.wrong2
    ];
    
    // Antworten mischen
    const shuffledAnswers = shuffleArray([...answers]);
    
    // Buttons erstellen
    shuffledAnswers.forEach((answer, index) => {
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

// Antwort prüfen
function checkAnswer(selectedAnswer) {
    if (!GameState.gameActive) return;
    
    const isCorrect = selectedAnswer === GameState.currentWord.plural;
    
    // Alle Buttons deaktivieren
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

// Richtige Antwort
function handleCorrectAnswer() {
    GameState.score += 10;
    GameState.streak++;
    if (GameState.streak > GameState.bestStreak) {
        GameState.bestStreak = GameState.streak;
    }
    GameState.correctAnswers++;
    
    playSound('correct');
    
    // Regel lernen
    const rule = findGrammarRule(GameState.currentWord);
    if (rule) {
        GameState.learnedRules.add(rule);
    }
    
    elements.feedbackMessage.innerHTML = '<span style="color: #00b09b; font-weight: bold;">✓ Richtig!</span>';
    elements.feedbackDetails.textContent = `${GameState.currentWord.singular} → ${GameState.currentWord.plural}`;
    
    // Bonus bei 5er-Serie
    if (GameState.streak % 5 === 0) {
        GameState.score += 20;
        playSound('levelup').catch(() => playSound('correct'));
        
        logToGame(`🎯 ${GameState.streak}er Serie! +20 Bonuspunkte`);
    }
    
    logToGame(`✓ ${GameState.currentWord.singular} → ${GameState.currentWord.plural}`);
    
    // Nächstes Wort nach kurzer Pause
    setTimeout(getNextWord, 2000);
}

// Falsche Antwort
function handleWrongAnswer() {
    GameState.wrongAnswers++;
    GameState.streak = 0;
    
    playSound('error');
    
    elements.feedbackMessage.innerHTML = '<span style="color: #ff416c; font-weight: bold;">✗ Falsch!</span>';
    elements.feedbackDetails.textContent = `Richtig ist: ${GameState.currentWord.singular} → ${GameState.currentWord.plural}`;
    
    // Regel lernen
    const rule = findGrammarRule(GameState.currentWord);
    if (rule) {
        GameState.learnedRules.add(rule);
    }
    
    logToGame(`✗ ${GameState.currentWord.singular} → ${GameState.currentWord.plural}`);
    
    // Nächstes Wort nach kurzer Pause
    setTimeout(getNextWord, 2000);
}

// Tipp anzeigen
function showHint() {
    if (!GameState.gameActive) return;
    
    elements.hintBtn.disabled = true;
    GameState.score = Math.max(0, GameState.score - 2);
    
    const rule = findGrammarRule(GameState.currentWord);
    if (rule) {
        elements.feedbackMessage.innerHTML = '<span style="color: #f6d365; font-weight: bold;">💡 Regeltipp:</span>';
        elements.feedbackDetails.textContent = rule + ' (2 Punkte abgezogen)';
        GameState.learnedRules.add(rule);
    } else {
        elements.feedbackMessage.innerHTML = '<span style="color: #f6d365; font-weight: bold;">💡 Tipp:</span>';
        elements.feedbackDetails.textContent = `Die richtige Antwort hat ${GameState.currentWord.plural.length} Buchstaben (2 Punkte abgezogen)`;
    }
    
    updateDisplays();
    
    // Reaktiviere Button nach 3 Sekunden
    setTimeout(() => {
        elements.hintBtn.disabled = false;
    }, 3000);
}

// Wort überspringen
function skipWord() {
    if (!GameState.gameActive) return;
    
    GameState.skippedAnswers++;
    GameState.score = Math.max(0, GameState.score - 5);
    GameState.streak = 0;
    
    elements.feedbackMessage.innerHTML = '<span style="color: #868f96; font-weight: bold;">⏭️ Übersprungen</span>';
    elements.feedbackDetails.textContent = `${GameState.currentWord.singular} → ${GameState.currentWord.plural} (5 Punkte abgezogen)`;
    
    updateDisplays();
    
    logToGame(`⏭️ ${GameState.currentWord.singular} übersprungen`);
    
    // Nächstes Wort
    setTimeout(getNextWord, 1500);
}

// Displays aktualisieren
function updateDisplays() {
    elements.score.textContent = GameState.score;
    elements.streakCounter.textContent = GameState.streak;
    elements.correctCounter.textContent = `${GameState.correctAnswers}/${GameState.neededCorrect}`;
    
    const progressPercent = (GameState.correctAnswers / GameState.neededCorrect) * 100;
    elements.progressFill.style.width = `${progressPercent}%`;
    elements.progressText.textContent = `${GameState.correctAnswers}/${GameState.neededCorrect} Wörter richtig`;
}

// Spiel beenden
function endGame(isWin) {
    GameState.gameActive = false;
    elements.hintBtn.disabled = true;
    elements.skipBtn.disabled = true;
    
    document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
    
    if (isWin) {
        playSound('levelup').catch(() => playSound('win', true));
    }
    
    showEndScreen(isWin);
    logToGame(`Spiel ${isWin ? 'erfolgreich beendet' : 'abgebrochen'}!`);
}

// Endscreen anzeigen
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
    elements.finalAccuracy.textContent = `${accuracy}%`;
    
    // Gelernte Regeln anzeigen
    if (GameState.learnedRules.size > 0) {
        const rulesList = Array.from(GameState.learnedRules).map(rule => `• ${rule}`).join('<br>');
        elements.learnedRules.innerHTML = rulesList;
    } else {
        elements.learnedRules.innerHTML = 'Heute keine neuen Regeln gelernt.';
    }
    
    // Modal anpassen
    if (isWin) {
        elements.modalIcon.className = 'fas fa-award';
        elements.modalTitle.textContent = 'Herzlichen Glückwunsch!';
        elements.modalIcon.style.background = 'linear-gradient(135deg, #4a00e0, #8e2de2)';
        elements.modalIcon.style.webkitBackgroundClip = 'text';
        elements.modalIcon.style.webkitTextFillColor = 'transparent';
    } else {
        elements.modalIcon.className = 'fas fa-trophy';
        elements.modalTitle.textContent = 'Spiel beendet';
        elements.modalIcon.style.color = '#868f96';
    }
    
    elements.endModal.style.display = 'flex';
}

// Spiel neustarten
function restartGame() {
    elements.endModal.style.display = 'none';
    elements.startBtn.disabled = false;
    elements.feedbackMessage.textContent = 'Klicke auf "Spiel starten" um zu beginnen!';
    elements.feedbackDetails.textContent = 'Trainiere die Mehrzahlbildung mit Umlauten!';
    elements.wordSingular.textContent = 'Umlaut-Meister';
    elements.answerButtons.innerHTML = '';
    updateDisplays();
}

// Modal schließen
function closeModal() {
    elements.endModal.style.display = 'none';
}

// ==================== INITIALISIERUNG ====================

// Spiel initialisieren
function initializeGame() {
    console.log('Initialisiere Umlaut-Meister mit phonetischen Fehlern...');
    console.log(`Verfügbare Wörter: ${WORD_LIST.length}`);
    
    setupEventListeners();
    
    // Initiale Nachricht
    logToGame('Willkommen beim Umlaut-Meister!');
    logToGame('Achtung auf phonetische Fallen: ä→e/ai, ö→e/oi, ü→u/ui');
    logToGame('Wähle die korrekte Mehrzahl-Schreibweise!');
    
    console.log('Spiel erfolgreich initialisiert');
}

// Spiel starten wenn DOM geladen ist
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGame);
} else {
    initializeGame();
}
