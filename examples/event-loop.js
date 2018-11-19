function eventLoop() {
    debugger;

    var data = [
        'xablau1',
        'xablau2',
        'xablau3',
        'xablau4',
        'xablau5'
    ];

    var consoleXablau = (txt) => {
        debugger;
        console.log(txt);
    };

    var seeIfHasXablau = () => {
        debugger;
        return data && data.length > 0;
    };

    var execXablau = () => {
        debugger;
        if (seeIfHasXablau()) {
            var txt = data.shift();
            consoleXablau(txt);
            setTimeout(() => execXablau(), 10);
        }
    };

    execXablau();
}