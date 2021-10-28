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
        let fbArray = fizzBuzzC(fizzVal,buzzVal);
        //call display data and write values to the screen
        displayData(fbArray);
    }else{
        alert("You must enter a integer");
    }

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
            array.push("FizzBuzz");
        }
        else if(i % fizzVal != 0 && i % buzzVal == 0){
            array.push("Buzz");
        }
        else if(i % fizzVal == 0 && i % buzzVal != 0){
            array.push("Fizz");
        }
        else{
            array.push(i);
        }
        
    }

    return array;
}
//alternate method 2
function fizzBuzzB(fizzVal,buzzVal){
    let array = [];
    let isFizz = false;
    let isBuzz = false;

    for(let i = 1; i <= 100; i++){
        isFizz = i % fizzVal == 0;
        isBuzz = i % buzzVal == 0;

        switch(true){
            case isFizz == true && isBuzz == true:
                array.push("FizzBuzz");
                break;
            case isFizz == true:
            array.push("Fizz");
            break;
            case isBuzz == true:
                array.push("Buzz");
                break;
            default:
                 array.push(i);
                 break;
        }
    }
    return array;
}
//alternate method 3 using ternary operator
function fizzBuzzC(fizzVal,buzzVal){
    let array = [];
    
    for(let i = 1; i <= 100; i++){
        //blank space is false and a number char is true
        let val = ((i % fizzVal == 0 ? "Fizz" : '') + (i % buzzVal == 0 ? "Buzz" : '') || i);
        array.push(val);
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
        let rowCols = tblRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i + 1]);
        rowCols[1].textContent = fbArray[i + 1];

        rowCols[2].classList.add(fbArray[i + 2]);
        rowCols[2].textContent = fbArray[i + 2];

        rowCols[3].classList.add(fbArray[i + 3]);
        rowCols[3].textContent = fbArray[i + 3];

        rowCols[4].classList.add(fbArray[i + 4]);
        rowCols[4].textContent = fbArray[i + 4];

        //add all the rows to the table.
        tblBody.appendChild(tblRow);
    }
 


}