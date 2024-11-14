/*
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su nombre y sexo (F
- M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
promueva a la siguiente categoría a los profesores de un sexo dado, considerando que los
profesores titulares ya no se pueden promover.
Función: promoverProfesoresDeSexo.
Parámetros: profesores (array de objetos profesor), sexo (una letra).
Retorno: el arreglo de todos los profesores con las modificaciones realizadas.
Condiciones: sólo se promueven los profesores del sexo dado y que sean “promovibles”. 
*/

let promoverProfesoresDeSexo = (profesores, sexo) => {
    let profesoresPromovidos = [];
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].sexo == sexo && profesores[i].categoria < 5) {
            profesoresPromovidos.push({categoria: profesores[i].categoria + 1, nombre: profesores[i].nombre, sexo: profesores[i].sexo});
        }
    }
    return profesoresPromovidos;
};

let profesores = [
    {categoria: 1, nombre: 'Ana', sexo: 'F'},
    {categoria: 5, nombre: 'Jorge', sexo: 'M'},
    {categoria: 3, nombre: 'Jesus', sexo: 'M'},
    {categoria: 4, nombre: 'Lucia', sexo: 'F'},
    {categoria: 5, nombre: 'Maria', sexo: 'F'},
    {categoria: 1, nombre: 'Luis', sexo: 'M'},
    {categoria: 2, nombre: 'Marta', sexo: 'F'},
    {categoria: 3, nombre: 'Sara', sexo: 'F'},
    {categoria: 4, nombre: 'Javier', sexo: 'M'},
];

let salida = document.getElementById("salida");
salida.innerHTML = JSON.stringify(promoverProfesoresDeSexo(profesores, 'F'));