
// function myFunction(){

//     console.log("aliyooooooo......");       //maximum call stack size executed
//     myFunction()
    
// }
// myFunction()



// let x=1
// function myFunction(){

//     console.log("aliyooooooo......");        //aliyoooooo.....  aliyoooooo.....  aliyoooooo.....  aliyoooooo.....  aliyoooooo.....
//     if(x<5)
//     {
//         x++
//         myFunction()
//     }
    
// }
// myFunction()



// function aliya(x){

   
//     if(x<=5){

//         console.log("aliyooo......."+x);
//         aliya( x++)
        
//     }
    
// }
// aliya(5)



// function asd(n){

//     if(n==0){

//         return 1;                //120
//     }
//     return n * asd(n-1);
// }
// console.log(asd(5));




// let i=1
// function greet(){

//     console.log("hey"+i);                //hey1..........hey10
//     i++
//     if(i<=10)
//     greet()
    
// }
// greet();



let i=10
function greet(){

    console.log("hey"+i);               //hey10........hey1
    i--
    if(i>=1)
    greet()
    
}
greet();