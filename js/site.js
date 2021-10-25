//get values from the users 
function getValues(){
    //get user values from page
    let fizzVal = document.getElementById("fizzValue").value;
    let buzzVal = document.getElementById("buzzValue").value;

    //check that values are integers
    fizzVal = parseInt(fizzVal);
    buzzVal = parseInt(buzzVal);

    if(Number.isInteger(fizzVal) && Number.isInteger(buzzVal)){
        //call fizzBuzz
        let fbArray = fizBuzz(fizzVal,buzzVal);
        displayData(fbArray);
    }else{
        alert("You must enter a integer");
    }

    //call fizzbuzz

    //call display data and write values to the screen

}

function fizzBuzz(fizzVal, buzzVal){
    //intialize array
    let array = [];

    //loop from 1 to 100
    for(let i = 1; i <= 100; i++){

         //check if divisible by fizz value and buzz value

        //check to see if divisible by fizz value 
    
        //check to see if divisible by buzz value 

        //finally if above checks result in not true add number into the array

        if(i % fizzVal == 0 && i % buzzVal == 0){
            array.push("fizzBuzz");
        }
        else if(i % fizzVal != 0 && i % buzzVal == 0){
            array.push("buzz");
        }
        else if(i % fizzVal == 0 && i % buzzVal != 0){
            array.push("fizz");
        }
        else{
            array.push(i);
        }
        
    }

    return array;
}

function displayData(fbArray){
    //get the table body element from the page
    let tblBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear the table first
    tblBody.innerHTML = "";
    //loop over the array and create a table row for each item.
    for(let i = 0; i < fbArray.length; i++){
        let tblRow = document.importNode(templateRow.content,true);

        //get td from content and put into array
        let rowCols = tblRow.quarySelectorAll("td");
        
    }
    //add all the rows to the table.


}