var locate = window.location;

// console.log(locate);
// console.log(locate.href);
// console.log(locate.hostname);
// console.log(locate.pathname);
// console.log(locate.hash);

// locatio.href = "https://www.google.com"
// locatio.href = "roar#down"

var host = locate.host;
var going = "http://" + host + "/Date";
locate.assign(going)

// locate.reload()
// locate.reload(true)
// locate.reload(false)

// locate.href = going
// locate.assign(going)

// locate.reload()


// console.log(history)

// history.go(+1)