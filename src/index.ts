let numeroDeseado: number[] = new Array(5);
let nro : number, indice : number;
for (indice = 0; indice < 5; indice++) { 
     nro = Number(prompt(`Indique el número que desea incorporar en la posición ${indice}: `));
     numeroDeseado[indice]  = nro;
}
for (indice = 0; indice < 5; indice++) { 
     console.log("El numero en la posición " + indice + " es " + numeroDeseado[indice]);

