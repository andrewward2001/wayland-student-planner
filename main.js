const {app} = require('electron');
const {BrowserWindow} = require('electron');

let win;

app.on("ready", planner);

function planner() {
    let mainWindow = new BrowserWindow({
        width: 1000,
        minWidth: 1000,
        height: 600,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: false
        }
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.setMenu(null);
    mainWindow.webContents.openDevTools()
    mainWindow.webContents.on('new-window', function(e, url) {
        e.preventDefault();
        app.shell.openExternal(url);
    });
}
