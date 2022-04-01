/* 
 * function
 */
(function(){
    console.log('hallo!');
})();

function num(){
    console.log(21);
}
num();

const str = function(){
    console.log('putriajeng');
}
str();

// dengan parameter
function hallo(name){
    return `hallo ${name}`;
}
console.log(hallo('prayogaea'));

function tambah(a, b){
    return a + b;
}
console.log(tambah(2, 5));
