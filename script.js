document.getElementById("compatibilityForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Eigene Antworten (Beispielwerte, diese solltest du anpassen)
  let user1Answers = [8, 7, 9, 6, 8, 7, 9, 8, 10, 7]; // Deine eigenen Antworten

  // Antworten der anderen Person
  let user2Answers = [];
  for (let i = 1; i <= 10; i++) {
    let answer = parseInt(document.getElementById(`q${i}`).value);
    if (isNaN(answer) || answer < 1 || answer > 10) {
      alert(`Bitte gib eine gültige Zahl für Frage ${i} ein.`);
      return;
    }
    user2Answers.push(answer);
  }

  // Berechnung der Kompatibilität
  let totalDifference = 0;
  for (let i = 0; i < user1Answers.length; i++) {
    totalDifference += Math.abs(user1Answers[i] - user2Answers[i]);
  }

  // Maximale Differenz (10 Fragen, jede Differenz maximal 9)
  let maxDifference = 10 * 9; // 90
  // Berechnung des Kompatibilitäts-Scores (0 bis 100)
  let compatibilityScore = ((maxDifference - totalDifference) / maxDifference) * 100;
  compatibilityScore = Math.round(compatibilityScore);

  // Ergebnis anzeigen
  let resultText = "";
  if (compatibilityScore > 80) {
    resultText = `Wow! Mit einem Kompatibilitäts-Score von <strong>${compatibilityScore}%</strong> seid ihr ein unschlagbares Duo! 💖 Schreib Paco doch gleich auf <a href="https://instagram.com/paco_37" target="_blank">@paco_37</a> eine Nachricht! 📲`;
  } else if (compatibilityScore > 60) {
    resultText = `Mit einem Kompatibilitäts-Score von <strong>${compatibilityScore}%</strong> habt ihr eine solide Grundlage. Vielleicht gibt es ja noch ein paar Dinge zu entdecken! 😊`;
  } else if (compatibilityScore > 40) {
    resultText = `Mit einem Kompatibilitäts-Score von <strong>${compatibilityScore}%</strong> könnt ihr euch durchaus gut ergänzen, aber es könnte auch einige Herausforderungen geben. 🌟`;
  } else {
    resultText = `Mit einem Kompatibilitäts-Score von <strong>${compatibilityScore}%</strong> scheint es, als ob ihr unterschiedliche Wege geht. Keine Sorge, Paco findet schon den perfekten Match! 😉`;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h3>Kompatibilität: <span class="text-danger">${compatibilityScore}%</span></h3><p>${resultText}</p>`;
  resultDiv.classList.add("show");
});
