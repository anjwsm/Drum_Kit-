/* var message = "Hello";
var name =" Anjali";
console.log(message + " there" + "," + name) */


/* var tweet = prompt("Compose");
var tweetCount = tweet.length;
prompt = "Apple is red. It is a very sweeet fruit.";
console.log("You have written" + tweetCount + " characters , you have" + (40 - tweetCount) + " characters remaining") */

/* var name = "Anjali";
name.slice(0,1);
name.slice(2,5);
console.log(name.slice(0,1));
console.log(name.slice(2,5));
console.log(name.slice(5,6)); */

// var name = "Anjali";
 // name.toUpperCase;
// console.log(name.toUpperCase);


/*function lifeInWeeks(age){
    var years = 90 - age ;
    var days = years * 365 ;
    var months = years * 12 ;
    var weeks = years * 52 ;

    console.log( "You have " + years + " years " + days + " days " + months +" months " + weeks + " weeeks remaining")
}
lifeInWeeks(20); */

/*function bmiCalculator(weight , height){
    var bmi = weight / (height * height) ;
    return bmi ;
}
bmiCalculator (65,1.5); */

// var n = Math.random();
// console.log(n);

function bmiCalculator(weight , height){
var bmi = weight/(height*height);
    return bmi;
}
if (bmi < 18.5 ) {
    console.log ("Your BMI is " + bmi +" ,so you are underweight ")
}
if (18.5<= bmi <= 24.9){
    console.log ("Your BMI is " + bmi +" ,so you have a normal weight ")
}
if (bmi > 24.9){
    console.log ("Your BMI is " + bmi +" ,so you are overweight ")
}
bmiCalculator (65 , 1.5) ;
