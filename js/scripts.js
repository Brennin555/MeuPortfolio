function openMenu(){
    var x = document.getElementById("menuTopo");
    var y = document.getElementById("menuTopo2");

    if(x.className === "menuTopo")
    {
        x.className += " menuJs";
        document.getElementById("menuIcon").innerHTML = "&Cross;";
    }
    else
    {
        x.className = "menuTopo";
        document.getElementById("menuIcon").innerHTML = "&#9776;";
    }

    if(y.className === "menuTopo2")
    {
        y.className += " menuJs";
        document.getElementById("menuIcon").innerHTML = "&Cross;";
    }
    else
    {
        y.className = "menuTopo";
        document.getElementById("menuIcon").innerHTML = "&#9776;";
    }


}