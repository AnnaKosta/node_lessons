function hello(){
    console.log("Say hello");
};


function square(a){
  return(a*a);
};

function test(a){
   hello();
   
   const z=square(a);
   console.log(z);
};

module.exports=test;