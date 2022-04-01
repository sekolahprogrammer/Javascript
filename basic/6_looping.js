/* 
 * for loop
 */

for(let i = 0;i < 10;i++){
    console.log(i);
}

for(let i = 1;i < 10;i++){
    console.log(i);    
}

for(let i = 0;i < 10;i += 2){
    console.log(i);    
}

/* 
 * while loop
 */
let siswa = 0;

while(siswa < 25){
    siswa++;
    console.log(`siswa ke : ${siswa}`);
}

/* 
 * do while loop
 */

let siswa = 0;

do{
    siswa++;
    console.log(`siswa ke : ${siswa}`);  
}while(siswa < 25);

/* 
 * break loop
 */
for(let i = 1; i<= 10;i++){
    if(i == 6){
        console.log('break');
        break;
    }
    console.log(i);
}

/* 
 * continue loop
 */
for(let i = 0;i <= 10;i++){
    if(i === 5){
        continue;
    }    
    console.log(i);
}