// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"));

displayData(matchArr);

document.querySelector("#filterVenue").addEventListener("change",handleFilter)

function handleFilter(){
    var selected = document.querySelector("#filterVenue").value;
    var filteredList = matchArr.filter(function(data){
       return data.matchVenue == selected
    });
    displayData(filteredList);
}

var favouriteArr =JSON.parse(localStorage.getItem("favourites"))||[];

function displayData(data){
    matchArr.forEach(function(elem){
        document.querySelector("tbody").innerHTML="";

        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText= elem.matchNumber;

        var td2 = document.createElement("td");
        td2.innerText = elem.matchTeamA;

        var td3 = document.createElement("td");
        td3.innerText = elem.matchTeamB;

        var td4 = document.createElement("td");
        td4.innerText = elem.matchDate;

        var td5 = document.createElement("td");
        td5.innerText = elem.matchVenue;

        var td6 = document.createElement("td");
        td6.innerText="Add to Favourites"
        td6.style.color="green";
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(elem){
            addFavouriteFun();
        })

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr); 
    })
}


function addFavouriteFun(elem,index){
    
    localStorage.setItem("favourites",JSON.stringify(favouriteArr))

    window.location.href="favourites.html"
}

        
