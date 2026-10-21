console.log("script.js connected!");
const button=document.getElementById("searchbutton");
button.addEventListener("click", function(){
    const searchinput=document.getElementById("searchinput").value;
    const searchresult=document.getElementById("searchresult");
    searchresult.textContent=searchinput;
    console.log(searchinput);
    console.log( "search clicked");
    console.log("search resulted")
});
 
 const endpoint = "https://api.open-meteo.com/v1/forecast?latitude=34.3165&longitude=-84.5521&hourly=temperature_2m&timezone=America%2FNew_York"
 async function weatherget(){
    const response = await fetch(endpoint);
    return await response.json();}
 
  