/*let object={};
object.nestedobject={};
object.nestedobject.a=null;
const propertyname="b";
object.nestedobject[propertyname]=true;
console.log(object); */
 const myObject = {
     a:10,
     b:null
 };

 function myFunction()
 {
     console.log(this);
    
 }
 myFunction();
  myFunction.call(myObject);
