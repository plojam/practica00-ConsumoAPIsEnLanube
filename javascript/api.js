detalles2=[{"id":1,"nombre":"Danica"},
{"id":2,"nombre":"Erinna"},
{"id":3,"nombre":"Roana"},
{"id":4,"nombre":"Albert"},
{"id":5,"nombre":"Carolus"},
{"id":6,"nombre":"Leese"},
{"id":7,"nombre":"Giuditta"},
{"id":8,"nombre":"Selie"},
{"id":9,"nombre":"Luther"},
{"id":10,"nombre":"Mirabelle"}]
//detalles3={"response":"success","results-for":"batman","results":[{"id":"69","name":"Batman","powerstats":{"intelligence":"81","strength":"40","speed":"29","durability":"55","power":"63","combat":"90"},"biography":{"full-name":"Terry McGinnis","alter-egos":"No alter egos found.","aliases":["Batman II","The Tomorrow Knight","The second Dark Knight","The Dark Knight of Tomorrow","Batman Beyond"],"place-of-birth":"Gotham City, 25th Century","first-appearance":"Batman Beyond #1","publisher":"DC Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["5'10","178 cm"],"weight":["170 lb","77 kg"],"eye-color":"Blue","hair-color":"Black"},"work":{"occupation":"-","base":"21st Century Gotham City"},"connections":{"group-affiliation":"Batman Family, Justice League Unlimited","relatives":"Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"},"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10441.jpg"}},{"id":"70","name":"Batman","powerstats":{"intelligence":"100","strength":"26","speed":"27","durability":"50","power":"47","combat":"100"},"biography":{"full-name":"Bruce Wayne","alter-egos":"No alter egos found.","aliases":["Insider","Matches Malone"],"place-of-birth":"Crest Hill, Bristol Township; Gotham County","first-appearance":"Detective Comics #27","publisher":"DC Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["6'2","188 cm"],"weight":["210 lb","95 kg"],"eye-color":"blue","hair-color":"black"},"work":{"occupation":"Businessman","base":"Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"},"connections":{"group-affiliation":"Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps","relatives":"Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"},"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/639.jpg"}},{"id":"71","name":"Batman II","powerstats":{"intelligence":"88","strength":"11","speed":"33","durability":"28","power":"36","combat":"100"},"biography":{"full-name":"Dick Grayson","alter-egos":"Nightwing, Robin","aliases":["Dick Grayson"],"place-of-birth":"-","first-appearance":"-","publisher":"Nightwing","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["5'10","178 cm"],"weight":["175 lb","79 kg"],"eye-color":"Blue","hair-color":"Black"},"work":{"occupation":"-","base":"Gotham City; formerly Bludhaven, New York City"},"connections":{"group-affiliation":"Justice League Of America, Batman Family","relatives":"John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne \/ Batman (adoptive father), Damian Wayne \/ Robin (foster brother), Jason Todd \/ Red Hood (adoptive brother), Tim Drake \/ Red Robin (adoptive brother), Cassandra Cain \/ Batgirl IV (adoptive sister)"},"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1496.jpg"}}]}

var info;

function buscar() {
    var heroe = document.getElementById("input1").value;
    if (heroe == "") {
        document.getElementById("informacion").innerHTML = "";
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //alert("llegue");
            info = JSON.parse(this.responseText);
            //this.responseText = [ + this.responseText + ];
            datos(0)
            paginas = document.getElementById("paginas");
            botones = "";
            for(var i=0; i < info.results.length; i++){
                botones += "<button class='btn' type='button' onclick='datos("+i+")'>"+i+"</button>"
            }
            paginas.innerHTML = botones;
            //document.getElementById("informacion").innerHTML = this.responseText.response;
            //document.getElementById("informacion").innerHTML = "hola";
        }
    };
    xmlhttp.open("GET","https://www.superheroapi.com/api.php/4556617407744160/search/"+heroe,true);
    //xmlhttp.open("GET","https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t="+heroe,true);
    xmlhttp.send();
    }

    return false;
}

