
interface User{
    firstname:string,
    lastname:string,
    age:number
}

// now create the funtion which take user as parameter and print the detail of user

const ilega=(user:User)=>{
   
      if(user.age>18)
        return true;
    else 
    return false;
   
   
   

}

// ilega({
//      firstname:"shrisht dev",
//      lastname:"dev",
//      age:21
// })

 interface person{
      firstname:string,
      lastName:string,
      age:number
 }

 // we can create class which implements interface person just like java 

 class Employee implements person{
     firstname:string;
     lastName:string;
     age:number;
     constructor(name:string,lname:string,age:number)
     {
         this.firstname=name;
         this.lastName=lname;
         this.age=age;
     }
 }

 // now creating object of employee class 
  const e1=new Employee("shrisht","dev",21);
   console.log(e1.age);

   // the main difference between type and interface is that 
   // we can create a class which implements interface but type does not

   // we can define type like 
   // we have to use type keyword

   type data={
      firstname:string,
      lastName:string,
      age:number
 }
 // functionality wise both are same only difference is that we can 
 // create class that implements interface but we cannot create that
 // implements type rest are same we  can use any of them to fullfile our need

 //Q1: create a function which take argume as id which can be either numberg or string 
 // and print id ,to achive this we use type but bot interface 
 // if we try to assign type in interface than we will compile time error
 // interface Greet=number|string -> we cannot do like this
  type Greet=number|string;
  const printNumberOrString=(id:Greet)=>{
             console.log(`id:${id}`);
             
  }
  printNumberOrString(1);