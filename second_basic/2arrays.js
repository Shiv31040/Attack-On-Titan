const marvel_heroes = ["ironman","blackwidow","CaptainAmerica","Hulk"]
const dc_heroes = ["Batman","Superman","Wonderwoman","Joker"]

// marvel_heroes.push(dc_heroes)
// const all_heroes = marvel_heroes.concat(dc_heroes)

// console.log(all_heroes);

const new_heroes = [...marvel_heroes , ...dc_heroes]
// console.log(new_heroes);

const jamun = [1,2,3,4,[1,2,3,4],9,8,7,[3,4,5,[5,6,7,8]]]
const jamun1= jamun.flat(4)


// console.log(jamun1);

// console.log(Array.isArray("SHIVAM"));
// console.log(Array.from("SHIVAM"));
// console.log(Array.of({name:"shivam"}));//interesting 

const score1= 100
const score2= 200
const score3= 300

// console.log(Array.of(score1,score2,score3));