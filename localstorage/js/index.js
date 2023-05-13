/*se coloca el id de de la etiquet donde se va a colocar*/


function almacenar(){
    let nom, lin, vers, versA, descripcion, Elementmentos
    /*se coloca el id del input*/
    nom = document.getElementById("nombre").value
    lin = document.getElementById("linea").value
    vers = document.getElementById("versiones").value
    versA = document.getElementById("vactual").value
    descripcion = document.getElementById("descripcion").value
    Elementmentos = document.getElementById("elemento").value
    /*se coloca el placeholder del input de primero */
    localStorage.setItem("Nombre", nom)
    localStorage.setItem("Linea", lin)
    localStorage.setItem("Versiones", vers)
    localStorage.setItem("VersionA", versA)
    localStorage.setItem("descripcion", descripcion)
    localStorage.setItem("elementos",  Elementmentos)
    /*se limpia elinput asi*/
    document.getElementById("nombre").value = "";
    document.getElementById("linea").value = "";
    document.getElementById("versiones").value = "";
    document.getElementById("vactual").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("elementos").value = "";
}

function imprimir(){
    let nombre, linea, version, actual, elementos
    const a = document.querySelector("#datonombre")
    const b = document.querySelector("#datolinea")
    const c = document.querySelector("#datoversion")
    const d = document.querySelector("#datoversionA")
    const e = document.querySelector("#datodescripcion")
    const f =  document.querySelector("#datoelemento")
    nombre = localStorage.getItem("Nombre")
    linea = localStorage.getItem("Linea")
    version = localStorage.getItem("Versiones")
    actual = localStorage.getItem("VersionA")
    descripcion =  localStorage.getItem("descripcion")
    elementos = localStorage.getItem("elementos")
    /*Mostrar datos almacenados*/
    a.innerHTML = nombre
    b.innerHTML = linea
    c.innerHTML = version
    d.innerHTML = actual
    e.innerHTML = descripcion
    f.innerHTML = elementos
}

function resestear(){
    localStorage.clear();
}