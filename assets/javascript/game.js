// Show the user random integer number between 19-120

    // Chose random integer value inbetween set parameters - set as variable 

    var randomNumber = []
        for (var i =19; i<=120; i++){
            randomNumber.push(i)
        }
    console.log(randomNumber)

    // DOM-- documentget element by id display to div id "#randomNumber"


// Assign the crystals random integer values

    // Give each crystal #id a random value 1-12 ; hidden value

  var randomValue = ("#crystalOne","#crystalTwo", "#crystalThree", "#crystalFour")
  randomValue = (Math.floor(Math.random()* 12)+1)
  console.log(randomValue)

// On click function for each image




    // Add random value of crystal click to var userScore



// Function to win game 

    // If userscore integer == random number score

    // Add +1 to wins, documentgetelmentId to display number of wins



//Function game loss

    // If userscore integer > random number integer

    //Add +1 to loss, documentgetelement to display in HTML



// When number of losses or wins increases by one, game reset


    // Set an new rando integer value from 19-120 to randomscore

    // Assign random values 1-12 to each respective crystal id 
