function calculate(){

    //Getting variables
    var figure = document.getElementById("figure").value;
    var operation = document.getElementById("operation").value;
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var result = document.getElementById("result");

    //Checking figure
    if(figure == "square"){

        //Checking operation
        if(operation == "area"){

            //Calculatinga
            var value = base * height;

            //Displaying
            result.innerHTML = result.innerHTML + value;

        }

    }

}