// Follow along with the examples here
function sayHelloTo(firstName){
    console.log(`Hello, ${firstName}`);
}
sayHelloTo('Guadalupe');
sayHelloTo('Jane');
sayHelloTo('R2-D2');
sayHelloTo(1);

function say(greeting, firstName){
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;
}
say('Julio', 'Hello');

function add(x, y){
    return x + y;
}
console.log(add(1,2));
console.log(say('Hello','Liz'));

/*
 * Function to caluclate area of a circle 
 * args: radius => int
 */
function circleArea(radius){
    const area = 3.14 * (radius * radius);
    return area;
}
console.log(`The area of the circle is: ${circleArea(5)}cm squared`);