// ============================================
// EXERCICE 1: Calcul de la moyenne
// BUG: Division incorrecte
// ============================================
function calculerMoyenne(nombres) {
    // Retourne 0 pour un tableau vide pour éviter division par zéro
    if (!Array.isArray(nombres) || nombres.length === 0) {
        return 0;
    }

    let somme = 0;
    // Corrige la condition: i < nombres.length (au lieu de <=)
    for (let i = 0; i < nombres.length; i++) {
        somme += nombres[i];
    }
    return somme / nombres.length;
}

function testExercice1() {
    const resultDiv = document.getElementById('result1');
    const input = document.getElementById('input1').value;
    const nombres = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

    if (nombres.length === 0) {
        resultDiv.className = 'result show error';
        resultDiv.innerHTML = `❌ Veuillez entrer des nombres valides séparés par des virgules!`;
        return;
    }

    const resultat = calculerMoyenne(nombres);
    const moyenneAttendue = nombres.reduce((a, b) => a + b, 0) / nombres.length;

    resultDiv.className = 'result show';

    if (Math.abs(resultat - moyenneAttendue) < 0.01) {
        resultDiv.className += ' success';
        resultDiv.innerHTML = `✅ Correct! La moyenne de [${nombres.join(', ')}] est ${resultat.toFixed(2)}`;
    } else {
        resultDiv.className += ' error';
        resultDiv.innerHTML = `❌ Incorrect! Résultat obtenu: ${resultat}<br>
                              Attendu: ${moyenneAttendue.toFixed(2)}<br>
                              <small>Indice: Vérifiez les limites de la boucle!</small>`;
    }
}


// ============================================
// EXERCICE 2: Validation d'email
// PROBLÈME: Code mal structuré et difficile à lire
// ============================================
function validerEmail(input) {
    // Vérifications de base
    if (typeof input !== 'string') return false;
    const email = input.trim();
    if (email.length === 0) return false;

    // '@' doit exister, ne pas être le premier caractère et n'apparaître qu'une seule fois
    const atIndex = email.indexOf('@');
    if (atIndex <= 0) return false;
    if (email.indexOf('@') !== email.lastIndexOf('@')) return false;

    // Séparer local et domain
    const [local, domain] = email.split('@');
    if (!local || !domain) return false;

    // Le domaine doit contenir au moins un point et ne pas commencer/terminer par un point
    if (domain.indexOf('.') === -1) return false;
    if (domain.startsWith('.') || domain.endsWith('.')) return false;

    // Tous les segments du domaine doivent être non vides (ex: "ex..com" invalide)
    const domainParts = domain.split('.');
    if (domainParts.some(part => part.length === 0)) return false;

    // Vérifier la longueur du TLD (au moins 2 caractères)
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2) return false;

    return true;
}

function testExercice2() {
    const resultDiv = document.getElementById('result2');
    const rawInput = document.getElementById('input2').value;
    const email = rawInput ? rawInput.trim() : '';

    if (!email) {
        resultDiv.className = 'result show error';
        resultDiv.innerHTML = `❌ Veuillez entrer un email à valider!`;
        return;
    }

    const resultat = validerEmail(email);

    // Validation claire étape par étape (même règles que la fonction validerEmail)
    const atIndex = email.indexOf('@');
    const hasAt = atIndex > 0;
    const singleAt = email.indexOf('@') === email.lastIndexOf('@');
    const domain = email.split('@')[1] || '';
    const domainNotEmpty = domain.length > 0;
    const dotAfterAt = email.indexOf('.') > atIndex;
    const domainParts = domain.split('.');
    const tld = domainParts[domainParts.length - 1] || '';
    const tldValid = tld.length >= 2;

    const estValideAttendu = hasAt && singleAt && domainNotEmpty && dotAfterAt && tldValid;

    resultDiv.className = 'result show';

    if (resultat === estValideAttendu) {
        // La fonction a été refactorisée : afficher succès
        resultDiv.className += ' success';
        resultDiv.innerHTML = `✅ Résultat correct pour "${email}": ${resultat ? 'valide' : 'invalide'}<br>
                              <small>Vérifications: hasAt=${hasAt}, singleAt=${singleAt}, domainNotEmpty=${domainNotEmpty}, dotAfterAt=${dotAfterAt}, tldValid=${tldValid}</small>`;
    } else {
        resultDiv.className += ' error';
        resultDiv.innerHTML = `❌ Résultat incorrect pour "${email}": ${resultat ? 'valide' : 'invalide'}<br>
                              Attendu: ${estValideAttendu ? 'valide' : 'invalide'}`;
    }
}


