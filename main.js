const { app, BrowserWindow, Menu} = require('electron') 
const path = require('path')

Menu.setApplicationMenu(false)

function createWindow() {
    const win = new BrowserWindow({
        width: 350,
        height: 560,
        maximizable: true,
        resizable: false,
        icon: path.join(__dirname,'src/CalDora-logo.png'),
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
