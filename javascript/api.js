var info;
var botones;
var opcion = 0;
var posicion;
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
            posicion = 0;
            datos(0);
            paginacion();
            
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

function paginacion(){
    botones = "";

    if(opcion===0){
        for(var i=0; i < info.results.length; i++){
            botones += "<button class='btn' type='button' onclick='datos("+i+")'>"+i+"</button>"
        }
        opcion = 1;
    }else{
        botones = "<button class='btn' id='btnizq' type='button' onclick='btnizq()'>  \<  </button>" +
                    "<button class='btn' id='btnder' type='button' onclick='btnder()'>  \>  </button>"
        opcion = 0;
    }
    document.getElementById("paginas").innerHTML = botones;
    
    
}

function btnizq(){
    if(posicion!=0){
        pos2 = posicion-1;
        datos(pos2);
        //bloqueoIzq();
    }
    
}

function btnder(){
    if(posicion!=(info.results.length-1)){
        pos2 = posicion+1;
        datos(pos2);
        //bloqueoDer();
    }
    
}

function datos(i){
    var detalles = "";
    posicion = i;
    var heroe = document.getElementById("input1").value;
        detalles += "<aside id='izq'><h1>  "+info.results[i].name+"</h1>"+
                    "<p>Nombre: "+ info.results[i].biography["full-name"] +"</p>" +
                    "<p>Alteregos: "+ info.results[i].biography["alter-egos"] +"</p>" +
                    "<p>Ocupacion: "+ info.results[i].work.occupation +"</p>" +
                    "<p>Apariciones: "
        for(var j=0; j<info.results[i].biography.aliases.length; j++){
            detalles += info.results[i].biography.aliases[j] + ". "
        }
        detalles += "</p>" + "<p>Lugar de nacimiento: "+ info.results[i].biography["place-of-birth"] +"</p>" +
                    "<p>Especie/Genero: " + info.results[i].appearance.race + " / " + info.results[i].appearance.gender + "</p>" +
                    "<p>Color de ojos/Color de cabello: " + info.results[i].appearance["eye-color"] + " / " + info.results[i].appearance["hair-color"] + "</p>" +
                    "<p>Tamaño: " + info.results[i].appearance.height[1]  + "</p>" +
                    "<p>Peso: " + info.results[i].appearance.weight[1]  + "</p>" +
                    "<p>Editorial: " + info.results[i].biography.publisher + "</p>" +
                    "<p>Inclinacion del personaje: " + info.results[i].biography.alignment + "</p>" +
                    "<p>EPrimera aparicion: " + info.results[i].biography["first-appearance"] + "</p></aside>" +
                    "<aside id='der'><img src='" + info.results[i].image.url +"' width='90%' height='400' alt='imagen de "+ heroe +"' onclick= paginacion()></aside>" +
                    "<div class='espacio'></div>"
                    
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




