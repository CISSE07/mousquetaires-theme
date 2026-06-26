<p align="center">
  <img src="media/logomous-removebg-preview.png" alt="Logo Mousquetaires" width="200" />
</p>

<h1 align="center">Mousquetaires Football 🏈</h1>

<p align="center">
  L'extension officielle des <b>Mousquetaires de Châtenay-Malabry</b> pour Visual Studio Code.<br/>
  Configure ton profil de joueur, affiche ton numéro et code aux couleurs du club.
</p>

---

## 📖 Sommaire

- [C'est quoi cette extension ?](#-cest-quoi-cette-extension-)
- [Ce qu'elle fait](#-ce-quelle-fait)
- [Installation (pas à pas, pour débutants)](#-installation-pas-à-pas-pour-débutants)
- [Première utilisation](#-première-utilisation)
- [Les commandes](#-les-commandes)
- [Changer / réinitialiser ton profil](#-changer--réinitialiser-ton-profil)
- [Le thème du club](#-le-thème-du-club)
- [Bonus : mettre un joueur en fond de l'éditeur](#-bonus--mettre-un-joueur-en-fond-de-léditeur)
- [Problèmes fréquents (FAQ)](#-problèmes-fréquents-faq)
- [Pour les développeurs](#-pour-les-développeurs)

---

## 🏈 C'est quoi cette extension ?

**Visual Studio Code** (souvent abrégé « VS Code ») est un logiciel gratuit pour écrire du code.
Cette extension le personnalise aux couleurs des **Mousquetaires** : un écran d'accueil, ton
numéro de joueur affiché en bas de l'écran, et un thème de couleurs bleu/jaune du club.

> En résumé : tu installes le fichier, tu réponds à 2 questions (ton numéro, ton poste),
> et VS Code prend les couleurs du club avec ton profil affiché. C'est tout. 🎉

---

## ✨ Ce qu'elle fait

| Fonction | Description |
|---|---|
| 🏈 **Écran de bienvenue** | S'ouvre au premier lancement, avec le logo du club animé |
| 📝 **Profil de joueur** | Tu choisis ton **numéro** et ton **poste** (QB, RB, WR…) en cliquant |
| 💾 **Sauvegarde automatique** | Ton profil est mémorisé, pas besoin de le refaire |
| 📊 **Barre d'état** | Ton profil s'affiche en bas à gauche : `🏈 #23 \| QB` |
| 🎨 **Thème du club** | Couleurs officielles : bleu `#003366` et jaune `#FFCC00` |
| ⌨️ **Commandes** | Raccourcis pour réafficher l'accueil, activer le thème, etc. |

---

## 📥 Installation (pas à pas, pour débutants)

> Tu n'as **pas** besoin de connaître la programmation. Suis simplement les étapes.

### Étape 1 — Avoir VS Code

Si tu n'as pas encore VS Code, télécharge-le gratuitement ici : **https://code.visualstudio.com**
puis installe-le comme n'importe quel logiciel.

### Étape 2 — Récupérer le fichier de l'extension

Tu dois avoir reçu un fichier qui se termine par **`.vsix`** (par exemple
`mousquetaires-theme-0.0.1.vsix`). Mets-le dans un dossier facile à retrouver
(ex : ton **Bureau**).

### Étape 3 — Installer le fichier `.vsix`

Deux méthodes, choisis la plus simple pour toi :

**Méthode A — Avec la souris (recommandée pour débuter)**
1. Ouvre VS Code
2. Clique sur l'icône **Extensions** dans la barre de gauche (le carré formé de 4 petits carrés)
   *ou* appuie sur `Ctrl + Shift + X`
3. En haut du panneau, clique sur le menu **« … »** (trois petits points)
4. Choisis **« Install from VSIX… »** (Installer depuis un VSIX)
5. Sélectionne le fichier `.vsix` que tu as reçu
6. Attends le message **« successfully installed »** ✅

**Méthode B — Avec le terminal (plus rapide)**
1. Ouvre un terminal dans le dossier où se trouve le fichier
2. Tape :
   ```bash
   code --install-extension mousquetaires-theme-0.0.1.vsix
   ```

### Étape 4 — Redémarrer VS Code

Ferme complètement VS Code puis rouvre-le (ou appuie sur `Ctrl + Shift + P`,
tape **« Reload Window »** et valide). L'extension est prête ! 🏈

---

## 🚀 Première utilisation

1. Au démarrage, l'**écran de bienvenue** s'ouvre tout seul (avec le logo du club).
2. **Tape ton numéro** de joueur dans le champ (entre 0 et 99).
3. **Clique sur ton poste** dans la grille (QB, RB, WR, TE, OL, DL, LB, CB, S, K, Coach).
   Le poste choisi devient **jaune**.
4. Clique sur le bouton **« Valider 🏈 »**.
5. Le **thème du club** s'applique, et ton profil apparaît **en bas à gauche** : `🏈 #23 | QB`.

> Si l'écran de bienvenue ne s'ouvre pas, voir la [FAQ](#-problèmes-fréquents-faq) plus bas.

---

## ⌨️ Les commandes

VS Code possède une « palette de commandes » : appuie sur **`Ctrl + Shift + P`**, puis tape le
début du nom de la commande. Tape **« Mousquetaires »** pour voir les commandes de l'extension :

| Commande | Ce qu'elle fait |
|---|---|
| `Mousquetaires : Afficher l'accueil 🏈` | Rouvre l'écran de bienvenue |
| `Mousquetaires : Activer le thème du club` | Applique le thème bleu/jaune |
| `Mousquetaires : Réinitialiser mon profil` | Efface ton numéro/poste et repose les questions |

> 💡 Tu peux aussi **cliquer** sur ton profil (`🏈 #23 | QB`) en bas à gauche pour rouvrir l'accueil.

---

## 🔄 Changer / réinitialiser ton profil

- **Changer ton numéro ou ton poste** : clique sur `🏈 #23 | QB` en bas à gauche, ou lance la
  commande `Mousquetaires : Afficher l'accueil 🏈`, modifie, puis Valider.
- **Tout remettre à zéro** : lance `Mousquetaires : Réinitialiser mon profil`. L'écran de
  bienvenue se rouvre comme au premier jour.

---

## 🎨 Le thème du club

Le thème **« Mousquetaires »** colore tout VS Code aux couleurs du club (fond bleu profond,
mots-clés en jaune, etc.).

**Pour l'activer à la main :**
1. Appuie sur `Ctrl + K` puis `Ctrl + T`
2. Dans la liste, choisis **« Mousquetaires »**

*(Ou utilise la commande `Mousquetaires : Activer le thème du club`.)*

---

## 🖼️ Bonus : mettre un joueur en fond de l'éditeur

> ⚠️ **Optionnel et personnel.** Ce n'est **pas** fourni par l'extension : ça utilise une autre
> extension qui modifie VS Code (un avertissement « installation corrompue » apparaît, **sans
> danger**). À refaire après chaque mise à jour de VS Code. **Ne marche pas** si VS Code est
> installé via **snap** (Linux) : il faut la version **`.deb`** officielle.

1. Installe l'extension **« Background »** (auteur *shalldie*) :
   ```bash
   code --install-extension shalldie.background
   ```
2. Ouvre tes réglages : `Ctrl + Shift + P` → **Preferences: Open User Settings (JSON)**.
3. Ajoute ce bloc (remplace le chemin par celui de **ton** image) :
   ```jsonc
   "background.enabled": true,
   "background.editor": {
     "useFront": false,                       // image DERRIÈRE le code
     "style": {
       "background-position": "100% 100%",    // bas-droite
       "background-repeat": "no-repeat",
       "background-size": "auto 85%",          // taille
       "opacity": 0.35                         // transparence (0 = invisible → 1 = opaque)
     },
     "images": [
       "file:///chemin/vers/ton-image.png"
     ]
   }
   ```
4. Applique : `Ctrl + Shift + P` → **« Enable and apply the background. »** puis **Restart**.

**Réglages utiles :** baisse `opacity` (0.1–0.2) si le texte devient dur à lire ;
`"50% 100%"` pour centrer en bas ; `"auto 60%"` pour réduire la taille.

---

## ❓ Problèmes fréquents (FAQ)

**L'extension n'apparaît pas / « Failed loading extension ».**
→ Ta version de VS Code est trop ancienne. Mets-la à jour (menu **Help → Check for Updates**),
il faut **VS Code 1.124.0 ou plus récent**.

**L'écran de bienvenue ne s'ouvre pas au démarrage.**
→ C'est normal s'il a déjà été rempli une fois (il ne s'affiche qu'au premier lancement).
Lance la commande `Mousquetaires : Afficher l'accueil 🏈`, ou
`Mousquetaires : Réinitialiser mon profil` pour repartir de zéro.

**Je ne vois pas le thème.**
→ Active-le à la main : `Ctrl + K` puis `Ctrl + T` → choisis **« Mousquetaires »**.
Ou lance `Mousquetaires : Activer le thème du club`.

**Les questions n'apparaissent pas dans le terminal.**
→ Normal : ce sont des fenêtres **graphiques** de VS Code (en haut au centre, et en bas à
gauche), pas des questions de terminal.

**Comment désinstaller l'extension ?**
→ `Ctrl + Shift + X`, cherche **« Mousquetaires »**, clique sur la roue dentée → **Uninstall**.

---

## 🛠️ Pour les développeurs

> Cette partie n'est utile que si tu veux **modifier** l'extension. Pour juste l'utiliser,
> ignore-la.

### Installer les dépendances
```bash
npm install
```

### Compiler
```bash
npm run compile
```

### Tester en mode développement
Appuie sur `F5` dans VS Code (ouvre une fenêtre de test), ou en ligne de commande :
```bash
code --extensionDevelopmentPath=$(pwd)
```

### Construire le fichier `.vsix` à distribuer
```bash
npx @vscode/vsce package --no-dependencies
```
Cela génère `mousquetaires-theme-0.0.1.vsix`, le fichier à partager.

### Structure du projet
```
mousquetaires-theme/
├─ src/
│  ├─ extension.ts        ← logique (accueil, barre d'état, commandes)
│  └─ welcomeView.ts      ← écran de bienvenue (HTML/CSS)
├─ themes/
│  └─ mousquetaires-color-theme.json   ← le thème de couleurs
├─ media/                 ← logo et images
└─ package.json           ← configuration de l'extension
```

---

## 📋 Prérequis

- **Visual Studio Code 1.124.0** ou plus récent.

---

<p align="center">Allez les Mousquetaires ! 🏈💙💛</p>
