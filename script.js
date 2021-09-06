var formValidate = true;
var evt;
/*Validate required fields*/
function validateRequired()
{
    try{
        var inputElements = document.querrySelectorAll("#contactinfo input");
        var errorDiv = document.getElementById("errorText");

        for(var i = 0; i < inputElements.length; i++)
        {
            //validate all input elements in fieldset
            var currentElement = inputElements[i];
            if(currentElement.value === "")
            {
                currentElement.style.background = "rgb(255,233,233)";
                throw "Please complete all fields.";
            }
            else {
                currentElement.style.background = "white";
            }
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch(msg)
    {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidate = false;

    }
}
/*Validate number fields for older browsers*/
function validateNumber()
{
    try{
        var numberInputs = document.querySelectorAll("#contactinfo input[type=number]");
        var numErrorDiv = document.getElementById("numErrorText");

        for(var i = o; i < numberInputs.length; i++)
        {
            //validate all input elements of type "number" in fieldset
            var currentElement = numberInput[i];
            if(isNaN(currentElement.value) || (currentElement.value === ""))
            {
                currentElement.style.background = "rgb(255,233,233)";
                throw "Zip and Social Security values must be numbers.";
            }
            else{
                currentElement.style.background = "white";

            }
        }
        numErrorDiv.style.display = "none";
        numErrorDiv.innerHTML = "";
    }
    catch(msg)
    {
        numErrorDiv.style.display = "block";
        numErrorDiv.innerHTML = msg;
        formValidate = false;

    }
}
/*validate form*/
function validateForm(evt)
{
    if(evt.preventDefault)
    {
        evt.preventDefault(); //prevent form from submitting
    }
    else{
        evt.returnValue = false; //prevent form from submitting in IEB
    }

    formValidate = true;
    validateRequired();
    validateNumber();
    if(formValidate === true)
    {

        document.getElementsByTagName("form")[0].submit();
    }


}
/*create event listeners*/
function createEventListener()
{
     var form = document.getElementsByTagName("form")[0];

     if(form.addEventListener)
     {
         form.addEventListener("submit", validateForm, false);
     }
     else if(form.attachEvent)
     {
         form.attachEvent("onsubmit", validateForm);
     }
}

if(window.addEventListener)
{
    window.addEventListener("load", createEventListener, false);
}
else if (window.attachEvent) {
window.attachEvent("onload", createEventListener);
}