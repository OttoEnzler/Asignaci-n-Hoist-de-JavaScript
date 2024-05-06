/* PRIMERA PREDICCION
console.log(hello);                                   
var hello = 'world';*/                              
//var hello;
//console.log(hello); //logs undefined
//hello = 'world';

/* SEGUNDA PREDICCION
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}*/ 
//var needle;
//needle = 'haystack';
//test()
//function test() {
//      var needle;
//      needle = 'magnet';
//      console.log(needle); //logs magnet
//}

/* TERCERRA PREDICCION 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);*/
//var brendan
//brendan = 'super cool'
//function print(){
    //brendan = 'only okay'
    //console.log(brendan); //logs only okay
//}
//console.log(brendan)//logs super cool

/* CUARTA PREDICCION
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}*/
//var food;
//food = 'chiken';
//console.log(food); //logs chicken
//eat();
//function eat(){
//      food = 'half-chicken';
//      console.log(food); //logs half-chicken
//      var food;
//      food = 'gone';
//}
/* QUINTA PREDICCION
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);*/
//mean(); //Reference error
//console.log(food);// Reference error
//var mean;
 //mean = function() {
 //      food = "chicken";
 //      console.log(food);// logs chicken
 //      var food; 
 //      var = "fish";
 //      console.log(food);// logs fish
 //}
 //console.log(food);//Reference error

/* SEXTA PREDICCION
dojo = "
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);*/

// console.log(genre); //logs undefined
// var genre;
// genre = 'disco';
// rewind();
// function rewind() {
    // genre = 'rock';
    // console.log(genre); //logs rock
    // var genre;
    // genre = 'r&b';
    // console.log(genre); //logs r&b
//}
// console.log(genre); // disco

/* SEPTIMA PREDICCION
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);*/

//var dojo;
//dojo = 'san jose';
//console.log(dojo);//logs san jose
//learn();
//function learn() {
    //var dojo;
    //dojo ='seattle';
    //console.log(dojo);//logs seattle
    //dojo = 'burbank';
    //console.log(dojo);//logs burbank
//}
//console.log(dojo);//log san jose

/* OCTAVA PREDICCION
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}*/

//console.log(makeDojo("Chicago", 65));
//console.log(makeDojo("Berkeley", 0));
//function makeDojo(name, students){
//    const dojo = {};
//    dojo.name = name;
//    dojo.students = students;
//    if(dojo.students > 50){
//        dojo.hiring = true;
//    }
//    else if(dojo.students <= 0){
//        dojo = "closed for now";// ERROR: Quiere asignar un valor a una constante
//    }
//    return dojo;
//}