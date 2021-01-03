// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as cp from "child_process";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  var currentlyOpenTabfilePath =
    vscode.window.activeTextEditor?.document.uri.fsPath;
  let disposable = vscode.commands.registerCommand("zpretty.runZpretty", () => {
    // The code you place here will be executed every time your command is executed
    cp.exec("zpretty -i " + currentlyOpenTabfilePath, (err, stdout, stderr) => {
      if (err) {
        vscode.window.showInformationMessage(err);
        console.log("error: " + err);
      }
      vscode.window.showInformationMessage("zprettified");
    });
    // Display a message box to the user
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
