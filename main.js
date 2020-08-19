/*****Nombre***************************************
 * validar_Entrada
 *****Descripción**********************************
 * Valida que el parámetro tenga 8 caracteres y que
 * sean solo letras
 *****Retorno**************************************
 * Retorna un booleano : True si son 8 caracteres
 * y tiene solo letras, en caso contrario retorna
 * false
 *****Entradas*************************************
 * Un string
 **************************************************/

function validar_Entrada(entrada){
    if (entrada.length == 8){
        lista = (Array.from(entrada))
        for(var i = 0; i < entrada.length; i++){
            if (Es_letra(lista[i]) == 0){
                console.log("false")
                return false
            }
        }
        console.log("true")
        return true
    } else {
        return false
    }
}
validar_Entrada("ABCDZFGH")

/*****Nombre***************************************
 * Es_letra
 *****Descripción**********************************
 * Valida que el parámetro de entrada sean solo 
 * letras
 *****Retorno**************************************
 * Retorna 0 si no es una letra y 1 si si lo es
 *****Entradas*************************************
 * Un caracter
 **************************************************/

function Es_letra(texto){
    var letras="abcdefghyjklmnñopqrstuvwxyz";
    var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    texto = texto.toLowerCase();
    for(i=0; i<texto.length; i++){
       if (letras.indexOf(texto.charAt(i),0)!=-1){ 
        return 1;
       } if (mayusculas.indexOf(texto.charAt(i),0)!=-1){ 
        return 1;
       }
    }
    return 0;
 }

/*****Nombre***************************************
 * convertir_A_Binario
 *****Descripción**********************************
 * Convierte el mensaje de entrada en código binario
 *****Retorno**************************************
 * El mensaje de entrada en codigo binario :
 * 011010000110111101101100011000010110101001100001
 * 0110101001100001
 *****Entradas*************************************
 * Un string de 8 caracteres : "mensajes"
 **************************************************/

function convertir_A_Binario(entrada){
    lista = (Array.from(entrada))
    lenLista = entrada.length
    res = []
    Minusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
    AlfaMinuscula = ['01100001','01100010','01100011','01100100','01100101','01100110','01100111','01101000','01101001','01101010','01101011','01101100','01101101','01101110','11110001','01101111','01110000','01110001','01110010','01110011','01110100','01110101','01110110','01110111','01111000','01111001','01111010']
    Mayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','z']
    AlfaMayuscula= ['01000001','01000010','01000011','01000100','01000101','01000110','01000111','01001000','01001001','01001010','01001011','01001100','01001101','01001110','11010001','01001111','01010000','01010001','01010010','01010011','01010100','01010101','01010110','01010111','01011000','01011001','01011010']
    iAlfa = 0
    iEntrada = 0
    while (iEntrada < lenLista){
        if (lista[iEntrada] == Minusculas[iAlfa]){
            res = res + [AlfaMinuscula[iAlfa]]
            iAlfa = 0
            iEntrada = iEntrada + 1
        }
        else if (lista[iEntrada] == Mayusculas[iAlfa]){
            res = res + [AlfaMayuscula[iAlfa]]
            iAlfa = 0
            iEntrada = iEntrada + 1
        }
        else{
            iAlfa = iAlfa + 1
        }  
    }  
    //console.log(res)
    return res
}

var binario = convertir_A_Binario("mensajes")

/*****Nombre***************************************
 * Binario_Con_Espacios
 *****Descripción**********************************
 * Le da formato a la cadena de entrada 
 *****Retorno**************************************
 * Retorna la cadena binaria con espacios :
 * 0110 0110 0101 1100 0101 1011 1011 1100 0111 1001 
 * 1101 1100 0001 1011 1010 0100
 *****Entradas*************************************
 * Recibe la clave binaria : 0110110101100101011011
 * 100111001101100001011010100110010101110011
 **************************************************/

function Binario_Con_Espacios(claveBinaria){
    len = claveBinaria.length
    parada = len/4
    lista = (Array.from(claveBinaria))
    res = []
    for(var i = 0; i < parada; i++){
        res = res.concat(lista.slice(0, 4))
        res = res.concat([" "])
        lista = lista.slice(3, -1)
    }
    //console.log(res.join(''))
    return res.join('')
}

Binario_Con_Espacios(binario)

