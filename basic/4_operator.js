/*
    operator aritmatika
*/
var x = 10;
var y = 3;

var a = x + y;  // punjumlahan
var b = x - y;  // pengurangan
var c = x * y;  // perkalian
var d = x / y;  // pembagian
var e = x ** y; // pemangkatan
var f = x % y;  // modulus(sisa bagi) 
var g = x; // increment -> brtambah
var i = y; // deckrement -> berkurang

console.log(a); // 13
console.log(b); // 7
console.log(c); // 30
console.log(d); // 3.33
console.log(e); // 1000
console.log(f); // 1
console.log(x++, x++, x++); // 10 11 12
console.log(y--, y--, y--); // 3 2 1



// /*
//     operator penugasan
// */
let x = 10;
let y = 3;

x += y; // 13
x -= y; // 7
x *= y; // 30
x /= y; // 3.33
x **= y; // 1000
x %= y; // 1

console.log(x);

// /*
//     operator string
// */
// //penggabungan
let firstName = 'apple';
let lastName = 'merah';
let fullName = firstName + " " + lastName;
console.log(fullName); // apple merah

// //penugasan
let namaBuah = 'cherry';
namaBuah += ' warna merah';
console.log(namaBuah);

// /*
//     operator perbandingan
// */
var x = 10;
var y = 3;

var a = x == y;
var b = x === y;
var c = x != y;
var d = x !== y;
var e = x > y;
var f = x < y; 
var g = x >= y;
var h = x <= y;
var i = (x >= y) ? 'true':'false';

console.log(a); // false
console.log(b); // false
console.log(c); // true
console.log(d); // true
console.log(e); // true
console.log(f); // false
console.log(g); // true
console.log(h); // false
console.log(i); // true


// /*
//     operator logika
// */
var x = 10;
var y = 3;

var a = (x > y && y < x);
var b = (x == 5 || y == 5);
var c = !(x == y);


console.log(a); // true
console.log(b); // false
console.log(c); // true

// /*
//     operator jenis
// */
var x = 10;
var y = 'buah';

var z = typeof(x) + ' & ' + typeof(y);
console.log(z);
