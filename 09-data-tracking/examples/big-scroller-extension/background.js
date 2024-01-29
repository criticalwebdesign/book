console.log("Hello from background.js")

// when using chrome.storage.local you must use this to view stored data
// chrome.storage.local.get(null, (data) => console.log(data))
// or this 
chrome.storage.local.get(null, (data) => console.log(JSON.stringify(data)))
// or this
// chrome.storage.local.get(null, (data) => console.log(data.savedScrollDistance) )


// run this in the service worker console to clear data
// chrome.storage.local.remove("scrollDistance")