// ============================================
// EXERCICE 3: Recherche dans un tableau
// BUG: Logique de retour incorrecte
// ============================================
function rechercherElement(tableau, element) {
    // Validation d'entrée et implémentation simple et claire
    if (!Array.isArray(tableau)) return false;
    return tableau.includes(element);
}

function testExercice3() {
    const resultDiv = document.getElementById('result3');
    const fruits = ['pomme', 'banane', 'orange', 'fraise'];
    const elementRecherche = document.getElementById('input3').value.trim();

    if (!elementRecherche) {
        resultDiv.className = 'result show error';
        resultDiv.innerHTML = `❌ Veuillez entrer un élément à rechercher!`;
        return;
    }

    const resultat = rechercherElement(fruits, elementRecherche);
    const attendu = fruits.includes(elementRecherche);

    resultDiv.className = 'result show';

    if (resultat === attendu) {
        resultDiv.className += ' success';
        resultDiv.innerHTML = `✅ Correct! "${elementRecherche}" ${attendu ? 'est' : "n'est pas"} dans le tableau [${fruits.join(', ')}]<br>
                              Résultat: ${resultat}`;
    } else {
        resultDiv.className += ' error';
        resultDiv.innerHTML = `❌ Incorrect!<br>
                              Recherche de "${elementRecherche}" dans [${fruits.join(', ')}]<br>
                              Résultat obtenu: ${resultat} (attendu: ${attendu})`;
    }
}


// ============================================
// EXERCICE 4: Filtrer les nombres pairs
// PROBLÈME: Mauvaises pratiques (boucle manuelle au lieu de filter)
// ============================================
function filtrerPairs(nombres) {
    // Vérifie l'entrée
    if (!Array.isArray(nombres)) return [];

    // Filtre en ne conservant que les valeurs numériques finies et paires
    return nombres
        .filter(n => Number.isFinite(n))     // ignore non-nombres (NaN, undefined, etc.)
        .filter(n => n % 2 === 0);           // conserve les pairs
}

function testExercice4() {
    const resultDiv = document.getElementById('result4');
    const input = document.getElementById('input4').value;
    const nombres = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

    if (nombres.length === 0) {
        resultDiv.className = 'result show error';
        resultDiv.innerHTML = `❌ Veuillez entrer des nombres valides séparés par des virgules!`;
        return;
    }

    const resultat = filtrerPairs(nombres);
    const attendu = nombres.filter(n => n % 2 === 0);

    resultDiv.className = 'result show';

    const correct = JSON.stringify(resultat) === JSON.stringify(attendu);

    if (correct) {
        // Affichage adapté pour reconnaître le refactor
        resultDiv.className += ' success';
        resultDiv.innerHTML = `✅ Correct! Résultat: [${resultat.join(', ')}]<br>
                              <small>La fonction utilise des méthodes modernes (ex: filter).</small>`;
    } else {
        resultDiv.className += ' error';
        resultDiv.innerHTML = `❌ Incorrect! Résultat: [${resultat.join(', ')}]<br>
                              Attendu: [${attendu.join(', ')}]`;
    }
}


