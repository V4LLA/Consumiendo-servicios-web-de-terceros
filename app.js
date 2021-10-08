const btnCargar= document.getElementById("btnCalc");
btnCargar.addEventListener("click",()=>{
    let request = new XMLHttpRequest();
    let lat = document.getElementById("Latitud").value, lon= document.getElementById("Longitud").value
    fetch('https://us1.locationiq.com/v1/reverse.php?key=pk.d52c6a33b1ee6d6c67a06d588778e57f&lat=' +lat +'&lon=' +lon +'&format=json') 
    .then(response => response.json())
    .then(json => {
        let punto= document.getElementById("punto");
        punto.innerHTML= `
        <h2>Informacion</h2>
        <p>${json.display_name} </p>
        `;
    })      
    request.open("get",'http://api.weatherstack.com/current?access_key=b3d3ff7bd26c2398a31de730bbf00415&query=' +lat +"," +lon);
    request.onload = function()
        {
            let data = JSON.parse(this.response);
        
            let clima = document.getElementById("clima");

            clima.innerHTML = `
                <h2>Lugar: ${data.location.name}</h2>
                <p>Pais: ${data.location.country}</p>
                <p> La temperatura es de: ${data.current.temperature}°</p>
                <p> Descripción del clima: ${data.current.weather_descriptions[0]}</p>
            `;
        };
    request.send();
})
