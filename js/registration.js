// Checks if ID number is valid by checking its first two indexes.
function formValidation() {
    var idInput = document.getElementsByName('idNumber')[0].value;
    var idNumber = idInput.substring(0, 2);

    if (idNumber === "71" || idNumber === "81" || idNumber === "53") {
        alert("Your form has been submitted. You will now be redirected to a confirmation page.");
        return true;
    } else {
        alert("Please input a valid ID number. If the first two integers of your ID do not match the school district standard, contact a club leader.");
        return false;
    }
}
