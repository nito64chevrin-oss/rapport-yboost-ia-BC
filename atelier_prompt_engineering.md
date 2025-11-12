# Atelier Pratique - Prompt Engineering


## Exercice 1 : Génération de fonctions simples

###  Objectif
Apprendre à demander la création de fonctions en spécifiant clairement les besoins.

###  Consignes
Créez des prompts pour générer les fonctions suivantes. Testez vos prompts avec une IA et observez les résultats.

#### a) Fonction de calcul de moyenne

**Suggestions pour votre prompt :**
- Précisez le langage de programmation souhaité
- Indiquez le type de données en entrée (liste, tableau...)
- Mentionnez si vous voulez de la gestion d'erreurs
- Demandez des commentaires dans le code si nécessaire

> **Votre prompt :**
> ```
> Écris un code en language python d'un programme qui calcule la moyenne 
> d'une liste qui ne prend pas en compte les nombres négatifs et écrit
> en commentaire comment cela fonctionne et notamment comment il vérifie
> si le nombre est négatif.
> ```

> **Réponse obtenue :**

![alt text](<Capture d'écran 2025-11-12 120118.png>)


---

#### b) Fonction de validation d'email

**Suggestions pour votre prompt :**
- Spécifiez le niveau de validation souhaité (basique ou avancé)
- Indiquez si vous voulez utiliser des regex
- Précisez le format de retour (booléen, message d'erreur...)

> **Votre prompt :**
> ```
> Écris un script HTML qui vérifie une adresse mail déjà enregistrée dans une base de données,
> qui renvoie un message d'erreur indiquant l'échec avec l'adresse mail, surtout il faut que 
> L'adresse mail entrée doit être gardée dans le prompt pour qu'il puisse réessayer sans tout réécrire.
> Utilise également des regex et écris leurs fonctions.
> ```

> **Réponse obtenue :**

![alt text](<Capture d'écran 2025-11-12 121210.png>)


---

#### c) Fonction de tri personnalisé

**Suggestions pour votre prompt :**
- Précisez le critère de tri (alphabétique, numérique, par propriété...)
- Indiquez si le tri doit être ascendant ou descendant
- Mentionnez si vous voulez un tri en place ou une nouvelle liste
- Précisez si vous souhaitez gérer des cas particuliers (valeurs manquantes, types mixtes...)

> **Votre prompt :**
> ```
> Ecris un code en python qui à pour but de trier un tableaux de caractère
> créant nouveaux tableaux qui chacun seront afficher mais qui à la fin ne change pas le tableau de base
> avec trier par ordre croissant, décroissant, par nombre de lettre croissant et décroissant. Bien sûr il faut gérer les erreures.
> ```

> **Réponse obtenue :**

![alt text](<Capture d'écran 2025-11-12 122608.png>)


---

## Exercice 2 : Demander des explications de code

###  Objectif
Apprendre à formuler des demandes d'explication claires pour comprendre du code existant.

###  Consignes
Pour chaque extrait de code ci-dessous, créez un prompt pour obtenir une explication. Variez votre approche (explication générale, ligne par ligne, focus sur un concept...).

#### a) Code Python mystérieux

```python
def enigme(lst):
    return [x for x in lst if x % 2 == 0]
```

**Suggestions pour votre prompt :**
- Demandez une explication du fonctionnement global
- Demandez ce que fait la list comprehension
- Demandez des exemples d'utilisation

> **Votre prompt :**
> ```
> *code donnée*
> Peux-tu m'expliquer ce que signifie l'intérieur du tableau avec des explications également le code en général ?
> Et exemple d'utilisation afin de bien comprendre.
> ```

> **Réponse obtenue :**

![alt text](<Capture d'écran 2025-11-12 123201.png>)

---

#### b) Code JavaScript avec closure

```javascript
function creerCompteur() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
```

**Suggestions pour votre prompt :**
- Demandez une explication du concept de closure
- Demandez pourquoi la variable `count` persiste
- Demandez comment utiliser cette fonction

> **Votre prompt :**
> ```
> J'ai ce code en JavaScript, explique-moi quel résultat je dois obtenir,
> Surtout cette variable count avec des exemples et comment je suis censé l'utiliser avec un contexte.
> ```

> **Réponse obtenue :**

![alt text](<Capture d'écran 2025-11-12 135605.png>)

---

## Exercice 3 : Conversion entre langages

###  Objectif
Maîtriser la conversion de code d'un langage à un autre en formulant des demandes précises.

###  Consignes
Convertissez les codes suivants en utilisant des prompts bien construits.

#### a) Python vers JavaScript

**Code Python à convertir :**
```python
def filtrer_pairs(nombres):
    resultat = []
    for num in nombres:
        if num % 2 == 0:
            resultat.append(num)
    return resultat
```

**Suggestions pour votre prompt :**
- Précisez les deux langages clairement
- Indiquez si vous voulez une version moderne 
- Demandez si des commentaires explicatifs sont nécessaires

> **Votre prompt :**
> ```
> J'ai ce code en langage Python, j'aimerais le convertir en JavaScript
> tout en gardant le code d'origine mais avec des commentaires sur pourquoi cette ligne 
> Est écrite différemment de l'autre.
> ```

> **Réponse obtenue :**

![alt text](<Capture d'écran 2025-11-12 140102.png>)

---

#### b) Java vers Python

**Code Java à convertir :**
```java
public class Calculatrice {
    public int additionner(int a, int b) {
        return a + b;
    }
    
    public int multiplier(int a, int b) {
        return a * b;
    }
}
```

**Suggestions pour votre prompt :**
- Précisez si vous voulez une classe Python ou des fonctions simples
- Indiquez si vous souhaitez conserver l'approche orientée objet
- Demandez l'ajout de type hints si souhaité

> **Votre prompt :**
> ```
> J'ai ce code en langage Java, j'aimerais le convertir en Python
> tout en gardant le code d'origine mais avec des commentaires sur pourquoi cette ligne 
> Est écrite différemment de l'autre.
> ```

> **Réponse obtenue :**

![alt text](<Capture d'écran 2025-11-12 140558.png>)

---

## Exercice 4 : Génération de documentation

###  Objectif
Apprendre à demander une documentation claire et complète pour du code.

###  Consignes
Pour chaque fonction, créez un prompt pour générer une documentation appropriée.

#### a) Documentation d'une fonction simple

**Code à documenter :**
```python
def calculer_prix_ttc(prix_ht, tva=20):
    return prix_ht * (1 + tva / 100)
```

**Suggestions pour votre prompt :**
- Spécifiez le format de documentation (docstring, JSDoc, etc.)
- Demandez des exemples d'utilisation
- Indiquez si vous voulez documenter les paramètres et la valeur de retour

> **Votre prompt :**
> ```
> Fais un document markdown de ce code Python pour m'expliquer comment il fonctionne
> Avec des explications claires et avec des exemples.
> Aussi un duplicata de ce code mais en plus clair et simple à comprendre
> ```

> **Réponse obtenue :**

![alt text](<Capture d'écran 2025-11-12 141121.png>)

---

#### b) Documentation d'une API

**Code à documenter :**
```javascript
class GestionnaireUtilisateurs {
    constructor() {
        this.utilisateurs = [];
    }
    
    ajouterUtilisateur(nom, email) {
        const utilisateur = { id: Date.now(), nom, email };
        this.utilisateurs.push(utilisateur);
        return utilisateur;
    }
    
    supprimerUtilisateur(id) {
        this.utilisateurs = this.utilisateurs.filter(u => u.id !== id);
    }
}
```

**Suggestions pour votre prompt :**
- Demandez une documentation complète de la classe
- Spécifiez le format (README, JSDoc, commentaires...)
- Demandez des exemples d'utilisation pratiques

> **Votre prompt :**
> ```
> Fais un document markdown de ce code JavaScript pour m'expliquer comment il fonctionne
> Avec des explications claires et avec des exemples surtout comment fonctionne une classe.
> Aussi un duplicata de ce code mais en plus clair et simple à comprendre
> ```

> **Réponse obtenue :**

![alt text](<Capture d'écran 2025-11-12 141329.png>)

---

## 🎓 Exercice Bonus : Amélioration de prompts

###  Consignes
Voici des prompts mal formulés. Réécrivez-les pour obtenir de meilleurs résultats.

#### Prompt vague n°1
❌ **Mauvais prompt :**"Fais-moi une fonction"

> **✅ Votre prompt amélioré :**
> ```
> Fais-moi une fonction python n'importe qui fonctionne 
> avec explication de son fonctionnement
> afin de pouvoir expliquer comment fonctionnent les classes
> À une classe de Bachelor 1 en informatique.
> ```

---

#### Prompt vague n°2
❌ **Mauvais prompt :**"Explique ce code"
```python
sorted([3, 1, 4, 1, 5])
```

> **✅ Votre prompt amélioré :**
> ```
> Explique ce que fait ce code notamment la fonction "sorted"
> avec des exemples afin de mieux comprendre
> ```



**Bon travail ! 🚀**
