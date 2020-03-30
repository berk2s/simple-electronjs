const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({icon: __dirname + '/AppIcon.icns'});

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'main.html'),
            protocol: 'file:',
            slashes: true
        })
    )

    mainWindow.setSize(400, 300)

})

