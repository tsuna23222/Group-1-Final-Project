function contactbutton () {
    var fullname = document.getElementById("name").value;
    var emailadd = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var commentery = document.getElementById("comment").value;
    var contact = document.getElementById("contactus").value;
    if (fullname =="" && emailadd =="" && number =="" && commentery =="")
    {
        alert("Write Your Complain! :<");
        return false;
    }
    else if (contact ==""){
        alert("Write Your Comment or feedback!!");
    }
    
    else 
    {
        alert("Thank You For The Feedback :)");
    }
}