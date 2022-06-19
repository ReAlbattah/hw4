// Home Work day 4;

let person=[
    {name:"reem ",height:156,gender:"F",mass:60,eye:"black"},
    {name:"aziz ",height:170,gender:"M",mass:75,eye:"black"},
    {name:"renad ",height:160,gender:"F",mass:55,eye:"black"}
]
// Get array of objects with just name and height properties

function getName_Height(params){
    return [params.name , params.height];
}
const newmap=person.map(getName_Height);
console.log(newmap);

//Get array of all first names

function getname(params) {
    return params.name;
}
const newmap1=person.map(getname);
console.log(newmap1);

//Get total mass of all characters

const sum=person.reduce((previousValue, currentValue) => previousValue + currentValue.mass,0)
console.log(sum);

//Get total number of characters in all the character names

// function char_count(params) 
// {
//  let letter_Count = 0;
//  for (var i = 0; i < person.name.length; i += 1){
//       params[i].charAt();
//       letter_Count += 1;
//   return letter_Count;
// }
// }
// const count=char_count(person.name);

//Get characters with mass greater than 100

const a= person.filter(function getH(params) {
    return params.mass>100;
})
console.log(a);

//Get all female characters

const female= person.filter(function getg(params) {
    return params.gender==="F";
})
console.log(female);

//Sort by name

const s=person.sort(function (x, y) {
    let a = x.name.toUpperCase(),
    b = y.name.toUpperCase();
return a == b ? 0 : a > b ? 1 : -1;
});
console.log(s);

//sort by gender

const g=person.sort(function (x, y) {
    let a = x.gender.toUpperCase(),
    b = y.gender.toUpperCase();
return a == b ? 0 : a > b ? 1 : -1;
});
console.log(g);

//Does every character have blue eyes?

const eve=person.every(x => x.eye==="blue");
console.log(eve);

//Does every character is male?

const evem=person.every(x => x.gender==="M");
console.log(evem);

//Is there at least one male character?

const some1=person.some(x => x.gender==="M");
console.log(some1);

//Is there at least one character that has mass less than 50?

const some2=person.some(x => x.mass<50);
console.log(some2);