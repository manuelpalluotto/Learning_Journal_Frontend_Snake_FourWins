// css-comment-folding/extension.js

const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    vscode.languages.registerFoldingRangeProvider('css', {
        provideFoldingRanges(document) {
            const ranges = [];
            for (let i = 0; i < document.lineCount; i++) {
                const line = document.lineAt(i);
                if (line.text.match(/\/\*\s*#region/)) {
                    const start = i;
                    for (let j = i + 1; j < document.lineCount; j++) {
                        if (document.lineAt(j).text.match(/\/\*\s*#endregion/)) {
                            ranges.push(new vscode.FoldingRange(start, j, vscode.FoldingRangeKind.Region));
                            i = j;
                            break;
                        }
                    }
                }
            }
            return ranges;
        }
    });
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
