// Show the user random integer number between 19-120

    // Chose random integer value inbetween set parameters - set as variable 

    var randomNumber = []
        for (var i =19; i<=120; i++){
            randomNumber.push(i)
        }
    console.log(randomNumber)
//Jquery object display
var randomNumber = $("#randomNumber")[0]
// Assign the crystals random integer values

    // Give each crystal #id a random value 1-12 ; hidden value

  var randomValue = ("#crystalOne","#crystalTwo", "#crystalThree", "#crystalFour")
  randomValue = (Math.floor(Math.random()* 12)+1)
  console.log(randomValue)

// On click function for each image
$(".crystals").on("click", function() {
    // Add random value of crystal click to var userScore
    






// Function to win game 

    // Winner looser Alert
$ (".crystals").click () {
    if (userScore === randomNumber) {
        alert("Winner!")
        else if (userScore > randomNumber) {
            alert("Looser")
        }
    } } 
    
    

    // Add +1 to wins, documentgetelmentId to display number of wins



//Function game loss

    // If userscore integer > random number integer

    //Add +1 to loss, documentgetelement to display in HTML



// When number of losses or wins increases by one, game reset


    // Set an new rando integer value from 19-120 to randomscore

    // Assign random values 1-12 to each respective crystal id 
