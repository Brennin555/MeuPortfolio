function openMenu(){
    var x = document.getElementById("menuTopo");

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

}