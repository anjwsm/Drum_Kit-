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

/* function bmiCalculator(weight , height){
var bmi = weight/(height*height);
if (bmi < 18.5 ) {
    console.log ("Your BMI is " + bmi +" ,so you are underweight ")
}
if (bmi>=18.5 && bmi<= 24.9){
    console.log ("Your BMI is " + bmi +" ,so you have a normal weight ")
}
if (bmi > 24.9){
    console.log ("Your BMI is " + bmi +" ,so you are overweight ")
}}
bmiCalculator (65 , 1.5) ;*/

/* function leapYear(year){
    if (year % 4 === 0) {
        if (year % 100 === 0){
         if (year % 400 === 0){
            return "true";
         }
         else { return "false" ; }
        }
        else {return "false ";}
    }
    else 
    {return "false ";}
    }

    console.log(leapYear(2000)) */

    // var guestList = ["Anjali" , "Gia","Abhi" , "Priya" ,"Sia"];
    // guestList.includes("Sia");

     /* var output = [];
    var count = 1;
    function fizzbuzz {
        whileCount == 100 {
        if (count % 3 === 0 && count % 5 === 0){
            output.push("fizzbuzz");
        }
        else if (count % 3 === 0){
            output.push("fizz");
        }
        else if (count % 5 === 0){
            output.push("buzz");
        }
        else {
            output.push(count);
        }
        count++ ;
        }
        console.log(output);
    }
    fizzbuzz(); */

    function fibonacciGenerator(n) {
        var output = [] ;
        if (n === 1){
            output = [0];
        }
        else if (n === 2){
            output = [0 , 1] ;
        }
        else {
            output = [0,1];
            for ( var i = 2 ; i<n ; i++){
                output.push(output[output.length - 2] + output[output.length - 1]);
            }
        }
        return output ;
    }
    output = fibonacciGenerator(10);
    console.log(output);
    