/*****Nombre***************************************
 * Formatear_A_Matriz
 *****Descripción**********************************
 * Da formato a la matriz dependiendo de los 
 * parámetros que ingresan como parámetro, como la 
 * cantidad de columnas y de filas que tendrá la 
 * matriz
 *****Retorno**************************************
 * La matriz con formato. Ejemplo : 8 X 8
 * 0: (8) ["0", "1", "1", "0", "1", "1", "0", "1"]
 * 1: (8) ["0", "1", "1", "0", "0", "1", "0", "1"]
 * 2: (8) ["0", "1", "1", "0", "1", "1", "1", "0"]
 * 3: (8) ["0", "1", "1", "1", "0", "0", "1", "1"]
 * 4: (8) ["0", "1", "1", "0", "0", "0", "0", "1"]
 * 5: (8) ["0", "1", "1", "0", "1", "0", "1", "0"]
 * 6: (8) ["0", "1", "1", "0", "0", "1", "0", "1"]
 * 7: (8) ["0", "1", "1", "1", "0", "0", "1", "1"]
 *****Entradas*************************************
 * Clave ["1", "1", "1", "1", "0", "0", "0", "0", 
 * "1", "0", "1", "1", "1", "1", "1", "0", "0", "1", 
 * "1", "0", "0", "1", "1", "0", "1", "1", "0", "1", 
 * "1", "0", "0", "1", "1", "1", "0", "1", "1", "1", 
 * "1", "0", "0", "0", "1", "1", "1", "1", "0", "0"]
 * Columnas = int
 * filas = int
 **************************************************/

function Formatear_A_Matriz(clave, columnas, filas){
    lista = (Array.from(clave))
    res = []
    inicio = 0
    final = columnas
    for(var i = 0; i < filas; i++){
        res.push(lista.slice(inicio, final))
        inicio = inicio + columnas
        final = final + columnas
    } 
    //console.log(res)
    return res
}

Formatear_A_Matriz(binario, 8, 8) //IMPRESION DE LA PC-0

/*****Nombre***************************************
 * Matriz_PC1
 *****Descripción**********************************
 * Permutacion de la matriz PC-1
 *****Retorno**************************************
 * Retorna el resultado de la permutación de la 
 * matriz PC-1 : 0000000011111111111111111000101011
 * 0001000111001001011000
 *****Entradas*************************************
 * Una cadena binaria = 011011010110010101101110011
 * 1001101100001011010100110010101110011
 **************************************************/

function Matriz_PC1(clave){
    lista = (Array.from(clave))
    res = []
    i = 0
    MatrizPC1= [57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4]
    while(i < lista.length){
        res = res + [lista[MatrizPC1[i]-1]]
        i = i + 1 
    } 
    //console.log(res)
    return res
}

var PC1 = Matriz_PC1(binario)
var MatrizPC1 = Formatear_A_Matriz(PC1, 7, 8) //IMPRESION DE LA PC-1

/*****Nombre***************************************
 * Rotacion_Circular
 *****Descripción**********************************
 * Rotación circular para cada iteración a partir de 
 * cada Ci o Di. 
 * Recibe el retorno de la función Matriz_PC1(clave)
 *****Retorno**************************************
 * Matriz de 15 filas y 28 columnas
 * Matriz de Ci o de Di
 *****Entradas*************************************
 * En un Ci o un Di : 0000000011111111111111111000
 * entrada de 28bits
 **************************************************/

function Rotacion_Circular (PC1){
    res = []
    temporal = Copiar_Lista(PC1)
    Pos0 = 0
    Pos1 = 0
    for(var ronda = 1; ronda < 17; ronda++){
        if (ronda == 1 || ronda == 2 || ronda == 9 || ronda == 16){
            Pos0 = temporal[0]
            temporal.push(Pos0)
            temporal.shift()
            res.push(Copiar_Lista(temporal))
        } else{
            Pos0 = temporal[0]
            Pos1 = temporal[1]
            temporal.push(Pos0)
            temporal.push(Pos1)
            temporal.shift()
            temporal.shift()
            res.push(Copiar_Lista(temporal))
        }
    }
    //console.log(res)
    return res
}

var rondasC0_D0 = Rotacion_Circular (PC1.slice(0, 28))

/*****Nombre***************************************
 * Copiar_Lista
 *****Descripción**********************************
 * Crea una copia de la lista
 *****Retorno**************************************
 * Retorna la copia de la lista
 *****Entradas*************************************
 * Una lista
 **************************************************/

function Copiar_Lista(lista){
    copia = []
    for(var i = 0; i < lista.length; i++){
        copia[i] = lista[i]
    } return (copia)
}

