  function regis() {
    var firstn = document.getElementById("firstname").value;
    var lastn = document.getElementById("lastname").value;
    var usern = document.getElementById("username").value;
    var emailadd = document.getElementById("email").value;
    var gend = document.getElementById("gender").value;
    var passw = document.getElementById("password").value;
    var conpassw = document.getElementById("conpass").value;

    if (firstn =="" && lastn == "" && usern =="" && emailadd =="" && gend =="" && passw =="" && conpassw =="")
    {
       alert("Put Your Information");
       return false;
    }
    else
    {
      alert("Registration Successful")
    }
    
  }
