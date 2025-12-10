// Wortliste mit Singular, korrekter Mehrzahl und phonetisch ähnlichen Falschschreibungen
const WORD_LIST = [
    // Umlaut-Regeln a->ä (häufige Fehler: ä→e oder ä→ai phonetisch)
    { singular: "Baum", plural: "Bäume", wrong1: "Beume", wrong2: "Baime" },
    { singular: "Haus", plural: "Häuser", wrong1: "Heuser", wrong2: "Haiser" },
    { singular: "Maus", plural: "Mäuse", wrong1: "Meuse", wrong2: "Maise" },
    { singular: "Garten", plural: "Gärten", wrong1: "Gerten", wrong2: "Gairten" },
    { singular: "Gast", plural: "Gäste", wrong1: "Geste", wrong2: "Gaiste" },
    { singular: "Ball", plural: "Bälle", wrong1: "Belle", wrong2: "Baille" },
    { singular: "Bach", plural: "Bäche", wrong1: "Bechte", wrong2: "Baiche" },
    { singular: "Dach", plural: "Dächer", wrong1: "Decher", wrong2: "Daicher" },
    { singular: "Schrank", plural: "Schränke", wrong1: "Schrenke", wrong2: "Schrainke" },
    { singular: "Kran", plural: "Kräne", wrong1: "Krene", wrong2: "Kraine" },
    
    // Umlaut-Regeln o->ö (häufige Fehler: ö→e oder ö→oi phonetisch)
    { singular: "Sohn", plural: "Söhne", wrong1: "Sehne", wrong2: "Soihne" },
    { singular: "Gott", plural: "Götter", wrong1: "Getter", wrong2: "Goitter" },
    { singular: "Hof", plural: "Höfe", wrong1: "Hefe", wrong2: "Hoife" },
    { singular: "Vogel", plural: "Vögel", wrong1: "Vegel", wrong2: "Voigel" },
    { singular: "Wort", plural: "Wörter", wrong1: "Wetter", wrong2: "Woitter" },
    { singular: "Brot", plural: "Brote", wrong1: "Brete", wrong2: "Broite" },
    { singular: "Stock", plural: "Stöcke", wrong1: "Stecke", wrong2: "Stoicke" },
    { singular: "Knopf", plural: "Knöpfe", wrong1: "Kneppe", wrong2: "Knoippe" },
    { singular: "Topf", plural: "Töpfe", wrong1: "Teppe", wrong2: "Toippe" },
    { singular: "Boden", plural: "Böden", wrong1: "Bedn", wrong2: "Boiden" },
    
    // Umlaut-Regeln u->ü (häufige Fehler: ü→u oder ü→ui phonetisch)
    { singular: "Mutter", plural: "Mütter", wrong1: "Mutter", wrong2: "Muiter" },
    { singular: "Vater", plural: "Väter", wrong1: "Vater", wrong2: "Vaiter" },
    { singular: "Tochter", plural: "Töchter", wrong1: "Tochter", wrong2: "Toichter" },
    { singular: "Bruder", plural: "Brüder", wrong1: "Bruder", wrong2: "Bruider" },
    { singular: "Hut", plural: "Hüte", wrong1: "Hute", wrong2: "Huite" },
    { singular: "Kuh", plural: "Kühe", wrong1: "Kuhe", wrong2: "Kuihe" },
    { singular: "Fluss", plural: "Flüsse", wrong1: "Flusse", wrong2: "Fluisse" },
    { singular: "Schuh", plural: "Schuhe", wrong1: "Schue", wrong2: "Schuihe" },
    { singular: "Buch", plural: "Bücher", wrong1: "Bucher", wrong2: "Buicher" },
    { singular: "Fuß", plural: "Füße", wrong1: "Fusse", wrong2: "Fuise" },
    
    // Au/äu-Regeln (häufige Fehler: äu→eu oder äu→oi phonetisch)
    { singular: "Maus", plural: "Mäuse", wrong1: "Meuse", wrong2: "Moise" },
    { singular: "Haus", plural: "Häuser", wrong1: "Heuser", wrong2: "Hoiser" },
    { singular: "Laus", plural: "Läuse", wrong1: "Leuse", wrong2: "Loisse" },
    { singular: "Braut", plural: "Bräute", wrong1: "Breute", wrong2: "Broite" },
    { singular: "Traum", plural: "Träume", wrong1: "Treume", wrong2: "Troime" },
    { singular: "Baum", plural: "Bäume", wrong1: "Beume", wrong2: "Boime" },
    { singular: "Raum", plural: "Räume", wrong1: "Reume", wrong2: "Roime" },
    { singular: "Sau", plural: "Säue", wrong1: "Seue", wrong2: "Soie" },
    { singular: "Frau", plural: "Frauen", wrong1: "Freuen", wrong2: "Froin" },
    { singular: "Mauer", plural: "Mauern", wrong1: "Meuern", wrong2: "Moirn" },
    
    // Eu-Wörter (kein Umlaut, häufiger Fehler: eu→äu fälschlich)
    { singular: "Scheune", plural: "Scheunen", wrong1: "Schäunen", wrong2: "Scheune" },
    { singular: "Freude", plural: "Freuden", wrong1: "Fröden", wrong2: "Freude" },
    { singular: "Feuer", plural: "Feuer", wrong1: "Fäuer", wrong2: "Feuer" },
    { singular: "Leute", plural: "Leute", wrong1: "Läute", wrong2: "Leute" },
    { singular: "Heu", plural: "Heu", wrong1: "Häu", wrong2: "Heu" },
    { singular: "Teufel", plural: "Teufel", wrong1: "Täufel", wrong2: "Teufel" },
    { singular: "Eule", plural: "Eulen", wrong1: "Äulen", wrong2: "Eule" },
    { singular: "Freund", plural: "Freunde", wrong1: "Frönde", wrong2: "Freunde" },
    { singular: "Heute", plural: "Heute", wrong1: "Häute", wrong2: "Heute" },
    { singular: "Neun", plural: "Neunen", wrong1: "Näunen", wrong2: "Neunen" },
    
    // Oi-Wörter (selten, aber existent - häufiger Fehler: oi→öi)
    { singular: "Loipe", plural: "Loipen", wrong1: "Löipen", wrong2: "Loipe" },
    { singular: "Boiler", plural: "Boiler", wrong1: "Böiler", wrong2: "Boilern" },
    { singular: "Toilette", plural: "Toiletten", wrong1: "Töiletten", wrong2: "Toilette" },
    
    // Lateinische Fremdwörter auf -um (häufige Fehler: falsche Endung)
    { singular: "Museum", plural: "Museen", wrong1: "Museum", wrong2: "Museums" },
    { singular: "Studium", plural: "Studien", wrong1: "Studium", wrong2: "Studiums" },
    { singular: "Zentrum", plural: "Zentren", wrong1: "Zentrum", wrong2: "Zentrums" },
    { singular: "Datum", plural: "Daten", wrong1: "Datum", wrong2: "Datums" },
    { singular: "Thema", plural: "Themen", wrong1: "Themas", wrong2: "Thema" },
    { singular: "Klima", plural: "Klimate", wrong1: "Klimas", wrong2: "Klimata" },
    { singular: "Auto", plural: "Autos", wrong1: "Autos", wrong2: "Auto" },
    { singular: "Radio", plural: "Radios", wrong1: "Radios", wrong2: "Radio" },
    
    // Endung -er (häufige Fehler: falscher Umlaut oder falsche Endung)
    { singular: "Kind", plural: "Kinder", wrong1: "Kinder", wrong2: "Kind" },
    { singular: "Ei", plural: "Eier", wrong1: "Eier", wrong2: "Eie" },
    { singular: "Buch", plural: "Bücher", wrong1: "Bucher", wrong2: "Buchen" },
    { singular: "Dorf", plural: "Dörfer", wrong1: "Dorfer", wrong2: "Dorfe" },
    { singular: "Licht", plural: "Lichter", wrong1: "Lichter", wrong2: "Lichte" },
    { singular: "Hemd", plural: "Hemden", wrong1: "Hemd", wrong2: "Hemde" },
    { singular: "Feld", plural: "Felder", wrong1: "Felder", wrong2: "Felde" },
    { singular: "Bild", plural: "Bilder", wrong1: "Bilder", wrong2: "Bild" },
    { singular: "Glas", plural: "Gläser", wrong1: "Glaser", wrong2: "Glas" },
    { singular: "Rad", plural: "Räder", wrong1: "Rader", wrong2: "Rade" },
    
    // Keine Umlaute (häufige Fehler: fälschlicher Umlaut)
    { singular: "Tasche", plural: "Taschen", wrong1: "Täschen", wrong2: "Tasche" },
    { singular: "Lampe", plural: "Lampen", wrong1: "Lämpen", wrong2: "Lampe" },
    { singular: "Flasche", plural: "Flaschen", wrong1: "Fläschen", wrong2: "Flasche" },
    { singular: "Kanne", plural: "Kannen", wrong1: "Kännen", wrong2: "Kanne" },
    { singular: "Karte", plural: "Karten", wrong1: "Kärten", wrong2: "Karte" },
    { singular: "Hand", plural: "Hände", wrong1: "Hende", wrong2: "Hand" },
    { singular: "Land", plural: "Länder", wrong1: "Lender", wrong2: "Land" },
    { singular: "Wand", plural: "Wände", wrong1: "Wende", wrong2: "Wand" },
    { singular: "Bank", plural: "Bänke", wrong1: "Benke", wrong2: "Bank" },
    { singular: "Pflanze", plural: "Pflanzen", wrong1: "Pflänzen", wrong2: "Pflanze" },
    
    // Endung -en (häufige Fehler: falscher Umlaut oder Endung -e)
    { singular: "Frau", plural: "Frauen", wrong1: "Fröen", wrong2: "Fraue" },
    { singular: "Blume", plural: "Blumen", wrong1: "Blümen", wrong2: "Blume" },
    { singular: "Stunde", plural: "Stunden", wrong1: "Stünden", wrong2: "Stunde" },
    { singular: "Woche", plural: "Wochen", wrong1: "Wöchen", wrong2: "Woche" },
    { singular: "Nase", plural: "Nasen", wrong1: "Näsen", wrong2: "Nase" },
    { singular: "Rose", plural: "Rosen", wrong1: "Rösen", wrong2: "Rose" },
    { singular: "Schule", plural: "Schulen", wrong1: "Schülen", wrong2: "Schule" },
    { singular: "Tasse", plural: "Tassen", wrong1: "Tässen", wrong2: "Tasse" },
    { singular: "Wolke", plural: "Wolken", wrong1: "Wölken", wrong2: "Wolke" },
    { singular: "Kerze", plural: "Kerzen", wrong1: "Kärzen", wrong2: "Kerze" },
    
    // Endung -e (häufige Fehler: falscher Umlaut oder Endung -en)
    { singular: "Tag", plural: "Tage", wrong1: "Täge", wrong2: "Tagen" },
    { singular: "Hund", plural: "Hunde", wrong1: "Hünde", wrong2: "Hunden" },
    { singular: "Berg", plural: "Berge", wrong1: "Bärge", wrong2: "Bergen" },
    { singular: "Stern", plural: "Sterne", wrong1: "Stärne", wrong2: "Sternen" },
    { singular: "Arm", plural: "Arme", wrong1: "Ärme", wrong2: "Armen" },
    { singular: "Bein", plural: "Beine", wrong1: "Bäine", wrong2: "Beinen" },
    { singular: "Kopf", plural: "Köpfe", wrong1: "Keppe", wrong2: "Kopfen" },
    { singular: "Ring", plural: "Ringe", wrong1: "Ränge", wrong2: "Ringen" },
    { singular: "Satz", plural: "Sätze", wrong1: "Setze", wrong2: "Satzen" },
    { singular: "Sack", plural: "Säcke", wrong1: "Secke", wrong2: "Sacken" },
    
    // Mit s/ß (häufige Fehler: falsche ss/ß oder Umlaut)
    { singular: "Bus", plural: "Busse", wrong1: "Büsse", wrong2: "Bus" },
    { singular: "Glas", plural: "Gläser", wrong1: "Glaser", wrong2: "Glas" },
    { singular: "Kreis", plural: "Kreise", wrong1: "Kreise", wrong2: "Kreisen" },
    { singular: "Fuß", plural: "Füße", wrong1: "Fusse", wrong2: "Fussen" },
    { singular: "Strauß", plural: "Sträuße", wrong1: "Strausse", wrong2: "Straussen" },
    { singular: "Gruß", plural: "Grüße", wrong1: "Grüsse", wrong2: "Gruss" },
    { singular: "Schloss", plural: "Schlösser", wrong1: "Schlosser", wrong2: "Schloss" },
    { singular: "Kuss", plural: "Küsse", wrong1: "Kusse", wrong2: "Kuss" },
    { singular: "Fluss", plural: "Flüsse", wrong1: "Flusse", wrong2: "Fluss" },
    { singular: "Guss", plural: "Güsse", wrong1: "Gusse", wrong2: "Guss" },
    
    // Wasser-Sonderfall (häufige Fehler: Wässer oder Wassers)
    { singular: "Wasser", plural: "Wasser", wrong1: "Wässer", wrong2: "Wassers" },
    { singular: "Fenster", plural: "Fenster", wrong1: "Fenster", wrong2: "Fenstern" },
    { singular: "Bett", plural: "Betten", wrong1: "Bätten", wrong2: "Bett" },
    { singular: "Brett", plural: "Bretter", wrong1: "Bretter", wrong2: "Brett" },
    { singular: "Blatt", plural: "Blätter", wrong1: "Bletter", wrong2: "Blatt" },
    { singular: "Netz", plural: "Netze", wrong1: "Nätze", wrong2: "Netzen" },
    { singular: "Herz", plural: "Herzen", wrong1: "Härzen", wrong2: "Herz" },
    { singular: "Holz", plural: "Hölzer", wrong1: "Holzer", wrong2: "Holz" },
    { singular: "Geld", plural: "Gelder", wrong1: "Gelder", wrong2: "Geld" },
    { singular: "Bild", plural: "Bilder", wrong1: "Bilder", wrong2: "Bild" },
    
    // Weitere Grundschulwörter mit typischen Fehlern
    { singular: "Auto", plural: "Autos", wrong1: "Autos", wrong2: "Auto" },
    { singular: "Bild", plural: "Bilder", wrong1: "Bilder", wrong2: "Bild" },
    { singular: "Brief", plural: "Briefe", wrong1: "Briefe", wrong2: "Brief" },
    { singular: "Fisch", plural: "Fische", wrong1: "Fische", wrong2: "Fisch" },
    { singular: "Freund", plural: "Freunde", wrong1: "Freunde", wrong2: "Freund" },
    { singular: "Gabel", plural: "Gabeln", wrong1: "Gäbeln", wrong2: "Gabel" },
    { singular: "Geburtstag", plural: "Geburtstage", wrong1: "Geburtstage", wrong2: "Geburtstag" },
    { singular: "Geschenk", plural: "Geschenke", wrong1: "Geschenke", wrong2: "Geschenk" },
    { singular: "Gitarre", plural: "Gitarren", wrong1: "Gitärren", wrong2: "Gitarre" },
    { singular: "Hose", plural: "Hosen", wrong1: "Hösen", wrong2: "Hose" },
    { singular: "Katze", plural: "Katzen", wrong1: "Kätzen", wrong2: "Katze" },
    { singular: "Keller", plural: "Keller", wrong1: "Keller", wrong2: "Kellern" },
    { singular: "Kino", plural: "Kinos", wrong1: "Kinos", wrong2: "Kino" },
    { singular: "Kirsche", plural: "Kirschen", wrong1: "Kirchen", wrong2: "Kirsche" },
    { singular: "Klasse", plural: "Klassen", wrong1: "Klässen", wrong2: "Klasse" },
    { singular: "Koffer", plural: "Koffer", wrong1: "Koffer", wrong2: "Koffern" },
    { singular: "Kuchen", plural: "Kuchen", wrong1: "Küchen", wrong2: "Kuchen" },
    { singular: "Lied", plural: "Lieder", wrong1: "Lieder", wrong2: "Lied" },
    { singular: "Löffel", plural: "Löffel", wrong1: "Löffel", wrong2: "Löffeln" },
    { singular: "Messer", plural: "Messer", wrong1: "Messer", wrong2: "Messern" },
    { singular: "Name", plural: "Namen", wrong1: "Namen", wrong2: "Name" },
    { singular: "Ohr", plural: "Ohren", wrong1: "Öhren", wrong2: "Ohr" },
    { singular: "Oma", plural: "Omas", wrong1: "Omas", wrong2: "Oma" },
    { singular: "Opa", plural: "Opas", wrong1: "Opas", wrong2: "Opa" },
    { singular: "Park", plural: "Parks", wrong1: "Pärke", wrong2: "Park" },
    { singular: "Regen", plural: "Regen", wrong1: "Regen", wrong2: "Regen" },
    { singular: "Rucksack", plural: "Rucksäcke", wrong1: "Rucksacke", wrong2: "Rucksack" },
    { singular: "Schaf", plural: "Schafe", wrong1: "Schäfe", wrong2: "Schaf" },
    { singular: "Schiff", plural: "Schiffe", wrong1: "Schiffe", wrong2: "Schiff" },
    { singular: "Schlüssel", plural: "Schlüssel", wrong1: "Schlüssel", wrong2: "Schlüsseln" },
    { singular: "Schule", plural: "Schulen", wrong1: "Schülen", wrong2: "Schule" },
    { singular: "Schwein", plural: "Schweine", wrong1: "Schweine", wrong2: "Schwein" },
    { singular: "See", plural: "Seen", wrong1: "Seen", wrong2: "See" },
    { singular: "Sessel", plural: "Sessel", wrong1: "Sessel", wrong2: "Sesseln" },
    { singular: "Sonne", plural: "Sonnen", wrong1: "Sönnen", wrong2: "Sonne" },
    { singular: "Spiel", plural: "Spiele", wrong1: "Spiele", wrong2: "Spiel" },
    { singular: "Stadt", plural: "Städte", wrong1: "Städte", wrong2: "Stadt" },
    { singular: "Stift", plural: "Stifte", wrong1: "Stifte", wrong2: "Stift" },
    { singular: "Straße", plural: "Straßen", wrong1: "Sträßen", wrong2: "Straße" },
    { singular: "Stuhl", plural: "Stühle", wrong1: "Stühle", wrong2: "Stuhl" },
    { singular: "Tante", plural: "Tanten", wrong1: "Tänten", wrong2: "Tante" },
    { singular: "Teller", plural: "Teller", wrong1: "Teller", wrong2: "Tellern" },
    { singular: "Theater", plural: "Theater", wrong1: "Theater", wrong2: "Theatern" },
    { singular: "Tier", plural: "Tiere", wrong1: "Tiere", wrong2: "Tier" },
    { singular: "Tisch", plural: "Tische", wrong1: "Tische", wrong2: "Tisch" },
    { singular: "Tür", plural: "Türen", wrong1: "Türen", wrong2: "Tür" },
    { singular: "Uhr", plural: "Uhren", wrong1: "Uhren", wrong2: "Uhr" },
    { singular: "Wald", plural: "Wälder", wrong1: "Wälder", wrong2: "Wald" },
    { singular: "Weg", plural: "Wege", wrong1: "Wege", wrong2: "Weg" },
    { singular: "Wiese", plural: "Wiesen", wrong1: "Wiesen", wrong2: "Wiese" },
    { singular: "Wind", plural: "Winde", wrong1: "Winde", wrong2: "Wind" },
    { singular: "Wort", plural: "Wörter", wrong1: "Wörter", wrong2: "Worte" },
    { singular: "Zahn", plural: "Zähne", wrong1: "Zähne", wrong2: "Zahn" },
    { singular: "Zeitung", plural: "Zeitungen", wrong1: "Zeitungen", wrong2: "Zeitung" },
    { singular: "Zelt", plural: "Zelte", wrong1: "Zelte", wrong2: "Zelt" },
    { singular: "Zimmer", plural: "Zimmer", wrong1: "Zimmer", wrong2: "Zimmern" },
    { singular: "Zoo", plural: "Zoos", wrong1: "Zoos", wrong2: "Zoo" },
    { singular: "Zucker", plural: "Zucker", wrong1: "Zucker", wrong2: "Zuckern" },
    
    // Zusätzliche Beispiele für häufig verwechselte Wörter
    { singular: "Apfel", plural: "Äpfel", wrong1: "Epfel", wrong2: "Aipfel" },
    { singular: "Nagel", plural: "Nägel", wrong1: "Negel", wrong2: "Naigel" },
    { singular: "Nadel", plural: "Nadeln", wrong1: "Nädeln", wrong2: "Nadel" },
    { singular: "Sattel", plural: "Sättel", wrong1: "Settel", wrong2: "Saitel" },
    { singular: "Sack", plural: "Säcke", wrong1: "Secke", wrong2: "Saicke" },
    { singular: "Backe", plural: "Backen", wrong1: "Bäcken", wrong2: "Backe" },
    { singular: "Jacke", plural: "Jacken", wrong1: "Jäcken", wrong2: "Jacke" },
    { singular: "Mappe", plural: "Mappen", wrong1: "Mäppen", wrong2: "Mappe" },
    { singular: "Kappe", plural: "Kappen", wrong1: "Käppen", wrong2: "Kappe" },
    { singular: "Suppe", plural: "Suppen", wrong1: "Süppen", wrong2: "Suppe" }
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

// Spielzustand (bleibt gleich)
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

// DOM-Elemente (bleibt gleich)
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

// Funktion findGrammarRule anpassen für phonetische Fehler
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

// Rest des Codes bleibt identisch zum vorherigen...
// (Event Listener, Audio, Spiel-Logik usw. - nur die Wortliste und Regeln wurden angepasst)

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

// Der Rest des Codes (Event Listener, Spiel-Logik usw.) bleibt genau gleich wie im vorherigen Skript!
// Nur die Wortliste und die findGrammarRule-Funktion wurden angepasst.

// Spiel starten wenn DOM geladen ist
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGame);
} else {
    initializeGame();
}
