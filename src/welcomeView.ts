import * as vscode from "vscode";

export const POSITIONS = [
  "QB", "RB", "WR", "TE", "OL", "DL", "LB", "CB", "S", "K", "Coach"
];

// Génère le HTML de l'écran de bienvenue (Webview).
// `nonce` sécurise les scripts (Content Security Policy).
export function getWelcomeHtml(
  webview: vscode.Webview,
  current: { playerNumber?: string; playerPosition?: string },
  logoUri: vscode.Uri
): string {
  const nonce = getNonce();
  const options = POSITIONS.map((p) => {
    const selected = p === current.playerPosition ? " selected" : "";
    return `<option value="${p}"${selected}>${p}</option>`;
  }).join("");

  return /* html */ `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Security-Policy"
    content="default-src 'none'; img-src ${webview.cspSource}; style-src 'unsafe-inline'; script-src 'nonce-${nonce}';" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bienvenue Mousquetaires</title>
  <style>
    :root {
      --bleu: #003366;
      --bleu-clair: #0b4a8f;
      --jaune: #FFCC00;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: -apple-system, "Segoe UI", Roboto, sans-serif;
      color: #fff;
      background: radial-gradient(circle at 50% 0%, var(--bleu-clair), var(--bleu) 60%, #001a33 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .card {
      width: min(440px, 92vw);
      text-align: center;
      padding: 36px 30px 30px;
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(255, 204, 0, 0.35);
      border-radius: 18px;
      box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
      animation: rise 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both;
    }
    @keyframes rise {
      from { opacity: 0; transform: translateY(28px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    .logo {
      width: 140px;
      height: 140px;
      object-fit: contain;
      display: inline-block;
      animation: float 3s ease-in-out infinite;
      filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.55));
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-12px); }
    }
    h1 {
      margin: 12px 0 4px;
      font-size: 26px;
      letter-spacing: 0.5px;
    }
    h1 span { color: var(--jaune); }
    .subtitle {
      margin: 0 0 26px;
      opacity: 0.8;
      font-size: 14px;
    }
    label {
      display: block;
      text-align: left;
      font-size: 13px;
      margin: 16px 0 6px;
      color: var(--jaune);
      font-weight: 600;
    }
    input, select {
      width: 100%;
      padding: 12px 14px;
      font-size: 16px;
      border-radius: 10px;
      border: 1px solid rgba(255, 204, 0, 0.4);
      background: rgba(255, 255, 255, 0.06);
      color: #fff;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    input:focus, select:focus {
      border-color: var(--jaune);
      box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.25);
    }
    option { color: #000; }
    .error {
      color: #ff8a8a;
      font-size: 12px;
      text-align: left;
      min-height: 16px;
      margin-top: 6px;
    }
    button {
      margin-top: 22px;
      width: 100%;
      padding: 14px;
      font-size: 16px;
      font-weight: 700;
      color: var(--bleu);
      background: var(--jaune);
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: transform 0.1s, filter 0.2s;
    }
    button:hover { filter: brightness(1.08); }
    button:active { transform: scale(0.98); }
  </style>
</head>
<body>
  <div class="card">
    <img class="logo" src="${logoUri}" alt="Logo Mousquetaires" />
    <h1>Bienvenue chez les <span>Mousquetaires</span></h1>
    <p class="subtitle">Châtenay-Malabry — configure ton profil de joueur</p>

    <label for="number">Ton numéro de joueur</label>
    <input id="number" type="text" inputmode="numeric" placeholder="Ex : 23"
      value="${current.playerNumber ?? ""}" maxlength="2" autofocus />

    <label for="position">Ton poste</label>
    <select id="position">
      <option value="" disabled ${current.playerPosition ? "" : "selected"}>Choisis ton poste…</option>
      ${options}
    </select>

    <div class="error" id="error"></div>
    <button id="validate">Valider 🏈</button>
  </div>

  <script nonce="${nonce}">
    const vscode = acquireVsCodeApi();
    const numberEl = document.getElementById("number");
    const positionEl = document.getElementById("position");
    const errorEl = document.getElementById("error");

    document.getElementById("validate").addEventListener("click", () => {
      const number = numberEl.value.trim();
      const position = positionEl.value;
      errorEl.textContent = "";

      if (!/^[0-9]{1,2}$/.test(number)) {
        errorEl.textContent = "Entre un numéro entre 0 et 99.";
        numberEl.focus();
        return;
      }
      if (!position) {
        errorEl.textContent = "Choisis ton poste.";
        positionEl.focus();
        return;
      }
      vscode.postMessage({ type: "save", number, position });
    });

    numberEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") document.getElementById("validate").click();
    });
  </script>
</body>
</html>`;
}

function getNonce(): string {
  let text = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
}
