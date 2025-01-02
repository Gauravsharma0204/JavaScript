// Immediately Invoked Funtion Expressions (IIFE)

(function chai(){ // Named IIFE
    console.log(`DB Connected`);
    
}) ();
//Why Using IIFE => Remove the Global Scope Polution (Variable or Declration) or to create a private scope, preventing variables and functions from polluting the global namespace


//************************ */
((name) => { //Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Gaurav');

