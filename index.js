console.log("hello");
console.log(12232);

let aa = 34;
 
let object = {}

// *************conditions**********
age = 17
if(age >= 18){ 
    console.log("you can drive car ");
   
} else{ 
    console.log("you cant drive ");
    
}

// ******loop***************

for(let i= 0;i<18;i++){
    console.log(i,"hii siddhant") 

}
let j = 0;
while(j<10){ 
    console.log(j);
    j= j+1;

}
// ***************function *****************
console.log("wellcome to th function in js ")

function chai (){ 
    console.log("take a container ");
    console.log("and add some milke and water");
    console.log("then mix the ingrediat on it ");
    console.log("boiled it for 10 min")
    console.log("wait...");
    console.log("now your tea is ready enjoy it ");   
}

function upchai(milkequn, sugar){ 
    console.log("take a container ");
    console.log("and add " , milkequn ,"ml milke and water");
    console.log("then mix the ingrediat" ,"sugar", sugar," on it ");
    console.log("boiled it for 10 min")
    console.log("wait...");
    console.log("now your tea is ready enjoy it "); 
    return "tea ready to enjoy";

}
upchai(100,6)
upchai(2,0)

let fun = upchai()
console.log(fun);

function fectorial(num){   //perametar
    let result =1;
   for( i=1;i<=num;i++){ 
       result = result*i;

   }
   return result;
}

let fec = fectorial(16);
console.log(fec);  //argument

function print (massege){ 
console.log(massege)
}
 
print("hello is this a print fun ")
  
let a = 23
let b = a
console.log(b);
console.log(a);

a =43
console.log(b);
console.log(a)

function attandjsclass(){ 
    console.log("attedding the class")
    getdinner()
}
function getdinner (){
    console.log("get the food ");
    getprectice();

    
}
function getprectice(){ 
    console.log("prectices js ");

}
attandjsclass()

function logError(massege){ 
    console.log("Error: ", massege);
    

} 
function logsuccess(massege){ 
    console.log("success: " , massege);
    

} function logwaer(massege){ 
    console.log("warn: " , massege);
    

}
function createlogger(){ 
    function loggingfun(){ 
        console.log("loggin function");
        
    }
}
