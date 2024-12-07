const EventEmitter = require("node:events")

const emitter = new EventEmitter;

emitter.on("order-pizza",(size,topping)=>{
    console.log(`order recived! Baking the ${size} pizza with ${topping}`);
});

emitter.on("order-pizza",(size)=>{
    if(size==="large"){
        console.log("serving the complementry")
    }
    
});
console.log("Do work before the event occurs in the system");



emitter.emit("order-pizza", "large", "mashrooms");
