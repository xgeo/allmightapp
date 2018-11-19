var max = 2;

function resolveLoop() {
    debugger;
    max--;
    if (max > 0) setTimeout(() => simpleEventLoop(), 125);
    else console.log('Finish it!');
}

function simpleEventLoop() {
    debugger;
    resolveLoop();
}