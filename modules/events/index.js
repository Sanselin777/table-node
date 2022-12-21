/* eventos, algo que podemos responder, responde a una accion
    en node hay 2 tipos diferente de eventos, aunque muchas veces estan conectados
    1. eventos de sistema, son eventos que se disparan cuando ocurre algo en el sistema operativo, viene del lado de c++, libuv, a nivel inferior
    2  eventos personalizados, son eventos que nosotros creamos, que nosotros podemos disparar, que nosotros podemos escuchar, es del nucleo de js
        js, como tal no tiene eventos, 
*/

//propio emisor de eventos

const { EventEmitter } = require("events");
const { SAVE } = require("./event-name");

const emisor = new EventEmitter();

emisor.on(SAVE, () => {
  console.log("Hola " + SAVE);
});

emisor.on(SAVE, () => {
  console.log("Hola 2");
});

emisor.emit(SAVE);
