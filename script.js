/* 1. Napraviti funkciju koja proverava da li su broju cifre u rastućem poretku. Primer:
 n=359 cifre jesu u rastućem poretku
 n=638 cifre nisu u rastućem poretku
 n=9 cifre jesu u rastućem poretku
 n=777 cifre nisu u rastućem poretku
 */
 /*
 n1=359 ;
 n2=638 ;
 n3=9 ;
 n4=777 ;
 n5=479;


function rastuciNiz(a){
let pretvorenBr = a.toString();
for(let i=0;i<pretvorenBr.length;i++){
    
    if(pretvorenBr[i]>=pretvorenBr[i+1]){
        return false;

    }else{
        return true;
    }

}
}

console.log(rastuciNiz(n2));


     */
     /* 2. Napraviti funkciju koja proverava da li je prosleđeni argument palindrom. Palindrom je reč koja 
se isto čita sa obe strane. Primer:
anavolimilovana je palindrom
sirimamiris je palindrom
beograd nije palindrom
*/




/////////////////////////////* PALINDROM */////////////////////////////////
/*
let a = 'anavolimilovana';
let s = 'sirimamiris';
let b = 'beograd';

function palindrome(str){
    var re = /[\W_]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
   for(var i=0;i<len/2;i++){
        if(str[i] !== str[len - 1 - i]){
        return false
        }else{
       return true
        }
        }

}

console.log(palindrome(c))
*/


/*
function palindrome(str){
    let len = str.length;
    let start = str.substring(0,Math.floor(len/2)).toLowerCase();
    let end = str.substring(len-Math.floor(len/2)).toLowerCase();
    let flip = end.split('').reverse().join('');
    return (start == flip)
    
}

console.log(palindrome(a))
console.log(palindrome(s))
console.log(palindrome(b))
*/

/////////////////////////////* PALINDROM */////////////////////////////////

/***************************** matrix ****************************/
/*
let a1 = [
  [1,5,8],
  [2,8,4],
  [9,7,6]
] ;
let a2 =  [];


function novamatrica(a){
  for(let i=0;i<a.length;i++ ){
  for(let j=0;j<a[i].length;j++){
     document.write(a[j][i]) 
}
document.write('<br>') 
  }
  
}

novamatrica(a1);
*/
/*

let arr1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let arr2 = [
    [],
    [],
    []
]
/*
class Solution {
    solve(matrix) {
        let arr=[];
        for(let i=0;i<3;i++){
            arr.push([])
            for(let j=0;j<3;j++){
                arr[i].push(matrix[j][i])
            }
        }
        return arr
    }
}

let s1 = new Solution();
*/

/*
  function transpose(matrix){
   for(var i=0; i<matrix.length; i++){
        matrix[i]=matrix[i].join(' ')+'<br>';
        arr2[i]=Math.floor(Math.random()*10);
   }
   return arr2;
  }
document.write(transpose(arr1))
*/
/*
let arr1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
 
];
var matrix = [];

function transpose(niz){
    for(var i = 0; i < niz.length; i++) {   
        for(var j = 0; j < niz[i].length; j++) {           
         niz[i][j]=Math.floor(Math.random() * 10);
        var x = niz[j][i]
         document.write(x + ' ');
        }        
        document.write('<br>')
    }
   
}
transpose(arr1)
*/

/************************* sum najmanjeg reda i izbacivanje **************************/
/*
let arr1 = [
    [2,4,8],
    [3,1,9],
    [1,2,1],
    [9,9,8]
  ];
 function izbacivanje(niz){
    let sum1 = [];
    let minSum = [];
    for(let i=0;i<niz.length;i++){
        sum1 = niz[i].reduce((a,b)=>a+b,0);
        
        console.log(sum1)   
    }
    
       
}
 izbacivanje(arr1)
  */

 /*
 let arr1 = [
    [2,4,8],
    [3,1,9],
    [1,2,1],
    [9,9,8]
  ];
function izbacivanje(arr){
    var lowestSum = 0;
    for (var i = 0; i < arr.length; i++) {
      var sum = 0;
      for (var j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
      if (lowestSum == 0 || sum < lowestSum)
        lowestSum = sum;
    }
    return lowestSum;
}
 

 console.log(izbacivanje(arr1))

 
  */

  let arr1 = [
    [2,4,8],
    [3,1,9],
    [1,2,1],
    [9,9,8]
  ];
 function izbacivanje (arr){
    let lowestSum =0;
    for(let i=0;i<arr.length;i++){
       let sum = 0;
       //if()
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j];
            
        }
        if(lowestSum==0 || sum<lowestSum) lowestSum=sum;
  
    }
   // return lowestSum
 }
 
 console.log(izbacivanje(arr1)) 

 
 /***************** beo+grad *******************/
/*
 let a1 = 'beo';
 let a2 = 'grad';
 
 function mesanjeBrojeva(a,b){
     let br1 = a;
     let br2 = b;
     let result = '';
     for(let i=0;i<Math.max(br1.length,br2.length);i++){
         if(br1.length>i){
             result+=br1[i]
         }
         if(br2.length>i){
             result+=br2[i]
         }
         
     }
     
    return result;
 }
 
 console.log(mesanjeBrojeva(a1,a2))
 */

 /*****************  a) Napraviti funkciju koja vraća koliko broj (poslati parametar) ima cifara.
 b) Napraviti program koji sabira sve brojeve u nizu koju su n-tocifreni. Niz i n unosi 
korisnik.
Primer
n=3 niz: 53, 100, 4, 2345, 150 rezultat: 250 *******************/
/*

var arr = [53,100,4,2345,150,100,1142];

let duzinaBroja;


function sabiranje(niz){
let zbir=0;  
 for(let i=0;i<niz.length;i++){   
    duzinaBroja=niz[i].toString().length;
    if(duzinaBroja == 3) 
    zbir=zbir+niz[i];    
   }
return zbir;
 }
 console.log(sabiranje(arr))

*/
 



/***************** zvezdice oblik *****************/

/*
let n = 6;



for(var i=1;i<=n;i++){

    for(var j=1;j<=(n-i);j++){
document.write("&nbsp;");
    }
    for(var k=1;k<=i;k++){
        document.write('*');
    }
    document.write('<br>')
}
*/
//jelka ^

/*
let n = 6;
let string = "";  

for(var i=1;i<=n;i++){
    for(var j=1;j<=i;j++){
        document.write('*');
    }   
    document.write('<br>')
}

*/

//leva polovina ^
/*
let n = 6;
let string = "";  

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += "&nbsp;&nbsp;";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "<br>";
  }
document.write(string);
*/
//desna polovina ^

/*
let n = 6;
let string = "";  

for (let i = 1; i <= n; i++) {
    // printing star
    for (let j = 0; j < i; j++) {
      if(i === n) {
        string += "*";
      }
      else {
        if (j == 0 || j == i - 1) {
          string += "*";
        }
        else {
          string += "&nbsp;&nbsp;";
        }
      }
    }
    string += "<br>";
  }
 document.write(string);
 */

 /*
 let n = 6;

function stars(a){
for(let i=1;i<=a;i++){


for(let j=1;j<=a;j++){
    if(i==n || i==1){
        document.write('*', ' ');
    }else{
        if(j==1||j==a||j==(n-i)+1){
            document.write('*',' ');
        }else{
            document.write("&nbsp;&nbsp;"," ");
        }
        
    }
    
    
}

document.write('<br>')
}
}


stars(n)
*/