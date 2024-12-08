{
  
  type Student ={
    name:string;
    id:number;
    email:string;
    age:number;
    contact ?:number;

  }  


  const student:Student={
    name:"jakir",
    id:1,
    email:"jakirhossainmunir79@gmail.com",
    age:12,
    contact:123

  }
    
  type ADD = (num1:number, num2:number)=>number;

  const add:ADD=(n1,n2)=>n1+n2;

  add(1,2);

}