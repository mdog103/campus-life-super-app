console.log("script.js connected!");
const button=document.getElementById("searchbutton");
button.addEventListener("click", function(){
    const Maplink="https://www.google.com/maps/place/Reinhardt+University/@34.3205083,-84.5535262,17z/data=!3m1!4b1!4m6!3m5!1s0x88f5613d4f1f99cb:0xb307ba32919d7c8c!8m2!3d34.3205083!4d-84.5509513!16zL20vMDhfbjRt?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D";
    window.open(Maplink);
    console.log( "search clicked");
    
});
 
 const endpoint = "https://api.open-meteo.com/v1/forecast?latitude=34.3165&longitude=-84.5521&hourly=temperature_2m&timezone=America%2FNew_York"
 async function weatherget(){
    const response = await fetch(endpoint);
    return await response.json();}
     
    weatherget().then(data=>{
      const  temperature=data.hourly.temperature_2m[0];
      const weatherresult=document.getElementById("weatherresult");
      weatherresult.textContent=temperature+"°C";})
      
     
    
    
    

 
  