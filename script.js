//დავალება 1 
function f1(a,b){
    //console.log(typeof a);
    if(typeof a == 'number' && b == 'number'){
        return a+b
    }else{
        return 'შეცდომა მატრიცაში';
    }
}
f1(101,2);

//დავალება 2
function f2(f){
    if(typeof f == 'number'){
        return (5/9) * (f-32) ;
    }else return 'false'
}
f2(459.67);

//დავალება 3
function f3(x,y,o){
    if(typeof x == 'number' && typeof y == 'number' && (x=='+' || x=='-'  || x=='*' || x=='/' )){
        if(x=='+'){
            return x+y;
        }else if(x=='-'){
            return x-y;
        }else if(x=='*'){
            return x*y;
        }else if(x=='/'){
            return x/y;
        }
    }else return 'false'
}

///////////////დავალება 2.1
let users1 =  [
                {name: 'Temo', age:25}, 
                {name: 'Lasha', age: 21},
                {name: 'Ana',age: 28}
            ];

function f(users1){
    let obj = users1.find(o => o.age == '21');
    return obj.name;
 }   
f(users1);


//////////////დავალება 2.2
const x = {
    firstname:'sopo',
    surname:'chokuri',
    username:'choqurisofo'
}
function f2(x){
    const y = {
        firstname:'sopo',
        surname:'chokuri',
        username:'choqurisofo'
    };
    return y;
 }   
console.log(f2(x));


//////////////////დავალება 2.3
function getRandomNumber(){
   return parseInt(Math.random()*6+1);
}
let a13=0;
let b13=0;
while ((a13!=3 && b13!=3) || a13+b13==6){
    a13=getRandomNumber();
    b13=getRandomNumber();
    console.log(a13+"---"+b13)
}

if (a13==3) {
    console.log("a13 is winner")}
else  { 
    console.log("b13 is winner")
}



///primitiuli
let a1 = 43;
const b1 = a1;
a1 = 111;
console.log(a1);
console.log(b1);

///araprimitiuli
const a2={
    firstname:'sopo',
    surname:'chokuri',
    username:'choqurisofo'
}
const b2 = a2;

b2.firstname='sandro';
a2.firstname='mariam';
console.log(a2);
console.log(b2);
///for with 
const c2={
    firstname:'sopo',
    surname:'chokuri',
    username:'choqurisofo'
}
for(const item in c2){
    console.log(c2);
}

f3(1,2,'+');

///object destucturing
const car = {
    color:'white',
    year:2023
}

const{color,year} = car;
console.log(color);


///array destucturing
const brands = ['apple','hp','asus']

const[a,,c] = brands;
console.log(a,c);



///object destucturing
const car2 = {
    color:'white',
    year:2023,
    parameter:{
        dzrava:'t1',
        sache:'marcxniv',
        saburavi:{
            type:'zamtris'
        }
    }
}

const{color:myfirstname,year:myyear,parameter:{dzrava,sache,saburavi:{type}}} = car2;
console.log(myfirstname,myyear,dzrava,sache,type);


// function myprofile( parameter:{ saburavi:{type}){
//     return type
// }

console.log(myprofile(car2));





