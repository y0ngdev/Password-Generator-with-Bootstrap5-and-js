function genPass() {
    // define result variable 
    var Password = "";
    // define allowed characters
    var characters = "0123456789@#$%!-&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // define length of password character
    var long = "30";
    for (var i = 0; i < long; i++) {
        // generate password
        gen = characters.charAt(Math.floor(Math.random() * characters.length));
        Password += gen;
    }
    // send the output to the input
    document.getElementById('pass').value = Password;
}
// Copy password button
function copy() {
    // get password from input text field
    var copyText = document.getElementById("pass");
    // Set selection range to copy longer text on mobile devices
    copyText.setSelectionRange(0, 9999);
    //Copy the text from the text field 
    navigator.clipboard.writeText(copyText.value);
    // Get the toast container
    var x = document.getElementById("toast")
    // Add the "show" class to the container
    x.className = "show";
    //Show toast for 3sec
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}