/**
 * Parte : Joseph Mena - Html
 */
/**
 * Elementos del html
 */
var entrada = document.getElementById("entrada")
var clave = document.getElementById("clave")
const botonProcesar = document.getElementById("procesar")
var rotacionElegida = document.getElementById("rotacionElegida")

var htmlTablaPC0 = document.getElementById("pc0")
var htmlTablaPC1 = document.getElementById("pc1")


//variable del dropbox para la eleccion de las rotaciones
//  de los ki 
const dropRotacion = document.getElementById("rotacionesDb")
botonProcesar.addEventListener('click', submitButton)
/**
 * Elementos necesarios para el calculo en el sistema
 */
const htmlTablaCi = document.getElementById("tablaCi")
const htmlTablaDi = document.getElementById("tablaDi")

/*
    Elementos para manipulacion de datos en la tabla
*/
var celdasPC0JS = []
var celdasPC1JS = []

var celdasCi = new Array(4)
var celdasDi = new Array(4)

var tabla_pc0 = [
    [0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1]
]

var tabla_pc1 = [
    [0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0]
]

var tabla_ci = [
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1]
]

var tabla_di = [
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1]
]

var rotacionKi = 0;

function submitButton(){
    console.log(entrada.value)
    console.log(clave.value)
    
}

function cambioDropBoxRotaciones(){
    rotacionKi = dropRotacion.selectedIndex
    var texto = dropRotacion.options[rotacionKi].text
    rotacionElegida.innerHTML = "Esta es la rotacion elegida: " + texto
}

/**
 * Funcion que creara la tabla PC0
 */
function llenarTablaPC0(){
    
    for (var i = 0; i < 8; i++){
        var fila = htmlTablaPC0.insertRow()
        var filaJS = new Array(8)

        for (var j = 0; j < 8; j++){
            var celda = fila.insertCell()
            celda.innerHTML = ("N")
            filaJS[j] = celda

            if (j == 0 &&  i != 0){
                celda["bgColor"] = "16a351"
            }
            if ( (j == 0 && i==0) || (j==1 && i > 1) ){
                celda["bgColor"] = "blue"
            }
            
            if ((i<2 && j == 1) || (j == 2 && i > 2)){
                celda["bgColor"] = "yellow"
            }
            if ((i<3 && j==2) || (i > 3 && j == 3)){
                celda["bgColor"] = "lightgreen"
            }
            if ((i < 4 && j == 3) || (i < 3 && j == 4) ){
                celda["bgColor"] = "#6d5116"
            }
            if (( i > 2 && j == 4) || (j == 5 && i < 2 )){
                celda["bgColor"] = "#c4702c"
            }
            if ((i > 1 && j == 5) || ( j == 6 && i == 0)){
                celda["bgColor"] = "#c4432c"
            }
            if (i > 0 && j == 6){
                celda["bgColor"] = "#4d2cc4"
            }
            if (j == 7){
                celda["bgColor"] = "red"
            }
        }
        celdasPC0JS[i] = filaJS
    }

}

function llenarTablaPC1(){   
    for (var i = 0; i < 8; i++){
        var fila = htmlTablaPC1.insertRow()
        var filaJS = new Array(7)

        for (var j = 0; j < 7; j++){
            var celda = fila.insertCell()
            celda.innerHTML = ("N")      
            filaJS[j] = celda

            if (i == 0){
                celda["bgColor"] = "16a351"
            }
            if (i == 1){
                celda["bgColor"] = "blue"
            }         
            if (i == 2){
                celda["bgColor"] = "yellow"
            }
            if (i == 3){
                celda["bgColor"] = "lightgreen"
            }
            if (i == 4){
                celda["bgColor"] = "#6d5116"
            }
            if (i == 5){
                celda["bgColor"] = "#c4702c"
            }
            if (i == 6){
                celda["bgColor"] = "#c4432c"
            }
            if (i == 7){
                celda["bgColor"] = "#4d2cc4"
            }

        }
        celdasPC1JS[i] = filaJS
    }
}

/**
 * funcion que actualizara la tabla PC0 con los valores almacenados en la tabla_pc0
 * correspondientes al calculo de la matriz asociada a su conversion a binario
 */
function actualizarTablaPC0(){

    for (var i = 0; i < celdasPC0JS.length; i++){
        for(var j = 0; j < celdasPC0JS[i].length; j++){
            celdasPC0JS[i][j].innerHTML = tabla_pc0[i][j]
        }
    }

}

/**
 * funcion que actualizara la tabla PC1 con los valores almacenados en la tabla_pc1
 * correspondientes al calculo de la matriz asociada a su conversion a binario
 */
function actualizarTablaPC1(){

    for (var i = 0; i < celdasPC1JS.length; i++){
        
        for(var j = 0; j < celdasPC1JS[i].length; j++){
            celdasPC1JS[i][j].innerHTML = tabla_pc1[i][j]
        }
    }

}

/**
 * funcion para la creacion de la tabla Ci
 */
function crearTablaCi()
{
    for (var i = 0; i < 4; i++){
        var fila = htmlTablaCi.insertRow()
        var filaJS = new Array(7)
        for (var j = 0; j < 7; j++){
            var celda = fila.insertCell()
            celda.innerHTML = "N"
            filaJS[j] = celda
        }
        celdasCi[i] = filaJS
    }
}

/**
 * funcion para la creacion de la tabla Di
 */
function crearTablaDi()
{
    for (var i = 0; i < 4; i++){
        var fila = htmlTablaDi.insertRow()
        var filaJS = new Array(7)
        for (var j = 0; j < 7; j++){
            var celda = fila.insertCell()
            celda.innerHTML = "N"
            filaJS[j] = celda
        }
        celdasDi[i] = filaJS
    }
}

function actualizarTablaCi(){
    for (var i = 0; i < 4; i++){     
        for (var j = 0; j < 7; j++){
            celdasCi[i][j].innerHTML = tabla_ci[i][j]
        }      
    }
}

function actualizarTablaDi(){
    for (var i = 0; i < 4; i++){    
        for (var j = 0; j < 7; j++){
            celdasDi[i][j].innerHTML = tabla_di[i][j]
        }      
    }
}

/**
 * Llamada para la creacion de elementos
 */

llenarTablaPC0()
llenarTablaPC1()
actualizarTablaPC0()
actualizarTablaPC1()

crearTablaCi()
crearTablaDi()
actualizarTablaCi()
actualizarTablaDi()
/**
 * Esta es la parte para Keila . . . . . . . .. . 
 */