function datos(i){
    var detalles = "";
    //var detalles = "<table id='tabla'>  <thead class='thead'> <tr class='tr'> <th class='th'> id </th> <th class='th'>Nombre </th> <th class='th'>Alterego </th> <th class='th'>Genero </th> <th class='th'>Raza </th> <th class='th'>Inclinacion </th> <th class='th'>Editor </th> <th class='th'>Imagen </th> </tr> </thead> <tbody>"
    //for(var i=0; i < info.results.length; i++){
    var heroe = document.getElementById("input1").value;
        detalles += "<h1>  "+info.results[i].name+"</h1>"+
                    "<p>Nombre: "+ info.results[i].biography["full-name"] +"</p>" +
                    "<p>Alteregos: "+ info.results[i].biography["alter-egos"] +"</p>" +
                    "<p>Apariciones: "
        for(var j=0; j<info.results[i].biography.aliases.length; j++){
            detalles += info.results[i].biography.aliases[j] + ". "
        }
        detalles += "</p>" + "<p>Lugar de nacimiento: "+ info.results[i].biography["place-of-birth"] +"</p>" +
                    "<p>Especie/Genero: " + info.results[i].appearance.race + " / " + info.results[i].appearance.gender + "</p>" +
                    "<p>Color de ojos/Color de cabello: " + info.results[i].appearance["eye-color"] + " / " + info.results[i].appearance["hair-color"] + "</p>" +
                    "<p>Editorial: " + info.results[i].biography.publisher + "</p>" +
                    "<p>Inclinacion del personaje: " + info.results[i].biography.alignment + "</p>" +
                    "<img src='" + info.results[i].image.url +"' width='350' height='200' alt='imagen de "+ heroe +"'>" 
                    
    //
    document.getElementById("informacion").innerHTML = detalles;
}

function noNumeros(texto){
    if(texto.value.length > 0){
        var as = texto.value.charCodeAt(texto.value.length-1);

        if((as >= 97 && as <= 122)||(as>=65 && as<=90) || as==32){
            return true;
        }else {
            texto.value = texto.value.substring(0, texto.value.length-1);
            return false;
        }
    }else{
    return true;
    }
}

function buscar2() {
    var heroe = document.getElementById("nombre").value;
    if (heroe == "") {
        document.getElementById("informacion").innerHTML = "";
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //alert("llegue");
            info = JSON.parse(this.responseText);
            //this.responseText = [ + this.responseText + ];
            var detalles = "<table id='tabla'>  <thead class='thead'> <tr class='tr'> <th class='th'> id </th> <th class='th'>Nombre </th> <th class='th'>Alterego </th> <th class='th'>Genero </th> <th class='th'>Raza </th> <th class='th'>Inclinacion </th> <th class='th'>Editor </th> <th class='th'>Imagen </th> </tr> </thead> <tbody>"
            for(var i=0; i < info.results.length; i++){
                
                detalles += "<tr>" +
                            "<td class='td'>" + info.results[i].id +"</td>" +
                            "<td class='td'>" + info.results[i].biography["full-name"]  +"</td>" +
                            "<td class='td'>" + info.results[i].name +"</td>" +
                            "<td class='td'>" + info.results[i].appearance.gender +"</td>" +
                            "<td class='td'>" + info.results[i].appearance.race +"</td>" +
                            "<td class='td'>" + info.results[i].biography.alignment +"</td>" +
                            "<td class='td'>" + info.results[i].biography.publisher +"</td>" +
                            "<td class='td'> <img src='" + info.results[i].image.url +"' width='100' height='100' alt='imagen de "+ heroe +"'> </td>" +
                            "</tr>"
            }
            detalles += "</tbody> </table>"
            document.getElementById("informacion").innerHTML = detalles;
            //document.getElementById("informacion").innerHTML = this.responseText.response;
            //document.getElementById("informacion").innerHTML = "hola";
        }
    };
    xmlhttp.open("GET","https://www.superheroapi.com/api.php/4556617407744160/search/"+heroe,true);
    //xmlhttp.open("GET","https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t="+heroe,true);
    xmlhttp.send();
    }

    return false;
}




