let person= new Object()
person.firstName="Sarwar";
person.lastName="Jahan";
person.isBangladeshi=true;
person.getName=(param)=> {
 return`My name is ${person.firstName} ${person.lastName}`   
}

console.log("Hello, ${person.firstName}");

console.log(person.firstName);
console.log(person.lastName);
console.log(person.isBangladeshi);
console.log(person.getName());

class Example { 

    static greet() { return "Hello!"; } 
  
  } 
  
  console.log(Example.greet());