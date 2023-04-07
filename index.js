//var numb = 10
//if(numb%2 === 0) console.log("Pair")
//else console.log("Impair")

//var note1 = 12
//var note2 = 14
//var note3 = 15

//var moyenne = (note1+note2+note3)/3
//if(moyenne <10) console.log("Passable")
//else if(moyenne >10 && moyenne <14) console.log("Bien")
//else console.log("T Bien")

//var table = [10,0,2,4,21]
//var grndnmbr = table[0]
//for(var i=0; i< table.length; i++){
    //if(table[i] > grndnmbr) grndnmbr = table[i]
//}
//console.log(grndnmbr)

//var numb = 4
//var fact = 1
//for(var i=1; i<=numb; i++){
//    fact = fact * i;
//}
//console.log(fact)

//var table = [12,10,21,10,94,-1,-3,4,-4]
//var cmbpos = 0
//var cmbneg = 0
//for(var i=0; i< table.length; i++){
//    if(table[i] >= 0) cmbpos++
//    else cmbneg++
//}
//console.log(`Il y'a ${cmbpos} nombres positifs et ${cmbneg} nombres negatives dans le tableau`)

//var table1 = [19,20,34,70,100]
//var table2 = [100,150,200,132,43]
//var table3 = []
//for(var i=0; i<table1.length; i++){
//    var insert = table1[i] + table2[i]
//    table3.push(insert)
//}
//console.log(table3)

//const matrice = [[10,2],[10,4],[5,6]]
//var cmb = 0
//for (var i=0; i<matrice.length; i++) {
//    for (var j=0; j<matrice[i].length; j++) {
    //   if(matrice[i][j] === 10) cmb++;
    // }
//   }
// console.log(`Il y'a au total ${cmb} de 10`)

// var text = "Hello Everyone."
// var text2 = text.toLowerCase();
// var cmbcharc = text.length

// var tab = text.split(" ")
// var cmbword = tab.length
// var cmbvow = 0
// for(var i=0; i< text2.length; i++){
//     if(text2[i] == "e" ||text2[i] == "o"||text2[i] == "a"||text2[i] == "i"||text2[i] == "u") cmbvow++
// }
// console.log(`Il y'a ${cmbcharc} caractères`)
// console.log(`Il y'a ${cmbword} mots dans la phrase`)
// console.log(`Il y'a ${cmbvow} voyelles dans la phrase`)

// var table = [20,10,0,30,80]
// table.sort(function(i, j) {
//     return i - j;
//   });
//   console.log(table)

// var table = [10,0,20,90,5]
// for(var i=0; i<table.length; i++){
//     for(var j=i+1; j<table.length; j++){
//         if(table[i] > table[j]) {
//         var next = table[i];
//         table[i] = table[j];
//         table[j] = next;
//         }
//     }
// }
// console.log(table)

// var table = [100,25,0,50]
// for(var k=0; k<table.length; k++){  
//     var r = false 
//     for(var i=0; i<table.length; i++){
//         var j=i+1;
//         if(table[i] > table[j]) {
//         var next = table[i];
//         table[i] = table[j];
//         table[j] = next;
//         r = true;
//         }}
//     if(r==false) break;
//     console.log(table)
// }

// var arr = [9,8,2,4,5,1,6,3,7]
// for (var i=1; i<arr.length; i++) {
//     var mtn = arr[i];
//     var j=i-1;
//     while ((j > -1) && (mtn < arr[j])) {
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = mtn;
// }
// console.log(arr)

// var table = [1,8,2,10,50]
// var searc = 10
// for(var i=0; i<table.length; i++){
//     if(table[i] === searc) {
//         console.log(`Le numéro ${searc} se trouve dans la case ${i}`);
//         break;
//     }
// }

// var arr = [9,8,2,4,5,1,6,3,7]
// for (var i=1; i<arr.length; i++) {
//     var mtn = arr[i];
//     var j=i-1;
//     while ((j > -1) && (mtn < arr[j])) {
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = mtn;
// }
// var indice = 0;
// var searc = 10;
// var debut = 0;
// var fin = arr.length-1;
// while(debut <= fin){
//     var milieu = Math.floor((debut+fin)/2);
//     if (arr[milieu] === searc){
//         console.log(`Le numéro ${searc} a été trouvé`);
//         indice = 1;
//         break;
//     } else if (arr[milieu] < searc) {
//         debut = milieu +1;
//     } else {
//         fin = milieu - 1;
//     }
// }
// if(indice===0) console.log("Erreur le nombre demandé n'a pas été trouvé")

// const pi = 3.14;
// function perimetre(r){
//     var peri = 2*pi*r;
//     return peri;
// }
// console.log(perimetre(6))

// var array1 = [3,1,7,9]
// var array2 = [2,4,1,9,3]