import * as vscode from "vscode";
import { getWelcomeHtml } from "./welcomeView";

let statusItem: vscode.StatusBarItem;
let welcomePanel: vscode.WebviewPanel | undefined;

export function activate(context: vscode.ExtensionContext) {
  // --- Barre d'état (toujours visible) ---
  statusItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    100
  );
  statusItem.command = "mousquetaires.welcome"; // clic = rouvrir l'accueil
  context.subscriptions.push(statusItem);
  refreshStatus(context);
  statusItem.show();

  // --- Commandes (palette : Ctrl+Shift+P) ---
  context.subscriptions.push(
    vscode.commands.registerCommand("mousquetaires.welcome", () =>
      openWelcome(context)
    ),
    vscode.commands.registerCommand("mousquetaires.applyTheme", () =>
      applyTheme()
    ),
    vscode.commands.registerCommand("mousquetaires.reset", async () => {
      await context.globalState.update("playerNumber", undefined);
      await context.globalState.update("playerPosition", undefined);
      await context.globalState.update("onboarded", false);
      refreshStatus(context);
      openWelcome(context);
    })
  );

  // --- Première ouverture : on accueille le joueur ---
  if (!context.globalState.get<boolean>("onboarded")) {
    openWelcome(context);
  }
}

function openWelcome(context: vscode.ExtensionContext) {
  if (welcomePanel) {
    welcomePanel.reveal(vscode.ViewColumn.One);
    return;
  }

  welcomePanel = vscode.window.createWebviewPanel(
    "mousquetairesWelcome",
    "Bienvenue Mousquetaires 🏈",
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true,
      localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, "media")],
    }
  );

  const logoUri = welcomePanel.webview.asWebviewUri(
    vscode.Uri.joinPath(context.extensionUri, "media", "logomous.png")
  );

  welcomePanel.webview.html = getWelcomeHtml(
    welcomePanel.webview,
    {
      playerNumber: context.globalState.get<string>("playerNumber"),
      playerPosition: context.globalState.get<string>("playerPosition"),
    },
    logoUri
  );

  // Messages venant du formulaire (clic sur "Valider")
  welcomePanel.webview.onDidReceiveMessage(async (msg) => {
    if (msg.type === "save") {
      await context.globalState.update("playerNumber", msg.number);
      await context.globalState.update("playerPosition", msg.position);
      await context.globalState.update("onboarded", true);
      refreshStatus(context);
      await applyTheme();
      vscode.window.showInformationMessage(
        `Bienvenue Mousquetaire #${msg.number} ! (${msg.position}) 🏈`
      );
      welcomePanel?.dispose();
    }
  });

  welcomePanel.onDidDispose(() => {
    welcomePanel = undefined;
  });
}

function refreshStatus(context: vscode.ExtensionContext) {
  const number = context.globalState.get<string>("playerNumber") ?? "00";
  const position =
    context.globalState.get<string>("playerPosition") ?? "Mousquetaires";
  statusItem.text = `🏈 #${number} | ${position}`;
  statusItem.tooltip = "Mousquetaires de Châtenay-Malabry — clique pour modifier";
}

async function applyTheme() {
  await vscode.workspace
    .getConfiguration()
    .update(
      "workbench.colorTheme",
      "Mousquetaires",
      vscode.ConfigurationTarget.Global
    );
}

export function deactivate() {}