/*****Nombre***************************************
 * Unir_C0_D0
 *****Descripción**********************************
 * Une las listas de Ci y Di
 *****Retorno**************************************
 * Retorna la unión de las dos cadenas que ingresan
 * como parémetro
 *****Entradas*************************************
 * Las cadenas Di y Ci
 **************************************************/

function Unir_C0_D0 (C0, D0){
    res = []
    temp = []
    for (var i = 0; i < 16; i++){
        temp = C0[i].concat(D0[i])
        res.push(temp)
        temp = []
    }
    return res
}

var Matriz_CI_Di = Unir_C0_D0 (rondasC0_D0, rondasC0_D0)

/*****Nombre***************************************
 * Permutacion_PC2
 *****Descripción**********************************
 * Recibe la matriz que retorna Unir_C0_D0 
 * (rondasC0_D0, rondasC0_D0)
 *****Retorno**************************************
 * Retorna las llaves Ki
 *****Entradas*************************************
 * La matriz que une los Ci y Di
 **************************************************/

function Permutacion_PC2 (matriz){
    MatrizPC2 = [14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32]
    res = []
    i = 0
    nueva = []
    for (var ind = 0; ind < 16; ind++){
        lista = matriz[ind]
        while(i < MatrizPC2.length){
            res.push(lista[MatrizPC2[i]-1])
            i = i + 1
        } 
        nueva.push(res)
    }
    //console.log(nueva)
    return nueva
}
   
var matrizKi = Permutacion_PC2 (Matriz_CI_Di)
    
/*****Nombre***************************************
 * Matriz_PC2
 *****Descripción**********************************
 * Devuelve la llave Ki que se pida por parámetro
 * por medio del numero de fila
 *****Retorno**************************************
 * Retorna la matriz con el formato requerido
 *****Entradas*************************************
 * Recibe el número de la fila de la llave requerida
 **************************************************/

function Matriz_PC2 (fila){
    matriz = Permutacion_PC2 (Matriz_CI_Di)
    res = Formatear_A_Matriz(matriz[fila], 6, 8)  
    console.log(res)
    return res  
}

Matriz_PC2 (2)

//_________________________________________________M E N S A J E_________________________________________________

/*****Nombre***************************************
 * MatrizIP
 *****Descripción**********************************
 * Recibe el mensaje en binario
 *****Retorno**************************************
 * Retorna el resultado de la matriz PC-1
 *****Entradas*************************************
 * El mensaje en código binario
 **************************************************/

function MatrizIP(mensaje){
    listaIP = [58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7]
    res = []
    i = 0
    while(i < listaIP.length){
        res = res + [mensaje[listaIP[i]-1]]
        i = i + 1
    }    
    return res
}
    
var IP = MatrizIP(binario)

/*****Nombre***************************************
 * Li
 *****Descripción**********************************
 * Devuelve el Li resultante de la matriz IP
 *****Retorno**************************************
 * Retorna el Li de la matriz IP
 *****Entradas*************************************
 * La matriz completa con los Li y los Ri
 **************************************************/

//Recibe el retorno de la funcion MatrizIP(binario)
function Li (MatrizIP){
    res = MatrizIP.slice(0, 32)
    return (res)
}

var li = Li (IP)

/*****Nombre***************************************
 * Ri
 *****Descripción**********************************
 * Devuelve el Ri resultante de la matriz IP
 *****Retorno**************************************
 * Retorna el Ri de la matriz IP
 *****Entradas*************************************
 * La matriz completa con los Li y los Ri
 **************************************************/

//Recibe el retorno de la funcion MatrizIP(binario)
function Ri (MatrizIP){
    res = MatrizIP.slice(32, 64)
    return (res)
}
 
var ri = Ri (IP)

/*****Nombre***************************************
 * MatrizE
 *****Descripción**********************************
 * Hace la permutación de la matriz E de expansión
 *****Retorno**************************************
 * El resultado de la permutación
 *****Entradas*************************************
 * La lista de los Li o de los Ri
 **************************************************/

//Recibe el Li o el Ri de 32 bits
function MatrizE(lista){
    retorno = []
    E = [32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1]
    res = []
    i = 0
    while(i < E.length){
        res = res + [lista[E[i]-1]]
        i = i + 1
    } 
    retorno = Array.from(res)
    return retorno
}

var MatE = MatrizE (li)
    
/*****Nombre***************************************
 * XOR
 *****Descripción**********************************
 * Realiza el XOR de las dos listas que ingresan 
 * como parámetro
 *****Retorno**************************************
 * La lista resultante de los XOR
 *****Entradas*************************************
 * Recibe una llave Ki y un Ri
 **************************************************/

