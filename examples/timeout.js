console.log('Esse é o início', (new Date()).toLocaleTimeString(), (new Date()).getMilliseconds());

setTimeout(cb => {
    console.log('Essa é uma mensagem do callback', (new Date()).toLocaleTimeString(), (new Date()).getMilliseconds());
});

console.log('Essa é só uma mensagem qualquer', (new Date()).toLocaleTimeString(), (new Date()).getMilliseconds());

setTimeout(cb1 => {
    console.log('Essa é uma mensagem do callback 1', (new Date()).toLocaleTimeString(), (new Date()).getMilliseconds());
}, 0);

console.log('Esse é o fim', (new Date()).toLocaleTimeString(), (new Date()).getMilliseconds());