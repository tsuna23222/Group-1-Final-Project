function contactbutton () {
    var fullname = document.getElementById("name").value;
    var emailadd = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var commentery = document.getElementById("comment").valuek;

    if (fullname =="" && emailadd =="" && number =="" && commentery =="")
    {
        alert("Write Your Complain! :<");
        return false;
    }
    
    else 
    {
        alert("Thank You For The Feedback :)");
    }
}