//Recibe una llave Ki y el R0
function XOR(L1, L2){
    lista1 = Array.from(L1)
    lista2 = Array.from(L2)
    res = []
    var i = 0
    while (i < lista1.length){
        if (lista1[i] == lista2[i]){ //SI LOS DIGITOS SON IGUALES SE COLOCA UN 0
            res = res.concat(['0'])
            i = i + 1
        } else{
            res = res.concat(["1"])
            i = i + 1
        }
    } 
    return res
}
 
var resXOR = XOR (Permutacion_PC2 (Matriz_CI_Di)[0], MatE)


/*****Nombre***************************************
 * CajasS
 *****Descripción**********************************
 * Realiza el proceso de las 8 cajas
 *****Retorno**************************************
 * Retorna la lista resultante
 *****Entradas*************************************
 * Una lista
 **************************************************/

function CajasS(lista){
    S1 = [[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]]
    S2 = [[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,9,10,1,3,15,4,2,11,6,7,12,0,5,14,9]]
    S3 = [[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]]
    S4 = [[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]]
    S5 = [[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]]
    S6 = [[12,1,10,15,9,2,6,8,0,13,3,4,15,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]]
    S7 = [[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]]
    S8 = [[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]
    var i = 0
    nueva = []
    Acumulada = []
    
    nueva = Copiar_Lista( Recortar_6_Digitos(lista, 1))
    Acumulada = Acumulada.concat(Caja(nueva, S1))

    nueva = Copiar_Lista( Recortar_6_Digitos(lista, 2))
    Acumulada = Acumulada.concat(Caja(nueva, S2))

    nueva = Copiar_Lista( Recortar_6_Digitos(lista, 3))
    Acumulada = Acumulada.concat(Caja(nueva, S3))

    nueva = Copiar_Lista( Recortar_6_Digitos(lista, 4))
    Acumulada = Acumulada.concat(Caja(nueva, S4))

    nueva = Copiar_Lista( Recortar_6_Digitos(lista, 5))
    Acumulada = Acumulada.concat(Caja(nueva, S5))
    
    nueva = Copiar_Lista( Recortar_6_Digitos(lista, 6))
    Acumulada = Acumulada.concat(Caja(nueva, S6))
    
    nueva = Copiar_Lista( Recortar_6_Digitos(lista, 7))
    Acumulada = Acumulada.concat(Caja(nueva, S7))
    
    nueva =  Copiar_Lista(Recortar_6_Digitos(lista, 8))
    Acumulada = Acumulada.concat(Caja(nueva, S8))

    return Acumulada.join('')
}

/*****Nombre***************************************
 * Caja
 *****Descripción**********************************
 * Recibe una lista y el nombre de la matriz caja
 *****Retorno**************************************
 * Retorna el resultado de la caja
 *****Entradas*************************************
 * Una lista y la matriz de la caja a ejecutar
 **************************************************/

function Caja(lista, S){
    fila = 0
    fila = buscarFila([lista[0]].concat( [lista[5]]))
    columna = buscarColumna(lista)
    NumerosBin = [['0','0','0','0'],['0','0','0','1'],['0','0','1','0'],['0','0','1','1'],['0','1','0','0'],['0','1','0','1'],['0','1','1','0'],['0','1','1','1'],['1','0','0','0'],['1','0','0','1'],['1','0','1','0'],['1','0','1','1'],['1','1','0','0'],['1','1','0','1'],['1','1','1','0'],['1','1','1','1']]
    pos = S[fila][columna]
    nueva = []
    nueva = nueva.concat(NumerosBin[pos])
    return (nueva)
}
 
/*****Nombre***************************************
 * buscarFila
 *****Descripción**********************************
 * Busca el número de la fila de la caja
 *****Retorno**************************************
 * Retorna el número de fila a buscar
 *****Entradas*************************************
 * Una cadena binaria
 **************************************************/

function buscarFila(binario){
    esquinas = [['0','0'],['0','1'],['1','0'],['1','1']]
    var fila = 0
    var i = 0
    while(i != 4){
        if (compararListas(binario, esquinas[i]) == true){
            fila = i
            i = i + 1
        } else{
            i = i + 1
        }
    }   
    return fila
}
  
/*****Nombre***************************************
 * buscarColumna
 *****Descripción**********************************
 * Busca el número de la columna de la caja
 *****Retorno**************************************
 * Retorna el número de columna a buscar
 *****Entradas*************************************
 * Una cadena binaria
 **************************************************/

function buscarColumna(binario){
    binario = Copiar_Lista(binario.slice(1, 5))
    centro = [['0','0','0','0'],['0','0','0','1'],['0','0','1','0'],['0','0','1','1'],['0','1','0','0'],['0','1','0','1'],['0','1','1','0'],['0','1','1','1'],['1','0','0','0'],['1','0','0','1'],['1','0','1','0'],['1','0','1','1'],['1','1','0','0'],['1','1','0','1'],['1','1','1','0'],['1','1','1','1']]
    columna = 0
    var i = 0
    while(i != 16){
        if (compararListas(binario, centro[i]) == true){
            columna = i
            i = i + 1
        } else{
            i = i + 1
        }
    }   
    return columna
}

/*****Nombre***************************************
 * compararListas
 *****Descripción**********************************
 * Compara dos listas
 *****Retorno**************************************
 * Retorna true si son iguales y false en caso contrario
 *****Entradas*************************************
 * Las dos listas a comparar
 **************************************************/

function compararListas(lista1, lista2){
    if (lista1.length != lista2.length){
        return false
    }
    else{
        i = 0
        while (i < lista1.length){
            if (lista1[i] == lista2[i]){
                i = i + 1
            } else{
                return false
            }
        }  
        return true
    }
}
   
/*****Nombre***************************************
 * Recortar_6_Digitos
 *****Descripción**********************************
 * Devuelve los 6 digitos que se ocupan en el proceso
 * de la cajas. El número que ingresa como parametro
 * significa los 6 digitos que necesita, los 6 
 * primeros numeros, o los 6 numeros que le siguen 
 * a los 6 primeros...
 *****Retorno**************************************
 * La cadena cortada
 *****Entradas*************************************
 * 
 **************************************************/    

function Recortar_6_Digitos (lista, num){
    pos = (num-1) * 6
    copia = Copiar_Lista(lista)
    recortada = Copiar_Lista( copia.slice(pos))
    retorno = Copiar_Lista( recortada.slice(0, 6))

    return retorno
}
    

var ResCajas = CajasS(resXOR)

/*****Nombre***************************************
 * MatrizP
 *****Descripción**********************************
 * Realiza la permutación de la MatrizP
 *****Retorno**************************************
 * Retorna el resultado de la permútación
 *****Entradas*************************************
 * Una lista
 **************************************************/

//Ultima matriz Matriz P recibe el resultado de la funcion CajasS(resXOR)
function MatrizP(lista){
    i = 0
    nueva = []
    while (i < 1){
        nueva.push(MatrizPAux(lista))
        i = i + 1
    } 
    return (nueva)
}
        
function MatrizPAux(lista){
    listaP = [16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25]
    nueva = []
    i = 0
    while(i < listaP.length){
        nueva.push(lista[listaP[i]-1])
        i = i + 1
    }   
    return nueva
}
    
/*****Nombre***************************************
 * Iteracion
 *****Descripción**********************************
 * 
 *****Retorno**************************************
 * 
 *****Entradas*************************************
 * 
 **************************************************/

//MatrizP(ResCajas)

function Iteracion (L, R, matrizKi){
    var i = 0
    Key = []
    ListaXOR = []
    ListaE = []
    ResCajas = []
    ResP = []
    copiaListaE = []
    matrizResCajas = []
    matrizKeys = []  
    matrizXOR = []
    matrizResP = []
    matrizListaE = []
    while (i < 16){
        //Los Ki los tiene la matrizKi que ingresa por parámetro
        CopiaR = Copiar_Lista(R)

        //Los E()
        listaE = Copiar_Lista( MatrizE(R))
        matrizListaE.push(listaE)

        //Los E(R0) * Ki
        ListaXOR = Copiar_Lista(XOR(listaE, matrizKi[i]))
        matrizXOR.push(ListaXOR)
        
        //Las cajas S
        ResCajas = Copiar_Lista(CajasS(ListaXOR))
        matrizResCajas.push(ResCajas)

        //Los F(R0, K1)
        ResP = Copiar_Lista( MatrizP(ResCajas))
        matrizResP.push(ResP)

        R = Copiar_Lista( XOR(L, ResP))
        L = Copiar_Lista( CopiaR)

        i = i+1
    } 
    console.log(matrizResCajas)
    console.log(matrizResP)
    return 0
}

Iteracion (li, ri, matrizKi)
    
