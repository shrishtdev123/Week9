const x:number=10;
console.log(x);

// now we have to write tsc(typescrit compiler) -b in terminal than tsc will converted into js file in the same (directory)folder with name a.js and we are required to run this file only 

//if we run node a.js than we will get output 10 in the console

// the main objective of ts is to provide type safety like Generic in java

// if we assign any other things in x like string,object than we will get compile time error saying Tyep: provided data is not assign in number


// we have boolean,string,number,null,undefine these are some data types 
 const greet=()=>{
     console.log("hi");
     
 }
//  greet();

 const sum=(num1:number,num2:number)=>{
     return(num1+num2);
     
 }

//console.log(sum(2,4));

 const islega=(n:number)=>{
     if(n>18)
        return true;
    else
    return false;
 }

 //console.log(islega(10));

  const nameprint=(name:string)=>{
     console.log(`hello ${name}`);
     
  }

 // nameprint("shrisht dev");

 
 
