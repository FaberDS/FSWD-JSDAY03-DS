
    // ---------------------------------Basic Exercise 1 JS Day 3 | Temperature
    document.getElementById("tempBtn").onclick = function temper() {

        var temp = Math.round((Math.random() * 33) - 5);

    
        if (temp >= 25) {
            document.getElementById("temperature").innerHTML = "The temperature is "+ temp + " it is hot! <br>";
        } else if (temp < 25 && temp > 10) {
            document.getElementById("temperature").innerHTML = "The temperature is "+ temp + " it is moderate! <br>";
        } else {
            document.getElementById("temperature").innerHTML = "The temperature is "+ temp + " it is cold! <br>";

        }
    }
// ---------------------------------Basic Exercise 2 JS Day 3 | Highest value
    var myarr = [];

    function addTo() {
        myarr.push(document.getElementById("input-value").value);
        console.log(myarr); //to confirm it has been added to the array
        var rangeMax = Math.max(...myarr);
        document.getElementById('maxResult').innerHTML = "At the moment the highest value you insert is: " + rangeMax;        
        // form.reset();
        document.getElementById('input-value').value = '';
    }
// ---------------------------------Basic Exercise 3 JS Day 3 | Product

      //create an array
    var myarr = [];
    var product = 1;
    //create a function
    document.getElementById("productBtn").onclick = function multiply() {
        //get the value of the Element with the id "input-value" and push it into the array
        myarr.push(document.getElementById("inputProduct").value);
        console.log(myarr);
        product = (product * myarr[myarr.length-1]);
        // for (i = 0; i<myarr.length; i++){
            
        // }
        
        document.getElementById("productResult").innerHTML = product;
        document.getElementById('input-value').value = '';
    }
// ---------------------------------Basic Exercise 4 JS Day 3 | First Letter UpperCase
        document.getElementById('uBtn').onclick = function upperCaseFirstLetter() {
        var uppercase = [];
        var upInput = document.getElementById('inputUpperCase').value; //get value from 
        //input
        uppercase = upInput.split(' ');


        for (var counter = 0; counter < uppercase.length; counter++) {
            uppercase[counter] = uppercase[counter].charAt(0).toUpperCase() + uppercase[counter].substr(1);
        }
        document.getElementById("inputUpperCase").value = ' ';

        return document.getElementById('upperCaseResult').innerHTML = uppercase.join(" ") + ".";

    }