// console.log("Hola Mundo! desde la consola")

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Arantza Moreno Calva')
    .pauseFor(2500)
    .deleteAll()
    .start();