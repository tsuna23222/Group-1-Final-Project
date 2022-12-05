function reserv () {
    var fullname = document.getElementById("name").value;
    var phonenum = document.getElementById("number").value;

    if (fullname ==""&& phonenum == "")
    {
        alert("Put Some Information!!!");
        return false;
    }
    else
    {
        alert("Reservation Succesful");
    }
}