const {app} = require('electron');
const {BrowserWindow} = require('electron');
const Store = require("./js/store.js");

let mainWindow;

const store = new Store({
  configName: 'user-preferences',
  defaults: {
    windowBounds: {
      width: 1000,
      height: 600,
      x: 100,
      y: 100
    },
    userInfo: {
      fname: '',
      lname: ''
    }
  }
});

app.on("ready", function () {
    mainWindow = new BrowserWindow(store.get('windowBounds'));

    function saveWindowBounds() {
      store.set('windowBounds', mainWindow.getBounds());
    }

    mainWindow.on('resize', saveWindowBounds);
    mainWindow.on('move', saveWindowBounds);

    if(store.get('userInfo').fname != "" && store.get('userInfo').lname != "") {
      mainWindow.loadURL(`file://${__dirname}/index.html`);
    } else {
      mainWindow.loadURL(`file://${__dirname}/signin.html`);
    }


    mainWindow.setMenu(null);
    mainWindow.webContents.openDevTools()
    mainWindow.webContents.on('new-window', function(e, url) {
        e.preventDefault();
        app.shell.openExternal(url);
    });
});
