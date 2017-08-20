// Checks if ID number is valid by checking the first two indexes.
function formValidation() {
    var input = document.getElementsByName("student-id")[0].value;
    var idNumber = input.substring(0, 2);

    if (idNumber === "71" || idNumber === "81" || idNumber === "53") {
        alert("Done! We will now redirect you to a confirmation page.");
        return true;
    } else {
        alert("Whoops! Looks like your ID number isn't one we recognize. Try typing it in again, or contact a club member for help.");
        return false;
    }
}
