//Practice set 1
//Task 1: Variables

const name ="Archana";

let age=30;
age=31;
console.log(name);
console.log(age);

console.log(`I am ${age} years old`);

//------------------------------
//Task 2

let city="pune"

city="mumbai";
console.log(city);

//-------------------------------
//Practice set 2:Arrays
//Task 1
const fruits = ["Apple", "Banana", "Pear","strawberry"];

fruits.push("Grapes");

fruits.pop();
fruits.pop();

fruits.unshift("Strawberry","Watermelon");

fruits.shift();
fruits.shift();

fruits.splice(1,3);

fruits.push("Mango","Banana");

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[2]);
//------------------------------
//Task 2
fruits.push("Orange");
console.log(fruits);

//--------------------------------
//Task 3 loop

for( let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
//-------------------------------------
//Practice set 3:objectPosition: 
//Task 1

const student ={
    name: "Bob",
    age: 21,
    city:"pune"
};

console.log(student.name);
console.log(student.age);
console.log(student.city);
//--------------------------
//Task 2 Add new property

student.grade ="A";
console.log(student);

//-------------------------------
//practice set 4:Array of objects
 const students =[
    {name:"Bob",marks:98},{name:"Alice",marks:78},{name:"Peter",marks:58}
    
 ]
 console.log(students);

 for(let i=0;i<students.length;i++)
 {
    console.log(students[i].name);
 }
//----------------------------
//Task 2 :only marks

for(let i=0;i<students.length;i++)
{
    console.log(students[i].marks);
}

//-------------------------
//Practice set 5:Mini Challenge

const product =[
    {name:"Laptop",price:50000},
    {name:"Mouse",price:500},
    {name:"Keyboard",price:1500}
]

console.log(product);

for(let i=0;i<product.length;i++)
{
    console.log(`${product[i].name} - ${product[i].price}`);
}
 
//------------------------
//Bonus challenge

for(let i=0;i<students.length;i++)
{
  if(students[i].marks > 75)
  {
    console.log(students[i].name);
  }
}

