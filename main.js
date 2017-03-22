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
      frame: false
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
    },
    hasRun: false,
    externalLinks: false,
    persistWindowSize: true,
    persistWindowPos: true,
    devTools: false
  }
});

app.on("ready", function () {
    mainWindow = new BrowserWindow(store.get('windowBounds'));

    function saveWindowBounds() {
      store.set('windowBounds', {width: mainWindow.getBounds().width, height: mainWindow.getBounds().height, x: mainWindow.getBounds().x, y: mainWindow.getBounds().y, frame: false});
    }

    storeUserPrefs.set('hasRun', false)
    if(storeUserPrefs.get('hasRun') == false) {
      storeUserPrefs.set('hasRun', true)
    }

    if(storeUserPrefs.get('persistWindowSize')) mainWindow.on('resize', saveWindowBounds);
    if(storeUserPrefs.get('persistWindowPos')) mainWindow.on('move', saveWindowBounds);

    mainWindow.loadURL('file://' + path.join(__dirname,'index.html'));

    mainWindow.setMenu(null);
    if(storeUserPrefs.get('devTools')) {
      mainWindow.webContents.openDevTools()
    }
    mainWindow.webContents.on('new-window', function(e, url) {
        e.preventDefault();
        app.shell.openExternal(url);
    });
});
