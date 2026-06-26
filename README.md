<p align="center">
  <img src="media/logomous.png" alt="Logo Mousquetaires" width="200" />
</p>

<h1 align="center">Mousquetaires Football 🏈</h1>

L'extension officielle des **Mousquetaires de Châtenay-Malabry** pour Visual Studio Code.
Configure ton profil de joueur, affiche ton numéro et code aux couleurs du club.

## Fonctionnalités

- 🏈 **Écran de bienvenue animé** au premier lancement
- 📝 **Profil de joueur** : ton numéro et ton poste, enregistrés automatiquement
- 📊 **Barre d'état** affichant `🏈 #23 | QB` (clique dessus pour modifier)
- 🎨 **Thème officiel du club** (bleu `#003366` / jaune `#FFCC00`)
- ⌨️ **Commandes** dans la palette (`Ctrl+Shift+P`) :
  - `Mousquetaires : Afficher l'accueil 🏈`
  - `Mousquetaires : Activer le thème du club`
  - `Mousquetaires : Réinitialiser mon profil`

## Installation

À partir du fichier `.vsix` :

```bash
code --install-extension mousquetaires-theme-0.0.1.vsix
```

Ou dans VS Code : **Extensions** → menu `…` → **Install from VSIX…**

## Utilisation

1. Au premier démarrage, l'écran de bienvenue s'ouvre automatiquement.
2. Renseigne ton **numéro** et ton **poste**, puis clique sur **Valider**.
3. Le thème du club s'applique et ton profil apparaît dans la barre d'état.

Pour activer le thème manuellement : `Ctrl+K Ctrl+T` → **Mousquetaires**.

## Prérequis

- Visual Studio Code **1.124.0** ou plus récent.

## Bonus : mettre un joueur en fond de l'éditeur 🏈

> ⚠️ **Optionnel et personnel.** Cette astuce ne fait pas partie de l'extension : elle utilise
> une extension tierce qui modifie les fichiers internes de VS Code (un avertissement
> « installation corrompue » apparaît, sans danger). À refaire après chaque mise à jour de
> VS Code. **Ne fonctionne pas** avec VS Code installé via **snap** (fichiers en lecture seule) —
> il faut la version `.deb` officielle.

1. Installe l'extension **« Background »** (auteur *shalldie*) :
   ```bash
   code --install-extension shalldie.background
   ```
2. Ouvre tes réglages : `Ctrl+Shift+P` → **Preferences: Open User Settings (JSON)**.
3. Ajoute ce bloc (remplace le chemin par celui de ton image) :
   ```jsonc
   "background.enabled": true,
   "background.editor": {
     "useFront": false,                       // image derrière le code
     "style": {
       "background-position": "100% 100%",    // bas-droite
       "background-repeat": "no-repeat",
       "background-size": "auto 85%",          // taille
       "opacity": 0.35                         // transparence (0 → 1)
     },
     "images": [
       "file:///chemin/vers/ton-image.png"
     ]
   }
   ```
4. Applique : `Ctrl+Shift+P` → **« Enable and apply the background. »** puis **Restart**.

**Réglages utiles :** baisse `opacity` (0.1–0.2) si le texte devient dur à lire ;
`background-position` `"50% 100%"` pour centrer en bas ; `background-size` `"auto 60%"` pour réduire.

---

Allez les Mousquetaires ! 🏈💙💛
