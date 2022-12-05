function confirm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username =="" && password =="")
    {
        alert("Login Failed!!!");
        return false;
    }
    else if (password =="")
    {
        alert("Input The right Username");
    }
    else if (username =="")
    {
        alert("Input The right Password");
    }

    else
    {
        alert("Login Successfully :)");
    }
}