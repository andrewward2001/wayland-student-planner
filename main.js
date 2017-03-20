const {app} = require('electron');
const {BrowserWindow} = require('electron');
const Store = require("./js/store.js");
const path = require("path");

let mainWindow;

const store = new Store({
  configName: 'window-state',
  defaults: {
    windowBounds: {
      width: 1200,
      height: 600,
      x: 100,
      y: 100,
      frame: false,
      show: false
    }
  }
});

const storeUserPrefs = new Store({
  configName: 'user-prefs',
  defaults: {
    userInfo: {
      fname: '',
      lname: '',
      grade: ''
    }
  }
});

app.on("ready", function () {
    mainWindow = new BrowserWindow(store.get('windowBounds'));

    function saveWindowBounds() {
      store.set('windowBounds', {width: mainWindow.getBounds().width, height: mainWindow.getBounds().height, x: mainWindow.getBounds().x, y: mainWindow.getBounds().y, frame: false, show: false});
    }

    mainWindow.on('resize', saveWindowBounds);
    mainWindow.on('move', saveWindowBounds);

    mainWindow.loadURL('file://' + path.join(__dirname,'index.html'));

    mainWindow.setMenu(null);
    mainWindow.webContents.openDevTools()
    mainWindow.webContents.on('new-window', function(e, url) {
        e.preventDefault();
        app.shell.openExternal(url);
    });
    mainWindow.once('ready-to-show', () => {
      mainWindow.show()
    })
});