// ============================================
// EXERCICE 5: Tri de personnes par âge
// BUG: Plusieurs erreurs de logique
// ============================================
function trierParAge(personnes) {
    // Validation d'entrée
    if (!Array.isArray(personnes)) return [];

    // Copie pour ne pas modifier l'original
    const arr = personnes.slice();

    // Tri par bubble sort sûr (bornes correctes) pour l'exercice
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        // j < n - i - 1 empêche l'accès à arr[j + 1] hors limite
        for (let j = 0; j < n - i - 1; j++) {
            // Pour ordre croissant : échange si l'élément courant est plus grand que le suivant
            if (arr[j].age > arr[j + 1].age) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function testExercice5() {
    const resultDiv = document.getElementById('result5');
    const personnes = [
        { nom: 'Alice', age: 30 },
        { nom: 'Bob', age: 25 },
        { nom: 'Charlie', age: 35 },
        { nom: 'David', age: 20 }
    ];

    try {
        const resultat = trierParAge([...personnes]); // Copie pour ne pas modifier l'original
        const agesResultat = resultat.map(p => p.age);
        const agesAttendu = [20, 25, 30, 35];

        resultDiv.className = 'result show';

        const correct = JSON.stringify(agesResultat) === JSON.stringify(agesAttendu);

        if (correct) {
            resultDiv.className += ' success';
            resultDiv.innerHTML = `✅ Correct! Ordre des âges: [${agesResultat.join(', ')}]<br>
                                  Personnes triées: ${resultat.map(p => p.nom).join(', ')}`;
        } else {
            resultDiv.className += ' error';
            resultDiv.innerHTML = `❌ Incorrect! Ordre obtenu: [${agesResultat.join(', ')}]<br>
                                  Attendu: [${agesAttendu.join(', ')}]<br>
                                  <small>Indice: Plusieurs bugs à trouver!</small>`;
        }
    } catch (error) {
        resultDiv.className = 'result show error';
        resultDiv.innerHTML = `❌ Erreur: ${error.message}<br>
                              <small>Le code génère une exception!</small>`;
    }
}


// ============================================
// EXERCICE 6: Calculatrice de réduction
// PROBLÈME: Code dupliqué et répétitif
// ============================================
function calculerReduction(prix, categorie) {
    // Normalise et valide le prix
    const montant = Number(prix);
    if (!Number.isFinite(montant) || montant <= 0) {
        // Retourne 0 pour signaler un prix invalide (testExercice6 gère déjà l'affichage d'erreur)
        return 0;
    }

    // Map des taux de réduction (source unique pour éviter duplication/erreur)
    const tauxParCategorie = {
        etudiant: 0.20,
        senior: 0.15,
        enfant: 0.30,
        militaire: 0.25,
        normal: 0
    };

    // Utilise la catégorie en minuscule et choisit 0 si inconnue
    const key = String(categorie || '').toLowerCase();
    const taux = tauxParCategorie.hasOwnProperty(key) ? tauxParCategorie[key] : 0;

    const prixFinal = montant - (montant * taux);

    // Arrondir à 2 décimales pour éviter les différences de flottants
    return Math.round(prixFinal * 100) / 100;
}

function testExercice6() {
    const resultDiv = document.getElementById('result6');
    const prixInput = document.getElementById('input6prix').value;
    const categorieInput = document.getElementById('input6categorie').value;

    const prix = parseFloat(prixInput);
    if (isNaN(prix) || prix <= 0) {
        resultDiv.className = 'result show error';
        resultDiv.innerHTML = `❌ Veuillez entrer un prix valide!`;
        return;
    }

    const resultat = calculerReduction(prix, categorieInput);

    // Calcul attendu (normalise la catégorie comme dans calculerReduction)
    const reductions = {
        'etudiant': 0.20,
        'senior': 0.15,
        'enfant': 0.30,
        'militaire': 0.25,
        'normal': 0
    };

    const key = String(categorieInput || '').toLowerCase();
    const tauxReduction = reductions.hasOwnProperty(key) ? reductions[key] : 0;
    const attenduRaw = prix - (prix * tauxReduction);
    const attendu = Math.round(attenduRaw * 100) / 100; // arrondi à 2 décimales comme calculerReduction

    resultDiv.className = 'result show';

    const correct = Math.abs(resultat - attendu) < 0.01;

    if (correct) {
        resultDiv.className += ' success';
        resultDiv.innerHTML = `✅ Le calcul est correct!<br>
                              Prix: ${prix}€, Catégorie: ${categorieInput}<br>
                              Résultat: ${resultat}€ (réduction de ${(tauxReduction * 100).toFixed(0)}%)`;
    } else {
        resultDiv.className += ' error';
        resultDiv.innerHTML = `❌ Le calcul est incorrect!<br>
                              Prix: ${prix}€, Catégorie: ${categorieInput}<br>
                              Résultat obtenu: ${resultat}€<br>
                              Attendu: ${attendu}€`;
    }
}
