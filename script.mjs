// try {
//     let res = 10 / 0;
//     if (!isFinite(res)) {
//         throw new Error("Cannot divide by zero");
//     }
//     console.log(res);
// } catch (error) {
//     console.error("Error occurred:", error.message);
// } finally {
//     console.log("Execution completed");
// }
// function mydata() { 
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => { 
//             const data = { name: "Rohit", age: 23 }; 
//             resolve(data); 
//         }, 2000); 
//     }); 
// } 
  
// mydata() 
//     .then((data) => { 
//         console.log("Data:", data); 
//     }) 
//     .catch((error) => { 
//         console.error("Error:", error); 
//     });

    1. //Print all even numbers from 0 – 10
    //Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

    export const greet = () => console.log("Hello!");