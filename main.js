const { app, BrowserWindow, Menu, Notification} = require('electron') 
var os = require('os')
const path = require('path')

var user = os.userInfo().username

Menu.setApplicationMenu(false)

function showNotification() {
    const notification = {
        title: 'Caldora',
        body: 'Welcome '+user
    }
    new Notification(notification).show()
}


function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 500,
        maximizable: true,
        resizable: false,
        //icon: path.join(__dirname,'icons/icon.png'),
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow).then(showNotification)

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
