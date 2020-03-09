// Modules to control application life and create native browser window
const {app, BrowserWindow, screen} = require('electron')
const path = require('path')

function createWindows () {
  //get display measure reference
  let display = screen.getAllDisplays()[1];
  // let display = screen.getPrimaryDisplay();
  let width = display.workArea.width;
  let height = display.workArea.height;
  let xRef = display.workArea.x;
  let yRef = display.workArea.y;
  console.log(display);
  console.log('height: ', 0.5*height);

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: Math.floor(0.5*width),
    height: Math.floor(0.5*height),
    x: xRef,
    y: yRef,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  const secondWindow = new BrowserWindow({
    width: Math.floor(0.5*width),
    height: Math.floor(0.5*height),
    x: xRef+Math.floor(0.5*width),
    y: yRef,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  const thirdWindow = new BrowserWindow({
    width: Math.floor(0.5*width),
    height: Math.floor(0.5*height),
    x: xRef,
    y: yRef+Math.floor(0.5*height),
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  const fourthWindow = new BrowserWindow({
    width: Math.floor(0.5*width),
    height: Math.floor(0.5*height),
    x: xRef+Math.floor(0.5*width),
    y: yRef+Math.floor(0.5*height),
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  // and load the index.html of the app.
  mainWindow.loadURL('https://softwarenews.atlassian.net/secure/RapidBoard.jspa?rapidView=117&projectKey=DA&selectedIssue=DA-73')
  secondWindow.loadURL('https://softwarenews.atlassian.net/secure/RapidBoard.jspa?rapidView=110&projectKey=DG&selectedIssue=DG-89')
  thirdWindow.loadURL('https://softwarenews.atlassian.net/secure/RapidBoard.jspa?rapidView=120&projectKey=DES')
  fourthWindow.loadURL('https://softwarenews.atlassian.net/wiki/spaces/TSTRDM/overview')
  

  setInterval(()=>{
    mainWindow.reload()
  }, 600000)
  setInterval(()=>{
    secondWindow.reload()
  }, 660000)
  setInterval(()=>{
    thirdWindow.reload()
  }, 720000)
  setInterval(()=>{
    fourthWindow.reload()
  }, 780000)
  
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindows)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
