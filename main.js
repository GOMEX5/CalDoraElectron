const { app, BrowserWindow, Menu} = require('electron')

Menu.setApplicationMenu(false)

function createWindow() {
    const win = new BrowserWindow({
        width: 350,
        height: 560,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
