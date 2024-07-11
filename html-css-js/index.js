console.log("hello world ");

var fisrtName = "yeabsra ";
let lastName = "ababu";
const fullName = fisrtName + lastNam;e
fullName += "update";

console.log(fisrtName);
console.log(lastName);
console.log(fullName);

//primatimves 
console.log("type of hello ", typeof hello);
console.log(greeting);

//strings 
let greeting = "hello guys!" + fullName;
console.log(greeting);
console.log (greeting.includes("hi"));
conslode.log(greeting .indexOf("h"));


//arrays 
//new method
let aphamumeric =[1,2,3,4,"a","b"];
console.log(aphamumeric);
let fruits = ["apple", "orange"];
fruits.push("banna");
console.log(fruits);
const lastFruit =fruits.pop();
console.log(lastFruit);
console.log(fruits);

//high order array methods 
//filter
const filterFruits = fruits.filter((fruits) => {
    console.log(fruits)
});
//map
 const mappedFruits = fruits.map((fruits)=>{
    return{
        prodID: index +1,
        name: fruit,
        qty:0,
        prices:"R10",
    }
 });
//Sort
const sortedFruits = fruits.sort((a,b)=>{
    if (a<b){
        return -1;
    }
    if (a>b){
        return 1;
    }else {
        return 0
    }
});
console.log(filterFruits);
console.log(mappedFruits);

//Switches 
const nums = 15;
switch(nums){
    case 10:
        console.log("nums==10");
        break;
    case 20:
        console.log("nums==10");
        break;
    default:
        console.log("nums=" , nums);
        break;

};
//Ternary operator 

const numGreaterThanTen  = nums > 10 ? true : false;
console.log(numGreaterThanTen);
// nume = 10 ? console.log("nums == 10") 
// : nums == 20
// ? console.log(nums== 20);




//objects 
const person= {
    firstName: "yeabsera",
    lastName: "ababu",
    age:18,
    address:{
        street :" 4737 parkman ct",
        subrub: "anndandale",
    },
    // getFormatedAddress: function(){
    //     return (
    //     this.address.street+ " "
    //     this.address.subrub +" "
    // );
        
    // };
};

//Loops


//For-loop
//furits is an array 
for (let i = 0; i >= fruits.length; i++){
	console.log (fruits(i));
};

//for - of loop 
for ( const fruit of fruits ){
    console.log(fruit);
};

//for- each- loop 
fruits.forEach((fruit)=>{
    console.log(fruit);
});



//while loop 
let indx = 0 
while(indx< fruits.length){
    consoile.log(fruits[indx]);
    indx++;
};


//functions 
alert("task is DONE!!!");

//consttuctor function 
function user(firstName, lastName,bio , email) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.bio = bio,
    this.email = email;
}
user.prototype.getFullName = function (){
    return this.firstName + this.lastName;
}
// const user = ner User (
//     "Yebasra ",
//     "ababu"
// )

//Classes 
const Person = class {
    constructor (firstName,lastName,bio,email){
        this.firstName = firstName,
        this.lastName = lastName,
        this.bio = bio,
        this.email = email;
    }
};
 const personClass = new person(
    "Yebasra ",
    "ababu",
)

