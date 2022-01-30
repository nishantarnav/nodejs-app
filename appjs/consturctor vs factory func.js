
// const circle={
let x=1;
// radius:1,
// location:{
//     x:1,
//     y:1
// },
// draw : function(){
//     console.log('draw');
// }
// };
// circle.radius=2;

// factory function

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }

    }
}
const circle = createCircle()
// circle.draw

//constructor function
//first char is capital
function Circle(radius){
    this.radius=radius;
    this.draw= () =>{
        console.log('draw me')
    }
}
const another= new Circle(10);
another.draw()
console.log(another.radius)

for(let key in another){
    console.log(key,another[key]);
}
const keys = Object.keys(circle)
console.log(keys)

if('radius' in circle){
    console.log('Circle has a radius',x)
}