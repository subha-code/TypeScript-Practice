console.log();
let usrName: string = "Uttam"; // explicit annotation
let password: string = "abc@123"; // explicit annotation

let address: string
address = "delhi";

let userAge: number = 24;

usrName = usrName.toLowerCase(); // Convert userName to lowercase and assign it back

console.log(typeof usrName); // Output: string
console.log(typeof password); // Output: string
console.log(typeof userAge); // Output: number

let isActive: boolean = true;
isActive = false;

let userEmail: string = 'abc@gmail.com';

let userDetailDescription: string = `User is programmer, email id is ${userEmail}`;
console.log(userDetailDescription);
