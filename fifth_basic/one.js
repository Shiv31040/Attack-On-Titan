//for

for (let n = 0; n <= 10; n++) {
    const element = n;
    // console.log(element);
    
}


for (let n = 0; n <= 10; n++) {
    // console.log(` TABLE OF ${n}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`the value of inner loop is ${j} and outer loop is ${n}`);
        // console.log(`${n} * ${j} = ${n*j}`)
    }
    
}


//Break and Continue 

for (let n = 1; n <= 20 ; n++) {
    if (n==5) {
        // console.log('Detected 5');
        break
    }
    
    // console.log(n);
    
}
for (let n = 1; n <= 20 ; n++) {
    if (n==5) {
        console.log('Detected 5');
        continue
    }
    
    console.log(n);
    
}