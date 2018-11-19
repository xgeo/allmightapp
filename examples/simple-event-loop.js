var max = 2;

function resolveLoop() {
    max--;
    if (max > 0) setTimeout(() => simpleEventLoop(), 125);
    else console.log('Finish it!');
}

function simpleEventLoop() {
    resolveLoop();
}

simpleEventLoop();